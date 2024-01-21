// MyBlogs.js
import React, { useState } from 'react';  
import AddBlog from './AddBlog';
import MyBlogList from './MyBlogList';


const MyBlogsStyle = {
  background:'#563d7c',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
};

// const userID=localStorage.getItem('loggedInUserID');

const MyBlogs=()=> {

  const [showAddBlog, setAddBlog] = useState(false);
  
  // const [loggedInUserID, setLoggedInUser] = useState(null);

  // setLoggedInUser(localStorage.getItem('loggedInUserID'));

  const userID=localStorage.getItem('loggedInUserID');

  const handleClick = (data) => {
     setAddBlog(data);
 }



  return (

    <div>
    <div style={MyBlogsStyle}>
      <div className='row'>
        <div className='col-md-1'>
        <a href='/home' style={{color:'#cbbde2'}}>  <h4 style={{color:'#cbbde2'}}>Home</h4></a>
        </div>
        <div className='col-md-4' style={{textAlign:'left'}}>
        <a href='/myblogs' style={{color:'#cbbde2'}}> <h4 style={{color:'#cbbde2'}}>My Blogs</h4> </a>      
        </div>
        <div className='col-md-7' style={{textAlign:'end'}}>
          <a href='#' onClick={handleClick} style={{color:'#cbbde2'}}><h4>Add Blog</h4></a>        
        </div>
      </div>
    </div>
    {
    showAddBlog ?  <AddBlog/>:<MyBlogList/>
    }
    </div>
  );
}


export default MyBlogs;
