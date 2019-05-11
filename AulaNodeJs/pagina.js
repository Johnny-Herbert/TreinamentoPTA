const divBody = document.querySelector('body');


saveValue = () =>{
    console.log(11)
    divBody.innerHTML += `
    <div>
        <p>${document.querySelector('#textoParaArmazenar').value}</p>
        <button onclick="removeItem()">Remove</button>
        <button onclick="removeItem()">Edit</button>
    </div>
    `;
}

removeItem = () => {
    
}