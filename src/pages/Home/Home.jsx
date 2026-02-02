import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import axios from 'axios'

const Home = () => {
    const [blogs, setBlogs] = useState([])

    // api call garne

    const fetchBlogs = async () => {
        const response = await axios.get('http://localhost:3000/blogs')

        setBlogs(response.data.blogs)
       // console.log(response.data.blogs)
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    //console.log(blogs, "Blogs")

    return (
        <div>
            <Navbar />
            <div className="card" style={{ width: '18rem' }}>
                {blogs.map((blog) =>{
                        return(
                <div key={blog._id}className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <h5 className="card-title">{blog.subTitle}</h5>

                    <p className="card-text">{blog.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                )
                    })}
            </div>
        </div>
    )
}

export default Home