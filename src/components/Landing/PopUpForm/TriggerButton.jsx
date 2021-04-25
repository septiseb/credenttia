import React from 'react'

export default function TriggerButton(props) {

    const { setShowPopUp, toggleScrollLock } = props

    function showPopUpForm() {
        setShowPopUp(true)
        toggleScrollLock()
    }

    return (
        <>
            <button
                onClick={showPopUpForm}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                Get started
            </button>
        </>
    )
}
