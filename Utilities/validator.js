const repo=require('../Model/userSchema')
exports.productName = function (name) {
  if (name.trim().length !== 0) {
    return true;
  }
  return false;
};
exports.sellerName = function (name) {
  if (name.trim().length !== 0) {
    return true;
  }
  return false;
};
exports.userName = function (name) {
  if (name.trim().length !== 0) {
    return true;
  }
  return false;
};

exports.productCategory = function (category) {
  if (
    category.toLowerCase() === 'laptop' ||
    category.toLowerCase() === 'mobile' ||
    category.toLowerCase() === 'acceseries' ||
    category.toLowerCase() === 'others'
  ) {
    return true;
  }
  return false;
};

exports.ValidatedPassword = function(Password){
  //check regex for length 8 character 
  // if(Password.length>=8){
  //   return true;
  // }
  // else{
  //   return false;
  // }

  //check regex having one Capital letter
  const regex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if(regex.test(Password) && Password.length>=8){
    return true;
  }
  else{
    return false;
  }
}
exports.ValidateEmail=function(EmailId){
  const regex=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  if(regex.test(EmailId)){
    return true;
  }
  else{
    return false;
  }
}

// exports.ValidatePhoneNo=function(PhoneNo){
//   const regex=/^[0-9]{10}$/;
//   if(regex.test(PhoneNo)){
//     return true;
//   }
//   else{
//     return false;
//   }
// }

exports.check=async (req,res)=>{

  const usersId= await repo.find({id:req.body.userId},{_id:0,id:1})
  if(usersId.length>0){
    return true;  
   }else{
     return false;
   }
}
exports.ValidUserId= async function(userId){
   
console.log(usersId);

}