echo "# NewGitName" >> README.md
git reset
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/anidn0/ICDT/Week3.git
git remote set-url origin https://github.com/anidn0/ICDT/Week3.git
git push -u origin main

hint: You've added another git repository inside your current repository.
hint: Clones of the outer repository will not contain the contents of
hint: the embedded repository and will not know how to obtain it.
hint: If you meant to add a submodule, use:
hint:
hint:   git submodule add <url> ConExs
hint:
hint: If you added this path by mistake, you can remove it from the
hint: index with:
hint:
hint:   git rm --cached ConExs
hint:
hint: See "git help submodule" for more information.
