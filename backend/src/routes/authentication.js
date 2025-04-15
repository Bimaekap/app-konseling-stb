
import express, { response } from "express"
import axios from 'axios'
const router = express.Router();
import User from "../models/user.js"
import path from "path";

axios.defaults.baseURL = 'http://localhost:5500';


const __dirname = path.resolve();


router.post('/auth', async (req,res) => {
  // #TODO: [] buat validasi untuk user yang login 
      //  if (!nama) return res.send(responseJson(true, "username wajib diisi"));
      //  if (!password) return res.send(responseJson(true, "password wajib diisi"));
      try{
        console.log(req.body)
       const { nama, password } = req.body;
        const user = await User.findOne(
          { where: { nama : nama },
          raw:true }
        )
        .then(data => {
          return res.json(data)
        })
   
      } catch(err){
        console.error(err)
      }
     
      // res.send(user)
    //  return res.send(path.join(__dirname, 'frontend','admin','index.html'))
})

function auth(req,res,next){
  next()
}
export default router;