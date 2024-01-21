// SignUp.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {


    const history = useHistory();

    const [selectedGender, setSelectedGender] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNo, setcontactNo] = useState('');
    const [password, setPassword] = useState('');

    const handleGenderChange = (event) => {
       setSelectedGender(event.target.value);
    };
    


    const handleSignUp = () => {

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(userCredential);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      

        const payload = {
            firstName: firstName,
            lastName: lastName,
            contactNo: contactNo,
            emailID:email,
            password:password,
            Gender:selectedGender
          }

          axios({
            method: 'post',
            url: 'http://localhost:5093/api/blog/RegisterUser',
            data: payload, // you are sending body instead
            headers: {
             // 'Authorization': `bearer ${token}`,
            'Content-Type': 'application/json'
            }, 
          }).then(response => {
            alert('Registration Successful!!');
            history.push('/login');
            window.location.reload();
          })


      };
      

  return (
    <section class="vh-100" style={{backgroundColor:'#508bfc'}}>
    <div className='card d-flex shadow-2-strong  h-100' style={{width:'70%',textAlign:'center',margin:'auto',borderRadius:'1rem'}}>
    <div className='card-body  text-center'>
        <div className='row'>
            <h3>Registration</h3>
        </div>
        <div className='row' style={{paddingTop:'20px'}}>
            <div className='col-md-6'>
            <label style={{fontWeight:'bold'}}>First Name</label>
            <input type="text" id="firstName" class="form-control form-control-lg" value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
            </div>
            <div className='col-md-6'>
            <label  style={{fontWeight:'bold'}}>Last Name</label>
            <input type="text"  id="typeEmailX-2" class="form-control form-control-lg" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
        </div>
        <div className='row' style={{paddingTop:'20px'}}>
            <div className='col-md-6'>
            <label  style={{fontWeight:'bold'}}>Gender</label>
            <select id="gender" class="form-control form-control-lg" style={{width:'100%'}} value={selectedGender} onChange={handleGenderChange}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
            </div>
            <div className='col-md-6'>
            <label  style={{fontWeight:'bold'}}>Contact No</label>
            <input type="email"  id="typeEmailX-2" class="form-control form-control-lg" value={contactNo} onChange={(e) => setcontactNo(e.target.value)} />
            </div>
        </div>
        <div className='row' style={{paddingTop:'20px'}}>
            <div className='col-md-6'>
            <label  style={{fontWeight:'bold'}}>Email</label>
            <input type="email" id="typeEmailX-2" class="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='col-md-6'>
            <label  style={{fontWeight:'bold'}}>Password</label>
            <input type="password"   id="typeEmailX-2" class="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
        <div style={{paddingTop:'10%'}}>
        <button class="btn btn-primary btn-lg btn-block" onClick={handleSignUp} type="submit">Submit</button>
        </div>
    </div>
    </div>
    </section>
  );
};

export default SignUp;
