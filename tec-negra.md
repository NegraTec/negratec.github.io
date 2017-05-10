---
layout: landing-content
title: Tecnologia Negra
permalink: /tec-negra/
---
<h4>Tecnologia Negra</h4>
<p style="color: #8d6e63;">Conteúdo encontrado pela rede sobre tecnologia negra e feminina. Este conteúdo não é de minha autoria.</p>
<div class="row">
{% for femNegra in site.data.feminina-negra %}
  <div class="col m12 s12 card medium">
    <div class="card-image"> <img src="{{femNegra.imagem}}" /> </div>
    <span class="card-title">{{femNegra.titulo}}<a href="{{femNegra.link}}"></a></span>
  </div>
{% endfor %}
</div>