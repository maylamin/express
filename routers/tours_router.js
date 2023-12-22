const express = require('express')
const tourService = require('../services/tours_service')
const toursRouter = express.Router();
toursRouter.
    route('/')
    // .get(tourService.)
    .get(tourService.getAllTours)
    .post(tourService.checkbody,tourService.postNewTours);

toursRouter.
    route('/:id')
    .get(tourService.getTourById)
    .get(tourService.updateTourById)
    .get(tourService.deleteTourById)

module.exports=toursRouter;   

// toursRouter.param("id", (req, res, next, val) => {
//     console.log(`Tour id is ${val}`);
//     next();
//   });
toursRouter.param('id', tourService.checkId)
