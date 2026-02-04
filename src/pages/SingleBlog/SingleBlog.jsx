import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBlog = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [blog, setBlog] = useState({})

  // delete blog
  const deleteBlog = async () => {
    try {
      const response = await axios.delete(`http://localhost:2000/blogs/${id}`)
      if (response.status === 200) {
        alert("Blog deleted successfully")
        navigate("/")
      }
    } catch (error) {
      alert("Something went wrong")
    }
  }

  // fetch single blog
  const fetchSingleBlog = async () => {
    const response = await axios.get(`http://localhost:2000/blogs/${id}`)
    if (response.status === 200) {
      setBlog(response.data.data)
    }
  }

  useEffect(() => {
    fetchSingleBlog()
  }, [])

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">
        <div className="bg-white max-w-3xl w-full rounded-xl shadow-lg p-8">

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {blog.title}
          </h1>

          {/* Subtitle */}
          <h3 className="text-lg text-gray-500 mb-6">
            {blog.subTitle}
          </h3>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-8">
            {blog.description}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={deleteBlog}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
            >
              Delete
            </button>
            <Link to={`/update/${blog._id}`}
            >
              Update
              </Link>

            <button
              onClick={() => navigate("/")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg transition"
            >
              Back
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default SingleBlog
