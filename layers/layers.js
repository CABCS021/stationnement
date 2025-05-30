var wms_layers = [];

var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://data.geopf.fr/wms-r?VERSION%3D1.3.0",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage.HR",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortho 20 cm',
                            popuplayertitle: 'Ortho 20 cm',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_0, 0]);

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_stationnement_2 = new ol.format.GeoJSON();
var features_stationnement_2 = format_stationnement_2.readFeatures(json_stationnement_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_stationnement_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stationnement_2.addFeatures(features_stationnement_2);
var lyr_stationnement_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_stationnement_2, 
                style: style_stationnement_2,
                popuplayertitle: 'stationnement',
                interactive: true,
    title: 'stationnement<br />\
    <img src="styles/legend/stationnement_2_0.png" /> bleue<br />\
    <img src="styles/legend/stationnement_2_1.png" /> orange<br />\
    <img src="styles/legend/stationnement_2_2.png" /> rouge<br />\
    <img src="styles/legend/stationnement_2_3.png" /> verte<br />' });
var format_zonepitonne_3 = new ol.format.GeoJSON();
var features_zonepitonne_3 = format_zonepitonne_3.readFeatures(json_zonepitonne_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonepitonne_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonepitonne_3.addFeatures(features_zonepitonne_3);
var lyr_zonepitonne_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonepitonne_3, 
                style: style_zonepitonne_3,
                popuplayertitle: 'zone piétonne',
                interactive: false,
                title: '<img src="styles/legend/zonepitonne_3.png" /> zone piétonne'
            });
var format_parking_4 = new ol.format.GeoJSON();
var features_parking_4 = format_parking_4.readFeatures(json_parking_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parking_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parking_4.addFeatures(features_parking_4);
var lyr_parking_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parking_4, 
                style: style_parking_4,
                popuplayertitle: 'parking',
                interactive: true,
    title: 'parking<br />\
    <img src="styles/legend/parking_4_0.png" /> gratuit<br />\
    <img src="styles/legend/parking_4_1.png" /> payant<br />' });
var format_horodateur_5 = new ol.format.GeoJSON();
var features_horodateur_5 = format_horodateur_5.readFeatures(json_horodateur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_horodateur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_horodateur_5.addFeatures(features_horodateur_5);
cluster_horodateur_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_horodateur_5
});
var lyr_horodateur_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_horodateur_5, 
                style: style_horodateur_5,
                popuplayertitle: 'horodateur',
                interactive: false,
                title: '<img src="styles/legend/horodateur_5.png" /> horodateur'
            });

lyr_Ortho20cm_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_stationnement_2.setVisible(true);lyr_zonepitonne_3.setVisible(true);lyr_parking_4.setVisible(true);lyr_horodateur_5.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_OSMStandard_1,lyr_stationnement_2,lyr_zonepitonne_3,lyr_parking_4,lyr_horodateur_5];
lyr_stationnement_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'url': 'url', 'lieu': 'lieu', 'horodateur': 'horodateur', 'payantes': 'payantes', 'gig_gic': 'gig_gic', 'depose_mn': 'depose_mn', 'livraison': 'livraison', 'zone': 'zone', });
lyr_zonepitonne_3.set('fieldAliases', {'nom_1_gauc': 'nom_1_gauc', });
lyr_parking_4.set('fieldAliases', {'fid': 'fid', 'nom': 'nom', 'places': 'places', 'payant_gratuit': 'payant_gratuit', 'comment': 'comment', 'url': 'url', });
lyr_horodateur_5.set('fieldAliases', {'num': 'num', 'adr': 'adr', 'zone': 'zone', 'url': 'url', });
lyr_stationnement_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'url': '', 'lieu': 'TextEdit', 'horodateur': 'Range', 'payantes': 'Range', 'gig_gic': 'Range', 'depose_mn': 'Range', 'livraison': 'Range', 'zone': 'ValueMap', });
lyr_zonepitonne_3.set('fieldImages', {'nom_1_gauc': '', });
lyr_parking_4.set('fieldImages', {'fid': 'TextEdit', 'nom': 'TextEdit', 'places': 'Range', 'payant_gratuit': 'ValueMap', 'comment': 'TextEdit', 'url': '', });
lyr_horodateur_5.set('fieldImages', {'num': 'TextEdit', 'adr': 'TextEdit', 'zone': 'TextEdit', 'url': '', });
lyr_stationnement_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'url': 'no label', 'lieu': 'no label', 'horodateur': 'hidden field', 'payantes': 'inline label - visible with data', 'gig_gic': 'inline label - visible with data', 'depose_mn': 'inline label - visible with data', 'livraison': 'inline label - visible with data', 'zone': 'inline label - visible with data', });
lyr_zonepitonne_3.set('fieldLabels', {'nom_1_gauc': 'no label', });
lyr_parking_4.set('fieldLabels', {'fid': 'hidden field', 'nom': 'no label', 'places': 'inline label - visible with data', 'payant_gratuit': 'no label', 'comment': 'no label', 'url': 'no label', });
lyr_horodateur_5.set('fieldLabels', {'num': 'no label', 'adr': 'no label', 'zone': 'no label', 'url': 'no label', });
lyr_horodateur_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});