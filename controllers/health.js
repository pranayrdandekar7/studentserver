
const getHealth = (req,res)=>{

    res.json({
        success:true,
        message:"your server is working properly"
    })
}

export {
    getHealth
}