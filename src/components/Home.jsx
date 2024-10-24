import { useEffect } from "react";
import "../styles/header.css";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpeg";
import slider3 from "../assets/slider3.jpeg";
import slider4 from "../assets/slider4.jpg";

export default function Home() {
    useEffect(() => {
        // Step 1: Get DOM elements
        let nextDom = document.getElementById("next");
        let prevDom = document.getElementById("prev");
        
        // Safely access the elements using querySelector and add checks
        let carouselDom = document.querySelector(".carousel");
        
        if (carouselDom) {
            let SliderDom = carouselDom.querySelector(".list");
            let thumbnailBorderDom = carouselDom.querySelector(".thumbnail");
            let thumbnailItemsDom = thumbnailBorderDom ? thumbnailBorderDom.querySelectorAll(".item") : [];
            let timeDom = carouselDom.querySelector(".time");
        
            // Ensure thumbnailItemsDom is not empty before appending
            if (thumbnailBorderDom && thumbnailItemsDom.length > 0) {
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            }
        
            let timeRunning = 3000;
            let timeAutoNext = 7000;
        
            if (nextDom && prevDom) {
                nextDom.onclick = function () {
                    showSlider("next");
                };
        
                prevDom.onclick = function () {
                    showSlider("prev");
                };
            }
        
            let runTimeOut;
            let runNextAuto = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        
            function showSlider(type) {
                let SliderItemsDom = SliderDom.querySelectorAll(".item");
                let thumbnailItemsDom = thumbnailBorderDom ? thumbnailBorderDom.querySelectorAll(".item") : [];
        
                if (type === "next") {
                    if (SliderItemsDom.length > 0) {
                        SliderDom.appendChild(SliderItemsDom[0]);
                    }
                    if (thumbnailItemsDom.length > 0) {
                        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                    }
                    carouselDom.classList.add("next");
                } else {
                    if (SliderItemsDom.length > 0) {
                        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                    }
                    if (thumbnailItemsDom.length > 0) {
                        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                    }
                    carouselDom.classList.add("prev");
                }
        
                clearTimeout(runTimeOut);
                runTimeOut = setTimeout(() => {
                    carouselDom.classList.remove("next");
                    carouselDom.classList.remove("prev");
                }, timeRunning);
        
                clearTimeout(runNextAuto);
                runNextAuto = setTimeout(() => {
                    nextDom.click();
                }, timeAutoNext);
            }
        } else {
            console.error("carouselDom not found");
        }
    }, []); // Empty dependency array ensures this effect runs once after the component mounts

    return (
        <div className="carousel">
            <div className="list">
                <div className="item">
                    <img src= {slider1} alt="" />
                    <div className="content">
                        <div className="author">Silvio Chocobar</div>
                        <div className="title">MASCARA SLIPKNOT</div>
                        <div className="topic">LEATHER MASK</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.
                        </div>
                        <div className="buttons">
                            <button><a href="productos.html">VER MAS</a></button>
                            <button><a href="contacto.html">CONTACTO</a></button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src= {slider2} alt="" />
                    <div className="content">
                        <div className="author">Silvio Chocobar</div>
                        <div className="title">MASCARA SLIPKNOT</div>
                        <div className="topic">LEATHER MASK</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.
                        </div>
                        <div className="buttons">
                            <button><a href="productos.html">VER MAS</a></button>
                            <button><a href="contacto.html">CONTACTO</a></button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src= {slider3} alt="" />
                    <div className="content">
                        <div className="author">Silvio Chocobar</div>
                        <div className="title">MASCARA SLIPKNOT</div>
                        <div className="topic">LEATHER MASK</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.
                        </div>
                        <div className="buttons">
                            <button><a href="productos.html">VER MAS</a></button>
                            <button><a href="contacto.html">CONTACTO</a></button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src= {slider4} alt="" />
                    <div className="content">
                        <div className="author">Silvio Chocobar</div>
                        <div className="title">MASCARA SLIPKNOT</div>
                        <div className="topic">LEATHER MASK</div>
                        <div className="des">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.
                        </div>
                        <div className="buttons">
                            <button><a href="productos.html">VER MAS</a></button>
                            <button><a href="contacto.html">CONTACTO</a></button>
                        </div>
                    </div>
                </div>
                {/* Repeat other slider items as necessary */}
            </div>

            <div className="thumbnail">
                <div className="item">
                    <img src= {slider1} alt=""/>
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>
                <div className="item">
                    <img src= {slider2} alt=""/>
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>
                <div className="item">
                    <img src= {slider3} alt=""/>
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>
                <div className="item">
                    <img src= {slider4} alt=""/>
                    <div className="content">
                        <div className="title">Name Slider</div>
                        <div className="description">Description</div>
                    </div>
                </div>
                {/* Repeat other thumbnail items */}
            </div>

            <div className="arrows">
                <button id="prev">&lt;</button>
                <button id="next">&gt;</button>
            </div>
            <div className="time"></div>
        </div>
    );
}
