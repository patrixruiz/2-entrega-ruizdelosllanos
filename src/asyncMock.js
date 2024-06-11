const instrumentos = [
    {
       id:1,
       nombre:"Hamburguesa Argentina",
       precio:4500,
       descripcion:"Hamburguesa con un medallon de carne a la parrila, con lechuga, tomate, cebolla y salsa de la casa",
       img:"https://quecocinohoy.com.ar/wp-content/uploads/2022/09/hamburguesa-argentina-500x500.jpg",
       categoria: "sandwich"

    },
    {
       id:2,
       nombre:"Empanadas Ciclo Docena",
       precio:3500,
       descripcion:"Empanada de carne cortada a cuchillo con condimentos de la casa",
       img:"https://imag.bonviveur.com/empanadas-argentinas-de-carne-foto-cerca.webp",
       categoria: "empanadas"
    },
    {
       id:3,
       nombre:"Sandwich Ciclo",
       precio:5000,
       descripcion:"Sandwich de Entraña a la parrila con huevo frito, cebolla y pimientos salteados ",
       img:"https://sobransabores.com/wp-content/uploads/2017/07/dsc_0465-1.jpg?w=2000&h=1200&crop=1",
       categoria: "sandwich"
    },
    {
       id:4,
       nombre:"Empanadas de Queso Docena",
       precio:3500,
       descripcion:"Emapanas de queso fritas",
       img:"https://img-global.cpcdn.com/recipes/55fc011003923aeb/680x482cq70/empanadas-fritas-de-queso-foto-principal.webp",
       categoria: "empanadas"
    },
    {
       id:5,
       nombre:"Limonada",
       precio:2000,
       descripcion:"Jarra de limonada casera con jengibre",
       img:"https://cdn.pedix.app/q0JBwZUwOCFUYw66DiGc/products/1707434883145.png?size=2000x2000",
       categoria: "bebidas"
    },
    {
       id:6,
       nombre:"Chopp de Cerveza Quilmes",
       precio:2000,
       descripcion:"Chopp de Cerveza Quilmes Tirada, idividual",
       img:"https://acdn.mitiendanube.com/stores/861/458/products/421021-ef786082cb97975f4915687429283091-1024-1024.webp",
       categoria: "bebidas"
    },
    {
       id:7,
       nombre:"Lata de Coca-Cola",
       precio:1500,
       descripcion:"Lata de Coca-Cola individual 354ml",
       img:"https://acdn.mitiendanube.com/stores/861/458/products/340341-3359c763f08b338b2b15680466868435-1024-1024.webp",
       categoria: "bebidas"
    },
    {
       id:8,
       nombre:"Postre la Ciclo",
       descripcion:"Porcion de torta a base de galleta oreo",
       precio:2500,
       img:"https://mandolina.co/wp-content/uploads/2020/11/postre-de-oreo.jpg",
       categoria: "otros"
    },
 ];

 export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(instrumentos);
    }, 2000);
  });
  
  export const getProduct = (id) => {

    return new Promise((resolve) =>{
      const product = instrumentos.find((prod) => prod.id == id);
      setTimeout(() => {
         resolve(product)
      }, 1000);
   }); 
  };

