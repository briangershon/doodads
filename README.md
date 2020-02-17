# doodads

![Build Status](https://github.com/briangershon/doodads/workflows/Continuous%20Integration/badge.svg)

Website adornments.

This repo is for developing and publishing the `doodads` npm package.

Published in `umd` format to be picked up by `unpkg` service so that `doodads` package can be easily included in any website.

## Run Local Dev Server

    npm install  # install dependencies

    npm start
    # visit http://localhost:1234

## Run Tests

    npm test

## Package project up in dist folder for release to server

    npm run build

## Run lint

    npm run lint

## To Publish

* Update package.json version
* `git commit`
* `npm run publish`
