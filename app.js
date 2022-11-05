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
            if (operator == null){
                res.json(null)
            }
            else{
                var action = regx1(operator.toLowerCase())
                if (action == null){
                    res.json(null)
                    return null
                }
                var num_obj = regx_num(operator)

                if (num_obj == null) {
                    res.json(null)
                    return null
                }

                if (num_obj[0]== null || num_obj[1]==null){
                    res.json(null)
                    return null
                }
                var a = parseInt(num_obj[0])
                var b = parseInt(num_obj[1])
            }
            switch(action){
                case "addition":
                   var eval = a + b
                   var result = {"slackUsername":"rusty","operation_type":operator,"result":eval}
                   res.json(result) 
                   break
                case "add":
                   var eval = a + b
                   var result = {"slackUsername":"rusty","operation_type":operator,"result":eval}
                   res.json(result) 
                   break
                case "subtraction":
                    var eval = a-b
                    var result = {"slackUsername":"rusty","operation_type":operator,"result":eval}
                    res.json(result) 
                   break
                case "subtract":
                    var eval = a-b
                    var result = {"slackUsername":"rusty","operation_type":operator,"result":eval}
                    res.json(result) 
                   break
                case "multiplication":
                    var eval = a *b
                    var result = {"slackUsername":"rusty","operation_type":operator,"result":eval}
                    res.json(result) 
                    break
                case "multiply":
                    var eval = a *b
                    var result = {"slackUsername":"rusty","operation_type":operator,"result":eval}
                    res.json(result) 
                    break
                default:
                    res.json(null)
            }
    }   
})

app.listen(PORT,()=>{
    console.log("Server has started running on port",PORT)
})

function regx1(operator){
    const re1 = /(\badd\b|\baddition\b|\bsubtraction\b|\bsubtract\b|\bmultiply\b|\bmultiplication\b)/
    match_result=operator.match(re1)
    if (match_result == null) return null
    return match_result[0]
}

function regx_num(operator){
    const re = /[+-]?\d+/g
    match_result=operator.match(re)
    if (match_result == null) return null
    return match_result
}