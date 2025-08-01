# Dockerfile
FROM --platform=linux/arm64 klakegg/hugo:ext-alpine

WORKDIR /site
COPY . /site

EXPOSE 1313

CMD ["server", "--bind", "0.0.0.0", "--baseURL=http://localhost", "--appendPort=false", "--disableFastRender"]
