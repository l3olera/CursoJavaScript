function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        img.src = 'img/foto_manha.jpg';
        document.body.style.background = '#EED1A7';
    }else if (hora >= 12 && hora <= 18){
        img.src = 'img/foto_tarde.jpg';
        document.body.style.background = '#8F5E54';
    }else {
        img.src = 'img/foto_noite.jpg';
        document.body.style.background = '#1E3666'
    }
}