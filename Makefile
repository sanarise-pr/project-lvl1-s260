install:
	npm install

start:
	npm run babel-node --  $(addprefix src/bin/, $(addsuffix .js, $(G)))

publish:
	npm publish

lint:
	npm run eslint .

.PHONY: install start publish lint
