import React, { useState, createContext } from 'react'
import Navbar from '../Navbar'
import Scroll from '../Scroll'
import Use_context_2 from './Use_context_2';


export const UserContext = createContext();

export default function use_context() {
    const [user, setUser] = useState("Jesse Hall");
    return (
        <>
            <Navbar />
            <div class="row">
                <div class="col-lg-3"><Scroll /></div>

                <div class="col-lg-9">
                    <div className='use-context-main'>
                    <h1>{`Hello ${user}!`}</h1>
                    <UserContext.Provider value={user}>
                        <Use_context_2 />
                    </UserContext.Provider>
                    </div>
                </div>
            </div>
        </>
    )
}
