#!/bin/sh
node ace migration:run --force
node ace serve --hmr