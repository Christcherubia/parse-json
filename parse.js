//-----
//Le JSON
//-------------

// Méthode .json() => méthode qui s'auto résou en renvoyant le Body de la requete

fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    // Utilisez JSON.stringify pour afficher la représentation JSON de l'objet complet
    console.log(JSON.stringify(data));

    // Accédez à l'objet "profiles" et utilisez JSON.stringify si nécessaire
    let profilesObject = data.profiles;

    // Affiche le résultat en js de l'objet "profiles" contenu dans le fichier data.json ; en console 
    // console.log(JSON.stringify(profilesObject));

    // Sélectionne l'élément HTML par son id
    const contenuObjetProfiles = document.getElementById('contenu-objet-profiles')

    // Utilise innerHTML pour définir le contenu de l'élément avec la représentation JSON de l'objet "profiles"
    contenuObjetProfiles.innerHTML = JSON.stringify(profilesObject, null, 2);
  })