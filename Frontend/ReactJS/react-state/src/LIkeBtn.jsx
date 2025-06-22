import React, { useState } from "react";

const LIkeBtn = () => {
  const [isLiked, setIsLikes] = useState(false);

  function likeToggle() {
    setIsLikes(!isLiked);
  }
  return (
    <div>
      <h2 onClick={likeToggle}>
        {isLiked ? (
          <i className="fa-regular fa-heart"></i>
        ) : (
          <i className="fa-solid fa-heart"></i>
        )}
      </h2>
    </div>
  );
};

export default LIkeBtn;
