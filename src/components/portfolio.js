import modals from "./apis-list";

export default function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">Apis</h2>
                <hr className="star-dark mb-5" />
                <div className="row">
                    {modals.map(item => (
                        <div className="col-md-6 col-lg-4">
                        <a className="portfolio-item d-block mx-auto"  href={`#${item.id}`}>
                            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                    {item.icon ? <i>{item.icon}</i> : <i className="fa fa-search-plus fa-3x" />}
                                </div>
                            </div>
                            <img className="img-fluid" src={item.image} alt="portfolio" />
                        </a>
                        <h6>{item.title}</h6>
                    </div>
                    ))}
                </div>
            </div>
        </section>

    )
}