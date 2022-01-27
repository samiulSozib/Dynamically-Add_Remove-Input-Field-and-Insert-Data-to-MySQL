
const {postData}=require('./homepage')

const routes=[
    {
        path:'/save',
        handler:postData
    },
    {
        path:'/',
        handler:(req,res,next)=>{
            return res.render('homepage')
        }
    }
]

module.exports=(app)=>{
    routes.forEach(r=>{
        if(r.path=='/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}