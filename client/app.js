const newCarBtn = document.getElementById('generateCar')
newCarBtn.addEventListener('click', ()=>{
    axios
    .get('http://localhost:5000/cars')
    .then(response , ()=>{
        let randomCar = Math.floor(Math.random() * response.data.length)
        renderNewCar(response.data[randomCar])
    })
});


const renderNewCar = (dataArr) =>{
    const mainImage = document.getElementById('mainImage')
    mainImage.style.background = `url('${dataArr.location}')`
}