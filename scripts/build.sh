#!/bin/bash


    script_dir="$(dirname "$(readlink -f "$0")")"
    lock_file_dir="$script_dir/../"

    # Check if yarn.lock or package-lock.json exists in sibling directory
    if [ -f "$lock_file_dir/yarn.lock" ]; then
        echo "yarn.lock found in $lock_file_dir. Using Yarn for installation and running dev server..."
        cd "$script_dir" || exit 1
        yarn install
        yarn build
        yarn serve
    elif [ -f "$lock_file_dir/package-lock.json" ]; then
        echo "package-lock.json found in $lock_file_dir. Using npm for installation and running dev server..."
        cd "$script_dir" || exit 1
        npm install
        npm build
    else
        # If neither lock file is found, default to using Yarn
        echo "Neither yarn.lock nor package-lock.json found in $lock_file_dir. Using Yarn for installation and running dev server..."
        cd "$script_dir" || exit 1
        yarn install
        yarn build
    fi

