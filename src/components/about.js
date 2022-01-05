export default function About() {
    return (
    <section className="bg-primary text-white mb-0" id="about">
    <div className="container">
        <h2 className="text-center text-uppercase text-white">
        Database Model Hogami
        </h2>
        <hr className="star-light mb-5" />
        <div className="row">
        <a className="portfolio-item d-block mx-auto" href="#agrandarFoto">
            <img
            className="imagenDatos"
            src="assets/img/portfolio/base-de-datos.png"
            alt="about"
            />
        </a>
        </div>
        <div className="text-center mt-4">
        <a
            className="btn btn-xl btn-outline-light"
            href="assets/img/portfolio/todo.png"
            download="completeDataBase"
        >
            <i className="fa fa-download mr-2" />
            Descarga
        </a>
        </div>
    </div>
    </section>
    )
}