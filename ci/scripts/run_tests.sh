#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules webpacktest
cd webpacktest && npm test
