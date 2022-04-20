const express=require('express');
const app = express()
const port = process.env.PORT||5000;


app.get('/', (req, res) => {
    res.send('Node js Starting learning')
  })

  app.get('/users',(req,res)=>{

    res.send( {id:1 ,name:'Mayinuddin',job:'IT'});
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })