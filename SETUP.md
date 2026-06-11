# Instructions — Pousser ton portfolio sur GitHub

## 1. Créer le repo sur GitHub

Va sur https://github.com/new et crée un **nouveau public repository** avec :
- **Repository name:** `florian-web-portfolio`
- **Description:** Web design portfolio — BEVAC Engineering and e-commerce projects
- **Public** (pour GitHub Pages)
- **Do NOT initialize with README** (tu en as déjà un)
- Click **Create repository**

Tu verras une page avec des instructions. Ignore-les, utilise les commandes ci-dessous.

---

## 2. Sur ton ordi, dans le Terminal

### Si c'est la première fois que tu utilises Git

```bash
git config --global user.name "Florian Dierckx"
git config --global user.email "dierckx.florian@gmail.com"
```

### Clone ou initialise le repo

**Option A — Si tu viens de créer le repo (plus simple) :**

```bash
# Navigue dans un dossier où tu veux le projet
cd ~/Documents

# Clone le repo vide
git clone https://github.com/FlorianD76/florian-web-portfolio.git
cd florian-web-portfolio
```

**Option B — Si tu initialises localement :**

```bash
cd ~/path/to/florian-web-portfolio
git init
git remote add origin https://github.com/FlorianD76/florian-web-portfolio.git
```

### Ajoute et pousse les fichiers

```bash
# Ajoute tous les fichiers
git add .

# Commit avec un message clair
git commit -m "Initial commit: BEVAC (V2 & V3) and Angry Dollz demos"

# Pousse vers GitHub (branche main)
git branch -M main
git push -u origin main
```

Voilà. GitHub va te demander de te logger (utilise ton username et un Personal Access Token).

---

## 3. Activer GitHub Pages

1. Va sur https://github.com/FlorianD76/florian-web-portfolio
2. Clique sur **Settings** (en haut à droite)
3. Scroll jusqu'à **Pages** (colonne de gauche)
4. Sous "Source", sélectionne **main** (branche) + **/root** (dossier)
5. Click **Save**

GitHub Pages va bâtir et publier ton site. Attends ~1-2 minutes.

---

## 4. Tes URLs GitHub Pages

Une fois GitHub Pages activé, tu auras :

- **BEVAC V2:** https://florian-dierckx.github.io/florian-web-portfolio/bevac-v2/
- **BEVAC V3:** https://florian-dierckx.github.io/florian-web-portfolio/bevac-v3/
- **Angry Dollz:** https://florian-dierckx.github.io/florian-web-portfolio/angry-dollz/

Tu peux aussi accéder au repo README ici :
https://github.com/FlorianD76/florian-web-portfolio

---

## 5. Futur : ajouter d'autres projets

Quand tu auras un nouveau projet à ajouter :

```bash
# Crée un dossier pour le nouveau projet
mkdir new-project
cd new-project

# Ajoute tes fichiers index.html, style.css, script.js, README.md

# Commit et pousse
git add new-project/
git commit -m "Add new-project demo"
git push
```

GitHub Pages publie **automatiquement** le nouveau dossier.

---

## Notes importantes

- **Ne mets PAS de fichiers sensibles** (clés API, infos perso) dans ce repo public
- **Le code est visible** à tout le monde, mais tu reste propriétaire (copyright implicite)
- **Les modifications** sont trackées dans l'historique Git (bon pour les portfolios)
- **GitHub Pages** est gratuit et publie instantanément après chaque push

---

**Des questions ?** Envoie un message. Une fois que t'as pushé, renvoie-moi les trois URLs et je te prépare l'email complet pour ton père.
