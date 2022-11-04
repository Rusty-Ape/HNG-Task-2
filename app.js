const express = require("express")
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 4321;

app.use(cors({
    origin: '*'
}));

app.get('/',(req,res)=>{
    res.redirect(302,'/myself')
})

app.get('/myself',(req,res)=>{
    res.json({"slackUsername":"aisosa.arasomwan","backend":true,"age":24,"bio":"An Engineer who likes NodeJs"})
})

app.listen(PORT,()=>{
    console.log("Server has started running on port",PORT)
})