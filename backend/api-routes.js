let express = require('express')// Initialize the app
var stud=require('./db.js')

let router = express.Router();

router.get("/personnel", (request, response,next) => {
    stud.find({},(error,result) => {
        if(error) {
            return response.status(500).send(error);
        }
        
        response.send(result);
        
    });
  });

router.post('/send',(req,res)=>{
    var d= new stud(req.body)
    d.save()
    });
  
router.patch('/update/:id',(req,res)=>{
  stud.findByIdAndUpdate(req.params.id,req.body, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated : ", docs);
    }
}); 
})  

router.delete('/delete/:id',(req,res)=>{
  stud.findByIdAndDelete(req.params.id, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted : ", docs);
    }
});
})

module.exports =router;