import React from "react";
import PictureYoutube from "../public/image-youtube.png";
import PictureFlag from "../public/image-flag.png";
import PictureTorbes from "../public/image-torbes.png";
import Morpion from "../public/Morpion-image.png";
import TrackerTimes from "../public/tracker-desktop.png";
import { CardProject } from "./CardProject";


function Project() {
  return (
    <section
      id="Projects"
      className="h-[auto] mb-14 max-lg:h-full w-full flex flex-col mt-2"
    >
      <h1 className="text-[#38c9c6] text-[48px] text-[700] self-center mb-4">
        Projects
      </h1>
      <CardProject
        image={PictureYoutube}
        title="Youtube Clone"
        link="https://clone-youtube-gold.vercel.app/"
        description="Ce projet est un clone de la populaire plateforme de partage de
        vidéos YouTube. Il permet aux utilisateurs de visualiser et de
        rechercher des vidéos, de les regarder et de profiter d'une
        expérience similaire à celle du site Web YouTube actuel.
        L'application est construite avec React et utilise les technologies
        Web modernes pour fournir une interface utilisateur fluide et
        réactive. Il récupère les données vidéo à partir d'un exemple d'API
        et les affiche dans une présentation familière, comprenant des
        vignettes vidéo, des titres et des descriptions."
      />
      <CardProject
        image={PictureFlag}
        title="FrontEnd Mentor API Flag"
        link="https://front-end-mentor-rest-countries-eta.vercel.app/"
        description="Le projet REST Countries API Flag est une application Web qui
        fournit une collection complète de drapeaux du monde entier. Les
        utilisateurs peuvent filtrer les drapeaux par région et effectuer
        des recherches précises à l'aide d'une barre de recherche. Cliquer
        sur un drapeau vous redirige vers une page dédiée avec plus de
        détails sur le pays. Ce projet a été créé avec Vite, React et
        Tailwind CSS, ce qui en fait une application Web moderne et
        réactive."
      />
      <CardProject
        image={PictureTorbes}
        title="Forbes contact Clone"
        link="https://contact-clone-forbes.vercel.app/"
        description="Ce projet est un clone de la page de contact de Forbes. Conçu avec
          HTML, CSS et JavaScript, il reproduit l'esthétique de Forbes tout en
          améliorant l'expérience utilisateur grâce à la validation de
          formulaire en temps réel. Les utilisateurs reçoivent un retour
          immédiat, garantissant qu'ils fournissent des informations exactes.
          La conception s’adapte parfaitement à divers appareils, offrant une
          interface cohérente et visuellement attrayante. Ce clone rend non
          seulement hommage à Forbes, mais démontre également un engagement en
          faveur d'un design convivial."
      />
      <CardProject
        image={Morpion}
        title="Jeux du Morpion"
        link="https://tic-tac-toe-game-gules.vercel.app/"
        description="Il s'agit d'un simple jeu Tic-Tac-Toe (Morpion) implémenté en 
          JavaScript pur. Le jeu permet à deux joueurs de s'affronter à tour de rôle pour 
          réaliser une combinaison gagnante sur le plateau de jeu. C'est un jeu classique 
          qui constitue un excellent moyen de passer le temps et de tester vos compétences
          stratégiques."
      />
      <CardProject
        image={TrackerTimes}
        title="Gestionaire de tâches"
        link="https://gestionnaire-taches.vercel.app/"
        description="Le projet d'application de gestion de tâches est un outil efficace 
          développé avec React et Vite. Elle permet aux utilisateurs d'ajouter, de modifier
          et de supprimer des tâches, de les classer par catégorie et de suivre leur 
          progression. L'interface intuitive et réactive garantit une expérience 
          utilisateur fluide. Restez organisé, améliorez votre productivité et 
          gérez vos tâches avec simplicité grâce à notre application de gestion de tâches."
      />
    </section>
  );
}

export default Project;
