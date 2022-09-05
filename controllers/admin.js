const User=require('../models/user');

 
exports.postData=(req,res,next)=>{
    
    console.log(req.body.name)
    const name=req.body.name;
    // console.log(name)
    const email=req.body.email;
    const phone=req.body.phoneNumber;
    User.create({
        name:name,
        email:email,
        phone:phone
    }).then(result=>{
        // res.json(name)
        console.log('Product Created');
        res.redirect('/admin/users')
       
    }).catch(err=>{
        console.log(err)
    })
}

exports.getUsers=(req,res,next)=>{
    User.findAll().then(users=>{
        // console.log(users)
        res.json(users)
    }).catch(err=>{
        console.log(err)
    })
   
} 
exports.deleteUser=(req,res,next)=>{
    const userId=req.params.Id;
    console.log(userId)
    User.findByPk(userId).then(user=>{
        return user.destroy();
      })
      
      .then(result=>{
        console.log('Destroyed Product');
        User.findAll().then(users=>{
            // console.log(users)
            res.json(users)
        }).catch(err=>{
            console.log(err)
        })
        // res.redirect('/admin/products')
      })
        .catch(err=>{
        console.log(err);
      });
      
    }
