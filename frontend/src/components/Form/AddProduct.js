import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = (props) => {
  const [cat, setCat] = useState({
    name: "",
    packsize: "",
    category: "",
    mrp:"",
    status:"",
    catID:""
  });
  const navigate = useNavigate();
  let name, value;
  const storedToken = localStorage.getItem('jwtToken');
  console.log(storedToken);
const headers ={'Authorization' : `bearer ${storedToken}` }
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCat({ ...cat, [name]: value });
  };
  const handleclick = (e) => {
    axios
    .post(
      `http://localhost:5000/addproduct?name=${cat.name}&packsize=${cat.packsize}&category=${cat.category}&mrp=${cat.mrp}&status=${cat.status}&catID=${cat.catID}`
     
    )
      .then((resp) => {
        console.log("success");
      })
      .catch((error) => {
        console.log("error");
        console.log(cat);
      });
      window.location.reload(false);
    }


  return (
    <div>
    <form className="mx-auto col-8 col-md-6 col-lg-6 text-dark fw-bold">
      <div class="form-group col-md-6">
        <label htmlFor="name"> Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter category name"
          value={cat.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="packsize">Description</label>
        <input
          type="text"
          className="form-control"
          id="packsize"
          name="packsize"
          placeholder="Enter packsize"
          value={cat.packsize}
          onChange={handleChange}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="Category">Category</label>
        <input
          type="text"
          className="form-control"
          id="category"
          name="category"
          placeholder="Enter category"
          value={cat.category}
          onChange={handleChange}
        />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="mrp">mrp</label>
        <input
          type="text"
          className="form-control"
          id="mrp"
          name="mrp"
          placeholder="Enter mrp"
          value={cat.mrp}
          onChange={handleChange}
        />
      </div>
      <div className="form-group col-md-6"> 
      <label htmlFor="Status">Status</label><br></br>
     <select  id="status" name="status" value={cat.status} onChange={handleChange} >
     <option value="default" >Select From list</option>
        <option value="Active" >Active</option>
        <option value= "NotActive">NotActive</option>
      </select>
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="mrp">catID</label>
        <input
          type="text"
          className="form-control"
          id="catID"
          name="catID"
          placeholder="Enter catID"
          value={cat.catID}
          onChange={handleChange}
        />
      </div>
       
      <button type="button" className="btn btn-primary" onClick={handleclick}>
        Submit
      </button> 
    </form>
  </div>
  );
};
export default AddProduct;
