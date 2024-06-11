import logoCarrito from "../../assets/logoCarrito.png"
import "./CartWidget.css"

export default function CartWidget() {
    return (
        <div className="cartWidget">
        <button><h5>3</h5><img className="logoCarrito" src={logoCarrito} alt="logoCarrito" /></button>
        </div>
    );
  }