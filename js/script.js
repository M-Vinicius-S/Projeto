const dropLista = document.querySelectorAll(".lista select"),
getButton = document.querySelector("form button");


for (let i = 0; i < dropLista.length; i++) {
    for(currency_code in country_code){
        let selected;
        if(i ==0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code == "BRL" ? "selected" : "";
        }
        
        let optionTag = `<option value="${currency_code}">${currency_code}</option>`;
        dropLista[i].insertAdjacentHTML("beforeend", optionTag);
    }
}

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getcambio();
});
function getcambio(){
    const valor = document.querySelector(".valor input");
    let valorVal = valor.value;
    if(valorVal == "" || valorVal =="0"){
        valor.value = "1";
        valorVal = 1;
    }
    let url = ``
}