
export const uploadImage = (requset, response) => {
 console.log(requset);
 const fileObj = {
   path : request.file.path,
   name: request.file.originalName,
 }

   try {
    
   } catch (error) {
    
   }
   return response.status(200).json({msg:"Hello"})
};
