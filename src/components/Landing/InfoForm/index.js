import React, {useState} from 'react'
import FormResponse from './FormResponse'
import RequestInformationForm from './RequestInfoForm'

export default function InfoForm() {

    const [showForm, setShowForm] = useState(true)
    const [clientInfo, setClientInfo] = useState()

    return (
        <div>
            {
                showForm?<RequestInformationForm 
                            setShowForm={setShowForm} 
                            setClientInfo={setClientInfo} 
                        />
                        :<FormResponse 
                            clientInfo={clientInfo}
                            setShowForm={setShowForm} //para facilitar el diseño, borrar despues
                        />
            }
        </div>
        
    )
}
