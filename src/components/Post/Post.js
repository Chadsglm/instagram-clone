import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './Post.scss';

function Post({ username, caption, imageUrl }) {


  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt='Chad'
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageUrl} alt="post" />

      <h4 className="post__text">
        {username}<span className="post__caption">{caption}</span>
      </h4>

      <div className="post__comments">
        <p>
          <b>Chadev</b>Lorem Lorem lorem
        </p>
      </div>


      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="Add a comment..."
        />
        <button
          className="post__button"
          type="submit">
          Post
        </button>
      </form>

    </div>
  )
}

export default Post
