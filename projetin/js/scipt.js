document.querySelector('#olho').addEventListener('click', ()=>{
    

    if ( document.getElementById('senha').type == 'password') {
    
    
        document.getElementById('olho').src = 'img/olhoAberto.png'
        document.getElementById('senha').type = 'text' 
        
        
    } else {
    
        
        document.getElementById('olho').src = 'img/olhoFechado.png'
        document.getElementById('senha').type = 'password' 
    }
})

document.getElementById('btn').addEventListener('click', ()=>{

    validacaoTec = (document.getElementById('login').value == 'TECNICO' && document.getElementById('senha').value == '123TEC');
    validacaUSER = (document.getElementById('login').value == 'USER' && document.getElementById('senha').value == '123USER');

    if (validacaoTec || validacaUSER) {
        if (validacaoTec == true) {
            window.location.href = 'html/tecnico.html'
        } else {
            window.location.href = 'html/user.html'            
        }
    } else {
        document.getElementById('login').value = ''
        document.getElementById('senha').value = ''
        alert('LOGIN OU SENHA INVÁLIDOS')
    }
})