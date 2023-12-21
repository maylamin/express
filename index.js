const express = require('express')
const morgan = require('morgan')
const app = express()
const userRouter = require('./routers/users_router.js')
const tourRouter = require('./routers/tours_router.js')
const middleware = require('./middleware/logger.js')

app.use(morgan('dev'))
app.use(middleware.mylogger)
app.use(express.json())

app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/tours/:id',tourRouter);




// app.get('/user', (req, res) => {
//     res.status(200).json({
//         message: "Welcome from Mayla's users Server",

//     })
// })

// app
//     .route('/api/v1/users/register')
//     .post(userService.register)
// app
//     .route('/api/v1/users/login')
//     .post(userService.login)
// app
//     .route('/api/v1/users/:id')
//     .get(userService.getUserById)
//     .patch(userService.upDateUser)


























































app.listen(8000, '127.0.0.1', () => {
    console.log('Server is listening on port 8000');
});