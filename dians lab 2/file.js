/*
function searchGalleries() {
    var input = document.getElementById('searchBar').value.toLowerCase();

    // Example of clearing previous search results, implement according to your setup
    // clearMapMarkers();

    fetch('reduced5.geojson')
        .then(response => response.json())
        .then(data => {
            const features = data.features;
            const filteredFeatures = features.filter(feature =>
                feature.properties.name && feature.properties.name.toLowerCase().includes(input)
            );

            filteredFeatures.forEach(feature => {
                if (feature.geometry && feature.geometry.type === "Point") {
                    const [lng, lat] = feature.geometry.coordinates;
                    L.marker([lat, lng]).addTo(map)
                        .bindPopup(feature.properties.name);
                }
            });

            if (filteredFeatures.length === 0) {
                alert('No galleries found matching your search.');
            }
        });
}*/
