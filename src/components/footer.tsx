

function Footer() {
    return (

        <footer className="bg-[#1e293b] flex flex-col md:flex-row p-10 text-white justify-center">
            <section className="w-full md:w-1/3 md:flex md:flex-col justify-center items-center align-middle text-center md:items-start md:text-left">
                <h5>Informacion de Contacto</h5>
                <address className="m-5 font-semibold">BandoleroShop <br />C/ Arjona, 23 <br /> 41001 Sevilla,<br /> España <br /> +34 (0) 619 193
                    088</address>
                <ul className="logo-container items-center justify-center flex">
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

            <div className="w-full md:w-1/3 flex justify-center items-center text-center md:items-end md:text-right md:mt-5">
                <iframe className="map-frame"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.069650432982!2d-6.0046960845509325!3d37.38818507983167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c12e2507845%3A0xad67827cc137047b!2sC.%20Arjona%2C%2023%2C%2041001%20Sevilla!5e0!3m2!1ses!2ses!4v1676646434539!5m2!1ses!2ses"
                    width="400" height="200" loading="lazy">
                </iframe>
            </div>
        </footer>

    )
}

export default Footer


