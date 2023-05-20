import axios from "axios";
import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";



const ShowCategory=()=>{
//   let id =useParams();
//   let numberid= parseInt(id.id);
//   console.log(numberid);


const [prod, setProd] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/showcategory`).then((res)=>{
    console.log(res)
      setProd(res.data)
  })
  }, [])

  function remove(data){
    console.log("in remove");
    console.log(data);
    axios.post( `http://localhost:5000/deletecategory?id=${data}`
    ).then((res)=>console.log("succes")).catch(()=>console.log("error"))
     window.location.reload(false);
  }

  return(
<div>
  <table className="table table-striped">
  <thead class="thead-dark">
  <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col"> Description</th>
        <th scope="col">Status</th>
    </tr>
    </thead>
{
  prod.map((current)=>{
    return(
      <>
      <tr scope="row">
      <td> {current.id}</td>
      <td> {current.name}</td>
      <td> {current.description}</td>
      <td> {current.status}</td>
      <td><button  type="button" style={{backgroundColor:"red"}} onClick={()=>remove(current.id)} >Delete</button></td>


      </tr> 
      </>
    )
  })
}
</table>
</div>


  )
}
export default ShowCategory;

