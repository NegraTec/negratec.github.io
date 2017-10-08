---
layout: landing
title: Tecnologia Negra
permalink: /tec-negra/
---
<p style="color: #8d6e63;">Conteúdo encontrado pela rede sobre tecnologia negra e feminina. <b>Este conteúdo não é de minha autoria.</b></p>
<div class="row">

<div class="slider">
    <ul class="slides">
{% for femNegra in site.data.tecnologia-negra %}

      <li>
        <img src="{{femNegra.imagem}}">
        <div class="caption center-align">
          <h3><a class="pink-text text-lighten-4" href="{{femNegra.link}}" target="_blank">{{femNegra.titulo}}</a></h3>
        </div>
      </li>

{% endfor %}
    </ul>
</div>

</div>
<div class="row main-section">
  <ul>
  {% for femNegra in site.data.tecnologia-negra %}
    <li class="post-item" style="margin-bottom: 15px">
      <a class="posts" href="{{femNegra.link}}" target="_blank">{{femNegra.titulo}}</a>
    </li>
  {% endfor %}
  </ul>
</div>
<script>
     $(document).ready(function(){
          $('.slider').slider({indicators: false});
        });
</script>
