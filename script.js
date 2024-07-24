let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=200){
        let habilidades = document.getElementsByClassName("progreso");
        // habilidades[0].classList.add("javascript");
        // habilidades[1].classList.add("htmlcss");
        // habilidades[2].classList.add("photoshop");
        // habilidades[3].classList.add("wordpress");
        // habilidades[4].classList.add("drupal");
        // habilidades[5].classList.add("comunicacion");
        // habilidades[6].classList.add("trabajo");
        // habilidades[7].classList.add("creatividad");
        // habilidades[8].classList.add("dedicacion");
        // habilidades[9].classList.add("proyect");
        // habilidades[10].classList.add("proyect");
        // habilidades[11].classList.add("proyect");
        // habilidades[12].classList.add("proyect");
        // habilidades[13].classList.add("proyect");

        habilidades[0].classList.add("CC");
        habilidades[1].classList.add("Matlab");
        habilidades[2].classList.add("Solidworks");
        habilidades[3].classList.add("Labview");
        habilidades[4].classList.add("Dialux");
        habilidades[5].classList.add("Winlens");
        habilidades[6].classList.add("Proteus");
        habilidades[7].classList.add("Oceanview");
        habilidades[8].classList.add("MicroC");
        habilidades[9].classList.add("Comunication");
        habilidades[10].classList.add("Teamworker");
        habilidades[11].classList.add("Organized");
        habilidades[12].classList.add("Dedication");
        habilidades[13].classList.add("Punctuality");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 