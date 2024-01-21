// CommentModal.js
import React from 'react';
import './modal.css';

const CommentModal = ({ isOpen, onClose, comments }) => {
  console.log(comments);
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button onClick={onClose}>Close</button>
        <table style={{ backgroundColor: "aliceblue", width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>Comments</th>        
        <th style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#f2f2f2" }}>Action</th>        
      </tr>
    </thead>
    <tbody>
          {comments.map((comment,index) => (
            <tr key={index}>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{comment.comment}</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}><a style={{paddingRight:"10px"}} href={`/comments/${comment.text}`} >Edit</a>
            <a href={`/comments/${comment.comment}`} >Delete</a>
            </td>
          </tr>
          ))}
    </tbody>
    </table>       
      </div>
    </div>
  );
};

export default CommentModal;
