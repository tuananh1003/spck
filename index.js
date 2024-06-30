const productlist=document.querySelector('.mockapi')
fetch('https://6586d405468ef171392ed2c5.mockapi.io/sanpham/sanpham', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(tasks => {
    // Do something with the list of tasks
    tasks.forEach((task)=>{
        const product=document.createElement('div')
        product.innerHTML=`
          <div class="card" style="width: 18rem; height: 30rem;">
            <img src=${task.img} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${task.name}</h5>
              <p class="card-text">${task.desc}</p>
              <p class="card-text">${task.price}</p>
              <a href="./xemngay.html" class="btn btn-primary">Xem Ngay</a>
            </div>
          </div>
        `
        productlist.appendChild(product)
    })
  }).catch(error => {
    // handle error
  })