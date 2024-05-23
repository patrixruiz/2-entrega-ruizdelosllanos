import PropTypes from 'prop-types';
import "./BotonNavbar.css";

export default function BotonNavbar({ nombre }) {
    return (
            <button className='botonNavbar'>
                {nombre}
            </button>
    );
  }


BotonNavbar.propTypes = {
    nombre: PropTypes.string.isRequired 
};