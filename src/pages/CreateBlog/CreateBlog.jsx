import React, { use, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import './CreateBlog.css'
import axios from 'axios'
import { data, useNavigate } from 'react-router-dom'

const CreateBlog = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [subTitle, setSubTitle] = useState("")
  const [description, setDescription] = useState("")

  const createBlog = async (e) => {
    e.preventDefault()
    const data = {
      title: title, // backend lay leko : stateName
      subTitle: subTitle,
      description: description
    }
    //send above states data to api
    const respose = await axios.post("http://localhost:2000/blogs", data)
    if(respose.status==201){
      alert(respose.data.message)
      navigate("/")
    }else{
      alert("Something went wrong")
    }
  }


  //console.log(title,subTitle,description)

  return (
    <div>
      <Navbar />

      <div className="form-container">
        <h2>Create Blog</h2>
        <form onSubmit={createBlog}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Enter title" onChange={
              (e) => setTitle(e.target.value)
            } />
          </div>

          <div className="form-group">
            <label htmlFor="subtitle">Subtitle</label>
            <input type="text" id="subtitle" placeholder="Enter subtitle" onChange={
              (e) => setSubTitle(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" placeholder="Enter description" onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateBlog