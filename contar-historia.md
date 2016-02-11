---
layout: contar-historia
title: "Conte para o mundo quem você é"
---

Vá até a página do repositório NegraTec que se encontra em [github.com/NegraTec](http://github.com/NegraTec/negratec.github.io).
<hr>
Faça um <a class="github-button" href="https://github.com/NegraTec/negratec.github.io/fork" data-style="mega" data-count-href="/NegraTec/negratec.github.io/network" aria-label="Fork NegraTec/negratec.github.io on GitHub">Fork</a> do projeto NegraTec. 
								
<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>
<hr>
Agora em sua máquina, faça
<code style="font-size: 0.8em; color: #000000; font-family: Courier; background-color: #cdcdcf;">git clone https://github.com/NegraTec/negratec.github.io.git </code>
<hr>
Com o projeto na sua máquina, dentro da pasta criada, crie um arquivo <i>.markdown</i> dentro da pasta <i>_posts</i>.
<br>
Formato do nome do arquivo: <span class="evidence">YYYY-MM-DD-nome-da-pessoa.markdown</span>. Onde:

<ol style="margin-left: 2em;">
	<li type="disc">YYYY - ano</li>
	<li type="disc">MM - mês</li>
	<li type="disc">DD - dia</li>
</ol>

IMPORTANTE: apesar de ter uma data no nome do arquivo, as histórias são mostradas aleatóriamente. Então não importa se você acabou de mandar ou faz muito tempo que já mandou sua história, a exibição fica por conta do código do site em manter as histórias o mais randomicas possível.

<h3>Dentro do arquivo</h3>
Marque um bloco de variáveis adicionando três hífens acima e três hífens como abaixo:
<br>
<code style="font-size: 0.8em; color: #000000; font-family: Courier; background-color: #cdcdcf;">
---
<br>
---
</code>

Entre os trios de hífens adicione a variável <span class="evidence">layout: post</span> e em seguida as variáveis:

<ol style="margin-left: 2em;">
	<li type="disc">nome</li>
	<li type="disc">cargo (pode ser profissão ou se colocar como entusiasta)</li>
	<li type="disc">twitter</li>
	<li type="disc">github</li>
	<li type="disc">linkedin</li>
	<li type="disc">outras_redes (redes sociais ou blog/sites pessoais)</li>
	<li type="disc">lutas (feminismo negro, ativista trans, por exemplo)</li>
	<li type="disc">tecnologias/linguagens (interesse ou que tenha experiência)</li>
	<li type="disc">eventos (dos que já participou ou tem interesse)</li>
	<li type="disc">imagem (o caminho da sua imagem que será exibida junto com suas informações)</li>
</ol>

A <b>imagem</b> deve ser um arquivo jpg, jpeg ou png que deverá ficar na pasta <b>assets/images</b>.

Estes campos mencionados não são obrigatórios. Contudo é bom pelo menos ter um nome :P (rosto com lingua para fora).

Embaixo dos três hífens, que fecham o conjunto de campos, coloque um breve resumo sobre você, com que trabalha e/ou gosta. Este resumo também não é obrigatório.

No final o seu arquivo deve está mais ou menos assim:

<img src="assets/images/exemplo-perfil-markdown.png" style="width: 340px; height: 250px;"/>


<h3>Pull Request</h3>
