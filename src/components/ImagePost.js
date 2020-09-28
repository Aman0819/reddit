import React from "react";
import "./imagePost.css";

const ImagePost = ({ file }) => {
  if (file.data.preview) {
    if (file.data.preview.enabled) {
      // console.log(file.data);
    }
    return (
      <div className="grid-item">
        <div className="normal">
          <a href={file.data.url} target="_blank" rel="noopener noreferrer">
            <img
              src={
                file.data.preview.images[0].resolutions[
                  file.data.preview.images[0].resolutions.length - 1
                ].url
              }
              alt={file.data.title}
            />
          </a>
        </div>
        <div className="onhover">
          <div className="overlay"></div>
          {/* <h3 className="author">{}</h3> */}
          <div className="top">
            <h3 className="subreddit">{`r/${file.data.subreddit}`}</h3>
            <h4 className="caption">{file.data.title}</h4>
          </div>
          <div className="bottom">
            <h4 className="upvotes">
              {file.data.score}&nbsp;
              <i className="fas fa-arrow-up"></i>
            </h4>
            <a
              href={"https://reddit.com" + file.data.permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-reddit"></i>
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ImagePost;
