


var map = L.map('map', {
            center: [47.5162, 14.5501], // Centered on Austria
            zoom: 7,
            timeDimension: true,
            timeDimensionControl: true,
            timeDimensionControlOptions: {
                autoPlay: false,
                loopButton: true,
                timeSliderDragUpdate: true,
                playerOptions: {
                    transitionTime: 1000,
                    loop: true,
                    startOver: true
                }
            }
        });

        var tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            maxZoom: 18
        }).addTo(map);

        var project1Icon = L.icon({
            iconUrl: 'img/GAMS-Logo.png', // Relative path to the custom icon
            iconSize: [48, 48], // Size of the icon
            iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
            popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
            className: 'custom-icon' // Custom class for styling
        });
        
        var project2Icon = L.icon({
            iconUrl: 'img/m3r-image.jpg', // Relative path to the custom icon
            iconSize: [48, 48], // Size of the icon
            iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
            popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
            className: 'custom-icon' // Custom class for styling
        });

        var projectData = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [15.4395, 47.0707] // Graz
                    },
                    "properties": {
                        "time": "2020-02-01 0:00",
                        "name": "Project1",
                        "icon": project1Icon
                    }
                },{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [16.368419682344864, 48.198794021516605] // TU Wien
                    },
                    "properties": {
                        "time": "2022-01-01 0:00",
                        "name": "M3R-Multimodal Manuscript Representation",
                        "icon": project2Icon
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [11.4041, 47.2692] // Innsbruck
                    },
                    "properties": {
                        "time": "2024-06-18 0:00",
                        "name": "Project3",
                        "icon": project1Icon
                    }
                }
            ]
        };

        var geojsonLayer = L.geoJson(projectData, {
            pointToLayer: function (feature, latlng) {
                return L.marker(latlng, { icon: feature.properties.icon });
            },
            onEachFeature: function (feature, layer) {
                layer.bindPopup(feature.properties.name);
            }
        });

        var timeDimensionLayer = L.timeDimension.layer.geoJson(geojsonLayer, {
            updateTimeDimension: true,
            updateTimeDimensionMode: 'replace',
            addlastPoint: true
        });

        timeDimensionLayer.addTo(map);
        
        
        
        
        