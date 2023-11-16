import React from "react";
import PictureYoutube from "../public/image-youtube.png";
import PictureFlag from "../public/image-flag.png";
import PictureTorbes from "../public/image-torbes.png";
import Morpion from "../public/Morpion-image.png";
import TrackerTimes from "../public/tracker-desktop.png";
import PicturePortfolio from "../public/image-portfolio.png";
import { CardProject } from "./CardProject";

function Project() {
  return (
    <section
      id="Projects"
      className="mb-14 max-lg:h-full w-full flex flex-col mt-4"
    >
      <h1 className="text-[#10BD99] text-[48px] text-[700] self-center mb-4">
        Projects
      </h1>
      <CardProject
        image={PictureYoutube}
        title="Youtube Clone"
        GithubLink="https://github.com/Snaper014/Clone_Youtube"
        link="https://clone-youtube-liard.vercel.app/"
        description="Ce projet est une réplique de la célèbre plateforme de 
        partage de vidéos YouTube, enrichi par l'intégration d'une base de données 
        MongoDB et de Node.js. Il offre aux utilisateurs la possibilité de parcourir, 
        rechercher, visionner et apprécier des vidéos, offrant ainsi une expérience 
        immersive similaire à celle du site YouTube actuel. Construite avec React 
        et alimentée par les dernières technologies web, l'application garantit 
        une interface utilisateur fluide et réactive. Son design responsive assure 
        une expérience optimale sur divers appareils, offrant ainsi une flexibilité 
        d'utilisation. La base de données MongoDB ajoute une dimension supplémentaire 
        au projet, permettant aux utilisateurs de liker, disliker, créer des playlists
        et de s'abonner à d'autres utilisateurs. Ces fonctionnalités personnalisées 
        sont intégrées de manière transparente, offrant une expérience utilisateur 
        plus interactive et engageante. Les données vidéo sont récupérées à partir 
        d'une API exemplaire et présentées dans un agencement familier comprenant 
        des vignettes vidéo, des titres et des descriptions. Cette intégration 
        de base de données donne vie à des fonctionnalités sociales avancées, 
        permettant aux utilisateurs de personnaliser leur expérience et de partager 
        leurs préférences. Avec cette évolution du projet, nous visons à offrir une 
        expérience YouTube plus dynamique, mettant l'accent sur la personnalisation 
        et l'interaction sociale."
      />
      <CardProject
        image={PictureFlag}
        title="FrontEnd Mentor API Flag"
        GithubLink="https://github.com/Snaper014/challenge-frontend-mentor"
        link="https://front-end-mentor-rest-countries-eta.vercel.app/"
        description="Le projet REST Countries API Flag est une application Web qui
        fournit une collection complète de drapeaux du monde entier. Les
        utilisateurs peuvent filtrer les drapeaux par région et effectuer
        des recherches précises à l'aide d'une barre de recherche. Cliquer
        sur un drapeau vous redirige vers une page dédiée avec plus de
        détails sur le pays. L'application est responsive pour une meilleur expérience utilisateur 
        sur diffèrents écrans. Ce projet a été créé avec Vite, React et
        Tailwind CSS, ce qui en fait une application Web moderne et
        réactive."
      />
      <CardProject
        image={PictureTorbes}
        title="Forbes contact Clone"
        GithubLink="https://github.com/Snaper014/contact-clone-forbes"
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
        GithubLink="https://github.com/Snaper014/TicTacToeGame"
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
        GithubLink="https://github.com/Snaper014/Gestionnaire-Taches"
        link="https://gestionnaire-taches.vercel.app/"
        description="Le projet d'application de gestion de tâches est un outil efficace 
          développé avec React et Vite. Elle permet aux utilisateurs d'ajouter, de modifier
          et de supprimer des tâches, de les classer par catégorie et de suivre leur 
          progression. L'interface intuitive et réactive garantit une expérience 
          utilisateur fluide. Restez organisé, améliorez votre productivité et 
          gérez vos tâches avec simplicité grâce à notre application de gestion de tâches."
      />
      <CardProject
        image={PicturePortfolio}
        title="Portfolio"
        link="/"
        description="Vous êtes actuellement sur l'un des projets que j'ai réalisés;
        un portfolio pour présenter les différents projets qui ont été faits. J'ai utilisé
        les stacks NEXTJS et tailwind CSS."
      />
    </section>
  );
}

export default Project;
