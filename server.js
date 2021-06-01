// 1.) we also require express
//2.) and routes from both the api and notes html
//3.) requirement of the port server
const express= require('express').Router();
const apiRoutes= require('./routes/apiRoutes');
const htmlRoutes= require('./routes/htmlRoutes')
const PORT= process.env.PORT||3000;

//we need to initialize the app
const app =express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));