import axios from "axios";
import { useEffect, useState  } from "react";




const ShowProduct=()=>{
const [prod1, setProd] = useState([])
const storedToken = localStorage.getItem('jwtToken');
  console.log(storedToken);
  const headers ={'Authorization' : `bearer ${storedToken}` }
 console.log(headers);
  useEffect(() => {
   
    axios.get(`http://localhost:5000/showproduct`,{ headers }).then((res)=>{
    console.log(res)
    setProd(res.data)
  })
  }, [])

  function remove(data){
    console.log("in remove");
    console.log(data);
    axios.post(`http://localhost:5000/deleteproduct?id=${data} `,
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
        <th scope="col"> Packsize</th>
        <th scope="col">Category</th>
        <th scope="col">mrp</th>
        <th scope="col">status</th>
    </tr>
    </thead>
{
  prod1.map((current)=>{
    return(
      <>
      <tr scope="row">
      <td> {current.id}</td>
      <td> {current.name}</td>
      <td> {current.packsize}</td>
      <td> {current.category}</td>
      <td> {current.mrp}</td>
      <td> {current.status}</td>
      <td> {current.catID}</td>
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
export default ShowProduct;