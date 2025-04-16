
import express, { response } from "express"
const router = express.Router();
import User from "../models/user.js"

router.post('/auth', async function (req,res)  {
  // #TODO: [] buat validasi untuk user yang login 
      //  if (!nama) return res.send(responseJson(true, "username wajib diisi"));
      //  if (!password) return res.send(responseJson(true, "password wajib diisi"));
      console.log(req.body)
      try{
       const { nama, password } = req.body
        await User.findOne(
          { where: { 
            nama : nama,
            password : password
            },
          raw:true }
        )
        .then(response => {
        res.json(response)
        })
   
      } catch(err){
        console.error(err)
      }
      // res.send(user)
    //  return res.send(path.join(__dirname, 'frontend','admin','index.html'))
})

export default router;