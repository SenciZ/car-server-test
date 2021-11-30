const newCarBtn = document.getElementById('generateCar')

newCarBtn.addEventListener('click', ()=>{
    axios
    .get('http://localhost:5000/api/cars')
    .then(response => {
        let randomCar = Math.floor(Math.random() * response.data.length)
        console.log(response.data)
        renderNewCar(response.data[randomCar])
    })
});


const renderNewCar = (dataArr) =>{
    const mainImage = document.getElementById('mainImage')
    const carDetails = document.getElementById("carDetails")
    carDetails.textContent = dataArr.name;
    mainImage.style.background = `url('${dataArr.location}')`;
    mainImage.style.backgroundSize='cover'
    mainImage.style.backgroundPosition="center"
}

