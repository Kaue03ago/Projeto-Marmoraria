function initMap() {
    var location = { lat: -23.55052, lng: -46.633308 }; // Coordenadas de exemplo para São Paulo, SP
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function toggleMenu() {
    var menuContent = document.getElementById('menuContent');
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
    } else {
        menuContent.style.display = 'block';
    }
}

// Fechar o menu se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.hamburger-menu')) {
        var menuContent = document.getElementById('menuContent');
        if (menuContent.style.display === 'block') {
            menuContent.style.display = 'none';
        }
    }
};
