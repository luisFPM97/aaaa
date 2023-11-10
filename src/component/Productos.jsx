import React from 'react'
import './styles/Productos.css'

const Productos = () => {
  return (
    <div className='productContainer'>
      <div className='pageP'> 
        <h1>Nuestros productos</h1> <div className="products">
          <div className="product">
            <img className='imgProduct' src="http://www.andesexport.com/es/images/uchuva2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              UCHUVA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="http://www.andesexport.com/es/images/bananito2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              BANANITO
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="http://www.andesexport.com/es/images/feijoa2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              FEIJOA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="http://www.andesexport.com/es/images/granadilla2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              GRANADILLA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="http://www.andesexport.com/es/images/gulupa2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              GULUPA
            </a>
          </div>
          <div className="product">
            <img className='imgProduct' src="http://www.andesexport.com/es/images/maracuya2.png" alt="imgProduct" />{" "}
            <a className="productName" href="">
              MARACUYA
            </a>
          </div>
          <div className="product">
            {" "}
            <img className='imgProduct' src="http://www.andesexport.com/es/images/pitaya2.png" alt="imgProduct" />
            <a className="productName" href="">
              PITAYA
            </a>
          </div>
          <div className="product">
            {" "}
            <img className='imgProduct' src="http://www.andesexport.com/es/images/tomate_de_arbol2.png" alt="imgProduct" />
            <a className="productName" href="">
              TOMATE DE ARBOL
            </a>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Productos