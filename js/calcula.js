var alfabetoReferencia = "abcdefghijklmnopqrstuvwxyz";

function decifra(mensagem, indice){
    if(indice == 0) {
        System.out.println("Indice da Criptografia: " + indice);
        return mensagem;
    }
    
    var decifrado = "";
    var tamanhoMsg = mensagem.length;
    var tamanhoReferencia = alfabetoReferencia.length;
    var aux;
    
    for(var i=0; i<tamanhoMsg; i++) {
        var auxIndice = indice;
        var naoEhLetra = true;										
        for(var j=tamanhoReferencia-1; j>0; j--) {
            aux=j-1;																						//aux=25 (tamanho do alfabeto)
            if(mensagem.charAt(i)==alfabetoReferencia.charAt(aux)) {			
                while(auxIndice>0) {											
                    aux--;
                    auxIndice--;
                    
                    if(aux<0) {																			//controla para q a repetição passe de 'a' >> 'z'
                        aux=tamanhoReferencia-1;
                    }																							//if verifica se o caracter da vez não eh 'letra'
                    if(auxIndice==0) {
                        decifrado +=alfabetoReferencia.charAt(aux);
                        naoEhLetra = false;
                        break;
                    }
                }
            }
        }
        if(naoEhLetra) {
            decifrado +=mensagem.charAt(i);
        }
    }
    
    return decifrado;
}

function criaHash(mensagem){
    var hash = CryptoJS.SHA1(mensagem);
    return hash.toString(CryptoJS.enc.Base64);
}