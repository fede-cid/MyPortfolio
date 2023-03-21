import CardProductos from "../cardproductos/CardProductos";
import CarrouselMini from "./carrucel/Carrouselmini/CarrouselMini";
import CardCarousel from "./carrucel/CarrucelMUI";
import style from "./ContainerCards.module.css";
import FeaturedPost from "./Proyects/PostProyects";

const ContainerCards = () => {
  const cards = [
    {
      id: 1,
      title: "Eventoo",
      description: "https://www.eventoo.com.ar/",
      imageUrl:
        "https://raw.githubusercontent.com/fede-cid/MyPortfolio/main/MyPortfolio/frontend/public/recursos/Eventoo.png",
    },
    {
      id: 2,
      title: "Pokemons Wiki",
      description: "https://pokemons-wiki.netlify.app",
      imageUrl:
        "https://raw.githubusercontent.com/fede-cid/MyPortfolio/main/MyPortfolio/frontend/public/recursos/PokemonWiki.png",
    },
  ];

  const posts = [
    {
      imageUrl: "../../../../public/recursos/Eventoo.png",
      title: "Eventoo",
      description:
        "In our web application is a platform that allows users to create and purchase events, as well as rate them. It also features an administration dashboard and was developed by a team of 8 programmers. It uses technologies such as React, Redux Toolkit, JavaScript, CSS3, Node.js, Express.js, and PostgreSQL, as well as the MercadoPago payment gateway. It also features local storage management and uses Material UI libraries to achieve an attractive design and good user experience. In summary, it is a dynamic application, easy to use, and offers an excellent experience for all its users.",
      slug: "https://www.eventoo.com.ar/",
    },
    {
      imageUrl: "../../../../public/recursos/PokemonWiki.png",
      title: "Pokemons Wiki",
      description:
        "A Pokémon web application. I carried out this project individually, combining a PostgreSQL database and Node.js on the backend with an attractive and intuitive user interface on the frontend with React/Redux. The application features an attractive home page with Pokémon cards that link to their general information, as well as a detailed page for each Pokémon card and the option to create a custom Pokémon. It also features filters and sorting options and a search bar to easily find desired Pokémon. I am proud of my work and excited to share it with you.",
      slug: "https://pokemons-wiki.netlify.app",
    },
  ];
  return (
    <>
          <h2 className={style.title2}>
          These are my featured projects.
      </h2>
      <CardCarousel cards={cards} />
      <div className={style.containerCards}>
        {posts.map((post) => (
          <FeaturedPost
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.imageUrl}
            slug={post.slug}
          />
        ))}
      </div>
      <CarrouselMini />
    </>
  );
};

export default ContainerCards;
