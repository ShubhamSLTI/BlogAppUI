import logo from './logo.svg';
import './App.css';
import AddBlog from './Components/AddBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardBlog from './Components/CardBlog';
import BootstrapCard from './Components/BootstrapCard';
import MyBlogCardList from './Components/MyBlogCardList';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogHeader from './Components/BlogHeader';
import React, { useState } from 'react';
import Login from './Components/login';
import SignUp from './Components/SignUp';
import MyBlogs from './Components/MyBlogs';



function App() { 

  return (
    <Router>
    <div style={{backgroundColor:'azure'}}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={BlogHeader} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signup" component={SignUp} />
        <Route path="/myblogs" component={MyBlogs} />
      </Switch>
    </div>
  </Router>

    // <div style={{backgroundColor:'azure'}}>
    //       <BlogHeader isAddBlog={handleAddBlog}/>
    //       {showAddBlog ?
    //        <AddBlog/>
    //        :<MyBlogCardList />
    //       }
    // </div>
    
    // <Router>
    //   <Switch>
    //     <Route path="/my-blog-posts" component={MyBlogPosts} />
    //     <Route path="/blog/:id" component={BlogPost} />
    //   </Switch>
    // </Router>

  );
}

export default App;
