import React, { useRef } from 'react'
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react'
import InfoForm from './InfoForm'
import './index.css'

export default function Modal(props) {

    const { setShowPopUp, toggleScrollLock } = props

    const modalRef = useRef()

    function closeModal() {
        setShowPopUp(false)
        toggleScrollLock()
    }

    function onClickOutside(event) {
        if(modalRef.current === event.target) {
            console.log(modalRef.current)
            return closeModal()
        }
    }

    function onKeyDown(event) {
        if(event.keyCode === 27) {
            closeModal()
        }
    }

    return ReactDOM.createPortal (
        <FocusTrap>
            <aside tag='aside' 
                    role='dialog' 
                    tabIndex={-1} 
                    aria-modal="true"
                    className="modal-cover"
                    onClick={onClickOutside}
                    onKeyDown={onKeyDown}
                    ref={modalRef}
            >
                    
                <div className="modal-area rounded-lg" >
                    <button aria-label="Close Modal"
                            aria-labelledby="close-modal"
                            className="_modal-close"
                            onClick={closeModal}
                    >
                        <span id="close-modal" className="_hide-visual"
                        >
                            Cerrar
                        </span>
                        <svg className="_modal-close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                    <div className="modal-body">
                        <InfoForm />
                    </div>
                </div>
            </aside>

        </FocusTrap>,
        document.body
    )
}
