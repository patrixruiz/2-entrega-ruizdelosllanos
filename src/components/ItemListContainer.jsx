//Mostrar mensaje de bienvenida
//Importarlo dentro de App.jsx y abajo de NavBar.
import "./ItemListContainer.css";
import PropTypes from 'prop-types';
import imagenCiclo from "../assets/background3.jpeg";

  export default function ItemListContainer({ greeting }) {
    return (
      <>
      <body>
      <h2 className="texto">{greeting}</h2>
          <div className="imagenCiclo">
            <img  src={imagenCiclo} alt="imagenCiclo" />
          </div>
      </body>
      </>
    );
  }

  
  ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired 
};