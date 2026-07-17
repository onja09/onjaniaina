import { FaAccusoft, FaExpand } from "react-icons/fa";

export const allList = [
    {
      id: 1,
      title: "Accueil",
      route: "/",
    },
    {
      id: 2,
      title: "Apropos",
      route: "/apropos",
    },
    {
      id: 3,
      title: "Experiences & Etudes",
      route: "/experiences-etudes",
    },
    {
      id: 4,
      title: "Projets",
      route: "/projets",
    },
    {
      id: 5,
      title: "Blog",
      route: "/blog",
    },
    {
      id: 6,
      title: "Contact",
      route: "/contact",
    },
  ],
  bannerItem = [
    {
      _id: 1,
      img: "./img/img5.jpg",
    },
    {
      _id: 2,
      img: "./img/img2.jpg",
    },
    {
      _id: 3,
      img: "./img/img3.jpg",
    },
    {
      _id: 4,
      img: "./img/img6.jpg",
    },
  ],
  apropos = [
    {
      id: 1,
      param:
        "Je m'appelle RAFETISON Onjaniaina Herilala, 34 ans, basé à Antananarivo, Madagascar. Diplômé en informatique et fort d'un stage de 6 mois chez Netykom, je suis développeur web passionné par la création de sites et d'applications modernes, performants et adaptés aux besoins des utilisateurs",
    },
    {
      id: 2,
      param:
        "Depuis 2021, je renforce mes compétences à travers des formations professionnelles en développement web et des études supérieures à l’EPSI Madagascar.",
    },
    {
      id: 3,
      param:
        "J’aime équilibrer ma vie entre famille et aussi entretenir ma force physique et moral, sport (football, le basket-ball) et le jardinage.",
    },
  ],
  experienceItems = [
    {
      id: 1,
      entreprise: "Netykom de Madagascar",
      desc: "Stage en développement web, création des sites moderne avec WordPress, CSS3, Javascript...",
      date: "Janvier 2026 - juin 2026",
    },
    {
      id: 2,
      entreprise: "GasyTech et Nir'info de Madagascar",
      desc: "Formations professionnelles en développement web, réalisation de plusieurs projets",
      date: "En 2021 et 2023",
    },
    {
      id: 3,
      entreprise: "MBOLAIZY de Madagascar",
      desc: "Informaticien Société MBOLAIZY: maintenance informatique et réseau",
      date: "juillet 2019 - juin 2021",
    },
    {
      id: 4,
      entreprise: "AREA de Madagascar",
      desc: "Opérateur de saisie",
      date: "janvier 2018 - mai 2023",
    },
  ],
  expehome = [
    {
      id: 1,
      entreprise: "Netykom de Madagascar",
      desc: "Stage en développement web, création des sites moderne avec WordPress, CSS3, Javascript...",
      date: "Janvier 2026 - juin 2026",
      ico: `${process.env.PUBLIC_URL}/img/Certificate-01-256.png`,
    },
    {
      id: 2,
      entreprise: "GasyTech et Nir'info de Madagascar",
      desc: "Formations professionnelles en développement web, réalisation de plusieurs projets",
      date: "En 2021 et 2023",
      ico: `${process.env.PUBLIC_URL}/img/Certificate-01-256.png`,
    },
    {
      id: 3,
      entreprise: "MBOLAIZY de Madagascar",
      desc: "Informaticien Société MBOLAIZY: maintenance informatique et réseau",
      date: "Juillet 2019 - juin 2021",
      ico: `${process.env.PUBLIC_URL}/img/Certificate-01-256.png`,
    },
    {
      id: 4,
      desc: "Troisième année en génie informatique à l'école supérieur EPSI de Madagascar",
      date: "Octobre 2024 - 2025",
      indice: "etude",
      ico: `${process.env.PUBLIC_URL}/img/Graduate-Hat-256.png`,
    },
    {
      id: 5,
      desc: "Deuxième année en génie informatique à l'école supérieur EPSI de Madagascar",
      date: "Novembre 2023 - septembre 2024",
      indice: "etude",
      ico: `${process.env.PUBLIC_URL}/img/Graduate-Hat-256.png`,
    },
    {
      id: 6,
      desc: "CFPM, Nir'info, GasyTech - formation en développement web",
      date: "Octobre 2021 - 2024",
      indice: "formation",
      ico: `${process.env.PUBLIC_URL}/img/Agreement-01-256.png`,
    },
  ],
  etudeItems = [
    {
      id: 1,
      desc: "Troisième année en génie informatique à l'école supérieur EPSI de Madagascar",
      date: "Octobre 2024 - 2025",
      indice: "etude",
    },
    {
      id: 2,
      desc: "Deuxième année en génie informatique à l'école supérieur EPSI de Madagascar",
      date: "Novembre 2023 - septembre 2024",
      indice: "etude",
    },
    {
      id: 3,
      desc: "CFPM, Nir'info, GasyTech - formation en développement web",
      date: "Octobre 2021 - 2024",
      indice: "formation",
    },
    {
      id: 4,
      desc: "Deuxième année en Electronique-informatique à l'université Ankatso de Madagasikara",
      date: "2015 - 2017",
      indice: "etude",
    },
  ],
  projets = [
    {
      _id: 1,
      titre: "Générateur de mot de passe",
      img: "./img/projet/gmdp.PNG",
      url: "https://onja09.github.io/generateur-mdp/",
    },
    {
      _id: 2,
      titre: "To do list",
      img: "./img/projet/todo.PNG",
      url: "https://onja09.github.io/to_do_list/",
    },
    {
      _id: 3,
      titre: "indicateur de masse corporel",
      img: "./img/projet/imc.PNG",
      url: "https://onja09.github.io/indice_masse_corporel/",
    },
    {
      _id: 4,
      titre: "e-commerce",
      img: "./img/projet/design.PNG",
      url: "https://onja09.github.io/interior_design_studio/",
    },
    {
      _id: 5,
      titre: "site restaurant",
      img: "./img/projet/restau.PNG",
      url: "https://onja09.github.io/healthy_food_restaurant/",
    },
    {
      _id: 6,
      titre: "site de location",
      img: "./img/projet/construction.PNG",
      url: "https://onja09.github.io/site_react_deploy/",
    },
    {
      _id: 7,
      titre: "site restaurant",
      img: "./img/projet/india.PNG",
      url: "https://onja09.github.io/react_site_restaurant/",
    },
    {
      _id: 8,
      titre: "amazon cloune e-commerce",
      img: "./img/projet/amazon.PNG",
      url: "https://onja09.github.io/Amazon_cloune/",
    },
  ],
  listProjet = [
    {
      id: 1,
      title: "Background 3d",
      desc: "Mini projet",
      route: "/backgound3d",
    },
    {
      id: 2,
      title: "Animation compteur",
      desc: "Mini projet",
      route: "/compteur",
    },
    {
      id: 3,
      title: "Navigation menu",
      desc: "Mini projet",
      route: "/navigation",
    },
    {
      id: 4,
      title: "Auto text effet",
      desc: "Mini projet",
      route: "/auto-text-effet",
    },
    {
      id: 5,
      title: "Button ripple effet",
      desc: "Mini projet",
      route: "/button-ripple-effet",
    },
    {
      id: 6,
      title: "Drag and drop",
      desc: "Mini projet",
      route: "/drag-and-drop",
    },
    {
      id: 7,
      title: "Hover board",
      desc: "Mini projet",
      route: "/hover-board",
    },
    {
      id: 8,
      title: "Incrementation",
      desc: "Mini projet",
      route: "/incrementing",
    },
    {
      id: 9,
      title: "Form input wave",
      desc: "Mini projet",
      route: "/form-input-wave",
    },
  ],
  image = [
    {
      _id: 1,
      img: "./img/img1.jpg",
    },
    {
      _id: 2,
      img: "./img/img5.jpg",
    },
    {
      _id: 3,
      img: "./img/img7.jpg",
    },
    {
      _id: 4,
      img: "./img/img8.jpg",
    },
    {
      _id: 5,
      img: "./img/img5.jpg",
    },
    {
      _id: 6,
      img: "./img/img9.jpg",
    },
    {
      _id: 7,
      img: "./img/img3.jpg",
    },
  ],
  blogItem = [
    {
      id: 1,
      desc: "La route n’a pas toujours été facile. Durant les trois premiers mois de mon apprentissage, j’ai rencontré beaucoup de difficultés à comprendre la liaison entre les codes. Mais en me basant sur la logique et les algorithmes, j’ai commencé à réussir dans la création d’applications et de sites web.",
    },
    {
      id: 2,
      desc: "Chaque projet est une nouvelle occasion d’explorer, de créer et de résoudre des défis techniques. Les premières difficultés m’ont appris la rigueur, la logique et la patience, des qualités essentielles pour avancer dans ce métier.",
    },
    {
      id: 3,
      desc: "Pour moi, le développement est un art de progression : il allie curiosité, recherche et passion pour offrir des solutions efficaces et satisfaire pleinement les besoins des clients.",
    },
  ];
