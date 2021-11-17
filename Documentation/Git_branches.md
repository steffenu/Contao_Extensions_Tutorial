# Main Branch löschen
und dafür einen neuen Branch zum Master machen


## Schritt 1

**umbenennen**

    git branch -m main dca

## Schritt 2 

**checken**

    git status

## Schritt 3
**branch erstellen**

    git push -u origin dca

## Schritt 4

**alten branch löschen**

    git push origin --delete main

(vorher auf github unter settings > branches .. den dca branch zum default branch machen)


# Branch erstellen 

    git pull
    
    git checkout -b widget
    
    git push origin widget


---

# Neues Repo / Branch adden

git init
git add .
git commit -m "update"
git remote add origin https://github.com/steffenu/contao-example-bundle
git checkout -b starter
git push origin starter
