import React, { useState } from 'react'

export default function RequestInfoForm(props) {

    const { setShowForm, setClientInfo } = props

    //useStates para los selects

    const [orgTypeValue, setOrgTypeValue] = useState("")
    const handleSelectOrgTypeValue = (e) => {
        setOrgTypeValue(e.target.value)
        setClientRequestInfoForm({
            ...clientRequestInfoForm,
            orgType: e.target.value
        })     
    }

    const [certNumValue, setCertNumValue] = useState("")
    const handleSelectCertNumValue = (e) => {
        setCertNumValue(e.target.value)
        setClientRequestInfoForm({
            ...clientRequestInfoForm,
            certNum: e.target.value
        })
    }

    const [certUseValue, setCertUseValue] = useState('')
    const handleSelectCertUseValue = (e) => {
        setCertUseValue(e.target.value)
        setClientRequestInfoForm({
            ...clientRequestInfoForm,
            certUse: e.target.value
        })
    }
    //////////

    const [clientRequestInfoForm, setClientRequestInfoForm] = useState({
        name: '',
        company: '',
        email:'',
        mobNumber:'',
        orgType:'',
        certNum:'',
        certUse:''
    })
    console.log(clientRequestInfoForm)

    function handleChange(e) {
        e.preventDefault()
        setClientRequestInfoForm({
            ...clientRequestInfoForm,
            [e.target.name]: e.target.value
        })
        
    }

    function submitInfoRequest() {
        setClientInfo(clientRequestInfoForm)
        setShowForm(false)
        
    }
    
    

    return (
            <>    
                <h4 className='block text-gray-700 font-bold mt-3 pt-2 pl-2 text-3xl' >Solicita más información</h4>
                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    
                    <div className='overflow-hidden sm:rounded-md'>

                            <div className="col-span-6 sm:col-span-1 mb-4">
                                <label for='name' className="block text-md font-medium text-gray-600">Nombre</label >
                                <input  type='text'
                                        name='name' 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                        placeholder='Nombre' 
                                        onChange={(e) => handleChange(e)} 
                                    />
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600" >Empresa/Institución</label >
                                <input name='company' 
                                        type='text' 
                                        placeholder='Nombre de la empresa o institución' 
                                        onChange={(e) => handleChange(e)} 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                    /> 
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600" >Email</label >
                                <input name='email' 
                                        type='email' 
                                        placeholder='abc@mail.com' 
                                        onChange={(e) => handleChange(e)} 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                    />
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600">Número de contacto</label >
                                <input name='mobNumber' 
                                        type='text' 
                                        placeholder='10 dígitos' 
                                        onChange={(e) => handleChange(e)} 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                    />
                            </div>
                        

                        
                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600">Tipo de empresa/institución</label >
                                <select name='orgType' 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                        placeholder="-"
                                        value={orgTypeValue}
                                        onChange={(e) => handleSelectOrgTypeValue(e)}
                                    >
                                    <option value="-">-</option>
                                    <option value="Escolar">Educación escolar</option>
                                    <option value="ONG/Gob">ONG, Institución Pública</option>
                                    <option value="Capacitador">Capacitadora empresarial</option>
                                    <option value="Otro">Capacitadora empresarial</option>
                                </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600">Certificados/diplomas entregados al mes</label >
                                <select name='certNum' 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                        placeholder='-' 
                                        value={certNumValue}
                                        onChange={(e) => handleSelectCertNumValue(e)}
                                    >
                                    <option value="-">-</option>
                                    <option value="< 100">menos de 100</option>
                                    <option value="100-500">de 100 a 500</option>
                                    <option value="500-1000">500 a 1000</option>
                                    <option value="> 1000">más de 1000</option>
                                </select>
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600">Actualmente usa certificados/diplomas digitales</label >   
                                <select name='certUse' 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                        placeholder="-"
                                        value={certUseValue}
                                        onChange={(e) => handleSelectCertUseValue(e)}
                                    >
                                    <option value="-">-</option>
                                    <option value='true'>Si</option>
                                    <option value='false'>No</option>
                                </select>
                            </div>                        

                        
                    </div>
                    <button type='submit' 
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                            onClick={submitInfoRequest}
                            >Cotizar/Más info</button>
                
                </form>
            </>
    )
}