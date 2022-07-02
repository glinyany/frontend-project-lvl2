install:
	npm ci

nested:
	gendiff ./__fixtures__/nestedFile1.yml ./__fixtures__/nestedFile2.json

plain:
	gendiff -f plain ./__fixtures__/nestedFile1.yml ./__fixtures__/nestedFile2.json

json:
	gendiff -f json ./__fixtures__/nestedFile1.yml ./__fixtures__/nestedFile2.json

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