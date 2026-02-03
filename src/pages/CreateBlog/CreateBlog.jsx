import React, { use, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './CreateBlog.css'
import axios from 'axios'
import { data, useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const navigate = useNavigate()

  //Second approach
  const createBlog = async (e) =>{
      e.preventDefault()
      console.log(e.currentTarget,"currentTarget")
      const formData = new FormData(e.currentTarget)
     
      return
    // send above status data to api
      const response = await axios.post("http://localhost:2000/blogs")
      if(response.status == 201){
        alert("resposne.data.message")
        navigate("/")
      }else{
        alert("Something went wrong")
      }
  }

  return (
    <div>
      <Navbar />

      <div className="form-container">
        <h2>Create Blog</h2>
        <form onSubmit={createBlog}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name = "title" placeholder="Enter title" />
          </div>

          <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subTitle" name="subTitle" placeholder="Enter subtitle"  />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" placeholder="Enter description"
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog