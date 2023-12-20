import React, { useContext } from 'react'
import {UserContext} from './Use_context'

export default function Use_context_2() {
     const user = useContext(UserContext);
    return (
        <>
            <h1>Component 2</h1>
            <h2>{`Hello ${user} again!`}</h2>
         
        </>
    )
}
