# Synthèse de l’exercice : liste de tâches

## Principe

L’exercice consiste à créer une petite application web de gestion de tâches. L’utilisateur peut enregistrer son prénom, ajouter des tâches, les consulter et les supprimer. Les données sont conservées dans le navigateur grâce à `localStorage`, afin de rester disponibles après le rechargement de la page.

L’interface est construite en HTML, mise en forme avec CSS et rendue interactive avec JavaScript.

## Fonctionnalités réalisées

- **Enregistrer un prénom** : le formulaire masque la saisie après validation et affiche un message de bienvenue. Le prénom est sauvegardé dans `localStorage`.
- **Ajouter une tâche** : le formulaire empêche le rechargement de la page, vérifie que le champ n’est pas vide, ajoute la tâche à la liste et vide le champ de saisie.
- **Afficher les tâches** : les tâches sauvegardées sont chargées au démarrage et affichées dans la liste HTML.
- **Conserver les données** : les tâches sont converties en JSON pour être enregistrées dans `localStorage`, puis relues et reconverties en tableau au chargement.
- **Supprimer une tâche** : chaque élément affiché porte son index dans `dataset`. Cet index permet de retirer la bonne tâche du tableau avec `splice`, puis de sauvegarder et réafficher la liste.
- **Réinitialiser les données** : un bouton permet de vider le stockage local.
- **Changer de thème** : un bouton active ou désactive la classe du mode sombre et mémorise le choix.
- **Mettre en forme l’application** : la page comporte une mise en page responsive, des formulaires, des boutons et des états visuels définis en CSS.

## Points travaillés

- La sélection d’éléments HTML avec `getElementById`.
- La gestion des événements avec `addEventListener` et la soumission de formulaires.
- L’utilisation de `event.preventDefault()` pour éviter le rechargement automatique lors d’une soumission.
- La lecture et la modification du DOM : créer des éléments avec `createElement`, changer leur texte et les ajouter à une liste.
- Les conditions `if/else` pour traiter différents cas, comme une liste vide ou un champ de saisie vide.
- La manipulation de tableaux avec `push`, `forEach` et `splice`.
- L’utilisation de `localStorage`, ainsi que la conversion des tableaux avec `JSON.stringify` et `JSON.parse`.
- L’utilisation de `dataset` pour associer une information (l’index) à un élément HTML.
- La séparation des rôles entre HTML (structure), CSS (présentation) et JavaScript (comportement).

## Difficultés rencontrées et solution

La principale difficulté concernait la conservation des anciennes tâches après un rechargement. Elles étaient bien lues depuis `localStorage` et affichées, mais le tableau JavaScript servant aux ajouts était initialement vide. Lorsqu’une nouvelle tâche était ajoutée, ce tableau vide était sauvegardé à la place de la liste complète : les anciennes tâches disparaissaient alors.

La solution a été de charger les tâches sauvegardées dans le tableau JavaScript dès le démarrage. Ce tableau sert ensuite de source commune pour l’affichage, les ajouts, les suppressions et la sauvegarde. Ainsi, les changements successifs sont conservés.

Une autre difficulté consistait à supprimer la bonne tâche. L’index de chaque tâche est donc enregistré dans son élément HTML avec `dataset.index`. Au clic, cet index est converti en nombre et utilisé par `splice` pour supprimer l’élément correspondant. La liste mise à jour est ensuite sauvegardée et réaffichée.

Enfin, les champs vides sont traités avec une condition `if/else` afin d’éviter l’ajout de tâches sans texte et d’informer l’utilisateur.

## Bilan

Cet exercice montre comment relier une interface HTML aux données manipulées en JavaScript, puis conserver ces données d’une visite à l’autre avec le stockage du navigateur. Il met également en évidence l’importance de garder cohérents le tableau en mémoire, l’affichage à l’écran et les données sauvegardées.
