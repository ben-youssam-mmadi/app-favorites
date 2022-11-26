function masquer_div(id){
    if (document.getElementById(id).style.display == 'none'){
        document.getElementById(id).style.display = 'flex';
    }
}

function fermer_div(id){
    if (document.getElementById(id).style.display == 'flex'){
        document.getElementById(id).style.display = 'none';
    }
}

function opacity1(id){
    document.getElementById(id).style.opacity = '0.2';
}
function opacity2(id){
    document.getElementById(id).style.opacity = '1';
}

