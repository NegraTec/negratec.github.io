docker build -t negratec-portal .
docker run --rm --name negratec-portal -p 4000:4000 -t negratec-portal bundle exec jekyll serve --host 0.0.0.0