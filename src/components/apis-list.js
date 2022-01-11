const modals = [
    {
        "id": "matching",
        "title": "Matching",
        "image": "assets/img/portfolio/trabajo.png",
        "dbmodel": "assets/img/portfolio/bbdd-matching.png",
        "apiDefintion": "assets/js/matching.json",
        describtion: () => (<div id="text">
            <p>
                The Matching API provides the results of the matching process between offer
                and demand. Starting with the request from a Client characterized by 2
                parameters:
            </p>
            <ol>
                <li> A service level 3, included the "Others" label;</li>
                <li> A specific place identified by the Postal Code.</li>
            </ol>
            Once the request is placed to the Platform, it returns as a result, a list of
            Professionals who matched the 2 parameters:
            <ol>
                <li> Skills to execute the service;</li>
                <li> Offering the services at the Postal Code. </li>
            </ol>
            An excluding condition for the Professional , is to be active at the moment of
            the request. The results showed by the API Search are sorted using different
            algorithms. The use of different algorithms allows the testing to choose the
            best alternative.
            <p />
        </div>)
    },
    {
        "id": "professional",
        "title": "Professional",
        "image": "assets/img/portfolio/dyer.png",
        "dbmodel": "assets/img/portfolio/bbdd-professional.png",
        "apiDefintion": "assets/js/professional.json",
        describtion: () => (<div id="text">
            <p>
                The Professional API gives the information identifying the Professional,
                based on the details provided by the Professional and the Platform. Those
                one give by the Professional:
            </p>
            <ol type="a">
                <li>Who (their ID, name, address, etc.);</li>
                <li>Where (places where they operate identified by the Postal Code); </li>
                <li>What (which services they offer, their skills); </li>
                <li>Additional information (legal, fiscal, complementary information);</li>
                <li>Activity status (active, on hold) </li>
            </ol>
            Also manages the complementary information gathered by the Platform. After the
            curation process made by the Platform, a final status is indicated as
            Validated or Not Validated. Once the Professional is registered, the API
            Professional manages the login credentials for the Professional (user,
            password). The microservice deals with the different status (change,
            recover,..) The Professional has access to their Jobs published in their
            private space.
            <p />
            <br />
        </div>)
    },
    {
        "id": "Client",
        "title": "Client",
        "dbmodel": "assets/img/portfolio/client.png",
        "image": "assets/img/portfolio/familia.png",
        "dbmodel": "assets/img/portfolio/bbdd-client.png",
        "apiDefintion": "assets/js/client.json",
        describtion: () => (<div id="text">
            <p>
                The Client API provides the information identifying the Client, based on the
                information provided by him in 2 different steps:
            </p>
            <ol type="a">
                <dt>"Light Register":</dt>
                <dd>
                    email, name, telephone (optional). This step allows the Client to start
                    Chatting with the Professionals.{" "}
                </dd>
                <dt>Register: </dt>
                <dd>
                    {" "}
                    Who (who is he Client, ID, address…); Where (specific address, the Postal
                    Code is mandatory);{" "}
                </dd>
                <dt> Additional information (legal, fiscal, complementary information).</dt>
            </ol>
            Once the Client is registered, the API Client manages their login credentials
            (user, password). The microservice deals with different status (change,
            recover). The Clients has access to their Jobs published in their private
            space.
            <p />
            <br />
        </div>
        )
    },
    {
        "id": "Payment",
        "title": "Payment",
        "dbmodel": "assets/img/portfolio/payment.png",
        "image": "assets/img/portfolio/dinero.png",
        "dbmodel": "assets/img/portfolio/bbdd-payment.png",
        "apiDefintion": "assets/js/payment.json",
        describtion: () => (<div id="text">
            <p>
                The API Payment provides information about the Charges and Payments. The
                Charges flows are sent from the Client to the PSP, and the Payments flows
                came from the PSP to the Professional. The PSP includes the flows sent to
                the escrow accounts. The Charges are split in 3 amounts:
            </p>
            <ol type="a">
                <li>the PSP´s commission;</li>
                <li>
                    the Platform commission over the price of the Job excluding the products;
                </li>
                <li>the Payment to the Professional.</li>
            </ol>
            The Payment is calculated taking out the commissions and taxes from the
            Charges, and the PSP commission is assumed by the Platform.
            <p />
            <br />
        </div>

        )
    },
    {
        "id": "Notification",
        "title": "Notification",
        "image": "assets/img/portfolio/email.png",
        "apiDefintion": "assets/js/notification.json",
        "dbmodel": "assets/img/portfolio/bbdd-notification.png",
        describtion: () => (<div id="text">
            <p>
                The Matching API provides the results of the matching process between offer
                and demand. Starting with the request from a Client characterized by 2
                parameters:
            </p>
            <ol>
                <li> A service level 3, included the "Others" label;</li>
                <li> A specific place identified by the Postal Code.</li>
            </ol>
            Once the request is placed to the Platform, it returns as a result, a list of
            Professionals who matched the 2 parameters:
            <ol>
                <li> Skills to execute the service;</li>
                <li> Offering the services at the Postal Code. </li>
            </ol>
            An excluding condition for the Professional , is to be active at the moment of
            the request. The results showed by the API Search are sorted using different
            algorithms. The use of different algorithms allows the testing to choose the
            best alternative.
            <p />
        </div>)
    },
    {
        "id": "Operation",
        "title": "Operation",
        "image": "assets/img/portfolio/llave-inglesa.png",
        "apiDefintion": "assets/js/operation.json",
        "dbmodel": "assets/img/portfolio/bbdd-operation.png",
        describtion: () => (<div id="text">
            <p>
                The Operation API provides the Job details. Once the Client has agreed with
                the Professional on the Service to be done, the price, the place and the
                date (day and hour), a Job is created for the Client and the Professional,
                using the precedent variables. At this moment a first Charge will be done to
                the Client. As the Job progress, more variables are created: checking the
                Professional arrival (day &amp; hour) ; picture “before”; final date (day
                &amp; hour); picture “after”; final price; Professional closing the Job;
                Client confirming (OK / KO) ; detail of services done; detail of products
                included. The Operation API gives a unique register for the Job created from
                the moment when the Client and the Professional agreed on a Job. During the
                Job execution additional Services and Products can be added.
            </p>
            <br />
        </div>
        )
    },
    {
        "id": "request",
        "title": "Request Service",
        "dbmodel": "assets/img/portfolio/bbdd-request.png",
        "image": "assets/img/portfolio/signo-de-interrogacion.png",
        "apiDefintion": "assets/js/request.json",
        describtion: () => (<div id="text">
            <p>
                The Request API provides the informations related to the exchanges between
                the Client and the Professional in the Chat. These exchanges start at the
                moment that the Client and Professional start a new convertation in the
                Chat, until they agree to open a Job, or unlike they finish the exchanges.
                All the exchanges are stored. In this microservice the Client and the
                Professional agree on the details of the future Job: service, price, place,
                date (day &amp; hour)
            </p>
            <br />
        </div>
        )
    },
    {
        "id": "identity",
        "title": "Identity Server",
        "dbmodel": "assets/img/portfolio/bbdd-identity.png",
        "image": "assets/img/portfolio/contrasena.png",
        "apiDefintion": "assets/js/identityServer.json",
        describtion: () => (<div id="text">
            <p>
                The Identity Server API deals with the permissions logic to the API conexions.
                It manages the credentials, tokens, permissions and roles, needed to allow the access to the APIs and the users.
            </p>
        </div>)
    },
    {
        "id": "offered",
        "title": "Service Offer",
        "dbmodel": "assets/img/portfolio/bbdd-offered-service.png",
        "image": "assets/img/portfolio/rodillo-de-pintura.png",
        "apiDefintion": "assets/js/offeredServices.json",
        describtion: () => (<div id="text">
            <p>
                The Services Offer API provides the structured offer of services provided by
                Hogami. The Offer is structured in 3 levels:
            </p>
            <ol type="a">
                <li>Category (e.g., Maintenance);</li>
                <li>Business Vertical (e.g., Handyman);</li>
                <li>Jobs. The level 3 is the most granular detail. </li>
            </ol>
            It is composed with the standardized packages associated to the Business
            Vertical. A Job could be also a non-identified standard package, identified as
            "Others". A Job has always a price associated. In this case each Job declared
            as "Others" will be storage with an ID. In a first stage, the information will
            not be treated, and all the Jobs "Others" could be different. In a second
            phase, an intelligent mechanism (could be a machine learning artifact), will
            be implemented to match the differences and classify properly the "Others"
            likewise.
            <p />
            <br />
        </div>)
    },
    {
        "id": "Rating",
        "title": "Rating",
        "dbmodel": "assets/img/portfolio/bbdd-rating.png",
        "image": "assets/img/portfolio/rating.png",
        "apiDefintion": "assets/js/rating.json",
        describtion: () => (<div id="text">
            <p>
                The API Rating provides the information that the Client done to the
                Professional, and the one done by the Professional to the Client. The
                Professional rating is public. Unlikewise, the Client rating will be kept
                for internal use of the Platform. The rating will be performed using
                different indicators (cleaning, punctuality,...)
            </p>
            <br />
        </div>)
    },
    {
        "id": "chat",
        "title": "Chat",
        "image": "assets/img/portfolio/chat.png",
        "apiDefintion": "assets/js/matching.json",
        "dbmodel": "assets/img/portfolio/bbdd-chat.png",
        describtion: () => (<div id="text">
            <p>
                The Chat API has the whole capacities to manage the information contained in the exchanges between the Client and the Professional.
                It can read the conversations, allow the Customer Service can enter in the Chat, managing the pending conversations, extract information from the database.
            </p>
        </div>)
    },
    /*{
        "id": "under_construction",
        "icon": "Under Construction",
        title: "Invoices",
        dbmodel: "",
        "image": "assets/img/portfolio/cono-de-trafico.png",
        "apiDefintion": "",
        describtion: () => (<div id="text">
            <p>The Invoices API interacts with the microservice Invoice generator.
                The Invoices are created with the Client and Professional fiscal informations, the Job details (services, products, prices, taxes).
                The microservice will send the forms to the Client, to the Customer, and externally to the LM main comptable module.
                There will be 2 invoices created:
                <ol>
                    <li>From the Professional to the Client;</li>
                    <li>From the Platform to the Professional.</li>
                </ol>
                The invoices must be stored on line at least for 4 years after the date of service.
            </p>
        </div>)
    },*/
    {
        "id": "Functional_Administration",
        "title": "Functional Administration",
        "image": "assets/img/portfolio/headphones.png",
        "dbmodel": "assets/img/portfolio/bbdd-backoffice.png",
        "apiDefintion": "assets/js/backoffice.json",
        describtion: () => (<div id="text">
            <p>The API Functional Administration provides a set of back office functionalities.
                The main features are the following manages the Professional curation process; manages the Customer Service;
                provides information about the Job, the status and the incidents declared by the Client or the Professional.
                The API FA also allow to expel Professionals, change the service status in case of error and generate request with filters.
            </p>
        </div>)
    },
    {
        "id": "operation_batch",
        "title": "Operation Batch",
        "image": "assets/img/portfolio/cono-de-trafico.png",
        "apiDefintion": "",
        describtion: () => (<div id="text">
            <p>This batch runs every 48 hours. It checks which operations are pending confirmation, and if the necessary time has passed, it gets automatically confirmed.
            </p>
        </div>)
    }
]

export default modals;