import React from 'react'
import { useState } from 'react'

export default function Employee_list(props) {

    const [list, setList] = useState(props?.new_val)

    return (

        <>
            
                <table class="table table-dark table-striped-columns emp_table">
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>Name</th>
                            <th>Employee Id</th>
                            <th>Address</th>
                            <th>Experience</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list?.map((resp, i) => {
                                return (

                                    <tr>
                                        <td>
                                            {i + 1}
                                        </td>
                                        <td>
                                            {resp.ename}
                                        </td>
                                        <td>
                                            {resp.eid}
                                        </td>
                                        <td>
                                            {resp.adress}
                                        </td>
                                        <td>
                                            {resp.experience}
                                        </td>
                                        <td>
                                        <i class="bi bi-eye crud"></i>
                                        <i class="bi bi-pencil crud"></i>
                                        <i class="bi bi-trash crud"></i>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>

            


        </>
    )
}
