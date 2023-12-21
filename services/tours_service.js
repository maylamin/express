const fs = require('fs');
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.getAllTours = (req,res)=>{
    res.status(200).json({
        status: "success",
        resquestAT : req.resquestTime,
        result: tours.length,
        data: tours,
    })
}

exports.postNewTours=(req,res)=>{
    const newTour = {
        id: tours.length,
        ...req.body
    };
    tours.push(newTour);
    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        (err) => {
            if (err) {
                return res.status(500).json({
                    status: 'fail',
                    message: 'something is wrong'

                })
            }
            console.log(err),
                res.status(201).json({
                    status: 'success',
                    message: "Data has been added successfully..."
                })
        })

}

exports.getTourById=(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id)
    const tour = tours.find((tour) => tour.id === id);
    if (tour) {
        return res.status(200).json({
            status: 'success',
            data: tour,
        })
    }
    res.status(200).json({
        status: 'success',
        message: 'Not Found That id.',
        data: []
    })

}


exports.updateTourById=(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id)
    const tour = tours.find((tour) => tour.id === id);
    const UpdateId = req.body

    if (!tour) {
        res.status(200).json({
            status: 'success',
            message: 'Not found that Id',
            data: []
        })
        
    }
    const updatedTour = tours.map((tour)=>{
        if (tour.id===id){
            return {...tour,...UpdateId};
        }
    return tour;
    })
    fs.writeFile(`${__dirname}/../dev-data/data/tours-simple.json`, JSON.stringify(updatedTour), (err) => {
        if (err){
            res.status(500).json({
                status: 'fail',
                message: 'Something is wrong .'
            })
        }
        res.status(200).json({
            status: 'success',
            message: "Data has been updated successfully...",
            data:tour
        })

    })
}


exports.deleteTourById=(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id)
    const tour = tours.find((tour) => tour.id === id);
  

    if (!tour) {
        res.status(200).json({
            status: 'success',
            message: 'Not found that Id',
            data: []
        })

    }

  
}

