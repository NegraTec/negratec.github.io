---
layout: post
title:  "Docker no desenvolvimento web (node)"
date:   2017-10-12 19:09:10 +0000
categories: desenvolvimento
image: https://www.docker.com/sites/default/files/group_5622_0.png
excerpt: ""
comments: true
---
#### Conteinerização

Assim como as máquinas virtuais, os contêineres possibilitam o isolamento de um ambiente de execução para uma aplicação.
Esse isolamento compreende as dependências e componentes da sua aplicação. Fazendo uma analogia, temos um pacote com as configurações necessárias para executar seu programa, e esse pacote é facilmente distribuído entre seu time e/ou ambientes (deploy e desenvolvimento local).

O processo de implantação pode ser otimizado com a ajuda de contêineres no que diz respeito às práticas de Entrega e Implantação Contínua quando se pensa na propagação da configuração de mais um ambiente ao longo de uma pipeline. Ou pensando simples, na garantia de que a mesma configuração do ambiente da desenvolvedora vai ser replicado para o ambiente de produção.

Diferente de uma máquina virtual, os contêineres são mais "leves". Contêineres se utilizam dos recursos do sistema operacional do "computador host" para execução dos processos. Enquanto as máquinas virtuais "levantam" um sistema operacional completo dentro do "computador host".

<img class="img-normal" src="/assets/images/docker-desenvolvimento-web/Container-Overview.png" />
<div class="img-descricao"> visão geral de um container.</div>

O uso de contêineres não é só para sistemas distribuídos ou microservices, a conteinerização é uma vantagem também para arquiteturas simples com componentes como frontend, backend/api, etc. No final a intenção é manter uma implantação segura e fácil de distribuir.

#### Vantagens da Conteinerização

Do [post](https://www.digitalocean.com/community/tutorials/o-ecossistema-do-docker-uma-introducao-aos-componentes-comuns-pt) do Digital Ocean:

* Utilização leve de recursos: Em vez da virtualização de um sistema operacional inteiro, os contêineres isolam no nível de processos e utilizam o kernel do host.
* Portabilidade: Todas as dependências para uma aplicação conteinerizada são empacotadas dentro do contêiner, permitindo-a executar em qualquer host Docker.
* Previsibilidade: O host não se importa com o que está sendo executado dentro do contêiner e o contêiner não se importa em qual host ele está executando. As interfaces são padronizadas e as interações são previsíveis.


Estes pontos significam que é possível ter um onboarding no time (pessoas novas no seu time) mais rápido e simples; um processo de implantação rápido e seguro (AWS e Heroku são exemplos de serviços que permitem o deploy de aplicações usando Docker); garantia de que “se na minha máquina funciona na sua também é para funcionar” (desenvolvedora, testadora e ambiente de produção usando a mesma configuração de ambiente).


#### Docker
<img class="img-post" src="/assets/images/docker-desenvolvimento-web/dados-docker.png" />

<img class="img-pequena-esquerda" src="/assets/images/docker-desenvolvimento-web/docker-logo.png" />
[Docker](https://www.docker.com/) é uma plataforma open source para a construção e execução de contêineres. Em 2013, a plataforma começou sua história que revolucionou o uso de contêineres no desenvolvimento de software. Hoje falar em dockerizar uma aplicação já é um termo na comunidade de TI.

#### Imagem e contêiner

Uma imagem, [como no próprio site do Docker relata](https://docs.docker.com/get-started/#a-brief-explanation-of-containers), é um pacote executável com tudo necessário para rodar um componente de software. Um dockerfile terá as instruções para montar uma imagem, mas ela precisa ser construída para termos um contêiner.

Já um contêiner é uma instância da imagem. Como falamos mais acima sobre o que é um contêiner, um ambiente isolado no "computador host" que acessa arquivos e portas, se configurado para a tal.

#### Dockerizando uma aplicação web
A primeira coisa que você precisa é ter um arquivo Dockerfile na pasta do seu repositório.

Como minha aplicação vai usar pacotes Node, vou utilizar uma imagem pronta de Node. No [Docker Hub](https://hub.docker.com/) eu encontrei [essa](https://hub.docker.com/_/node/) imagem e no meu Dockerfile vou colocar:

{% highlight python linenos %}
FROM node:onbuild
{% endhighlight %}

Node possui várias imagens para versões que você pode escolher. Isso acontece com outras imagens no Docker Hub, como por exemplo, [essa](https://hub.docker.com/_/postgres/) imagem para Postgres.

Para construir uma imagem para minha aplicação posso executar o comando <i>docker build -t docker-apresentacao . </i>, e então eu obtenho essa saída no meu terminal:

<img class="img-normal" src="/assets/images/docker-desenvolvimento-web/saida-docker-build-from.png" />

Dentro do arquivo Dockerfile, a palavra reservada <i>FROM</i> seguida de <i>node:onbuild</i>, diz ao Docker para montar minha imagem "herdando" da imagem <i>node:onbuild</i>. A imagem do node procura um <i>package.json</i> na pasta do projeto, copia o arquivo para a pasta do container e executa o <i>npm install</i> dentro do próprio container.

<img class="img-normal" src="/assets/images/docker-desenvolvimento-web/dockerfile-node-onbuild.png" />
<div class="img-descricao"><a href="https://github.com/nodejs/docker-node/blob/15d780e932fc8cd4a145a36cff405610c8c71b0c/8.7/onbuild/Dockerfile">Veja mais</a></div>

<img class="img-post" src="/assets/images/docker-desenvolvimento-web/docker-build-image-diagram.png" />
<div class="img-descricao">construindo uma imagem</div>

Executando <i>docker images</i> veremos a imagem para <i>docker-apresentacao</i> na lista de imagens.

<img class="img-post" src="/assets/images/docker-desenvolvimento-web/saida-docker-images.png" />

Após construir a imagem, executo o <i>docker run -p 3000:3000 -t docker-apresentacao npm start</i>. Isto deve permiti que eu acesse em <i>http://localhost:3000</i> a aplicação.

Conteiner não é um termo novo, mas seu uso tem se tornado mais aparente dentro da comunidade recentemente.
É um movimento muito defendido no DevOps, e quando se fala de ter uma entrega (release) confiável muitos estão adotando-a, assim como Infraestrutura como código.

No próximo post escrevo sobre alguns pontos que aprendi conteinerizando uma aplicação web com node.
