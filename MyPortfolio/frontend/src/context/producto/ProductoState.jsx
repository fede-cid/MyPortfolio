import { useReducer } from "react";

import ProductoReducer from "./ProductoReducer";
import ProductoContext from "./ProductoContext";

const ProductoState = (props) => {
  const initialState = {
    producto: {
      id: 1,
      nombre: "Crea tu evento",
      explore: "Explora Eventoo",
      descripcion: "Organizar un evento ya no tiene por qué ser complicado. ¡Anímate a dar el primer paso y crea tu primer evento hoy mismo!",
      descripcion2: "Busca un evento de tu interes dentro de los cientos de organizadores que siempre nos eligen"
    }
  }

  const [ state, dispatch ] = useReducer(ProductoReducer, initialState);

  return (
    <ProductoContext.Provider value={{
      producto: state.producto
    }}>
      {props.children}
    </ProductoContext.Provider>
  )
}

export default ProductoState;