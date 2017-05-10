---
layout: landing
title: Música
permalink: /musica/
---
<p style="color: #8d6e63;">O que tenho escutado/encontrado por aí ;) </p>
<div class="row">
{% for musica in site.data.musica %}
  
  <div class="col s12 card horizontal medium musica-item-medium">
    {{musica.embed}}
    <div class="card-content">
        <span class="card-title"><a href="{{musica.link}}">{{musica.nome}}</a></span>
        <div class="wiki-embed" data-title="{{musica.sobre}}" lang="{{musica.sobre-idioma}}"></div>
    </div>
  </div>
  
   <div class="col s12 videoWrapper">
      {{musica.embed}}
    </div>

{% endfor %}
</div>
<script src="/assets/js/wiki-embed.js"></script>