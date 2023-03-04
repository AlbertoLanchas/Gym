import "../styles/home.css";
import background from "../assets/main.jpg";
import Goals from "./Goals";

const home: React.FC = () => {
  return (
    <div className="home">
      <img src={background} alt="Home" className="home__background" />
      <div className="home__content">
        <h1 className="home__title">PONTE EN FORMA</h1>
        <p>
          ¡No pierdas más tiempo! Únete a nuestro gimnasio y comienza a ver
          cambios en tu cuerpo en tan solo unas semanas..
        </p>
        <p>ENTRENAMIENTO Y NUTRICIÓN PERSONALIZADO</p>
        <button className="home__button">COMENZAR</button>
      </div>
      <Goals />
    </div>
  );
};

export default home;
