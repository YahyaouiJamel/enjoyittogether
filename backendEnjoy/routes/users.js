
var express = require('express');
var router = express.Router();
var UserController=require('../Controllers/UserController');

router.put('/updateuser/:id_membre', UserController.UpdateUser);
/* Delete user */
router.delete('/removeuser/:id_membre', UserController.DeleteUser);
/* GET user by id  */
router.get('/user/:id_membre', UserController.GetUserByID);
/*GetAllUser*/
router.get('/fetch', UserController.GetAllUsers);


/*Register user */
router.post('/register',(req,res)=>{

  UserController.register(req.body.nom,req.body.prenom,req.body.cin,req.body.adresse,req.body.age,req.body.telephone,req.body.mail,req.body.genre,req.body.login,req.body.password)   
  .then(response=>res.status(200).json(response))
  .catch(err=>res.status(400).json(err))

});
/*login user*/
  router.post('/login',(req,res)=>{
    UserController.mail(req.body.mail,req.body.password)   
  .then(token=>res.status(200).json({token:token}))
  .catch(err=>res.status(400).json({err:err}))

 });


module.exports = router;
