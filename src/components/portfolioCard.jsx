import React from "react";

const PortfolioCard = ({ title, description, image, alt, video, link }) => {
  return (
    <div className="portfolio-card">
      {/* Display video if provided, otherwise show image */}
      {video ? (
        <video className="portfolio-media" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        image && <img src={image} alt={alt || title} className="portfolio-media" />
      )}

      <div className="portfolio-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard;
