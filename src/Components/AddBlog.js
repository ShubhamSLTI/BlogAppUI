// AddBlog.js
import React, { useState } from 'react';
import MyBlogCardList from './MyBlogCardList';
import axios from 'axios'; 

        

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [showBlogList, setBlogList] = useState(false);
 
  const handleCancel=()=>
  {
    setBlogList(true);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    

    const payload = {
      
      authorID: localStorage.getItem('loggedInUserID'),
      title: title,
      content: content
    }

    
    axios({
      method: 'post',
      url: 'http://localhost:5093/api/blog/AddBlog',
      data: payload, // you are sending body instead
      headers: {
       // 'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'
      }, 
    }).then(response => {
      //setData(response.data);
      setBlogList(true);
      console.log(response.data);
    })

    console.log('Submitted:', { title, content });

   

    // Redirect back to the blog list or another route after form submission
    // history.push('/');
  };

  return (
    <div> 
      {showBlogList ? <MyBlogCardList/> :
      <div  style={{paddingLeft:'5px'}} className='row'>
      <h2 style={{backgroundColor:'beige',color:'darkgoldenrod',textAlign:'center'}}>Create New Blog</h2>
      
      <form style={{paddingLeft:'30px'}} onSubmit={handleSubmit}>
        <div className='row' style={{paddingBottom:'10px'}}>
          <div className='col-md-3'>
          <label>Title:</label>
          </div>
          </div>
          <div className='row' style={{paddingBottom:'15px'}}>
          <div className='col-md-6'>
          <input 
            type="text" 
            class="form-control"
            value={title} 
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
          </div>
        </div>
        <div>
          <div className='row'>
            <div className='col-md-3'>
            <label>Content:</label>
            </div>
            <div className='row' style={{paddingBottom:'15px'}}>
              <div className='col-md-6'>
              <textarea 
              class="form-control"
              rows={7}
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              required 
              ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div className='row' style={{paddingBottom:'30px',paddingTop:'10px'}}>
          <div className='col-md-3'>
          <input  type="file" />
          </div>
           <div div className='col-md-3'>
           <button className='btn btn-secondary'>Upload </button>
            </div>         
           </div>
          </div>
        <div>
          <button type="submit" className='btn btn-primary'>Submit</button>
          <button type="button" style={{marginLeft:'10px'}} onClick={handleCancel} className='btn btn-secondary'>Cancel</button>
        </div>
      </form>

      </div>
      }
    </div>
  );
};

export default AddBlog;
