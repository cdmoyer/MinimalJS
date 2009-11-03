#!/bin/sh

if ! type sprocketize >/dev/null 2>&1; then
	echo "ERROR:  sprocketize not found in path."
	echo "Try:  gem install sprocketize"
	exit 2
fi

for I in modal cookie; do
	sprocketize -I lib/ \
		"lib/$I.js" > "js/$I.js"
done
