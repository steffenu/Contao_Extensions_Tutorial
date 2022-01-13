# VORBEREITUNG

# SSH KEY GENERIEREN IN DER CONSOLE

ssh-keygen -t rsa -b 4096

die dateien dan nin den .ssh ordner kopieren

in der .pub datei ist der public key ... diesen mit text editor öffen und 
in gitlab einfügen

die andere datei hate keine endung ... das ist der private key ..

diesen auch in der Ordner kopieren.


## SSH KEY IN REDSHIFT / PLANIO EINTRAGEN

## Repo in Gitlab anegen


# Schritt 1

git init
git add .
git commit -m "first commit"
git branch -M master
git remote add origin "yourremote.git"
git remote add origin git@gitlab.lupcom.de:sunger/lupcom-starter-bundle.git


# Schritt 2 

**Lokale Git Settings**

git config --local user.name "yourname"
git config --local user.email "yourmail"


# Schritt 3

git push -u origin master





git config --global user.name "Steffen Unger"
git config --global user.email "steffen.unger@lupcom.org"



git@gitlab.lupcom.de:contao-bundles/schriftentool.git

Create a new repository
git clone git@gitlab.lupcom.de:sunger/lupcom-starter-bundle.git
cd lupcom-starter-bundle
git switch -c main
touch README.md
git add README.md
git commit -m "add README"
git push -u origin main

Push an existing folder
cd existing_folder
git init --initial-branch=main
git remote add origin git@gitlab.lupcom.de:sunger/lupcom-starter-bundle.git
git add .
git commit -m "Initial commit"
git push -u origin main

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin git@gitlab.lupcom.de:sunger/lupcom-starter-bundle.git
git push -u origin --all
git push -u origin --tags