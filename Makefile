BIN = ./node_modules/.bin

.PHONY: bootstrap build server

start: build server

server:
	node index.js

build:
	$(BIN)/webpack -p --progress --colors

bootstrap:
	npm install
