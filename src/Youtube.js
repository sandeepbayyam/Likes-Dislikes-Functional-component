import React from 'react';
import ReactPlayer from 'react-player';
import './style.css';

function Youtube() {
  var [like, setLike] = React.useState(0);
  var [dislike, setDislike] = React.useState(0);
  const incLike = () => {
    setLike(like + 1);
  };
  const incDislike = () => {
    setDislike(dislike + 1);
  };
  return (
    <div className="betterview">
      <span className="youtube"> YouTube</span>
      <ReactPlayer
        width="300px"
        height="300px"
        controls
        url="https://youtu.be/5yYhkKMYbIg"
        className="video"
      />
      <br />
      <button size="25px" onClick={incLike}>
        Like
      </button>
      {like}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button size="25px" onClick={incDislike}>
        Dislike
      </button>
      {dislike}
    </div>
  );
}
export default Youtube;
