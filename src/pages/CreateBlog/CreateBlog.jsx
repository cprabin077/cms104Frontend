import React, { use, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './CreateBlog.css'
import axios from 'axios'
import { data, useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const navigate = useNavigate()
  const [data, setData] = useState({
    title: "",
    subTitle: "",
    description: ""
  })

  //Third approach
  const createBlog = async (e) => {
    e.preventDefault()
    // send above states data to API
    const response = await axios.post("http://localhost:2000/blogs", data)
    if (response.status == 201) {
      alert(response.data.message)
      navigate("")
    } else {
      alert("Something went wrong")
    }

  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }



  return (
    <div>
      <Navbar />

      <div className="form-container">
        <h2>Create Blog</h2>
        <form onSubmit={createBlog}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="Enter title" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subTitle" name="subTitle" placeholder="Enter subtitle" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" placeholder="Enter description" onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog