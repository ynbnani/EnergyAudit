

mapboxgl.accessToken = 'pk.eyJ1IjoibmFuY2hhcmFpYWgiLCJhIjoiY2w3c3pocTIwMGJkdDN4czR6N29rdjVudCJ9.bJ3zVrmbtuqMucSN-CDBQQ';

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [80.6311277328565, 16.513956008634295], // starting position [lng, lat]
    zoom: 14, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});

var data_source = {
    "type": "FeatureCollection",
    "name": "dts_json",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "OBJECTID": 1, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV GOVERNORPET FEEDER", "FEEDER_ID": "301421140105", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130249", "Comment": "249" }, "geometry": { "type": "Point", "coordinates": [ 80.627094202170639, 16.512742773301085, 0.0 ] } },
    { "type": "Feature", "properties": { "OBJECTID": 2, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV GOVERNORPET FEEDER", "FEEDER_ID": "301421140105", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130254", "Comment": "254" }, "geometry": { "type": "Point", "coordinates": [ 80.627146689405521, 16.513204388317693, 0.0 ] } },
    { "type": "Feature", "properties": { "OBJECTID": 3, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV GOVERNORPET FEEDER", "FEEDER_ID": "301421140105", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130019", "Comment": "019" }, "geometry": { "type": "Point", "coordinates": [ 80.627385438529771, 16.512121745042073, 0.0 ] } },
    { "type": "Feature", "properties": { "OBJECTID": 4, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV GOVERNORPET FEEDER", "FEEDER_ID": "301421140105", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130022", "Comment": "022" }, "geometry": { "type": "Point", "coordinates": [ 80.627620336606142, 16.513247513066826, 0.0 ] } },
    { "type": "Feature", "properties": { "OBJECTID": 5, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV GOVERNORPET FEEDER", "FEEDER_ID": "301421140105", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130023", "Comment": "023" }, "geometry": { "type": "Point", "coordinates": [ 80.627643053809166, 16.513357664809686, 0.0 ] } },
    { "type": "Feature", "properties": { "OBJECTID": 6, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV GOVERNORPET FEEDER", "FEEDER_ID": "301421140105", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130021", "Comment": "021" }, "geometry": { "type": "Point", "coordinates": [ 80.628121548180701, 16.512759783834497, 0.0 ] } },
    { "type": "Feature", "properties": { "OBJECTID": 7, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV GOVERNORPET FEEDER", "FEEDER_ID": "301421140105", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130026", "Comment": "026" }, "geometry": { "type": "Point", "coordinates": [ 80.628013019950458, 16.512568422085, 0.0 ] } },
    { "type": "Feature", "properties": { "OBJECTID": 8, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV GOVERNORPET FEEDER", "FEEDER_ID": "301421140105", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130177", "Comment": "177" }, "geometry": { "type": "Point", "coordinates": [ 80.628180302631577, 16.512456119878379, 0.0 ] } },
    { "type": "Feature", "properties": { "OBJECTID": 9, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV ARANDALPET FEEDER", "FEEDER_ID": "301421140107", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130004", "Comment": "004" }, "geometry": { "type": "Point", "coordinates": [ 80.629562268495761, 16.512569416049114, 0.0 ] } },
    { "type": "Feature", "properties": { "OBJECTID": 10, "CIRCLE": "VIJAYAWADA", "DIVISION": "VIJ TOWN", "SUB_DIVISI": "D 2", "SUBSTATION": "33\/11KV CITY", "FEEDER_NAM": "11KV ARANDALPET FEEDER", "FEEDER_ID": "301421140107", "DTR_Pole_N": null, "DTR_Number": null, "DTR_Capaci": null, "DTR_Make": null, "DTR_Serial": null, "DTR_Phace": null, "DTR_Locati": null, "DTR_Struct": null, "STCode_or_": "301421130188", "Comment": "188" }, "geometry": { "type": "Point", "coordinates": [ 80.629633021424127, 16.512555145558842, 0.0 ] } },
        ]
    }

map.on('load', () => {
    map.addSource('dtrs', {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: data_source
            
        });
         
        map.addLayer({
        'id': 'dtr_layer',
        'type': 'circle',
        'source': 'dtrs',
        'paint': {
        'circle-radius': 4,
        'circle-stroke-width': 2,
        'circle-color': 'red',
        'circle-stroke-color': 'white'
        }
        });
});




var marker = new mapboxgl.Marker();
var coordinates
function add_marker (event) {
    // Define variables 
    let shortest_dist = 99999
    let dest_coord
    let route
    let dist_matrix

    console.clear()
    coordinates = event.lngLat;
    //   console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
    marker.setLngLat(coordinates).addTo(map); 
    start = [coordinates.lng, coordinates.lat]

    // Make an ajax call
    for(let i=0;i<data_source.features.length;i++){
        coord_list = data_source.features[i].geometry.coordinates;
        url =  `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${coord_list[0]},${coord_list[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
        $.ajax({
            type: "GET",
            url: url,
            crossDomain: true,
            async:false,
            success: function(data)
            {   
                // console.log(data.routes[0].distance)
                if(data.routes[0].distance < shortest_dist){
                    shortest_dist = data.routes[0].distance
                    dest_coord = coord_list
                    route = data.routes[0].geometry.coordinates
                }
            }
        });
    }
    // console.log(shortest_dist)
    console.log(start, shortest_dist, dest_coord, route);

    const geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
    };
    console.log(geojson)
    
    // if the route already exists on the map, we'll reset it using setData
    if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
    }
    // otherwise, we'll make a new request
    else {
        map.addLayer({
        id: 'route',
        type: 'line',
        source: {
            type: 'geojson',
            data: geojson
        },
        layout: {
            'line-join': 'round',
            'line-cap': 'round'
        },
        paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
        }
        });
    }
  // add turn instructions here at the end

}

map.on('click', add_marker);




