const image=document.querySelector('#img')
const name1=document.querySelector('#name')
const desc=document.querySelector('#desc')
const price=document.querySelector('#price')
const button=document.querySelector('#btn')
//lay gia tri - value
button.addEventListener('click',
(e)=>{
    //lay value image
    e.preventDefault();
    const imagevalue=image.value
    const name1value=name1.value
    const descvalue=desc.value
    const pricevalue=price.value
    //dong goi du lieu
    const product={
        img: imagevalue,
        name: name1value,
        desc: descvalue,
        price: pricevalue
    }
    const newTask = {
        content: 'Check out mockapi.io',
        completed: false,
      };
      
      fetch('https://6586d405468ef171392ed2c5.mockapi.io/sanpham/sanpham', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(product)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
        window.location='./index.html'
      }).catch(error => {
        // handle error
      })
}
)