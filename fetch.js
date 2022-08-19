
const products = document.getElementById("products");
const fruList = document.getElementById("fruList");
const vegList = document.getElementById("vegList");

async function getobjects(item,element){
  const response = await fetch("http://localhost:5000/"+item).then((response)=>{
   return response.json();
   }).then((data)=>{ data.forEach((product) => {
     const li = document.createElement("li");
     li.innerHTML = product["name"].concat("<br/>").concat(product["category"]);
     element.appendChild(li);
   });
 })
}

//Products
getobjects("products",products);

//fruits
getobjects("products/fruits",fruList);

//vegetables
getobjects("products/vegetables",vegList);
