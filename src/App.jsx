
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ProductsComponents/ItemListContainer.jsx';
import NavBar from './components/navBarComponents/NavBar'
import ItemDetailContainer from './components/ProductsDetails/ItemDetailContainer.jsx';
import CategoryListContainer from './components/ProductsComponents/CategoryListContainer.jsx';
function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path ="/" element = {<ItemListContainer greeting={"¡Bienvenidos a la Ciclo, comidas y mucho mas!"}/>} />
        <Route exact path ="/category/:id" element = {<CategoryListContainer greeting={"¡Categorías!"}/>} />
        <Route exact path ="/item/:id" element = {<ItemDetailContainer greeting={"¡Más detalles!"}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
