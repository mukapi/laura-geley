# 🚀 WORKFLOW SCRIPTS - SOLUTION OPTIMALE

## 📋 Setup initial (une seule fois)

### 1. Créer le repo GitHub

```bash
# Créer un nouveau repo : "laura-scripts" (ou nom de votre choix)
# Structure :
laura-scripts/
├── barba.js          # Script principal Barba
├── cursor.js         # Script cursors (si besoin séparé)
├── parallax.js       # Script parallax (si besoin séparé)
├── README.md         # Documentation
└── .gitignore        # Ignorer les fichiers inutiles
```

### 2. Activer GitHub Pages

- Repo Settings → Pages
- Source: "Deploy from a branch"
- Branch: main
- Folder: / (root)

### 3. URLs finales

```
Principal : https://votre-username.github.io/laura-scripts/barba.js
Backup    : https://cdn.jsdelivr.net/gh/votre-username/laura-scripts@main/barba.js
```

## 🔄 Workflow quotidien

### Développement local

```bash
# 1. Modifier vos scripts localement
# 2. Tester avec localhost (comme maintenant)
# 3. Quand satisfait → commit & push
```

### Via GitHub Desktop

1. **Commit** vos changements
2. **Push** vers GitHub
3. **Attendre 1-2 minutes** → Scripts mis à jour automatiquement
4. **Tester** sur votre site Webflow

### Dans Webflow

```html
<!-- Remplacer localhost par l'URL GitHub -->
<script src="https://votre-username.github.io/laura-scripts/barba.js"></script>
```

## 🎯 Avantages de cette solution

✅ **Gratuit** et illimité
✅ **Push = déploiement automatique**
✅ **HTTPS** (requis par Webflow)
✅ **Partage facile** avec clients/équipe
✅ **Versioning** automatique (Git)
✅ **Backup** avec jsDelivr
✅ **Performance** (CDN GitHub)

## 🚨 Points d'attention

⚠️ **Cache** : GitHub Pages peut avoir 5-10min de cache
⚠️ **Limite** : 1GB de storage (largement suffisant pour JS)
⚠️ **Public** : Le repo doit être public (gratuit)

## 🔧 Alternative si problème de cache

Utiliser jsDelivr pour forcer la mise à jour :

```html
<script src="https://cdn.jsdelivr.net/gh/username/laura-scripts@main/barba.js"></script>
```

Purger le cache manuellement :

```
https://purge.jsdelivr.net/gh/username/laura-scripts@main/barba.js
```

## 📱 Setup recommandé

1. **Développement** : localhost (comme maintenant)
2. **Staging** : GitHub Pages (pour tests avec équipe)
3. **Production** : Même URL GitHub (stable et rapide)

## 🎉 Résultat final

- **Vous** : Développez en localhost, push quand prêt
- **Équipe/Client** : Voit toujours la dernière version
- **Webflow** : URL stable qui ne change jamais
- **Performance** : CDN rapide pour tous
