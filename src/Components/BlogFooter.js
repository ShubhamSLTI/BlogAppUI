// BlogFooter.js
import React from 'react';


const blogFooterStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  bottom: '0',
  width: '100%'
};


function BlogFooter() {
  return (
    <div style={blogFooterStyle}>
      <p>&copy; 2024 My Blog App</p>
    </div>
  );
}

export default BlogFooter;
