var botaoBuscar = document.querySelector("#buscarJSON");

botaoBuscar.addEventListener("click", ()=>{
    var inputGenerate = document.querySelector("#inputGenerate");
    var linkGenerate = inputGenerate.value;

    var inputToken = document.querySelector("#token");
    var token = inputToken.value;

    var link = linkGenerate.concat(token);

    var xhr = new XMLHttpRequest();

    
    xhr.open("GET", "https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=10979e87af320ec4818af0c8e93fde97f95ffde7");

    xhr.addEventListener("load", ()=>{  
        var erroAjax = document.querySelector("#erro-ajax");
        
        if(xhr.status == 200){
            var answerJSON = JSON.parse(xhr.responseText); 
            
            answerJSON.decifrado = decifra(answerJSON.cifrado, answerJSON.numero_casas)
            answerJSON.resumo_criptografico = criaHash(answerJSON.decifrado);

            console.log(answerJSON);

            
        }else{
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send();
});