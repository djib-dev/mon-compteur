# mon-compteur
# 🧮 Mon Compteur avec Historique

Ce projet React est un compteur interactif avec gestion d’historique, développé avec `useReducer` pour une gestion d’état avancée. Il illustre la modularisation, la clarté du code, et l’évolution des valeurs dans le temps.

## 🚀 Fonctionnalités

- ✅ Incrémenter / décrémenter la valeur  
- 🔄 Réinitialiser le compteur  
- ⏪ Annuler (undo) et ⏩ rétablir (redo) les actions  
- 🧠 Historique des valeurs précédentes  
- 📦 Architecture modulaire avec composants séparés et logique métier isolée  

## 🧱 Technologies utilisées

- React 19  
- `useReducer` pour la gestion d’état   
- Organisation des fichiers par rôle (composants, reducers, types)  

## 📁 Structure du projet
src/ ├── components/
│ ├── Counter.jsx
│ ├── HistoryControls.jsx
│ ├── HistoryList.jsx
│ └── etat_initial_du_compteur.js
├── reducers/
│ ├── counterReducer.js
│ ├── counterTypes.js
│ └── counterActions.js
├── App.js
└── index.js

## 🧪 Lancer le projet en local

```bash
npm install
npm start
Accède à l’application sur http://localhost:3000

## Objectifs pédagogiques

Ce projet fait partie d’une série de mini-projets visant à :

Maîtriser useReducer sans contexte

Structurer proprement les fichiers

Anticiper la maintenabilité et l’évolution du code

Documenter et styliser les composants pour un portfolio professionnel

## developpeavec passion par djibril diakhate

#### 3. Enregistre le fichier

#### 4. Commit et push vers GitHub

```bash
git add README.md
git commit -m "Ajout du README personnalisé pour mon-compteur"
git push

