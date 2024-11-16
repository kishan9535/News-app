import React from 'react';
import './NewsModel.css';

const NewsModel = ({ show, article, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        {article ? (
          <>
            <img
              src={article.image || require('../assets/images/noimg.png').default}
              alt={article.title || "Modal Image"}
              className="modal-image"
            />
            <h2 className="modal-title">{article.title || "No Title Available"}</h2>
            <p className="modal-source">
              Source: {article.source?.name || "Unknown"}
            </p>
            <p className="modal-date">
              {article.publishedAt
                ? new Date(article.publishedAt).toLocaleString('en-US', {
                    month: 'short',
                    day: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : "Date not available"}
            </p>
            <p className="modal-content-text">
              {article.content || "No content available for this article."}
            </p>
            {article.url && (
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-link"
              >
                Read More
              </a>
            )}
          </>
        ) : (
          <p className="modal-content-text">No article selected.</p>
        )}
      </div>
    </div>
  );
};

export default NewsModel;
