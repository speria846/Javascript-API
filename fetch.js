function getproducts(){
    fetch('localhost:5000/products')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getproducts()
