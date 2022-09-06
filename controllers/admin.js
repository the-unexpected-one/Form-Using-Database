const Expense=require('../models/user');

 
exports.postData=(req,res,next)=>{
    
    console.log(req.body.amt)
    const amt=req.body.amt;
    
    const desc=req.body.cat;

    console.log(desc)
    const category=req.body.man;
    Expense.create({
        amount:amt,
        desc:desc,
        category:category
    }).then(result=>{
        // res.json(name)
        console.log('Expense Created');
        res.redirect('/admin/users')
       
    }).catch(err=>{
        console.log(err)
    })
}

exports.getUsers=(req,res,next)=>{
    Expense.findAll().then(users=>{
        // console.log(users)
        res.json(users)
    }).catch(err=>{
        console.log(err)
    })
   
} 
exports.deleteUser=(req,res,next)=>{
    const userId=req.params.Id;
    console.log(userId)
    Expense.findByPk(userId).then(user=>{
        return user.destroy();
      })
      
      .then(result=>{
        console.log('Destroyed Product');
        Expense.findAll().then(users=>{
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
