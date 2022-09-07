const http= require('http');
const {readFileSync}=require('fs');
const express=require('express');
const path=require('path')


const app=express()


// const contacts=readFileSync('contact.html');
// const services=readFileSync('Services.html')


app.set('view engine', 'ejs')
app.use(express.static('./Public'))

// const server= http.createServer((req, res)=>{
//     const url= req.url

    app.get('/',(req,res)=>{
        res.status(200).render('Home',{title:'HomePage'})
        })
        
        app.get('/services',(req,res)=>{
            res.status(200).render('Services',{title:'Services'})
            })

            app.get('/contact',(req,res)=>{
                res.status(200).render('contact',{title:'Contact'})
                })

        app.get('/about',(req,res)=>{
            res.status(200).render('About',{title:'About'})
                    })

                    app.get('/resume',(req,res)=>{
                        res.status(200).render('resume',{title:'resume'})
                        })
            

        app.all('*',(req,res)=>{
            res.status(404).send('<h1>Opps! Page Not Found!</h1>')
        })




app.listen(3000,(req, res)=>{
    console.log('Listening to port 3000...')
})



// if(url==='/'){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write(contacts)
//     res.end()
// }
// else if(url==='/services'){
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write(services)
//     res.end()
// }
// else{
//     res.writeHead(404,{'content-type':'text/html'})
//     res.end('<h1>Opps, Page not Found!</h1>')

// }

// server.listen(2000,(req, res)=>{
// console.log('Listening to port 2000...')
// })