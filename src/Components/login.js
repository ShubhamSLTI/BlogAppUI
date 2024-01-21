import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; 
import { auth } from './firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




const Login = () => {
  const [emailID, setEmailID] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  
  

  const handleLogin = () => {
    
    const payload = {
      emailID:emailID,
      password:password
    }
   
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailID, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)

        axios({
          method: 'post',
          url: 'http://localhost:5093/api/blog/Login',
          data: payload, // you are sending body instead
          headers: {
           // 'Authorization': `bearer ${token}`,
          'Content-Type': 'application/json'
          }, 
        }).then(response => {
          if(response.data != null)
          {
            localStorage.setItem('loggedInUserID',response.data.id);
            history.push('/home');
            window.location.reload();
          }
          else{
            alert('EmailID or password is incorrect');
          }
        })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('EmailID or password is incorrect');
      });
   
  };

  return (
    <section class="vh-100" style={{backgroundColor:'#508bfc'}}>
    <div className='card d-flex shadow-2-strong py-5 h-100' style={{width:'40%',textAlign:'center',margin:'auto',borderRadius:'1rem'}}>
    <div className='card-body p-5 text-center'>
        <div className='row'>
            <h3>Sign In</h3>
        </div>
        <div className='row' style={{paddingTop:'10%'}}>
        <input type="email" placeholder='Email'  value={emailID} onChange={(e) => setEmailID(e.target.value)}  id="typeEmailX-2" class="form-control form-control-lg" />
        </div>
        <div className='row'  style={{paddingTop:'10%'}}>
        <input type="password"  placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} id="typeEmailX-2" class="form-control form-control-lg" />
        </div>
        <div style={{paddingTop:'10%'}}>
        <button class="btn btn-primary btn-lg btn-block" onClick={handleLogin} type="submit">Login</button>
        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                class="link-danger">Sign Up</a></p>
        </div>
    </div>
    </div>
    </section>
//   <section class="vh-100" style={{backgroundColor:'#508bfc'}}>
//   <div class="container py-5 h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-12 col-md-8 col-lg-6 col-xl-5">
//         <div class="card shadow-2-strong" style={{borderRadius:'1rem'}}>
//           <div class="card-body p-5 text-center">

//             <h3 class="mb-5">Sign in</h3>

//             <div class="form-outline mb-4">
//               <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
//               <label class="form-label" for="typeEmailX-2">Email</label>
//             </div>

//             <div class="form-outline mb-4">
//               <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
//               <label class="form-label" for="typePasswordX-2">Password</label>
//             </div>

//             {/* <!-- Checkbox --> */}
//             <div class="form-check d-flex justify-content-start mb-4">
//               <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
//               <label class="form-check-label" for="form1Example3"> Remember password </label>
//             </div>

//             <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
  );
};

export default Login;
