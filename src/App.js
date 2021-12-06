
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Link from 'react-anchor-link-smooth-scroll'
import About from "./components/about";
import modals from "./components/apis-list";
import Copyright from "./components/copyright";
import Modal from "./components/modal";
import NavBar from "./components/navbar";
import Portal from "./components/portal";
import Portfolio from "./components/portfolio";


function App({history, match }) {
  const [openModal, setOpenModal] = useState(null);
  useEffect(()=> {
    const current = modals.find(item => `#${item.id}` === history.location.hash) || {};
    console.log(current);
    setOpenModal(current)
  }, [history, match])
  return (
    
    <div className="page-top" id="page-top">
      <NavBar />
      <Portal />
      <Portfolio />
      <About />
      <Copyright />
      {openModal?.id && <Modal close={() => setOpenModal({})} current={openModal} />}
    </div>
  );
}

export default withRouter(App);
