var map = document.querySelector('#map');
var paths = map.querySelectorAll('.map-image a');
var links = map.querySelectorAll('.map-list a');

// forEach Polyfill
if (NodeList.prototype.forEach === undefined) {
     NodeList.prototype.forEach = function(callback) {
        [].forEach.call(this, callback);
     }
}

var activateArea = function (id) {
    map.querySelectorAll('.active').forEach(function (item) {
        item.classList.remove('active');
    });

    if (id !== undefined) {
        document.querySelector('#country-'+ id).classList.add('active');
        document.querySelector('#list-'+ id).classList.add('active');
    }
}

paths.forEach(function (path) {
    path.addEventListener('mouseenter', function() {
        var id = this.id.replace('country-', '');
        activateArea(id);
    });
});

links.forEach(function (link) {
    link.addEventListener('mouseenter', function() {
        var id = this.id.replace('list-', '');
        activateArea(id);
    });
});

map.addEventListener('mouseover', function() {
    activateArea();
})

