#!/bin/bash

yarn run build
mv build/index.html build/200.html
surge build dustin.surge.sh
yarn start