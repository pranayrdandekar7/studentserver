const students=[{
    "id":1,
    "name": "shriya",
    "age": "25",
    "gender": "female"
},
{
    "id": 2,
    "name": "sakshi",
    "age": "27",
    "gender": "female"
},] ;


   const postStudent = (req,res)=> {

    const {name,age,gender}=req.body
    const RandomId = Math.round(Math.random()*1000)

    const newStudent={
        id:RandomId,
        name:name,
        age:age,
        gender:gender,

    }

    if(!name){
        return  res.json({
            success:false,
            data:null,
            message:"Name is required"
        })
    }

    if(!age){
        return  res.json({
            success:false,
            data:null,
            message:"Age is required"
        })
    }

    if(!gender){
      return  res.json({
            success:false,
            data:null,
            message:"Gender is required"
        })
    }
    students.push(newStudent)

    res.json({
        success :true,
        data:newStudent,
        message:"new student added succesfully"
    })
}

  const getStudents =(req,res)=>{
    res.json({
        success:true,
        data:students,
        message:"successfuly fetch all students",
        
    })

}


    const getStudentId =  (req,res)=>{

    const {id }=req.params;

    const student = students.find((p)=>{
     
        if(p.id==id){
            return true
        }
        else{
            return false
        }   
    })
    res.json({
        success: student ?true : false,
        data:student ||null,
        message: student? "data fetch succsseffuly" : "student not found"
    })
}


  const putStudentId =(req,res)=>{

    const {name,age,gender} = req.body
    const {id} =req.params

    let index =-1

    students.forEach((student,i)=>{

        if(student.id==id){
            index=i
        }
    })

    const newObj ={
        id :id,
        name : name,
        age : age,
        gender:gender
    }
    if(index==-1){
      return  res.json({
             status:false,
        data:null,
        message:"data is not updated "
        })
    }
    else{

        students [index] = newObj

    res.json({
        status:true,
        data:newObj,
        message:"data updated successfully"
    })

}
}


    const deleteStudentId =(req,res)=>{
        const {id} =req.params
    
        let index = -1
    
        students.forEach((student,i)=>{
            if (student.id==id){
               index = i
            }
        })
    
        if(index==-1){
            return res.json({
                success:false,
                message:`students not found for id ${id}`
            })
        }
        
        students.splice(index,1)
    
        res.json({
            success:true,
            data:null,
            message :`students is successfully deleted`
        })
    
    
    }
export {postStudent,
        getStudents,
        getStudentId,
        putStudentId,
        deleteStudentId
       }