const express=require("express");
const core =require("cors");
const jwt = require('jsonwebtoken');
const secretKey="secretkey";

var app=express();
const bodyparser=require("body-parser");
const mysql=require("mysql2")
const path = require('path')
const querystring = require('querystring');
const db=mysql.createPool(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:"digitalflake2"
    }
);

// const db=mysql.createPool(
//     {
//         host:"hackathon.cv4sxbnijnr7.ap-south-1.rds.amazonaws.com",
//         user:"user_5",
//         password:"P5IYAp4ebuT",
//         database:"database_5"
//     }
// );


db.getConnection(function(err) {
        if (err) throw err;
        const sql =  `create table if not exists category(
            id int primary key auto_increment,
            name varchar(255)not null,
            description varchar(255)not null,
            status varchar(255)not null
           
        )`;
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
      });

      db.getConnection(function(err) {
        if (err) throw err;
        const sql =  `create table if not exists Admin(
            id int primary key auto_increment,
           email varchar(50) not null unique,
           password varchar(50)
        )`;
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });

    });

    //   db.getConnection(function(err) {
    //     if (err) throw err;
    //     const sql =  `insert into Admin(email,password) values(
    //         "abhijitpatil5588@gmail.com",
    //       "Abhi@123"
    //     )`;
    //     db.query(sql, function (err, result) {
    //       if (err) throw err;
        
    //     });
    //   });
     

     
      db.getConnection(function(err) {
        if (err) throw err;
        console.log("Connected!");
        const sql =  `create table if not exists product(
            id int primary key auto_increment,
            name varchar(255)not null,
            packsize int not null,
            category varchar(40) not null,
            mrp int ,
            image blob,
            status varchar(40),
            catId int not null,
            FOREIGN KEY (catId) REFERENCES category(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
        )`;
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
      });
  
db.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected!");
    const sql = "show tables";
    db.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });

  });
  
app.use(core());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.json());

// app.post("/addcategory",verifyToken,(req,res)=>{
//   jwt.verify(req.token,secretKey,(err)=>{
//     if(err){
//       res.send({
//         result:"Invalid Token....."
//       })}
//       else{
//     var name = req.query.name;
//     var description = req.query.description;
//     var status = req.query.status;
//     console.log(name); 
//     var values = [
//        name,description,status
//       ];
//     const sql="insert into category (name,description,status) values (?)";
//     db.query(sql,[values],(err,result)=>{
//     console.log("error",err);
//     console.log("result",result);
//     res.send("hello world");
// })}
//   })
// });


app.post("/addcategory",(req,res)=>{
    var name = req.query.name;
    var description = req.query.description;
    var status = req.query.status;
    console.log(name); 
    var values = [
       name,description,status
      ];
    const sql="insert into category (name,description,status) values (?)";
    db.query(sql,[values],(err,result)=>{
    console.log("error",err);
    console.log("result",result);
    res.send("hello world");
})}
  );


app.post("/updatecategory",verifyToken,(req,res)=>{
  jwt.verify(req.token,secretKey,(err)=>{
    if(err){
      res.send({
        result:"Invalid Token"
      })}
      else{
    var id=req.params.id;   
    var name = req.query.name;
    var description = req.query.description;
    var status = req.query.status;
    console.log(name); 
    var values = [
       name,description,status,id
      ];
 const sql='UPDATE category SET name = ?, description = ?, status = ? WHERE id = ?';
    db.query(sql,[values],(err,result)=>{
     console.log("error",err);
     console.log("result",result);
    res.send("hello world");
})}
  })
});

app.post("/updateproduct",verifyToken,(req,res)=>{
  jwt.verify(req.token,secretKey,(err)=>{
    if(err){
      res.send({
        result:"Invalid Token"
      })}
      else{
    var id=req.params.id;   
    var name = req.query.name;
    var packsize= req.query.packsize;
    var category= req.query.category;
    var mrp= req.query.mrp;
    var status= req.query.status;
    var values = [
       name,packsize,category,mrp,status,id
      ];
 const sql="UPDATE product SET name = ? packsize= ? category=? mrp= ? status=? WHERE address = ?";
    db.query(sql,[values],(err,result)=>{
     console.log("error",err);
     console.log("result",result);
    res.send("hello world");
})}
  })
});



