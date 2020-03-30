function backgroundchange() {
    var agora = new Date();
    var hora = agora.getHours;
    if (hora < 12) {
        document.body.style.backgroundColor = 'yellow';
    } else if (hora <= 18) {
        document.body.style.backgroundColor = 'orange';
    } else {
        document.body.style.backgroundColor = 'grey'
    }
}
function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var resultado = document.getElementById("res");
    var textano = document.getElementById("txtano");
    var fano = Number(txtano.value);
    var idade = ano - fano;

    if (fano > ano || fano.lenght == 0) {
        alert('[ERRO] Por favor, digite um ano valido!');
    } else {
        var fsex = document.getElementsByName("radsex");
        var genero = '';
        var img = document.createElement('img');
        img.getAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'um Homem';
            if (idade >= 0 && idade <= 10) {
                //bebe
                img.setAttribute('src', 'images/foto-bebe-m.png');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'images/foto-jovem-m.png');
            }
            else if (idade < 50) {
                img.setAttribute('src', 'images/foto-adulto-m.png');
                //adulto
            } else {
                img.setAttribute('src', 'images/foto-idoso-m.png');
                //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'uma Mulher';
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'images/foto-bebe-f.png');
                //bebe
            } else if (idade < 21) {
                img.setAttribute('src', 'images/foto-jovem-f.png');
                //jovem
            }
            else if (idade < 50) {
                img.setAttribute('src', 'images/foto-adulto-f.png');
                //adulto
            } else {
                img.setAttribute('src', 'images/foto-idoso-f.png');
                //idoso
            }
        }
        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} com idade de ${idade} anos`;
        resultado.appendChild(img);
    }
}