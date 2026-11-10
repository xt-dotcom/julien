# Armor Loisirs Nautiques — maquette GitHub Pages V4

## Ce qui change en V4

- Accueil repensé : **cinq activités immédiatement visibles et cliquables** dans le premier écran.
- Cinq pages dédiées : `sorties-en-mer.html`, `courtage.html`, `conciergerie.html`, `hommages-en-mer.html`, `formation.html`.
- Les boutons de réservation et de demande de devis sont situés **dans les pages de prestation**.
- Présentation de Julien à la **première personne**, à lui faire valider avant publication.
- Lien officiel de réservation ALN conservé ; pas de suivi, de serveur ni de framework payant.
- Les anciens liens vers les trois rubriques historiques redirigent vers les nouvelles pages.

## Publication

1. Décompresser le ZIP et mettre tous les fichiers/dossiers à la racine du dépôt GitHub **Public**.
2. Dans **Settings → Pages** : Deploy from a branch → `main` → `/ (root)` → Save.
3. L'URL sera `https://VOTRE-IDENTIFIANT.github.io/NOM-DU-DEPOT/`.

## À valider avant publication officielle

- Réponses commerciales, tarifs et disponibilité des bateaux ; vérifier avec Julien.
- Textes à la première personne : textes éditoriaux proposés, **non des citations recueillies auprès de Julien**.
- Les visuels complémentaires de bateau à moteur et semi-rigide sont des **illustrations** et non des photos contractuelles des bateaux ALN.
- La responsabilité et le statut juridique des prestations, notamment dispersions de cendres ; ne pas supprimer les précisions réglementaires.
- Coordonnées et réservation officielle : 06 51 20 26 96 / alnautiques@gmail.com / MyRezApp.

Le site est une maquette indépendante destinée à être présentée à Julien, non une publication officielle à son nom.
# Armor Loisirs Nautiques — proposition de refonte (GitHub Pages)

**Site de démonstration conçu pour Julien / Armor Loisirs Nautiques.**

Ce projet est une **nouvelle création indépendante** de la maquette ChatGPT Sites. Les pages sont constituées de fichiers HTML/CSS/JS simples, sans base de données, sans installation, sans abonnement technique et sans framework.

## Contenu

- `index.html` : page d'accueil immersive, 3 univers, Julien, galerie et avis clients réels.
- `vivre-la-mer.html` : balades en mer, location de bateaux, jet-skis et sorties privatives.
- `votre-bateau.html` : courtage nautique, achat, vente, coaching, convoyage, conciergerie.
- `hommage-en-mer.html` : sortie pour recueillement en mer, avec information réglementaire prudente.
- `julien.html` : présentation et expérience maritime de Julien.
- `contact.html` : coordonnées et formulaire qui prépare un e-mail (sans backend).
- `mentions.html` : mentions de démonstration et informations.
- `assets/css/style.css` : tout le design et l'ergonomie mobile.
- `assets/js/site.js` : menu mobile, animations légères, formulaire mailto et année.
- `assets/images/` : photos locales optimisées en WebP et logo ALN.

## Visualisation en local

Décompresser le ZIP, ouvrir `index.html` avec Chrome, Edge ou Firefox. Les images et les liens internes fonctionnent sans connexion à un serveur. Les liens de réservation renvoient au système officiel ALN et nécessitent Internet. La police Google Fonts peut utiliser une police de secours hors ligne.

## Publier gratuitement sur GitHub Pages

1. Ouvrir GitHub et créer un nouveau dépôt, par exemple `armor-loisirs-nautiques` (dépôt public pour Pages sur la plupart des comptes gratuits).
2. Extraire le ZIP sur l'ordinateur.
3. Dans le dépôt, cliquer sur **Add file → Upload files** puis envoyer **le contenu du dossier décompressé** : `index.html`, les autres pages HTML, le dossier `assets`, et `.nojekyll` (fichier caché facultatif).
4. Valider avec **Commit changes**.
5. Dans le dépôt, ouvrir **Settings → Pages**.
6. Dans **Build and deployment**, sélectionner **Deploy from a branch**, branche `main`, dossier `/(root)` ; enregistrer.
7. Le site est accessible sous une adresse de type `https://NOM-UTILISATEUR.github.io/armor-loisirs-nautiques/` une fois Pages déployé.

