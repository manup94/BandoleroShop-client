

function Footer() {
    return (
        <footer className="bg-[#1e293b] p-10 text-white flex justify-around">
            <section >
                <h5>Informacion de Contacto</h5>
                <address className="m-5">BandoleroShop <br />C/ Arjona, 23 <br /> 41001 Sevilla,<br /> España <br /> +34 (0) 619 193
                    088</address>
                <ul className="logo-container flex ">
                    <li className="m-5">
                        <a href="#"><img className="w-10" src="images/twitter.png" alt="twitter-logo" /></a>
                    </li>
                    <li className="m-5">
                        <a href="#"><img className="w-10" src="images/facebook.png" alt="facebook-logo" /></a>
                    </li>
                    <li className="m-5">
                        <a href="#"><img className="w-10" src="images/instagram.png" alt="instagram-logo" /></a>
                    </li>
                </ul>
            </section>
            <iframe className="map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.069650432982!2d-6.0046960845509325!3d37.38818507983167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c12e2507845%3A0xad67827cc137047b!2sC.%20Arjona%2C%2023%2C%2041001%20Sevilla!5e0!3m2!1ses!2ses!4v1676646434539!5m2!1ses!2ses"
                width="600" height="300" loading="lazy">
            </iframe>
        </footer >
    )
}

export default Footer


