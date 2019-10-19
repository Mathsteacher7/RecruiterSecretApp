import React from 'react'

const Header = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-grey-light">
            The recruiter secret tool
          </h1>
          <h2 className="title is-3 has-text-grey-light">
            The best way to discover which programming language your recruitee is really using
          </h2>
          <h3 className="has-text-grey-light">
            How to use this app? Just insert the GitHub username of your recruitee and discover what the programming language they used the most in their public repositories on GitHub is.
          </h3>

        </div>
      </div>
    </section>
  )
}

export default Header
