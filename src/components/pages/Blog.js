import React, { useState, useEffect } from 'react'
import sanityClient from '../../client.js'
import './Blog.css'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

function Blog() {
  const [postData, setPost] = useState(null)
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error)
  }, [])
  return (
    <>
      <main className='blog'>
        <h1>My Blog</h1>
        {/*<h2>Welcome to my world</h2>*/}
        <section className='blog-container'>
          <div className='allPosts'>
            {postData &&
              postData.map((post, index) => (
                <article className='text' key={index}>
                  <Link
                    to={'/post/' + post.slug.current}
                    key={post.slug.current}
                    style={{
                      textDecoration: 'none',
                      color: 'black',
                      backgroundColor: 'white',
                      alignSelf: 'center',
                    }}
                  >
                    <div className='blogSpan' key={index}>
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className='blogImage'
                        style={{
                          padding: '10px',
                          width: '300px',
                          height: 'auto',
                        }}
                      />
                      <h3
                        style={{
                          color: 'black',
                          textAlign: 'center',
                          paddingBottom: '5px',
                        }}
                      >
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Blog
