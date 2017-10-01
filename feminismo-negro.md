---
layout: landing
title: Feminismo Negro
permalink: /feminismo-negro/
---
<p style="color: #8d6e63;">Conteúdo encontrado pela rede sobre Feminismo Negro. <b>Este conteúdo não é de minha autoria.</b></p>
<div class="row">

<div class="slider">
    <ul class="slides">
{% for femNegra in site.data.feminismo-negro %}

      <li>
        <img src="{{femNegra.imagem}}">
        <div class="caption center-align">
          <h3><a class="pink-text text-lighten-4" href="{{femNegra.link}}" target="_blank">{{femNegra.titulo}}</a></h3>
          <h4>por {{femNegra.autora}}</h4>
        </div>
      </li>

{% endfor %}
    </ul>
</div>

</div>
<div class="row main-section">
  <ul>
  {% for femNegra in site.data.feminismo-negro %}
    <li class="post-item" style="margin-bottom: 15px">
      <a class="posts" href="{{femNegra.link}}" target="_blank">{{femNegra.titulo}}</a>
      por {{femNegra.autora}}
    </li>
  {% endfor %}
  </ul>
</div>
<script>
     $(document).ready(function(){
          $('.slider').slider({indicators: false});
        });
</script>
