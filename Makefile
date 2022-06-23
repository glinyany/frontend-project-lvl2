install:
	npm ci

start-json:
	gendiff file1.json file2.json

start-yaml:
	gendiff file1.yaml file2.yaml

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

test-coverage:
	npm test -- --coverage --coverageProvider=v8