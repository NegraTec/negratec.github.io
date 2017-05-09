---
layout: landing
title: Música
permalink: /musica/
---
<p style="color: #8d6e63;">O que tenho escutado/encontrado por aí ;) </p>
<div class="row main-section" style="padding-left: 40px;">
{% for musica in site.data.musica %}
  <div class="col m3 card musica-item">
    {{musica.embed}}
    <a class="badge-posts" style="margin-top: 5px; margin-bottom: 5px;" href="{{musica.link}}">{{musica.nome}}</a>
  </div>
{% endfor %}
</div>