
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
            <nav class="navbar">
                <div class="nav-container">
                    <div class="logo">Mero<span>Blog</span></div>

                    <div class="nav-links">
                        <a href="/" class="active">Home</a>
                        <a href="/singleBlog">Single Blog</a>
                        <a href="/createBlog">Create Blog</a>
                        <a href="/updateBlog">Update Blog</a>
                    </div>

                    <div class="nav-actions">
                        <a href="/signin" class="cta-button">Signin</a>
                    </div>
                </div>
            </nav>

            <section class="hero">
                <div class="hero-content">
                    <h1>Organize Your Thoughts</h1>
                    <p>A clean space for your blogs and todos.</p>
                </div>
            </section>
        </div>
  )
}

export default Navbar