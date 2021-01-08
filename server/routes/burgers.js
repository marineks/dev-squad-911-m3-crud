const express = require("express");
const router = express.Router();
const Burger = require("../models/Burger");

// http://localhost:4000/api/burgers
router.get("/", (req, res, next) => {
  // Get all the burgers
  Burger.find()
    .then((burgerDocuments) => {
      res.status(200).json(burgerDocuments);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/burgers/{some-id}
router.get("/:id", (req, res, next) => {
  //Get one specific burger
  Burger.findById(req.params.id)
    .then((burgerDocument) => {
      res.status(200).json(burgerDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/burgers/{some-id}
router.patch("/:id", (req, res, next) => {
  // Update a specific burger
  Burger.findByIdAndUpdate(req.params.id, req.body)
    .then((burgerDocument) => {
      res.status(200).json(burgerDocument);
      // There's a trap !
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/burgers
router.post("/", (req, res, next) => {
  // Create a burger
  Burger.create(req.body)
    .then((burgerDocument) => {
      res.status(201).json(burgerDocument);
    })
    .catch((error) => {
      next(error);
    });
});

// http://localhost:4000/api/burgers/{some-id}
router.delete("/:id", (req, res, next) => {
  // Deletes a burger
  Burger.findByIdAndDelete(req.params.id)
    .then((burgerDocument) => {
      // res.sendStatus(204)
      res.status(204).json({
        message: "Successfuly deleted !",
      });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
