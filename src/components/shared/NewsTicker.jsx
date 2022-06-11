import React from 'react'
import 'assets/scss/news_ticker.scss'

function NewsTicker() {
  return (
    <div className="news_ticker">
      <p className="news_ticker_title">News</p>

      <marquee behavior="" direction="">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, fugit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </marquee>
    </div>
  )
}

export default NewsTicker
