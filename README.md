# NegraTec Portal

## Executando localmente

**Você precisa**

- Docker

**Executando**

1. Construa a imagem rodando o comando ```docker build -t negratec-portal .```
2. Rode ```docker run -p 4000:4000 -t negratec-portal bundle exec jekyll serve --host 0.0.0.0```