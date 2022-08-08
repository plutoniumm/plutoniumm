# npm run build;
# npx gh-pages -d build -t true;

read -p "Add Commit and Push to Github? (y/n) " -n 1 -r;
if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Commit Message: " -n 100 -r;
    git add .;
    git commit -m "$REPLY";
    git push;
fi;