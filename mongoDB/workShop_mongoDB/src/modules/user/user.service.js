import { ObjectId } from "mongodb";
import { userModel } from "../../DB/model/index.js"




export const signup=async(inputs)=>{
  try {
    const { email, password } =inputs;

    const user = await (await userModel).findOne({ email, password });
    if (!user) {
      throw new Error("Invalid email or password",{cause:{status:409}})
    }

    
  } catch (error) {
          throw new Error("Invalid email or password",{cause:{status:409}})
  }
}


export const profileReturned=async(inputs)=>{
    const _id=inputs;
    const profile=(await userModel).findOne(
        {_id:new ObjectId(_id)},{
            projection:{
                password:0
            }
        }
    )

    if(!profile){
        throw new Error("no profile founded",{cause:{status:409}})
    }

    return profile

}



export const updateUser=async(inputs,id)=>{
    const Id=id;
    if (!ObjectId.isValid(Id)) {
        throw new Error("id not valid",{cause:{status:400}})//bad req
    }

    const userID=new ObjectId(Id);



    const data=(await userModel).findOneAndUpdate({
        _id:userID
    },{
        $set:inputs
    },{
        returnDocument:"after"
    })

    if (!data) {
        throw new Error("user not found",{cause:{status:404}})
    }

    return data;
}


export const deleteUser=async(id)=>{
    const Id=id;
    if (!ObjectId.isValid(Id)) {
        throw new Error("id not valid",{cause:{status:400}})//bad req
    }
    const userID=new ObjectId(Id);
    const data=(await userModel).deleteOne({
        _id:userID
    })

    if (!data) {
        throw new Error("user not found",{cause:{status:404}})
    }

    return data;
}