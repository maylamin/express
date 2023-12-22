const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config('./.env')
const userRouter = require('./routers/users_router.js')
const tourRouter = require('./routers/tours_router.js')
const middleware = require('./middleware/logger.js')

app.use(morgan('dev'))
app.use(middleware.mylogger)
app.use(express.json())

app.use(cors({
    origin:'*'
}));

app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/tours/:id',tourRouter);


app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});




























































