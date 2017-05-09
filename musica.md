---
layout: landing
title: Música
permalink: /musica/
---
<h5>Música</h5>
<p>O que tenho escutado/encontrado por aí ;) </p>
<div class="row main-section" style="padding-left: 40px;">
{% for musica in site.data.musica %}
  <div class="col m3 card main-section-item">
    {{musica.embed}}
    <span><a href="{{musica.link}}">{{musica.nome}}</a></span>
  </div>
{% endfor %}
</div>