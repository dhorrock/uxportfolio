#!/bin/bash

yarn run build
mv build/index.html build/200.html
surge build jho.surge.sh
yarn start