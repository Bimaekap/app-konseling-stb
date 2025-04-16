import express from "express"
import konselingRoutes from "./routes/konseling.js"
import validateUsers from "./routes/authentication.js"
import dashboard from "./routes/dashboard.js"
import index from "./routes/index-route.js"
import cors from "cors"
import bodyParser from "body-parser"
import path from "path";
const __dirname = path.resolve()

const PORT = 5500
const app = express()
app.use(cors());
app.use(express.static(path.join(__dirname)));

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res) => {
    res.send('<a href="../frontend/authentication/login.html">Login</a>')
})


// #NOTE route LOGIN
app.use('/login',validateUsers)
// #NOTE route dashboard
app.use('/dashboard-admin', dashboard)
// #NOTE route konseling
app.use('/konseling', konselingRoutes)

// #NOTE route edit konseling
// #NOTE Port
app.listen(PORT,() => console.log(`Server running on port : http://localhost:${PORT}`))