import React, { useState } from 'react'
import Modal from './Modal'
import TriggerButton from './TriggerButton'
import './index.css'

export default function PopUpForm() {

    const [showPopUp, setShowPopUp] = useState(false)

    function toggleScrollLock() {
        document.querySelector('html').classList.toggle('scroll-lock');
    }

    return (
        <>
            <TriggerButton 
                        setShowPopUp = {setShowPopUp}
                        toggleScrollLock = {toggleScrollLock}  
            />
                {
                    showPopUp? <Modal 
                                    setShowPopUp = {setShowPopUp}
                                    toggleScrollLock = {toggleScrollLock}  
                                /> : ''
                }
        </>
    )
}
