# Maap Web

This project runs on top of Angular 1.4.x, while package dependency installation is done via Bower and serve/deployment via Gulp.

## Installation

Make sure you have node installed:

```shell
$ npm i -g node
```

Make sure you have bower installed:

```shell
$ npm i -g bower
```

Make sure you have gulp installed:

```shell
$ npm i -g gulp gulp-cli
```

In your application root directory, enter this command to install the dependencies:

```shell
$ npm install
$ bower install
```

## Translate

Open file **src/app/modules/_core/core.module.js** edit function **$rootScope.translate**;

```json
"es":{
    we:"Nosaltres",
    contact:"Contacte",
    about:"maap. és una empresa que uneix tres disciplines dedicades al disseny i transformació d'espais. Ofereix serveis d'interiorisme, arquitectura i espais efímers (direcció d'art i escenografia).",
    es:"Esp",
    en:"Ingles",
    ca:"Catalan"
},
"ca":{
    we:"Nosaltres",
    contact:"Contacte",
    about:"maap. és una empresa que uneix tres disciplines dedicades al disseny i transformació d'espais. Ofereix serveis d'interiorisme, arquitectura i espais efímers (direcció d'art i escenografia).",
    es:"Esp",
    en:"Ingles",
    ca:"Catalan"
},
"en":{
    we:"About",
    contact:"Contact",
    about:"maap. is a company that unites three disciplines dedicated to the design and transformation of spaces. Offers interior design, architecture and ephemeral services (art direction and scenography)",
    es:"Spanish",
    en:"English",
    ca:"Catalan"
}
```


## Add Project

Open file **src/app/modules/_core/core.module.js** edit variable **$rootScope.arrProjetos**;

```json
{
    name:{
        es:"Name",
        en:"Name",
        ca:"Name"
    },
    location:{
        es:"Location",
        en:"Location",
        ca:"Location"
    },
    image:"/assets/images/image-project-1436x857.jpg",
    description:{
        es:"Description",
        en:"Description",
        ca:"Description"
    },
    explain:{
        es:"Explain",
        en:"Explain",
        ca:"Explain"
    },
    images:[
        "/assets/images/img-1-1920x2868.jpg",
        "/assets/images/img-2-1920x2868.jpg",
        "/assets/images/img-3-1920x2868.jpg",
    ]
}
```

## Build Application

```shell
$ gulp build
```
After compilation, copy the entire contents of the "dist" folder
