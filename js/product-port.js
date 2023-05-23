let data = [
    {
        id: 1,
        title: "Rice 1",
        scr: "p-img/grain-cereals Indrayani Rice (White).jpg",
        sub: "Indrayani Rice (White)",
        dis: "'Ambemohar is low-yielding compared to other varieties of rice.'",
    },
    {
        id: 2,
        title: "Rice 2",
        scr: "p-img/Dals-Pulses-Green Peas.jpg",
        sub: "Indrayani Rice (White) 1",
        dis: "'TAlha",
    },
    {
        id: 3,
        title: "Rice 3",
        scr: "p-img/grain-cereals Indrayani Rice (White).jpg",
        sub: "Indrayani Rice (White) 2",
        dis: "Prince",
    },

]

let buyFunc = (event) => {
    let id = this[event.target.id];
    console.log(id);
} 

for (let index = 0; index < data.length ; index++) {
    let pc = document.getElementById("ProductCard").innerHTML += `
    <div class="col-lg-4 col-md-6">
        <div class="p-card card mb-3">
            <img class="card-img-top" src="${data[index].scr}" height="350"
                alt="Indrayani Rice (White)">
            <div class="product-detail">
                <h5 class="card-title heading text-center">${data[index].title}</h5>
                <span class="subheading">${data[index].sub}</span>
                <blockquote>
                    <p>${data[index].dis}</p>
                </blockquote>
                <button type="button" onClick="buyFunc" id="${data.id}" class="btn btn-outline-success">BUY NOW</button>
            </div>
        </div>
    </div>
    `

}
