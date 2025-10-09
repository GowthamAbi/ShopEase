import User from '../models/User.js'
const authControll={

Register:async(req,res)=>{
try {
   const {name,email,phone,password}=req.body
   const user=await User.findOne({email})

   if(user){
    return res.status(400).send("Already register")
   }

   const newUser=new User({name,email,phone,password})
    console.log(newUser)
    newUser.save()
    

   res.status(201).send("User registered successfully 🚀");
} catch (error) {
    console.log("Error in Register")
}
},

login:async(req,res)=>{

try {
    
    const{email,password}=req.body

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
 if (!user) {
      return res.status(401).send("Unauthorized: User not found ❌");
    }

    res.status(200).send("SucessFully Login")
} catch (error) {
    console.log("Login Fetch Problem")
}


}
}

export default authControll