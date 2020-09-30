function convert(){

    let bin = document.getElementById('bin').value
    let dec = document.getElementById('dec').value
    

    if(bin.value === ''){
        alert('Infome um número Binário')
    }

    else if(bin.length > 8){
        alert('A quantidade de dígitos deve ser igual a 8')
    }
    bin.split('').map((char) => {
        if (char !== '0' && char !== '1'){
            alert('Infome um número Binário')}
        })
    dec = parseInt(bin, 2)
    document.getElementById('dec').value = dec;
    return false;

}