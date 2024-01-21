// src/BootstrapCard.js
import React, { useState } from 'react';
import Comment from './comment';
import axios from 'axios'; 


const BootstrapCard = ({post,users,blogComments}) => {

  const [comment, setComment] = useState('');

  const [showAddBlog, setAddBlog] = useState(false);

  const handleAddBlog = (data) => {
     setAddBlog(data);
  }

  const handleCommentChange=()=>
  {
    const payload = {
      CommenterID:localStorage.getItem('loggedInUserID') ,
      comment: comment,
      blogID:post.id
    }

    
    axios({
      method: 'post',
      url: 'http://localhost:5093/api/blog/AddComment',
      data: payload, // you are sending body instead
      headers: {
       // 'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
      }, 
    }).then(response => {
      window.location.reload();
      
      console.log(response.data);
    })

  }
  
  const [expanded, setExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleReadMoreClick = () => {
    setExpanded(!expanded);
  }

  const handleShowCommentClick = () => {
    setShowComments(!showComments);
  }

  return (
    <div className="card" style={{ width: '80%' }}>
      {/* <img src='' style={{ width: '200px', height: '200px' }} className="card-img-top rounded-circle" alt="Placeholder" /> */}
      <div className="card-body">
        <div className='row'>
          <div className='col-md-6'>
          <h5 className="card-author">{users.firstName} </h5>
          </div>
          <div className='col-md-6'>
          <p style={{textAlign:'end',fontSize:'12px',fontWeight:'bold'}}>{post.postDate}</p>
           </div>
        </div>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text" style={{
        display: expanded ? 'block' : '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 5,
        overflow: 'hidden',
        textOverflow: 'ellipsis' }}>
        {post.content}
        </p>
        <div className='row'>
          <div className='col-md-3'>
          <u onClick={handleReadMoreClick}>
           {expanded ? 'read less' : 'read more'}
           </u>
           <a  onClick={handleShowCommentClick} style={{paddingLeft:'10px',color:'green'}}><i className="pi pi-comment" style={{ fontSize: '20px',paddingTop:'5px' }}></i></a>
          </div>
        </div>
      </div>
      <div>
      {showComments && (
        <div className="comment-section" style={{ maxHeight: '200px', overflowY: 'auto',overflowX:'hidden', marginTop: '10px' }}>
          <div className="card" style={{ width: '90%' }}>
          <div className="card-body">
            <p style={{fontWeight:'bold'}}>Comments</p>
          {blogComments.map((comment, index) => ( 
           <Comment comment={comment}/>
          ))}
        </div>
        </div>
        </div>
      )}
      </div>
      <div className="form-group">
        <div className='row' style={{paddingTop:'20px'}}>
          <div className='col-md-11'>
          <input type='text' style={{marginLeft:'2%'}} className="form-control"  id="commentTextarea" rows="3" onChange={(e) => setComment(e.target.value)}  value={comment}  placeholder="Type your comment here...">
          </input>
          </div>
          <div className='col-md-1'>
            {/* <a onChange={handleCommentChange}><i className="pi pi-send" style={{ fontSize: '20px',paddingTop:'5px' }}></i></a> */}
            <a  onClick={handleCommentChange} style={{paddingLeft:'10px',color:'green'}}><i className="pi pi-send" style={{ fontSize: '20px',paddingTop:'5px' }}></i></a>
           </div>
        </div>         
        </div>
    </div>
  );
};

export default BootstrapCard;
