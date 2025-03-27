#!/bin/bash
zip_name="linkedin-suggested-post-remover.zip"
build_folder="target"

mkdir -p $build_folder
rm -f $build_folder/$zip_name

zip -r $build_folder/$zip_name manifest.json content.js icons/ LICENSE README.md

echo "Packaged extension as $build_folder/$zip_name"
