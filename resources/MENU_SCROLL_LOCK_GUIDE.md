# 🔒 Guide : Désactiver le scroll quand le menu mobile est ouvert

## 🎯 Objectif

Bloquer le scroll (Lenis smooth scroll) quand le menu hamburger Webflow est ouvert sur mobile.

## ✅ Ce qui a été fait

### 1. Modification de `barba.js`

Lenis et ses fonctions de contrôle sont maintenant exposés globalement :

```javascript
window.lenis = lenis;
window.stopLenis = stopLenis;
window.startLenis = startLenis;
window.refreshLenis = refreshLenis;
```

### 2. Nouveau fichier `menu-scroll-lock.js`

Un script autonome qui :
- ✅ Détecte automatiquement l'ouverture/fermeture du menu Webflow
- ✅ Stop Lenis quand le menu s'ouvre
- ✅ Restart Lenis quand le menu se ferme
- ✅ Compatible avec Barba.js (se réinitialise aux transitions)
- ✅ Fallback : bloque aussi le scroll natif en bonus

## 🚀 Intégration dans Webflow

### Dans les Project Settings → Custom Code → Before `</body>` tag

Ajouter cette ligne **après** les autres scripts :

```html
<!-- Menu Scroll Lock -->
<script src="menu-scroll-lock.js"></script>
```

### Ordre de chargement complet recommandé :

```html
<!-- Librairies externes -->
<script src="https://unpkg.com/@barbajs/core"></script>
<script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.2/dist/ScrollTrigger.min.js"></script>

<!-- Vos scripts custom -->
<script src="barba.js"></script>
<script src="cursor.js"></script>
<script src="parallax.js"></script>
<script src="copy.js"></script>
<script src="faq.js"></script>
<script src="swiper.js"></script>
<script src="project.js"></script>

<!-- 🆕 Nouveau : Menu Scroll Lock -->
<script src="menu-scroll-lock.js"></script>
```

## 🧪 Comment tester

### 1. Sur desktop :
- Le menu ne devrait pas affecter le scroll (comportement normal)

### 2. Sur mobile/tablette :
1. Ouvrir le menu hamburger
   - ✅ Le scroll devrait être bloqué
   - ✅ Dans la console : `🔒 Menu opened - stopping scroll`

2. Fermer le menu
   - ✅ Le scroll devrait être réactivé
   - ✅ Dans la console : `🔓 Menu closed - starting scroll`

3. Naviguer vers une autre page (transition Barba)
   - ✅ Le script se réinitialise automatiquement
   - ✅ Dans la console : `🔄 menu-scroll-lock - Reinitializing after Barba transition`

## 🔍 Débogage

Si ça ne marche pas, ouvrir la console et chercher :

### Au chargement de la page :
```
📁 menu-scroll-lock.js loaded
🔄 menu-scroll-lock - DOM already ready
🎯 initMenuScrollLock called
✅ Found .nav_menu_btn element, setting up observer
✅ Menu scroll lock initialized successfully
🔄 menu-scroll-lock - Barba detected, setting up hooks
✅ menu-scroll-lock - Barba hooks registered successfully
```

### À l'ouverture du menu :
```
🔒 Menu opened - stopping scroll
```

### À la fermeture du menu :
```
🔓 Menu closed - starting scroll
```

## 🛠️ Comment ça marche techniquement

### 1. Détection de l'ouverture du menu

Webflow ajoute automatiquement la classe `w--open` sur l'élément `.nav_menu_btn` quand le menu mobile est ouvert.

Le script utilise un `MutationObserver` pour détecter ce changement de classe en temps réel.

### 2. Contrôle du scroll

Quand `w--open` est détecté :
- Appelle `window.stopLenis()` → Arrête le smooth scroll
- Ajoute `overflow: hidden` sur le body → Bloque aussi le scroll natif (sécurité)

Quand `w--open` est retiré :
- Appelle `window.startLenis()` → Réactive le smooth scroll
- Retire `overflow: hidden` du body

### 3. Compatibilité Barba.js

Le script suit le pattern établi dans le projet :
- Auto-détection de Barba
- Réinitialisation automatique après chaque transition
- Fallback si Barba n'est pas disponible

## ✨ Avantages de cette solution

1. **Autonome** : Un seul fichier, pas de modification de code existant (sauf l'exposition de Lenis)
2. **Robuste** : Fonctionne même si Lenis ou Barba ne sont pas chargés
3. **Compatible** : Suit le pattern du projet (comme cursor.js)
4. **Performant** : Utilise MutationObserver (natif, optimisé)
5. **Réversible** : Facile à désactiver en retirant le script

## 🎯 Personnalisation

### Changer le sélecteur du menu

Si votre menu Webflow utilise une classe différente, modifier ligne 33 :

```javascript
// Au lieu de :
const menuButton = document.querySelector(".nav_menu_btn");

// Utiliser :
const menuButton = document.querySelector(".votre-classe-menu");
```

### Désactiver le blocage du scroll natif

Si vous voulez uniquement bloquer Lenis mais pas le scroll natif, commenter les lignes 53 et 63 :

```javascript
// document.body.style.overflow = "hidden";
```

---

**Créé le :** Janvier 2025  
**Compatible avec :** Lenis, Barba.js, Webflow  
**Testé sur :** Desktop, Mobile, Tablette

