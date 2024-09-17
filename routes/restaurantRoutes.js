import express from 'express';
import Restaurant from '../schemaModels/restaurantSchema.js';

//Router is the function from expressthat provides the access to all CRUD operations
//It is a built-in middleware function in Express. It parses incoming request query parameters.

const router = new express.Router();

router.post("/menu", (req, res) => {
    const body = req.body;
    Restaurant.insertMany(body)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err));
});

router.get("/menu", (req, res) => {
    Restaurant.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).send("Error reading data"));
});


router.put("/menu/:id", (req,res) => {
    const dishId = req.params.id;
    const updatedData = req.body

    Restaurant.findByIdAndUpdate(dishId, updatedData, {new:true, runValidators:true})
    .then((data) => {
        if(!data) {
            return res.status(404).send({message:"Item not found"});
        }
        res.status(200).send({message:"Item updated successfully"})
    })
    .catch((err)=> res.status(500).send({message:"Error updating dish item", error:err}));
});


router.delete("/menu/:id", (req, res) => {
  const menuId = req.params.id;  // Get the ID from the URL

  Restaurant.findByIdAndDelete(menuId)
  .then((data) => {
      if (!data) {
          return res.status(404).send({ message: "Menu item not found" });
      }
      res.status(200).send({ message: "Menu item deleted successfully" });
  })
  .catch((err) => res.status(500).send({ message: "Error deleting menu item", error: err }));
});

export default router;
