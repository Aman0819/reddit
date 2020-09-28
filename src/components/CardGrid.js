import React from "react";
import SubredditCard from "./SubredditCard";
import subreddits from "../subreddits";

function createCard(subreddit) {
  return (
    <SubredditCard
      name={subreddit.name}
      url={subreddit.url}
      alt={subreddit.alt}
      subcount={subreddit.subcount}
      description={subreddit.description}
      rank={subreddit.rank}
      key={subreddit.rank}
    />
  );
}
function CardGrid() {
  return (
    <div>
      <div className="card-container">{subreddits.map(createCard)}</div>
    </div>
  );
}

export default CardGrid;
