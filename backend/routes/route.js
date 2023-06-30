const express = require("express");

const LIST = require("../models/list.model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    
    const items = await LIST.find();
    res.json({ itemlist: items });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {data}=req.body
    const newItem = new LIST({heading:data});

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id',async (request,response)=>{
  try {
    console.log(request.params.id);
    const todoRef = await LIST.findById(request.params.id);

    const todo = await LIST.findOneAndUpdate(
        { _id: request.params.id },
        { done: !todoRef.done }
    )

   

    await todo.save();

    return response.status(200).json(todo);
} catch (error) {
    return response.status(500).json(error.message);
}
});

router.delete("/deleteitem/:id", async (req, res) => {
  try {
    const deletedItem = await LIST.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      res.status(404).json({ error: "Item not found" });
    } else {
      res.json(deletedItem);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/updateitem/:id", async (request, response) => {
  console.log("here");
  try {
    await LIST.findOneAndUpdate(
        { _id: request.params.id },
        { heading: request.body.data }
    )

    const todo = await LIST.findById(request.params.id);
    console.log(todo);

    return response.status(200).json(todo);
} catch (error) {
    return response.status(500).json(error.message);
}
});

module.exports = router;
