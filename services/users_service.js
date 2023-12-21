const fs = require('fs');
const { stringify } = require('querystring');
const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`));

exports.getAllusers = (req, res) => { // all users datas
    res.status(200).json({
        status: "success",
        result: users.length,
        data: users,
    })
}

exports.login = (req,res)=>{
    const {email,password}= req.body;
    const user = users.find((el)=>el.email === email);
    if (!user){
        return res.status(200).json({
            status:'fail',
            message : 'User not found',
        })
    }
    if (user.password != password){
        return res.status(200).json({
            status:'fail',
            message : 'User not found',
        })
    }
    res.status(200).json({
        status:'succes',
        data : user
    })
}

exports.register = (req, res) => {// =============login and register 
    const newUser = {
        id: users.length,
        ...req.body
    };
    users.push(newUser);
    fs.writeFile(`${__dirname}/../dev-data/data/users.json`,
        JSON.stringify(users),
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
                    message: "Register successfully..."
                })
        })

}

exports.getUserById = (req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id)
    // const {id }= req.body;


    
    const oneuser = users.find((user) => user._id === id);
    if (!oneuser) {
        return res.status(200).json({
            status: 'fail',
            message: 'Not Found That id.',
            data: [],
        })
    }
    res.status(200).json({
        status: 'success',
      
        data: oneuser
    })

}

exports.upDateUser=(res,req)=>{
    console.log(req.params);
    const id = parseInt(req.params.id)
    const user = users.find((user)=> user.id===id);
    const UpdateId = req.body
    if (!user){
        res.status(200).json({
            status:'success',
            message:'Not Found That Id ',
            data : []
        })
    }
    const updatedUser = users.map((user)=>{
        if (user.id===id){
            return {...user,...UpdateId};
        }
    return user;
    })
    fs.writeFile(`${__dirname}/../dev-data/data/users.json`, JSON.stringify(updatedTour), (err) => {
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


