import React, { useState } from "react";
import "../styles/productos.css";
import fotoPerfil from "../assets/hombre-steampunk.jpg";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import slider4 from "../assets/slider4.jpg";

function Productos() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const items = [
        { id: 1, name: "NIKE AIR 97", price: "$1,300", imgSrc: slider1, description: "Descripción del modelo 1" },
        { id: 2, name: "NIKE RUNNING TERRA", price: "$1,800", imgSrc: slider2, description: "Descripción del modelo 2" },
        { id: 3, name: "NIKE WINFLO 8", price: "$3,600", imgSrc: slider3, description: "Descripción del modelo 3" },
        { id: 4, name: "NIKE LOW-TOP", price: "$1,800", imgSrc: slider4, description: "Descripción del modelo 4" },
    ];

    const cargar = (item) => {
        setSelectedItem(item);
        setIsVisible(true);
    };

    const cerrar = () => {
        setIsVisible(false);
        setSelectedItem(null);
    };

    return (
        <>
            <div className="info">
                <div className="selfie">
                    <img className="silvio" src= {fotoPerfil} alt="" />
                </div>
                <div className="boutme">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis saepe debitis fugiat, laboriosam provident tempora quae earum, praesentium dolores dolorum vero, impedit doloribus quis suscipit mollitia eligendi officiis! Quod, doloribus.</p>
                </div>
            </div>
            <section className="contenido">
                <div className="mostrador" id="mostrador">
                    <div className="fila">
                        {items.map((item) => (
                            <div key={item.id} className="item" onClick={() => cargar(item)}>
                                <div className="contenedor-foto">
                                    <img src={item.imgSrc} alt="" />
                                </div>
                                <p className="descripcion">{item.name}</p>
                                <span className="precio">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {isVisible && (
                    <div className="seleccion" id="seleccion">
                        <div className="cerrar" onClick={cerrar}>
                            &#x2715;
                        </div>
                        <div className="info">
                            <img src={selectedItem.imgSrc} alt="" id="img" />
                            <h2 id="modelo">{selectedItem.name}</h2>
                            <p id="descripcion">{selectedItem.description}</p>
                            <span className="precio" id="precio">{selectedItem.price}</span>
                            <div className="fila">
                                <div className="size">
                                    <label htmlFor="">SIZE</label>
                                    <select name="" id="">
                                        <option value="">40</option>
                                        <option value="">42</option>
                                        <option value="">44</option>
                                        <option value="">46</option>
                                    </select>
                                </div>
                                <button>AGREGAR AL CARRITO</button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}

export default Productos;
