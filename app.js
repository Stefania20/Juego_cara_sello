//Instancias

const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnCara = document.getElementById('btn-cara');
const btnSello = document.getElementById('btn-sello');

//Opciones
let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;

//Imagenes que se van a mostar
const imagenes = [
    {
        name: "Cara",
        url: "img/euro.png" 
    },
    {
        name: "Sello",
        url: "img/moneda.png" 
    }
];


//Opcion jugador
function iniciar(){
    seccionBatalla.style.display = 'none';
};

btnCara.addEventListener('click', function(){
    opcionJugador = "Cara";
    opPc();
});

btnSello.addEventListener('click', function(){
    opcionJugador = "Sello";
    opPc();
});



//Opcion computador
function opPc(){
    var aleaorio = nAleatorio();

    if(aleaorio == 0){
        opcionPc = "Cara";
    }else if(aleaorio == 1){
        opcionPc = "Sello";
    }

    batalla();

};

//Juego
function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "Empate";
    }else if(opcionJugador == "Cara" && opcionPc == "Sello"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(opcionJugador == "Sello" && opcionPc == "Cara"){
        msjBatalla.innerHTML = "Ganaste!";
    }else{
        msjBatalla.innerHTML = "Perdiste :(";
    };

    addImagenes();

}


function nAleatorio(){
    let n = Math.floor(Math.random() * 2);
    return n;
}


function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };


    seccionBatalla.style.display = 'flex';
    
};


window.addEventListener('load', iniciar);