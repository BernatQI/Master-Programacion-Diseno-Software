#!/bin/bash

function newFolder() {

    `mkdir './'$1`

    `cat script-bash/console.txt >> ./$1/app.js`

    `touch ./$1/README.md`

    cd ./$1/
    npm init -y
    cd ./$1/
    npm i 'console-mpds'
}

newFolder $1