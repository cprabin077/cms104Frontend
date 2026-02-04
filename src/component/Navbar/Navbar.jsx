import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div>
            <nav className="navbar">
                
                    <div className="logo">Mero<span>Blog</span></div>
                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a onClick={() => navigate('/createBlog')}>CreateBlog</a>
                    </div>
                    <div className="nav-actions">
                        <a href="/signin" className="cta-button">Signin</a>
                    </div>
                
            </nav>
            
        </div>
    )
}

export default Navbar