// app.post("/deletecategory",verifyToken,(req,res)=>{
//   jwt.verify(req.token,secretKey,(err)=>{
//     if(err){
//       res.send({
//         result:"Invalid Token"
//       })}
//       else{
//    var id=req.query.id;
//     var values = [
//       id
//       ];
//  const sql="DELETE FROM category WHERE id = ?";
//     db.query(sql,[values],(err,result)=>{
//      console.log("error",err);
//      console.log("result",result);
//     res.send("hello world");
// })}
// })
// });

app.post("/deletecategory",(req,res)=>{
 
   var id=req.query.id;
    var values = [
      id
      ];
 const sql="DELETE FROM category WHERE id = ?";
    db.query(sql,[values],(err,result)=>{
     console.log("error",err);
     console.log("result",result);
    res.send("hello world");
})}
);



app.post("/deleteproduct",(req,res)=>{
    var id=req.query.id;
    var values = [
       id
      ];
 const sql="DELETE FROM product WHERE id = ?";
    db.query(sql,[values],(err,result)=>{
     console.log("error",err);
     console.log("result",result);
    res.send("hello world");
})}
);


// app.post("/addproduct",verifyToken,(req,res)=>{
//   jwt.verify(req.token,secretKey,(err)=>{
//     if(err){
//       res.send({
//         result:"Invalid Token"
//       })
//     }else{
//     var name= req.query.name;
//    var packsize= req.query.packsize;
//    var category= req.query.category;
//    var mrp= req.query.mrp;
//    var status= req.query.status;
//     var catID= req.query.catID;
//     console.log(catID);
//     var values=[
//         name,packsize,category,mrp,status,catID
//     ]
//     const sql="insert into product(name,packsize,category,mrp,status,catID) values (?)";
   
//     db.query(sql,[values],(err,result)=>{
//      console.log("error",err);
//      console.log("result",result);
//     res.send("hello world");
// })}
// })
// });

app.post("/addproduct",(req,res)=>{
 

    var name= req.query.name;
   var packsize= req.query.packsize;
   var category= req.query.category;
   var mrp= req.query.mrp;
   var status= req.query.status;
    var catID= req.query.catID;
    console.log(catID);
    var values=[
        name,packsize,category,mrp,status,catID
    ]
    const sql="insert into product(name,packsize,category,mrp,status,catID) values (?)";
   
    db.query(sql,[values],(err,result)=>{
     console.log("error",err);
     console.log("result",result);
    res.send("hello world");
})}
);



app.get("/showcategory",verifyToken,(req,res)=>{
  jwt.verify(req.token,secretKey,(err)=>{
    if(err){
      res.send({
        result:"Invalid Token"
      })
    }
    else{
    const s="select * from category";
    db.query(s,(err,result)=>{
        console.log("err",err);
        console.log("result",result);
        res.send(result);
    }) }
})
});



app.get("/showproduct",verifyToken,(req,res)=>{ 
jwt.verify(req.token,secretKey,(err)=>{
  if(err){
    res.send({
      result:"Invalid Token"
    })
  }
else{
  const s="select * from product";
  db.query(s,(err,result)=>{
      console.log("err",err);
      console.log("result",result);
      res.send(result);
  })
}
})  
});

// app.post("/deleteproduct",verifyToken,(req,res)=>{ 
//   var id=req.query.id;
//   var values = [
//      id
//     ];
//   jwt.verify(req.token,secretKey,(err)=>{
//     if(err){
//       res.send({
//         result:"Invalid Token"
//       })
//     }
//   else{
   
//     const s="DELETE FROM product WHERE id = ?";
//     db.query(s,[values],(err,result)=>{
//         console.log("err",err);
//         console.log("result",result);
//         result.send("success");
//     })
//   }
//   })  
//   });

app.post("/user/generateToken", (req, res) => {
    
    var email=req.query.email;
    var password=req.query.password;
    console.log("hello");

    if (email==="abhijitpatil5588@gmail.com" && password==="A"){
    console.log("hello");
      const data={
        email,
        password
      };
    const token = jwt.sign(data,secretKey);
    res.send(token);
}
});

function verifyToken(req,resp,next){
  const bearHeader =req.headers['authorization'];
  console.log(bearHeader);
  if(typeof bearHeader !=='undefined'){
    const bearer=bearHeader.split(" ");
    const token=bearer[1];
    req.token=token;
    next();
  }
  else{  
   
    resp.send({
      result:"Token is not valid"
    })
  }
}
app.listen(5000,()=>{
    console.log("server is listning on port no. 5000");
})