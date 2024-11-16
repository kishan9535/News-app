import React, { useEffect, useState } from 'react';
import './News.css';
import noimg from '../assets/images/noimg.png';
import axios from 'axios';
import NewsModel from './NewsModel';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon if using react-icons

const categories = [
  'general',
  'world',
  'business',
  'technology',
  'entertainment',
  'sports',
  'science',
  'health',
  'nation',
];

export const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [showModel, setShowModel] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=396b71dcc02ec3a4fe2dedbe2da4e224`;
        const response = await axios.get(url);

        const fetchedNews = response.data.articles;

        // Ensure all articles have an image
        fetchedNews.forEach((article) => {
          if (!article.image) {
            article.image = noimg;
          }
        });

        setHeadline(fetchedNews[0]);
        setNews(fetchedNews.slice(1, 12)); // Fetch 10 articles after the headline
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [selectedCategory]); // Trigger useEffect when selectedCategory changes

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowModel(true);
    console.log(article)
  };

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div className="news-app">
      <header className="news-header">
        <h1 className="logo"> News App</h1>
      </header>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            {categories.map((category) => (
              <a
                href="#"
                className={`nav-link ${category === selectedCategory ? 'active' : ''}`}
                key={category}
                onClick={(e) => handleCategoryClick(e, category)}
              >
                {category}
              </a>
            ))}
          </div>
        </nav>
        <div className="news-section">
          {headline && (
            <div className="headline" onClick={() => handleArticleClick(headline)}>
              <img src={headline.image || noimg} alt={headline.title} />
              <h2 className="headline-title">{headline.title}</h2>
            </div>
          )}
          <div className="news-grid">
            {news.map((article, index) => (
              <div
                className="news-grid-item"
                key={index}
                onClick={() => handleArticleClick(article)}
              >
                <img src={article.image || noimg} alt={article.title} />
                <h3>{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
        {showModel && (
          <NewsModel
            show={showModel}
            article={selectedArticle}
            onClose={() => setShowModel(false)}
          />
        )}
      </div>
      <footer>
      <div className="left-footer">News App</div>
  <div className="center-footer">
    © All Rights Reserved to Kishan
  </div>
  <div className="right-footer">
    <a
      href="https://github.com/kishan9535"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>
  </div>
      </footer>
    </div>
  );
};
