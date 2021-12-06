import Link from 'react-anchor-link-smooth-scroll'

export default function NavBar() {
    return (
    <nav
        className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase"
        id="mainNav"
    >
        <div className="container">
            <Link className="navbar-brand js-scroll-trigger" href="#page-top">
                <img
                    className="img-fluid"
                    src="assets/img/portfolio/logo-hogami-verde.svg"
                    alt="Hogami"
                />
            </Link>
            <button
                className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                Menu
                <i className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-0 mx-lg-1">
                        <Link
                            className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#portfolio"
                        >
                            Apis
                        </Link>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <Link
                            className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                            href="#about"
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)

}