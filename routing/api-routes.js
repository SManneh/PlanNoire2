// Import in our db models
const db = require('../models');

module.exports = function(app) {

    // API Requests for /api/product
    // Below code controls what happens when a request is made to /api/vendors
  
    // GET Request
    // Responds with all the vendors
    app.get('/api/vendors', function(req, res) {
      console.log("lol all")
      db.vendors.find({}).then(function(rows) {
        res.json(rows)
      }).catch(function(error) {
        res.json({ error: error });
      });
    });

    
  
    app.get('/api/vendors/:vendorCategory', function(req, res){
      console.log("lol", req.params.vendorCategory)
      db.user.find({vendorCategory:req.params.vendorCategory})
      .then(function(data){
        console.log(data)
          res.json(data);
      }).catch(function(error){
          res.json({ error: error });
      })
      });


      app.get("/api/vendor/:id", function(req,res){
        db.vendors.find({where:{id:req.params.id}})
        .then(function(response){
          console.log(response)
          res.json(response);
        }).catch(function(error){
          res.json({error:error});
        })
      
      })

      app.post('/api/vendors', function(req,res) {
        db.vendors.create(req.body).then(function(response){
          console.log(response)
          res.json(response);
        }).catch(function(error){
          res.json({error:error});
        })
      });

      app.get('/api/user', function(req, res) {
        db.user.find({isApproved:true}).then(function(rows) {
          res.json(rows)
        }).catch(function(error) {
          res.json({ error: error });
        });
      });


      app.post('/api/user', function(req,res) {
        db.user.create(req.body).then(function(response){
          console.log(response)
          res.json(response);
        }).catch(function(error){
          res.json({error:error});
        })
      });

      app.post("/api/login",function(req,res){
        console.log(req.body.email)
        db.user.findOne({email:req.body.email}).then(function(response){
          console.log(response)
          res.json(response)
        })
      })

      app.put('/api/user/:id', function(req,res){
        db.user.update({_id:req.params.id}, req.body).then(function(response){
          res.json(response)
        })
      })
      
  
      app.delete('/api/user/:id', function(req,res){
        db.user.deleteOne({_id:req.params.id}).then(function(response){
          res.json(response)
        })
      })

      app.post('/api/admin', function(req,res) {
        db.admin.create(req.body).then(function(response){
          console.log(response)
          res.json(response);
        }).catch(function(error){
          res.json({error:error});
        })
      });
          

      app.post("/api/admin/login",function(req,res){
        console.log(req.body.email)
        db.admin.find({}).then(function(response){
          console.log(response)
          res.json(response)
        })
      })

      app.get("/api/admin/approved", function(req, res){
        db.user.find({isApproved:false}).then(function(response){
          res.json(response)
        }).catch(function(err){
          res.json(err);
        })
      })

}