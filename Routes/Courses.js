var express = require('express');
var router = express.Router();

var courses=[]

function createId(){
    return courses.length
}

router.get('/', (req,res)=>{
    res.send({
        "data": courses
    })
})

router.get('/:id', (req,res)=>{
    var ccourse;
    courses.forEach(course=>{
        if (course.id==req.params.id){
            ccourse=course;
        }
    })
    res.send(ccourse);
})

router.post('/', (req,res)=>{
    newcourse={"id":createId(),...req.body}
    courses.push(newcourse)
    res.send("SUCCESSFULL")
})

router.post('/:id/toenroll', (req,res)=>{
    var student=req.body.studentId
    var ccourse;
    var param=req.params;
    courses.forEach(course=>{
        if (course.id==param.id){
            ccourse=1;
            if (student in course["enrolled"]) {
                res.send('Student already enrolled in this course!')
            }else{
                if (course["available"]>0){
                    course["available"]-=1
                    course["enrolled"].push(student)
                    res.send('Student enrolled')
                }else{
                    res.send('No slots available for this course!')
                }
            }
        }
    })
    if (!curr_course){
        res.send('No course found for this id!')
    }
})

router.put('/:id/deregister', (req,res)=>{
    var student=req.body.studentId
    var curr_course
    var param=req.params
    courses.forEach(course=>{
        if (course.id==param.id){
            curr_course=1
            var student_index=course["enrolledStudents"].indexOf(student)
            if (student_index !==-1){
                course["enrolled"].splice(student_index,1)
                course["available"]+=1
                res.send('Student has beed unregistered')
            }else{
                res.send('No student')
            }
        }
    })
    if (!curr_course){
        res.send('No course found')
    }
})


module.exports = router;