⚠️ Les fichiers doivent être **à la racine** du dépôt. Ne pas mettre le dossier `armor-loisirs-nautiques-github` lui-même dans le dépôt en laissant les pages un niveau en dessous, sinon l'URL de base ne fonctionnera pas.

## Modifier le site avec ChatGPT

Toutes les modifications peuvent se faire ici : envoyer une demande (« change la photo du bandeau », « revois la page courtage », « agrandis le logo », etc.). Une nouvelle version du ZIP pourra être générée. Le site ne dépend pas de l'application Sites.

## Informations à valider avant publication commerciale

- **Logo et photographies** : images du littoral fournies pour le projet ; faire confirmer les droits de diffusion commerciale. Le logo a été isolé depuis une capture fournie. Les deux photos de bateau moteur et de semi-rigide **sont des illustrations créées pour le projet**, **pas des photos des vrais bateaux ALN** ; c'est indiqué au-dessous des images. Les remplacer idéalement par des clichés réels des unités de Julien.
- **Photo de Julien** : non ajoutée faute de portrait fourni ; un portrait de Julien sur son propre bateau serait souhaitable.
- **Activités, prix, dates et disponibilité** : les offres renvoient au système de réservation officiel ALN, sans reproduire les tarifs qui peuvent changer.
- **Avis clients** : trois **courts extraits textuels fidèles** issus du site officiel ALN. Vérifier le choix définitif et l'autorisation de publication dans le futur site.
- **Hommage en mer** : vérifier précisément le cadre réglementaire, la déclaration en mairie, la responsabilité de l'opérateur et les éventuelles conditions d'habilitation. La maquette ne prétend pas qu'ALN est un opérateur funéraire habilité ; elle présente la prestation de navigation/accompagnement. Ne pas donner d'engagement commercial sans validation juridique.
- **Formulaire de contact** : il n'envoie **pas** de message à un serveur ; il prépare un e-mail dans le logiciel de messagerie du visiteur. Pour un vrai envoi web, il faudra connecter un service autorisé par ALN.
- **Mentions légales et politique de confidentialité** : faire remplacer les mentions de démonstration par les mentions exactes de l'entreprise et obligations applicables.
- **Réservation et annonces** : liens qui renvoient actuellement au site et au moteur de réservation officiels ALN.

## Sources des textes factuels

- Site officiel : https://www.armorloisirsnautiques.fr/
- Services : https://www.armorloisirsnautiques.fr/services
- Parcours Julien : https://www.armorloisirsnautiques.fr/a-propos
- Bateaux : https://www.armorloisirsnautiques.fr/nos-bateaux-en-vente
- Réservation : https://booking.myrezapp.com/fr/online/booking/minisite/18653/armor-loisirs-nautiques
- Informations officielles sur la crémation et la destination des cendres : https://www.service-public.fr/particuliers/vosdroits/F1558

## Technique

- Site statique responsive, conçu mobile-first dans son comportement ; compatible GitHub Pages.
- Photos locales en WebP optimisé, données EXIF retirées.
- Liens internes relatifs pour les dépôts GitHub Pages en sous-dossier.
- Aucun cookie de mesure d'audience, aucun script tiers de suivi, pas d'hébergement serveur ni de backend.
- Les polices Google Fonts sont facultatives : des polices de remplacement sont déclarées.


## Mise à jour V3 (novembre 2026)

- Typographie allégée : titres, navigation et boutons moins gras, meilleur confort de lecture.
- Portrait fourni de Julien intégré à la page d’accueil et à la page « Julien & ALN ».
- Le reste du site et les liens sont conservés.


## Mise à jour V7 — accueil lumineux
La page d’accueil propose désormais une vue panoramique claire et cinq cartes photo distinctes, immédiatement cliquables. Le CSS spécifique est dans `assets/css/accueil-v7.css`. La deuxième grille d’activités, redondante, a été supprimée. L’ensemble des autres pages reste inchangé.
