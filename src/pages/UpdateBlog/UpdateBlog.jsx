import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './UpdateBlog.css'
import { data, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateBlog = () => {
  const navigate = useNavigate()
  const {id}=useParams()
  const [blog, setBlog] = useState({})

  //handle change of input
  const handleChange = (e) =>{
   // console.log(e.target.value, e.target.name)
    const {name, value} = e.target
    setBlog({
      ...blog,
      [name]:value
    })
  }

  const keyToExclude = ['createdAt','updatedAt']
  keyToExclude.forEach((key)=>{
    delete blog[key]
  })

  const updateBlog = async(e) =>{
    e.preventDefault()
    const response = await axios.patch("http://localhost:2000/blogs/" +id, blog)
    if(response.status == 200){
      navigate("/singleBlog/" +id)
    }
  }

  // fetch single blog
  const fetchSingleBlog = async () => {
    const response = await axios.get(`http://localhost:2000/blogs/${id}`)
    if (response.status == 200) {
      setBlog(response.data.data)
    }
  }

  useEffect(() => {
    fetchSingleBlog()
  }, [])




  return (
    <div>
      <Navbar />

      <div className="form-container">
        <h2>Update Blog</h2>
        <form onSubmit={updateBlog}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={blog.title} onChange={handleChange} name="title" placeholder="Enter title"  />
          </div>

          <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subTitle" value={blog.subTitle} onChange={handleChange} name="subTitle" placeholder="Enter subtitle"  />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" value={blog.description} onChange={handleChange} name="description" placeholder="Enter description"
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

  )
}

export default UpdateBlog