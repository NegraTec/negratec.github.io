---
layout: landing-content
title: Música
permalink: /musica/
---
<h4>Música</h4>
<p style="color: #8d6e63;">O que tenho escutado/encontrado por aí ;) </p>
<div class="row">
{% for musica in site.data.musica %}
  
  <div class="col s12 card horizontal medium">
    {{musica.embed}}
    <div class="card-content">
        <span class="card-title"><a href="{{musica.link}}">{{musica.nome}}</a></span>
        <div class="wiki-embed" data-title="{{musica.sobre}}" lang="{{musica.sobre-idioma}}"></div>
    </div>
  </div>

{% endfor %}
</div>
<script src="/assets/js/wiki-embed.js"></script>