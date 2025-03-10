const cards = [
    { name: "Le Bateleur", img: "./assets/images/bateleur.jpeg", description: "Tu es en pleine découverte de tes talents cachés, avec une énergie créative qui ne demande qu’à grandir. Chaque geste est une nouvelle possibilité." },
    { name: "La Papesse", img: "./assets/images/papesse.jpeg", description: "Tu es une exploratrice de la sagesse, trouvant la paix dans les petits moments et cultivant une sérénité intérieure profonde." },
    { name: "L'Impératrice", img: "./assets/images/imperatrice.jpeg", description: "Tu es une source de douceur et d'abondance, apportant équilibre et harmonie dans ton environnement. Tu te nourris de petites choses pour grandir." },
    { name: "L'Empereur", img: "./assets/images/empereur.jpeg", description: "Tu trouves ta force dans la stabilité, dans la création de ton propre ordre, avec calme et réflexion. Tu as une grande capacité à guider les autres avec douceur." },
    { name: "Le Pape", img: "./assets/images/pape.jpeg", description: "Tu es une lumière qui guide les autres dans la quête de la paix intérieure, avec une sagesse tranquille et un amour inébranlable pour les petits moments." },
    { name: "Les Amoureux", img: "./assets/images/amoureux.jpeg", description: "L'amour, sous toutes ses formes, est au cœur de ta vie. Tu choisis avec soin ce qui nourrit ton âme et te fais grandir chaque jour." },
    { name: "Le Chariot", img: "./assets/images/chariot.jpeg", description: "Tu avances avec confiance et détermination, tout en respectant ton rythme et celui des autres. La victoire réside dans l’équilibre, pas dans la vitesse." },  
    { name: "La Justice", img: "./assets/images/justice.jpeg", description: "L’équité est ta voie. Tu cherches à comprendre les situations sous tous leurs angles, offrant un regard serein et une prise de décision juste." },  
    { name: "L'Ermite", img: "./assets/images/ermite.jpeg", description: "Le temps seul est une occasion précieuse pour te retrouver. Tu prends du recul pour mieux te comprendre, avec patience et bienveillance." },
    { name: "La Roue de la Fortune", img: "./assets/images/roue.jpeg", description: "Le mouvement de la vie est constant. Tu acceptes les hauts et les bas avec sérénité, sachant que chaque moment apporte son propre enseignement." },
    { name: "La Force", img: "./assets/images/force.jpeg", description: "Ta force intérieure est sans égale. Elle ne se manifeste pas dans la conquête, mais dans la douceur et la patience, comme un souffle calme dans une tempête." },
    { name: "Le Pendu", img: "./assets/images/pendu.jpeg", description: "Parfois, il est nécessaire de voir les choses sous un autre angle. La pause permet la réflexion et la renaissance." },
    { name: "La Mort", img: "./assets/images/mort.jpeg", description: "La transformation fait partie de la vie. Tu laisses derrière toi ce qui ne te sert plus pour accueillir ce qui te permettra d’évoluer." },
    { name: "Le Diable", img: "./assets/images/diable.jpeg", description: "Tu reconnais tes chaînes et choisis de les briser. La liberté est dans l’acceptation et dans le pouvoir de transformer ce qui semblait contraignant." },
    { name: "La Tour", img: "./assets/images/tour.jpeg", description: "Même les structures les plus solides doivent parfois s'effondrer pour permettre un renouveau. Le changement est un terrain fertile pour la croissance." },
    { name: "L'Etoile", img: "./assets/images/etoile.jpeg", description: "Tu es guidé.e par l’étoile de l’espoir. Chaque pas dans l’inconnu est une chance de briller davantage." },
    { name: "La Lune", img: "./assets/images/lune.jpeg", description: "La lune t'invite à te connecter à ton intuition. L’obscurité n’est qu’un voile derrière lequel se cachent les réponses que tu cherches." },
    { name: "Le Soleil", img: "./assets/images/soleil.jpeg", description: "Le soleil t’apporte lumière et chaleur. Dans ton cœur, la joie rayonne et répand sa chaleur autour de toi." },
    { name: "Le Jugement", img: "./assets/images/jugement.jpeg", description: "Tu te lèves avec une nouvelle perspective, prêt.e à embrasser le changement. Le passé fait place à un avenir lumineux et riche de nouvelles possibilités." },
    { name: "Le Monde", img: "./assets/images/monde.jpeg", description: "Tu fais partie d'un tout, connecté.e à l'univers avec une énergie inépuisable. La paix réside dans l'acceptation de ton rôle unique." },
    { name: "Le Fou", img: "./assets/images/mat.jpeg", description: "L’aventure t’attend, et tu sautes dedans sans hésiter. Le voyage est un apprentissage constant, où chaque pas est une révélation." },
];

function drawCard() {
    // Mélange les cartes et sélectionne une carte au hasard
    const selectedCard = cards[Math.floor(Math.random() * cards.length)];

    // Met à jour la carte avec son image et son nom
    const cardElement = document.getElementById("card1");
    cardElement.style.backgroundImage = `url('${selectedCard.img}')`;
    cardElement.innerHTML = `<img src="${selectedCard.img}" alt="${selectedCard.name}" style="display:block;">`;

    // Affiche le résultat
    document.getElementById("result").textContent = `${selectedCard.name}`;

    // Affiche la description
    document.getElementById("description").innerHTML = `<p>${selectedCard.description}</p>`;
}