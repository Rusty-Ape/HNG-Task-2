const express = require("express")
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 4321;

app.use(express.json())

app.use(cors({
    origin: '*'
}));

app.get('/',(req,res)=>{
    res.redirect(302,'/myself')
})

app.get('/myself',(req,res)=>{
    res.json({"slackUsername":"aisosa.arasomwan","backend":true,"age":24,"bio":"An Engineer who likes NodeJs"})
})

app.post('/arithmetric',(req,res)=>{
    var body = req.body
    var operator = body.operation_type
    switch(operator){
        case "addition":
           var eval = body.x + body.y
           var result = {"slackUsername":"rusty","operation_type":operator,"result":eval}
           res.json(result) 
           break
        case "subtraction":
            var eval = body.x-body.y
            var result = {"slackUsername":"rusty","operation_type":operator,"result":eval}
            res.json(result) 
           break
        case "multiplication":
            var eval = body.x * body.y
            var result = {"slackUsername":"rusty","operation_type":operator,"result":eval}
            res.json(result) 
            break
        default:
            res.json(null)
    }
})

app.listen(PORT,()=>{
    console.log("Server has started running on port",PORT)
})