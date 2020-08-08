const express=require("express");
var router = express.Router();
 
let data=[];
function createId(){
    return data.length
  }
  
router.get('/:id',function(req,res)
{
    const student=Players.find(c=>c.id===parseInt(req.params.id));
    if(!Player)res.status(404).send("Erron Not found");
    res.send(student);
}
);

router.post('/', (req,res)=>{
    new_user={"id":createId(),...req.body}
    data.push(new_user);
    res.send("Student registered");
  });
  
  router.put('/:id', (req,res)=>{
    var param=req.params
    var index=-1
    for (i=0; i<data.length; i++){
      if (data[i].id==param.id) {
        index = i;
        data[i].name = req.body.name;
      }
    }
    if (index !==-1){
      res.send("Student Updated");
    }else{
      res.send("Student not found!");
    }
  });
module.exports = router;