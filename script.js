const colorInput = document.querySelector('#color'),
      hex = document.querySelector('#hex')
      
    
      

colorInput.addEventListener('input',()=>{
    let color = colorInput.value;
    hex.innerHTML = color;
})