# Dojo 13: Special Express Modules: Les Statistiques sur les Femmes Françaises

![enter image description here](https://amandeepmittal.gallerycdn.vsassets.io/extensions/amandeepmittal/expressjs/2.0.0/1509881293872/Microsoft.VisualStudio.Services.Icons.Default)

## Partie Récuperation d'API

Sous le framework Express derrière une route, utiliser le Module Axios afin de récupérer les femmes françaises depuis l'API RandomUsers:

[Doc. Module Axios](https://www.npmjs.com/package/axios)

[API RandomUsers Femmes Françaises](https://randomuser.me/api/?results=500&gender=female&nat=fr)

[Doc RandomUsers](https://randomuser.me/)

## Partie des Statistiques

Le Module Lodash est très réputé pour effectuer des opérations sur des tableaux, sur les collections, les fonctions ...
Il est très pratique sur des opérations courantes en JS/Node/React : Chunking, sorting complex, flatten arrays, grouping by, merging by function etc...

Jettez un oeil sur sa documentation:

[Doc de la librairie Lodash](https://lodash.com/)

1.  A l'aide du Module Lodash (installer avec NPM),grouper par villes les femmes puis trier par nombre de femmes par ville de maniere décroissante.

Exemples:

* Paris => 68 femmes
* Lyon => 45 femmes
* Bordeaux => 41 femmes

2.  Toujours à l'aide du Module Lodash (installer avec NPM), Grouper par villes les femmes puis calculer l'age moyen des femmes par villes.

Exemples:

* Paris => 69 ans
* Lyon => 35 ans
* Bordeaux => 43 ans

3.  Enfin, afficher le nom, prenom, adresse, ville et email de **la femme la plus jeune et de la femme la plus vieille dans la ville de Lyon.**

Exemples:

* La femme lyonnaise la plus jeune est Marlène Maisonniaux, elle a 31 ans, elle vit à Place terreaux et son email est marlenemsx@gmail.com

## Partie PDF/Mail

A l'aide du module "html-pdf", et derrière une route Express en GET, gérer au format PDF une mise en page au format A4 des 3 statistiques extraites ci-dessus.
la mise en page est au choix (tableau HTML, puces etc...)

[Doc. HTML-PDF](https://www.npmjs.com/package/html-pdf)

Enfin toujours derriere la même une route Express, envoyer un email avec le module nodemailer que vous connaissez à julien.boyer@wildcodeschool.fr avec en PJ à cet email le PDF générer.

[Doc NodeMailer](https://nodemailer.com/about/)

---

_Bonus: Derrière une Route en API, générer en JSON les 3 statistiques puis envoyer ces stats derriere un Document CSvV (Excel) à l'aide du module Json2xls :_

https://www.npmjs.com/package/json2xls
