import { useEffect, useState } from 'react'
import Link from 'react-anchor-link-smooth-scroll'

export default function NavBar() {
    const [active, setActive] = useState("")
    useEffect(() => {
        const listner = () => {
            if (window.scrollY >= 600 && window.scrollY <= 1900) {
                setActive("portfolio")
            } else if(window.scrollY >= 1900) {
                setActive("about")
            }else {
                setActive("")
            }
        }
        document.addEventListener("scroll", listner);
        return () => {
            return document.removeEventListener("scroll", listner, true)
        }
    }, [])
    return (
    <nav
        className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase"
        id="mainNav"
    >
        <div className="container">
            <a className="navbar-brand " href="#" >
                <img
                    className="img-fluid"
                    src="assets/img/portfolio/logo-hogami-verde.svg"
                    alt="Hogami"
                />
            </a>
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
                            className={`nav-link py-3 px-0 px-lg-3 rounded ${active ==="portfolio"?"active":""}`}
                            href="#portfolio"
                            offset='770' 
                        >
                            Apis
                        </Link>
                    </li>
                    <li className="nav-item mx-0 mx-lg-1">
                        <Link
                            className={`nav-link py-3 px-0 px-lg-3 rounded ${active ==="about"?"active":""}`}
                            href="#about"
                            offset='200' 
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)

}