import "../styles/contacto.css";
function Contacto() {

    return (
        <div class="content">

        <h1 class="logo">Contacta <span>ME</span></h1>

        <div class="contact-wrapper animated bounceInUp">
            <div class="contact-form">
                <h3>Contactame</h3>
                <form action="https://formsubmit.co/your@email.com" method="POST">
                    <p>
                        <label>Nombre Completo</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="email" name="email"/>
                    </p>
                    <p>
                        <label>Número de telefono</label>
                        <input type="tel" name="tel"/>
                    </p>
                    <p>
                        <label>Asunto</label>
                        <input type="text" name="asunto"/>
                    </p>
                    <p class="block">
                       <label>Mensaje</label> 
                        <textarea name="mensaje" rows="3"></textarea>
                    </p>
                    <p class="block">
                        <button>
                            <input type="submit" value="Enviar"/>
                        </button>
                    </p>
                </form>
            </div>
            <div class="contact-info">
                <h4>Info</h4>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> Calle falsa 123</li>
                    <li><i class="fas fa-phone"></i> (111) 111 111 111</li>
                    <li><i class="fas fa-envelope-open-text"></i> silvito@correo.com</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                <p>Silvio Chocobar</p>
            </div>
        </div>

    </div>
    )
}

export default Contacto;