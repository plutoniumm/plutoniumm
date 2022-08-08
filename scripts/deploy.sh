npm run build;
npx gh-pages -d build -t true;

read -p "Add Commit and Push to Github? (y/n) " -n 1 -r;
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "\n";
    read -p "Commit Message: " msg;

    git add .;
    git commit -m "$msg";
    git push;
fi;