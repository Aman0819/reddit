import React from "react";
import ImagePost from "./ImagePost.js";

const ImageGrid = ({ files }) => {
  return (
    <div className="image-grid">
      {files.map((file) => (
        <ImagePost key={file.data.id} file={file} />
      ))}
    </div>
  );
};

export default ImageGrid;
