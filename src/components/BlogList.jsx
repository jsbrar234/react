import React, { useState } from 'react'
import Scroll from './Scroll'

export default function BlogList(props) {

    const [list, setList] = useState(props?.value)
    console.log('props?.value', props?.value)

    return (
        <>

            {

                list?.map((resp) => {
                    { console.log(">>>>>>>>>>>>>>>", resp?.type) }
                    return (
                        <div class="col-lg-4 col-12">
                            <div class="blog-card">
                                <div class="blog-img">
                                    <img src={resp.image} alt="" />
                                </div>
                                <div class="blog-content">
                                    {resp?.type == "Design" ? <p>
                                    <div class="blog-niche">
                                        <a href="#">Design</a>
                                    </div>
                                        </p> : resp?.type == "Customer" ? < p >
                                        <div class="blog-niche-2">
                                        <a href="#">Customer</a>
                                    </div>
                                        </p> : <div class="blog-niche-3">
                                        <a href="#">Development</a>
                                    </div>}
                                    <div class="blog-card-heading">
                                        <h2>{resp.name}</h2>
                                        <p>
                                            {resp.description}
                                        </p>

                                    </div>
                                    <div class="blog-author-card">
                                        <div class="blog-author-img">
                                            <img src={resp.author_img} alt="" />
                                        </div>
                                        <div class="blog-auhtor-info">
                                            <h6>{resp.author_name}</h6>
                                            <span>{resp.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                })

            }



        </>
    )
}


