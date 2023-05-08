import React from 'react'
import { Navigate } from 'react-router-dom';
export default function ProtectedRout({userdata ,children}) {
    if(userdata)
    {
return children
    }
    else
    {
         return <Navigate to='/'/>
    }
 
}
