import { useState } from 'react'
import Navbar from "./components/Navbar.jsx";
import MainPage from "./components/MainPage"
import Modal from './components/Landing/PopUpForm/Modal'

function App() {

  //useState y funciones para formulario PopUp
  const [showPopUp, setShowPopUp] = useState(false)

  function showPopUpForm() {
    setShowPopUp(true)
    toggleScrollLock()
}

  function toggleScrollLock() {
      document.querySelector('html').classList.toggle('scroll-lock');
  }

  function showModal() {
    if(showPopUp === true) {
      return <Modal setShowPopUp={setShowPopUp} toggleScrollLock={toggleScrollLock}/>
    } else {
      return ''
    }
  }
  ///////////////////////////////////////

  return (
    <>
      <Navbar showPopUpForm={showPopUpForm}/>
      <MainPage showPopUpForm={showPopUpForm}  /> 
      {showModal()}
    </>
  );
}

export default App;
