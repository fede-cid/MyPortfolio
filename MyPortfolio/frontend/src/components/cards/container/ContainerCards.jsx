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
      imageUrl: "https://raw.githubusercontent.com/fede-cid/MyPortfolio/main/MyPortfolio/frontend/public/recursos/Eventoo.png",
    },
    {
      id: 2,
      title: "Pokemons Wiki",
      description: "https://pokemons-wiki.netlify.app",
      imageUrl: "https://raw.githubusercontent.com/fede-cid/MyPortfolio/main/MyPortfolio/frontend/public/recursos/PokemonWiki.png",
    },
  ];

  const posts = [
    {
      imageUrl: "../../../../public/recursos/Eventoo.png",
      title: "Eventoo",
      description:"En nuestra aplicación web es una plataforma que permite a los usuarios crear y comprar eventos, así como dar calificaciones a los mismos. Además, cuenta con un dashboard de administración y fue desarrollada por un equipo de 8 programadores. Utiliza tecnologías como React, Redux Toolkit, JavaScript, CSS3, Node.js, Express.js y PostgreSQL, así como la pasarela de pago de MercadoPago. También cuenta con manejo de local storage y utiliza librerías de Material UI para lograr un diseño atractivo y una buena experiencia de usuario. En resumen, es una aplicación dinámica, fácil de usar y que ofrece una excelente experiencia para todos sus usuarios.",
      slug: "https://www.eventoo.com.ar/",
    },
    {
      imageUrl: "../../../../public/recursos/PokemonWiki.png",
      title: "Pokemons Wiki",
      description: "una aplicación web de Pokémon. He llevado a cabo este proyecto de manera individual, combinando una base de datos PostgreSQL y Node.js en el backend con una interfaz de usuario atractiva y intuitiva en el frontend con React/Redux. La aplicación cuenta con una página de inicio atractiva con tarjetas de Pokémon que enlazan a su información general, así como una página detallada de la tarjeta de cada Pokémon y la opción de crear un Pokémon personalizado. Además, cuenta con filtros y opciones de ordenamiento y una barra de búsqueda para encontrar fácilmente los Pokémon deseados. Estoy orgulloso de mi trabajo y estoy emocionado de compartirlo con ustedes.",
      slug: "https://pokemons-wiki.netlify.app",
    },
  ];
  return (
     <> <CardCarousel cards={cards} />
    <div className={style.containerCards}>
      {posts.map((post) => (
        <FeaturedPost
          key={post.id}
          title={post.title}
          description={post.description}
          image={post.imageUrl}
          slug={post.slug}
        />
      ))}</div>
    </>
  );
};

export default ContainerCards;
