import { useState } from "react"
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
export default function Modal({ current, close }) {
    const [display, setDisplay] = useState("none")
    return (
        <>
        <div className="mfp-bg mfp-ready" />
        <div
            className="mfp-wrap mfp-auto-cursor mfp-ready"
            tabIndex={-1}
            style={{ overflow: "hidden auto" }}
        >
            <div className="mfp-container mfp-inline-holder">
                <div className="mfp-content">
                    <div className="portfolio-modal" id="portfolio-modal-4">
                        <div className="portfolio-modal-dialog bg-white">
                            <span
                                className="close-button d-none d-md-block portfolio-modal-dismiss"
                                onClick={close}
                            >
                                <i className="fa fa-3x fa-times" />
                            </span>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col-lg-8 mx-auto">
                                        <h2 className="text-secondary text-uppercase mb-0">
                                            {current.title}
                                        </h2>
                                        <hr className="star-dark mb-5" />
                                        {current.describtion()}
                                        <h3 className="text-secondary text-uppercase mb-0">
                                            Data Base Model
                                        </h3>
                                        {current.dbmodel && <img src={current.dbmodel} alt="database model" />}
                                        <br />
                                        <br />
                                        {current.apiDefintion &&<button
                                            className="swagger btn btn-primary btn-lg rounded-pill mr-1"
                                            onClick={() => setDisplay("block")}
                                        >
                                            Api Definition
                                        </button>}
                                        <button
                                            className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss ml-1"
                                            onClick={close}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {current.apiDefintion && <div className="swagger-ui" style={{ display: display }}>
                                <SwaggerUI url={current.apiDefintion} />
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}