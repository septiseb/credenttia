import React, { useState, useEffect } from 'react'

export default function FormResponse(props) {

    const { clientInfo, setShowForm } = props

    const [showPriceOption, setShowPriceOption] = useState('')

    function returnForm(e) { //funcion temporal, para ver diseño de form y respuesta
        e.preventDefault()
        setShowForm(true)
    }


//Template para precios y categorías, falta revisar precios finales y si se deben mostrar o solo decir que los vamos a contactar
   /*  useEffect(() => {
        priceSelector()
    }, [])

    function priceSelector() {
            switch (true) { //Template para precios y categorías, falta revisar precios finales y si se deben mostrar o solo decir que los vamos a contactar
                case clientInfo.certNum === "< 100":
                    return setShowPriceOption(`Con menos de 100 documentos mensuales, te recomendamos adquirir la suscripción Básica por ${1000} MXN al mes.`)
                case clientInfo.certNum === "100-500":
                    return setShowPriceOption(`Entre 100 y 500 documentos mensuales, te recomendamos adquirir la suscripción Media por ${2000} MXN al mes.`)
                case clientInfo.certNum ==="500-1000":
                    return setShowPriceOption(`Entre 500 y 1000 documentos mensuales, te recomendamos adquirir la suscripción Pro por ${3000} MXN al mes.`)
                case clientInfo.certNum === "> 1000":
                    return setShowPriceOption(`Con más de 100 documentos mensuales, te recomendamos adquirir la suscripción Completa por ${4000} MXN al mes.`)
                default:
                    break;
            }
        } */

    return (
            <>
                <div>
                    <p  className='block text-gray-500 font-bold mt-3 pt-2 pl-2 text-3xl sm:mt-5 sm:text-lg sm:text-center  sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>¡{clientInfo.name}, gracias por tu interés!</p>
                    {/* <p  className='block text-gray-500  mt-3 pt-2 pl-2 text-3xl sm:mt-5 sm:text-lg sm:text-center sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>{showPriceOption}</p> */}
                    <p  className='block text-gray-500 mt-3 pt-2 pl-2 text-3xl sm:mt-5 sm:text-lg sm:text-center sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>En breve nos cominicaremos contigo para darte más información.</p>
                </div>
            <button type='submit' //Bottar cuando este listo
            onClick={(e) => returnForm(e)}>Mostrar Form</button>
            </>
    )
}
