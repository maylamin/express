const express = require('express')
const tourService = require('../services/tours_service')
const toursRouter = express.Router();
toursRouter.
    route('/')
    .get(tourService.getAllTours)
    .post(tourService.postNewTours);

toursRouter.
    route('/:id')
    .get(tourService.getTourById)
    .get(tourService.updateTourById)
    .get(tourService.deleteTourById)
module.exports=toursRouter;    
