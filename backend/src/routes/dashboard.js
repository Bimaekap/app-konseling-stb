import axios from "axios";
import express from "express"
const router = express.Router();
const app = express()
import path from "path";
const __dirname = path.resolve()

// dashboard admin

router.get('/', (req,res) => {
      res.sendFile(path.join(__dirname, 'frontend','admin','index.html'))
    })

export default router
