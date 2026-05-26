/*
make express application
attach port to it
*/
import express from "express";
let app = express();


app.listen(8000,()=>{
    console.log("application is listening at port 8000")
});

app.post("/",(req,res,next)=>{
    console.log("a");
});
app.get("/",(req,res,next)=>{
    console.log("b");
});

app.patch("/", (req,res,next)=>{
    console.log("c");
});

app.delete("/", (req,res,next)=>{
    console.log("d");
});

/*
localhost:8000 , post => "a"
localhost:8000 , get => "b"
localhost:8000 , patch => "c"
localhost:8000 , delete => "d"
*/


/*
database operation(CRUD)
-create---> post
-read---> get
-update---> patch
-delete---> delete
*/
