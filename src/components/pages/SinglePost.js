import React, { useState, useEffect } from 'react'
import './SinglePost.css'
import { useParams } from 'react-router-dom'
import sanityClient from '../../client.js'
import Footer from '../Footer'

import BlockContent from '@sanity/block-content-to-react'

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null)
  const { slug } = useParams()
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
      title,
      _id,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error)
  }, [slug])

  if (!singlePost) return <div>Loading ... </div>
  return (
    <>
      <div className='singlePost'>
        <div className='singlePostContainer'>
          <h1
            style={{
              backgroundColor: ' #242424',
              padding: '1vw 3vw',
              color: 'white',
            }}
          >
            {singlePost.title}
          </h1>
          <div className='postCard'>
            {/*<img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              style={{ width: '30vw', float: 'left', paddingRight: '15px' }}
            />*/}

            <BlockContent
              blocks={singlePost.body}
              projectId='efn403af'
              dataset='production'
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

/*<main className='spMain'>
  <article className='spArticle'>
    <header style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ backgroundColor: 'white', backgroundOpacity: '75' }}>
          <h1>{singlePost.title}</h1>
          <div style={{ display: 'flex', justifyContent: 'center' }}></div>
          <img
            src={urlFor(singlePost.authorImage).url()}
            alt={singlePost.name}
            style={{ width: '50px', height: '50px' }}
          />
          <p style={{ display: 'flex', alignItems: 'center' }}>
            {singlePost.name}
          </p>
        </div>
      </div>
      <img
        src={singlePost.mainImage.asset.url}
        alt={singlePost.title}
        style={{ width: '100%', height: '400px' }}
      />
    </header>
    <div>
      <BlockContent
        blocks={singlePost.body}
        projectId='efn403af'
        dataset='production'
      />
    </div>
  </article>
</main>*/
