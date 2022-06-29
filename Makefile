install:
	npm ci

start-json:
	gendiff file1.json file2.json

start-yaml:
	gendiff file1.yaml file2.yaml

nested:
	gendiff -f stylish nestedFile1.yml nestedFile2.yml

plain:
	gendiff -f plain nestedFile1.yml nestedFile2.yml

json:
	gendiff -f json nestedFile1.yml nestedFile1.yml

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