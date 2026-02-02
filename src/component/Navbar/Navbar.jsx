import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo">Mero<span>Blog</span></div>

                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/singleBlog">Single Blog</a>
                        <a href="/createBlog">Create Blog</a>
                        <a href="/updateBlog">Update Blog</a>
                    </div>

                    <div className="nav-actions">
                        <a href="/signin" className="cta-button">Signin</a>
                    </div>
                </div>
            </nav>

            <section className="hero">
                <div className="hero-content">
                    <h1>Organize Your Thoughts</h1>
                    <p>A clean space for your blogs and todos.</p>
                </div>
            </section>
        </div>
  )
}

export default Navbar