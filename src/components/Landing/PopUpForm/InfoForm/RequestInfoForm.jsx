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
        name:'',
        lastName:'',
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
            ...clientRequestInfoForm,quest
            [e.target.name]: e.target.value
        })
    }

    function submitInfoRequest(e) {
        e.preventDefault()
        setClientInfo(clientRequestInfoForm)
        fetch('/', { //<-- fetch para subir forms a netlify
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({ 'form-name': 'contact', ...clientRequestInfoForm })
            .then(() => alert('Success!'))
            .catch(error => alert(error))
        })
        setShowForm(false)
    }
    
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    return (
            <>    
                <h4 className='block text-gray-700 font-bold mt-3 pt-2 pl-2 text-3xl text-center' >Solicita más información</h4>
                <form name='contactForm' className="bg-white rounded px-8 pt-6 pb-8 mb-4"  onSubmit={submitInfoRequest} method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contactForm" /> {/* <-- para uso de forms en Netlify */}
                    <div className='overflow-hidden sm:rounded-md'>

                            <div className="col-span-6 sm:col-span-1 mb-4">
                                <label for='name' className="block text-md font-medium text-gray-600">Nombre<span className="text-red-600">*</span></label>
                                <input  type='text'
                                        name='name' 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                        placeholder='Nombre' 
                                        onChange={(e) => handleChange(e)} 
                                    />
                            </div>

                            <div className="col-span-6 sm:col-span-1 mb-4">
                                <label for='lastName' className="block text-md font-medium text-gray-600">Apellido<span className="text-red-600">*</span></label>
                                <input  type='text'
                                        name='lastName' 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                        placeholder='Apellido' 
                                        onChange={(e) => handleChange(e)} 
                                    />
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600" >Empresa/Institución<span className="text-red-600">*</span></label>
                                <input name='company' 
                                        type='text' 
                                        required
                                        placeholder='Nombre de la empresa o institución' 
                                        onChange={(e) => handleChange(e)} 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                    /> 
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600" >Email<span className="text-red-600">*</span></label>
                                <input name='email' 
                                        type='email' 
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        placeholder='abc@mail.com' 
                                        required
                                        onChange={(e) => handleChange(e)} 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                    />
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600">Número de contacto<span className="text-red-600">*</span></label>
                                <input name='mobNumber' 
                                        required
                                        type='tel' 
                                        placeholder='10 dígitos' 
                                        onChange={(e) => handleChange(e)} 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                    />
                            </div>
                        
                        
                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600">Tipo de documento</label>
                                <select name='orgType' 
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                        placeholder="-"
                                        value={orgTypeValue}
                                        onChange={(e) => handleSelectOrgTypeValue(e)}
                                    >
                                    <option value="-">-</option>
                                    <option value="Escolar">Diploma</option> 
                                    <option value="ONG/Gob">Certificados</option>
                                    <option value="Capacitador">Título profesional</option>
                                    <option value="Otro">Otros</option> 
                                
                                </select>
                                {orgTypeValue === 'Otro' ?
                                        <div className="col-span-6 mt:1 sm:col-span-3 mb-4">
                                        <input name='otroCert' 
                                                type='text' 
                                                placeholder='Agrega otros' 
                                                onChange={(e) => handleChange(e)} 
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-md"
                                            />
                                        </div> : ''
                                    }
                            </div>

                            <div className="col-span-6 sm:col-span-3 mb-4">
                                <label className="block text-md font-medium text-gray-600">Certificados/diplomas entregados al mes<span className="text-red-600">*</span></label>
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
                                <label className="block text-md font-medium text-gray-600">Actualmente usa certificados/diplomas digitales</label>   
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
                            
                            >Cotizar/Más info</button>
                
                </form>
            </>
    )
}