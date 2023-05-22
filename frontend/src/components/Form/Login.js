import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

const Login = () => {
  const [cat, setCat] = useState({
   email:"",
   password:""
  });
  const navigate = useNavigate();
  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCat({ ...cat, [name]: value });
  };
  const handleclick = (e) => {
   
    axios
    .post(
      `http://localhost:5000/user/generateToken?email=${cat.email}&password=${cat.password}`
    )
      .then((resp) => {
        const  token  = resp.data;
        console.log(token);
        localStorage.setItem('jwtToken', token);
        navigate(`/navbar`);
      })
      .catch((error) => {
        console.log("error");
        console.log(cat);
      });
      //window.location.reload(false);
    }

  return (
  <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img style={{backgroundImage: `url(${"Image"})`
                , width: '185px'}}  />
              <h4 className="mt-1 mb-5 pb-1">Welcome DigitalFlake Admin</h4>
            </div>
            <p>Please login to your account</p>
            <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' name="email" value={cat.email} onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' name="password" value={cat.password} onChange={handleChange} />
            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={handleclick}>Sign in</MDBBtn>
              <a className="text-muted" href="#!">Forgot password?</a>
            </div>
          </div>
        </MDBCol>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
          </div>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
);

};

export default Login;
