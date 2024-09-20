import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, content, date, tags = [] }) => {
  return (
    <div className="card">
      <div className="card-grid">
        <span className="card-date">{date}</span>
        <div className="card-content">
          <h3 className="title">{title}</h3>
          <p className="text-sm font-light">{content}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
  tags: [],
};

export default Card;