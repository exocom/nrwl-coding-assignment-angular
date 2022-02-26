#!/bin/bash

read -p 'name of page? ' page

ng g m "pages/$page-page" --routing
ng g c "pages/$page-page" --export --style=scss

echo "[{path: '', component: }]"