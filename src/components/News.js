import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=36a0e1c29ccb4195bd9501d40fb3394d&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
  }
  useEffect(() => {
    updateNews()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=36a0e1c29ccb4195bd9501d40fb3394d&page=${page - 1}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setPage(page - 1)
    setLoading(false)
  }
  const handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(parseData.articles)
    setPage(page + 1)
    setLoading(false)
  }
  const capFirstChar = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className='container my-3'>
      <h1 className='text-center mt-5 pt-3'>NewsDaily - Top {capFirstChar(props.category)} Headlines</h1>
      {loading && <Spinner />}
      <div className="row">
        {!loading && articles.map((element) => {
          return <div className="col-md-3" key={element.url}>
            <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 100) : ""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
          </div>
        })}
      </div>
      <div className="conatiner d-flex justify-content-between">
        <button disabled={page <= 1} type="button" className="btn btn-outline-dark" onClick={handlePrevClick}> &larr; Previous</button>
        <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-outline-dark" onClick={handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  )
}

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: 'general',
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News