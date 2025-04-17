import express from "express"
const router = express.Router();
import path from "path";
const __dirname = path.resolve()

router.get('/index', async(req,res) => {
    location.assign('../authentication/login.html')
  })

export default router;