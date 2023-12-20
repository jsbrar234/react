import React, { useState } from 'react'
import BlogList from './BlogList'
import Navbar from './Navbar'
import Scroll from './Scroll'


const arr = [{
    name: "Do you really understand the concept of product value?",
    description: "Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.",
    image: "https://quiety.themetags.com/assets/img/blog/blog-4.jpg",
    type: "Design",
    author_img: "https://quiety.themetags.com/assets/img/testimonial/6.jpg",
    author_name: "James Cooper",
    date: "Jan 10, 2023"
},
{
    name: "Why communities help you build better products for your business",
    description: "Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.",
    image: "https://quiety.themetags.com/assets/img/blog/blog-5.jpg",
    type: "Customer",
    author_img: "https://quiety.themetags.com/assets/img/testimonial/1.jpg",
    author_name: "Chris Evans",
    date: "Apr 24, 2023"
},
{
    name: "A frank discussion about diversity, inclusion, and allyship",
    description: "Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.",
    image: "https://quiety.themetags.com/assets/img/blog/blog-6.jpg",
    type: "Design",
    author_img: "https://quiety.themetags.com/assets/img/testimonial/2.jpg",
    author_name: "Robert Downey Jr.",
    date: "June 11, 2023"
},
{
    name: "The role of product ops in successful distributed teams",
    description: "Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.",
    image: "https://quiety.themetags.com/assets/img/blog/blog-1.jpg",
    type: "Development",
    author_img: "https://quiety.themetags.com/assets/img/testimonial/3.jpg",
    author_name: "Jeffrey Dean Morgan",
    date: "Aug 15, 2023"
},
{
    name: "The modern product manager’s tech stack",
    description: "Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.",
    image: "https://quiety.themetags.com/assets/img/blog/blog-2.jpg",
    type: "Development",
    author_img: "https://quiety.themetags.com/assets/img/testimonial/4.jpg",
    author_name: "Jane Martin",
    date: "Oct 8, 2023"
},
{
    name: "30 product management thought leaders to follow",
    description: "Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.",
    image: "https://quiety.themetags.com/assets/img/blog/blog-3.jpg",
    type: "Customer",
    author_img: "https://quiety.themetags.com/assets/img/testimonial/5.jpg",
    author_name: "Scarlett Johansson",
    date: "Dec 25, 2023"
}



]

export default function blogs() { 
 
    return (
        <>
            <Navbar />
            
            <div class="row">
            <div class="col-lg-3"><Scroll /></div>
                
                <div class="col-lg-9">
                
                <div class="blogs-heading mb-4">
                    <div class="row">
                        <div class="col-lg-12 col-12">
                            <div class="blog-heading-1">
                                <h6>Blog</h6>
                            </div>
                        </div>
                    </div>

                    <div class="row align-items-center">
                        <div class="col-lg-4 col-12">
                            <div class="blog-heading-2">
                                <h2>Check Our Latest News and Update</h2>
                            </div>
                        </div>
                        <div class="col-lg-8 col-12">
                            <div class="view-all-btn-flex">
                                <div class="all-article-btn">
                                    <a href="#">View All Article</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="padded-blog">
                        <div class='row'>
                            <BlogList value={arr} />

                        </div>

                    </div>
                </div>
            </div>



            {/* <section>
                <div class="blogs-main">
                    <div> */}
            {/* <div class="blogs-heading mb-4">
                            <div class="row">
                                <div class="col-lg-12 col-12">
                                    <div class="blog-heading-1">
                                        <h6>Blog</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="row align-items-center">
                                <div class="col-lg-4 col-12">
                                    <div class="blog-heading-2">
                                        <h2>Check Our Latest News and Update</h2>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-12">
                                    <div class="view-all-btn-flex">
                                        <div class="all-article-btn">
                                            <a href="#">View All Article</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            {/* <div class="blogs-cards-main">
                            <div class="row"> */}


            {/* </div>
                        </div> */}

            {/* </div>
                </div>
            </section> */}


        </>
    )
}
