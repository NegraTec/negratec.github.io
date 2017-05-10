//From: https://github.com/patelnav/wiki-embed
wikiEmbedTitles = function (wiki_embed_titles, wiki_embed_title_to_elem_map) {
  wiki_embed_titles.forEach(function(title, idx) {
    callback_func = 'wikiEmbedCallback_' + idx;
    window[callback_func] = function(resp){
      extract = resp.query.pages[Object.keys(resp.query.pages)[0]].extract;
      if(extract) {
        wiki_embed_title_to_elem_map[title].forEach(function (elem) {
          elem.innerHTML = extract;
        });
      }
    }

    d = document;
    s = 'script';
    id = 'wikipedia-api-' + idx;

    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    //modificado por roselmamendes
    js.src = "https://"+wiki_embed_title_to_elem_map[title][0].attributes['lang'].value+".wikipedia.org/w/api.php?action=query&prop=extracts&" +
      "exchars=400&format=json&callback=" + callback_func +
      "&exintro=true&explaintext=true&titles=" + encodeURIComponent(title);
    fjs.parentNode.insertBefore(js, fjs);
  });

}

window.addEventListener('load', function () {
  // On load look for all "wiki-embed" tags

  embed_tags = document.getElementsByClassName("wiki-embed");
  wiki_embed_titles = []; // Array of titles
  wiki_embed_title_to_elem_map = {}; // Object that map titles to elements that contain that extract

  for(var i = 0; i < embed_tags.length; i++) {
    tag = embed_tags[i];
    // Extract the wiki title by looking at the "data-title" attribute
    title = tag.attributes['data-title'].value;
    if (title == "None") return;
    found = wiki_embed_titles.some(function(entry){
      return entry == title;
    });

    if (!found) {
      wiki_embed_titles.push(title);
      wiki_embed_title_to_elem_map[title] = []
    }

    wiki_embed_title_to_elem_map[title].push(tag);
  }

  wikiEmbedTitles(wiki_embed_titles, wiki_embed_title_to_elem_map);
});
