import React from "react";
import "./subredditCard.css";

function SubredditCard(props) {
  return (
    <div className="card">
      <div className="rank">{props.rank}</div>

      <div className="front">
        <img src={props.url} alt={props.alt} className="img-main" />
        <h3 className="sr-name">r/{props.name}</h3>
        <div className="details">
          <p className="sr-subs">{props.subcount}</p>
          <div className="reddit-logo">
            <i className="fab fa-reddit"></i>
          </div>
        </div>
      </div>

      <div className="back">
        <div className="sr-details">
          <h4 className="sr-sub-count">{props.subcount} members</h4>
          <p className="sr-caption">{props.description}</p>
        </div>
        <div className="reddit-logo">
          <i className="fab fa-reddit"></i>
          <p className="reddit-name">Reddit</p>
        </div>
      </div>

      <div className="background">
        <div className="rank">{props.rank}</div>
      </div>
    </div>
  );
}

export default SubredditCard;
