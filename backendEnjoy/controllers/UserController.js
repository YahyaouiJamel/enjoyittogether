var db=require('../models')
var bcrypt=require('bcrypt');
var jwt=require('jsonwebtoken');


exports.GetAllUsers=(req,res)=>{
     db.membre_model.findAll().then((response)=>{
    res.status(200).send(response)}).catch((err)=>{
     res.status(400).send(err)
       })
 
       };
exports.GetUserByID=(req,res)=>{
      db.membre_model.findOne({where:{id_membre: req.params.id_membre}}).then((response)=>{
        res.status(200).send(response)}).catch((err)=>{
        res.status(400).send(err)
        })
       
       
        };

exports.DeleteUser=(req,res)=>{
      db.membre_model.destroy({where:{id_membre:req.params.id_membre}}).then((response)=>{
        res.sendStatus( 200 )}).catch((err)=>{
      res.status(400).send(err)
      })
  }

exports.UpdateUser=(req,res)=>{
    db.membre_model.update(req.body,{where:{id_membre:req.params.id_membre}}).then((response)=>{
      res.status(200).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
 
 
  }


exports.register=(nom,prenom,cin,adresse,age,telephone,mail,genre,login,password)=>{
    return new Promise((resolve,reject)=>{
    db.membre_model.count({where:{mail:mail}}).then(doc=>{
        if (doc!=0){
          reject("this email is used")
        }{
          bcrypt.hash(password,10).then(hashedpwd=>{
        
            db.membre_model.create({
              nom : nom,
              prenom : prenom,
              cin:cin,
              adresse:adresse,
              age:age,
              telephone: telephone,
              mail : mail,
              genre:genre,
              login:login,
              password : hashedpwd,
              
             }).then((response)=>resolve(response))
             .catch((err)=>reject(err))
            
          })
        
        }
        
         })
        })
}

const privateKey="this is private key iuygutycfvgbihgyuvcfj!!qiejfuhqnb?irfirfu"

exports.login=(mail,password)=>{
    return new Promise((resolve,reject)=>{
    db.membre_model.findOne({where:{mail:mail}}).then(membre_model=>{
        if (!membre_model){
          reject("invalid email and password")
        }else{
          bcrypt.compare(password,membre_model.password).then(same=>{
            if(same=true){
              let token=jwt.sign({id_membre:membre_model.id_membre,nom:membre_model.nom},privateKey,{
                expiresIn:"24h"
              })
              resolve({token})
            }else{
              reject("invalid email and password")
            }
          })
        }})
    
})}
