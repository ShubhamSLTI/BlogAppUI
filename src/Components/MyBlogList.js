// src/components/MyBlogList.js


import React, { useState, useEffect } from 'react';
import CommentModal from './CommentModal';
import axios from 'axios'; 
import AddBlog from './AddBlog';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button'; 
import BootstrapCard from './BootstrapCard';
        


const MyBlogList = () => {
  // Sample state to simulate blog posts created by the user.
  // In a real-world scenario, this data might come from an API or database.
  const [myPosts, setMyPosts] = useState([
  ]);

  const userID=localStorage.getItem('loggedInUserID');

// const [myPosts, setMyPosts] = useState([]);

  // const navigate = useNavigate();


  const deleteBlog = (id) => {
    axios.get('http://localhost:5093/api/blog/DeleteBlog?ID='+id)
      .then(response => { 
        setAddBlog(false);    
        window.location.reload();   
        console.log(response);
      })
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComments, setSelectedComments] = useState([]);
  const [showAddBlog, setAddBlog] = useState(false);

  const openModal = (comments) => {
    setSelectedComments(comments);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  useEffect(() => {
    // Fetch data using Axios
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'X-Requested-With, privatekey';
    axios.get('http://localhost:5093/api/blog/GetBlogsByID?ID='+userID)
      .then(response => {
        //setData(response.data);
        if(response.data.length !=0)
        {
        setMyPosts(response.data);
        console.log(response);
        }
        else
        {
          alert('You do not have any blogs,please click on add button to add your blogs')
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='container'>
    <div className='row' style={{marginLeft:'12%'}}>
      {myPosts.map((post) => (
        <div key={post.id} > {/* Added mb-4 for margin-bottom between cards */}
          <BootstrapCard post={post} users={post.users} blogComments={post.blogComments} />
        </div>
      ))}
    </div>
  </div>

    
  );
};

export default MyBlogList;
