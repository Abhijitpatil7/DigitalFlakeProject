import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCategory = (props) => {
  const [cat, setCat] = useState({
    name: "",
    description: "",
    status: ""
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
      `http://localhost:5000/addcategory?name=${cat.name}&description=${cat.description}&status=${cat.status}`
     
    )
      .then((resp) => {
        console.log("success");
      })
      .catch((error) => {
        console.log("error");
        console.log(cat);
      });
      //window.location.reload(false);
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
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          placeholder="Enter description"
          value={cat.description}
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
      <button type="button" className="btn btn-primary" onClick={handleclick}>
        Submit
      </button> 
    </form>
  </div>
  );
};
export default AddCategory;
