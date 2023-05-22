import React from 'react';
import Login from './Form/Login';
import Image from '../image/ImgBack.png';
function Home() {
  return (

   <div className="row no-gutters" style={{backgroundImage: `url(${"Image"})` ,backgroundPosition:"center",height:500,width:1200}}>
   <div ><Login/></div>
   </div>
  );
}

export default Home;