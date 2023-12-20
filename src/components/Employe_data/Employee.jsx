import React from 'react'
import Navbar from '../Navbar'
import Scroll from '../Scroll'
import Employee_list from './Employee_list'

const emp = [{
    ename: "Jaskamal",
    eid: 101,
    adress: "Fardidkot",
    experience: "10 Years"
},
{
    ename: "Amrita Kaur",
    eid: 223,
    adress: "Ambala",
    experience: "8 Years"
},
{
    ename: "Rupakshi Sharma",
    eid: 345,
    adress: "Jaitu",
    experience: "8 Years"
},
{
    ename: "Saniya Dogra",
    eid: 485,
    adress: "Panchkula",
    experience: "1 Year"
},
{
    ename: "Parul Sharma",
    eid: 265,
    adress: "Chandigarh",
    experience: "7 Years"
}]

export default function Employee() {
    return (
        <>

            <Navbar />
            <div class="row">


                <div class="col-lg-3">
                    <Scroll />
                </div>
                <div class="col-lg-9">
                    <div class="table-main">
                        <Employee_list new_val={emp} />

                    </div>
                </div>

            </div>

        </>
    )
}
