// Comment.js
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
    <div className='row'>
        <div className='col-md-6'>
        <p style={{fontSize:'14px',fontWeight:'bold',paddingTop:'10px'}} className="card-title">{comment.commenterName}</p>
        </div> 
        <div className='col-md-6'>
        <p style={{fontSize:'10px',textAlign:'end'}} className="card-title">{comment.commentDate}</p>
        </div> 
        <p style={{fontSize:'small'}} className="card-text">{comment.comment}</p>    
    </div>
    </div>
  );
};

export default Comment;
