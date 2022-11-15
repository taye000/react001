import React from "react";

export const VideoItem = ({ video }) => {
  return <div>
    <img src={video.snippet.thumbnails.medium.url} alt="" />
    {video.snippet.title}
    </div>;
};
