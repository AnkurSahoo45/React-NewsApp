import React from 'react'

const NewsItem = (props) => {

  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className='my-3'>
      <div className="card" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
        <img src={!imageurl ? "https://cdn.pixabay.com/photo/2017/04/23/09/31/newspaper-2253409_1280.jpg" : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}... <span className="badge rounded-pill text-bg-primary">New</span></h5>
          <p className="card-text">{description}...</p>
          <p className='card-text'><small className='text-muted'>By {!author ? "Sources" : author} on {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} target='_blank' className="btn btn-sm btn-outline-primary" rel="noreferrer">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem