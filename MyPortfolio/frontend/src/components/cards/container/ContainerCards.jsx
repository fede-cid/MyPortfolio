import CardProductos from "../cardproductos/CardProductos";
import CardCarousel from "./carrucel/CarrucelMUI";
import style from "./ContainerCards.module.css";
import FeaturedPost from "./Proyects/PostProyects";


const ContainerCards = () => {
  const cards = [
    {
      id: 1,
      title: "Eventoo",
      description: "https://www.eventoo.com.ar/",
      imageUrl: "../../../../public/recursos/Eventoo.png",
    },
    {
      id: 2,
      title: "Pokemons Wiki",
      description: "https://quiet-monstera-a80bcc.netlify.app/home",
      imageUrl: "../../../../public/recursos/PokemonWiki.png",
    },
  ];

  const eventoo = {
      title: "Eventoo",
    description:
      "Descripción corta del post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "https://www.eventoo.com.ar/",
    imageText: "Imagen aleatoria de Unsplash",
    linkText: "Seguir leyendo…",
  };
  const PokemonWiki = {
      title: "Pokemons Wiki",
    description:
      "Descripción corta del post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      slug: "https://quiet-monstera-a80bcc.netlify.app/home",
    imageText: "Imagen aleatoria de Unsplash",
    linkText: "Seguir leyendo…",
  };
  return (
    <>
        <FeaturedPost posts={eventoo} />
        <FeaturedPost posts={PokemonWiki} />
        <CardCarousel cards={cards}/>

    </>
  );
};

export default ContainerCards;
