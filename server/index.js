const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())


// const cars = [
//     {name: "Yellow Mercedes Benz", location: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},

//     {name: "Gray Lamborghini Diablo", location: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},

//     {name: "Yellow Ferrari 458 California", location: 'https://images.pexels.com/photos/3954441/pexels-photo-3954441.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},

//     {name: "Cooper Chevrolet Corvete Z06", location: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
// ]

app.get('/api/cars', (req, res)=>{

    const cars = [
        {name: "Yellow Mercedes Benz", location: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    
        {name: "Gray Lamborghini Diablo", location: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
    
        {name: "Yellow Ferrari 458 California", location: 'https://images.pexels.com/photos/3954441/pexels-photo-3954441.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    
        {name: "Cooper Chevrolet Corvete Z06", location: 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'},
    ];


    res.status(200).send(cars)
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})