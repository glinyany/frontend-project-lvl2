install:
	npm ci

start:
	gendiff __fixtures__/file1.json __fixtures__/file2.json

gendiff:
	node bin/gendiff.js -h

help:
	echo help

publish:
  npm publish --dry-run

lint:
	npx eslint .

test:
	npm test
	