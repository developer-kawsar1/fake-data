fetch('data.json')
.then(res=>res.json())
.then(data=>{
  for(single of data){
    var div=document.createElement('div');
    div.classList.add('mydiv')
    div.innerHTML+=`
    <p>${single.name} </p>
      <img src="${single.img}" alt="">
    `
    document.body.appendChild(div)
    
  }
})
