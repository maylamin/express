exports.mylogger = (res,req,next)=>{
    req.requestTime = new Date().toISOString();
    console.log('hello from middleware');
    next();
}