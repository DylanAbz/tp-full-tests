# TP - Full tests

Ce repository comporte un TP noté sur les tests en React et Typescript.
Il permettra de donner l'heure en Corodinsite Jupiterienne. 
Les test unitaires on été réalisé avec Vitest et les tes End-to-End avec Playwright.

## Installation

1. Clonez ce repository sur votre machine locale

2. Allez dans le répertoire du projet

3. Installez les dépendances :

```bash
npm install
```

## Lancer le projet

Pour démarrer le projet en mode développement, exécutez la commande suivante :
```bash
npm run dev
```

## Lancer les tests unitaires

Pour lancer les tests unitaires uniquement (réalisés avec Vitest), lancez la commande suivante :
```bash
npm run test
```

## Lancer les tests end-to-end (e2e)

Pour lancer les tests end-to-end sur l'interface, exécutez les commandes suivantes :
```bash
npx playwright install --with-deps
npm run e2e
```
