var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_4107_1 = new ol.format.GeoJSON();
var features_4107_1 = format_4107_1.readFeatures(json_4107_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_1.addFeatures(features_4107_1);
var lyr_4107_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4107_1, 
                style: style_4107_1,
                interactive: true,
                title: '<img src="styles/legend/4107_1.png" /> 4107'
            });
var format_2320_2 = new ol.format.GeoJSON();
var features_2320_2 = format_2320_2.readFeatures(json_2320_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2320_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320_2.addFeatures(features_2320_2);
var lyr_2320_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2320_2, 
                style: style_2320_2,
                interactive: true,
                title: '<img src="styles/legend/2320_2.png" /> 2320'
            });
var format_2325_3 = new ol.format.GeoJSON();
var features_2325_3 = format_2325_3.readFeatures(json_2325_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2325_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2325_3.addFeatures(features_2325_3);
var lyr_2325_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2325_3, 
                style: style_2325_3,
                interactive: true,
    title: '2325<br />\
    <img src="styles/legend/2325_3_0.png" /> <br />\
    <img src="styles/legend/2325_3_1.png" /> 3680<br />\
    <img src="styles/legend/2325_3_2.png" /> 4101<br />\
    <img src="styles/legend/2325_3_3.png" /> 2320<br />'
        });
var format_3101_4 = new ol.format.GeoJSON();
var features_3101_4 = format_3101_4.readFeatures(json_3101_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_4.addFeatures(features_3101_4);
var lyr_3101_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_4, 
                style: style_3101_4,
                interactive: true,
    title: '3101<br />\
    <img src="styles/legend/3101_4_0.png" /> 4<br />\
    <img src="styles/legend/3101_4_1.png" /> 5<br />\
    <img src="styles/legend/3101_4_2.png" /> 6<br />\
    <img src="styles/legend/3101_4_3.png" /> 7<br />\
    <img src="styles/legend/3101_4_4.png" /> <br />'
        });
var format_3411P_5 = new ol.format.GeoJSON();
var features_3411P_5 = format_3411P_5.readFeatures(json_3411P_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3411P_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3411P_5.addFeatures(features_3411P_5);
var lyr_3411P_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3411P_5, 
                style: style_3411P_5,
                interactive: true,
                title: '<img src="styles/legend/3411P_5.png" /> 3411P'
            });
var format_5124_6 = new ol.format.GeoJSON();
var features_5124_6 = format_5124_6.readFeatures(json_5124_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_6.addFeatures(features_5124_6);
var lyr_5124_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124_6, 
                style: style_5124_6,
                interactive: true,
    title: '5124<br />\
    <img src="styles/legend/5124_6_0.png" /> 5101<br />\
    <img src="styles/legend/5124_6_1.png" /> 5102<br />\
    <img src="styles/legend/5124_6_2.png" /> <br />'
        });
var format_6101_7 = new ol.format.GeoJSON();
var features_6101_7 = format_6101_7.readFeatures(json_6101_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6101_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6101_7.addFeatures(features_6101_7);
var lyr_6101_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6101_7, 
                style: style_6101_7,
                interactive: true,
    title: '6101<br />\
    <img src="styles/legend/6101_7_0.png" /> 1000<br />\
    <img src="styles/legend/6101_7_1.png" /> 1001<br />\
    <img src="styles/legend/6101_7_2.png" /> <br />'
        });
var format_7101_8 = new ol.format.GeoJSON();
var features_7101_8 = format_7101_8.readFeatures(json_7101_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_7101_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7101_8.addFeatures(features_7101_8);
var lyr_7101_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_7101_8, 
                style: style_7101_8,
                interactive: true,
                title: '<img src="styles/legend/7101_8.png" /> 7101'
            });
var format_8100_9 = new ol.format.GeoJSON();
var features_8100_9 = format_8100_9.readFeatures(json_8100_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_8100_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8100_9.addFeatures(features_8100_9);
var lyr_8100_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_8100_9, 
                style: style_8100_9,
                interactive: true,
                title: '<img src="styles/legend/8100_9.png" /> 8100'
            });
var format_Planchas_10 = new ol.format.GeoJSON();
var features_Planchas_10 = format_Planchas_10.readFeatures(json_Planchas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Planchas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Planchas_10.addFeatures(features_Planchas_10);
var lyr_Planchas_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Planchas_10, 
                style: style_Planchas_10,
                interactive: true,
                title: '<img src="styles/legend/Planchas_10.png" /> Planchas'
            });
var format_Zona7_11 = new ol.format.GeoJSON();
var features_Zona7_11 = format_Zona7_11.readFeatures(json_Zona7_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona7_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona7_11.addFeatures(features_Zona7_11);
var lyr_Zona7_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zona7_11, 
                style: style_Zona7_11,
                interactive: true,
                title: '<img src="styles/legend/Zona7_11.png" /> Zona 7'
            });

lyr_OSMStandard_0.setVisible(true);lyr_4107_1.setVisible(true);lyr_2320_2.setVisible(true);lyr_2325_3.setVisible(true);lyr_3101_4.setVisible(true);lyr_3411P_5.setVisible(true);lyr_5124_6.setVisible(true);lyr_6101_7.setVisible(true);lyr_7101_8.setVisible(true);lyr_8100_9.setVisible(true);lyr_Planchas_10.setVisible(true);lyr_Zona7_11.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_4107_1,lyr_2320_2,lyr_2325_3,lyr_3101_4,lyr_3411P_5,lyr_5124_6,lyr_6101_7,lyr_7101_8,lyr_8100_9,lyr_Planchas_10,lyr_Zona7_11];
lyr_4107_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2320_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_CONSTRUCCION': 'TIPO_CONSTRUCCION', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_2325_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_USO_EDIFICACION': 'CODIGO_USO_EDIFICACION', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'ROTACION': 'ROTACION', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_3101_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUPERFICIE': 'ESTADO_SUPERFICIE', 'NUMERO_CARRILES': 'NUMERO_CARRILES', 'ACCESIBILIDAD': 'ACCESIBILIDAD', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'RuleID': 'RuleID', 'Override': 'Override', 'TempId': 'TempId', });
lyr_3411P_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FUNCION_PUENTE': 'FUNCION_PUENTE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'ROTACION': 'ROTACION', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_5124_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ESTADO_DRENAJE': 'ESTADO_DRENAJE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_6101_7.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'TALT': 'TALT', 'Tipo de curva': 'Tipo de curva', });
lyr_7101_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_8100_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CODIGO_NOMBRE': 'CODIGO_NOMBRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'NOMBRE_GEOGRAFICO': 'NOMBRE_GEOGRAFICO', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABLE': 'RESPONSABLE', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODIFICACION': 'FECHA_MODIFICACION', 'Override': 'Override', 'RuleID': 'RuleID', });
lyr_Planchas_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ESCALA': 'ESCALA', 'PLANCHA': 'PLANCHA', 'RESPONSABLE': 'RESPONSABLE', 'Override': 'Override', 'RuleID': 'RuleID', 'ESTADO': 'ESTADO', 'fid_2': 'fid_2', 'OBJECTID_2': 'OBJECTID_2', 'ESCALA_2': 'ESCALA_2', 'PLANCHA_2': 'PLANCHA_2', 'RESPONSABLE_2': 'RESPONSABLE_2', 'Override_2': 'Override_2', 'RuleID_2': 'RuleID_2', 'ESTADO_2': 'ESTADO_2', });
lyr_Zona7_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_4107_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_2320_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO_CONSTRUCCION': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_2325_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO_USO_EDIFICACION': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'ROTACION': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_3101_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'TIPO_VIA': 'Range', 'ESTADO_SUPERFICIE': 'TextEdit', 'NUMERO_CARRILES': 'TextEdit', 'ACCESIBILIDAD': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'RuleID': 'Range', 'Override': 'Binary', 'TempId': 'Range', });
lyr_3411P_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'FUNCION_PUENTE': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'ROTACION': 'TextEdit', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_5124_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ESTADO_DRENAJE': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'DISPERSION': 'TextEdit', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_6101_7.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'TALT': 'TextEdit', 'Tipo de curva': 'TextEdit', });
lyr_7101_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO_NOMBRE': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_8100_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO_NOMBRE': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'NOMBRE_GEOGRAFICO': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODIFICACION': 'DateTime', 'Override': 'Binary', 'RuleID': 'Range', });
lyr_Planchas_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'ESCALA': 'TextEdit', 'PLANCHA': 'TextEdit', 'RESPONSABLE': 'TextEdit', 'Override': 'Binary', 'RuleID': 'Range', 'ESTADO': 'TextEdit', 'fid_2': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'ESCALA_2': 'TextEdit', 'PLANCHA_2': 'TextEdit', 'RESPONSABLE_2': 'TextEdit', 'Override_2': 'Binary', 'RuleID_2': 'Range', 'ESTADO_2': 'TextEdit', });
lyr_Zona7_11.set('fieldImages', {'fid': '', 'id': 'TextEdit', });
lyr_4107_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2320_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_CONSTRUCCION': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_2325_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_USO_EDIFICACION': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'ROTACION': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_3101_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'TIPO_VIA': 'no label', 'ESTADO_SUPERFICIE': 'no label', 'NUMERO_CARRILES': 'no label', 'ACCESIBILIDAD': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'RuleID': 'no label', 'Override': 'no label', 'TempId': 'no label', });
lyr_3411P_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FUNCION_PUENTE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'ROTACION': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_5124_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ESTADO_DRENAJE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_6101_7.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'TALT': 'no label', 'Tipo de curva': 'no label', });
lyr_7101_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_NOMBRE': 'no label', 'SYMBOL': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_8100_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'CODIGO_NOMBRE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'NOMBRE_GEOGRAFICO': 'no label', 'PK_CUE': 'no label', 'CAMBIO': 'no label', 'RESPONSABLE': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODIFICACION': 'no label', 'Override': 'no label', 'RuleID': 'no label', });
lyr_Planchas_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ESCALA': 'no label', 'PLANCHA': 'no label', 'RESPONSABLE': 'no label', 'Override': 'no label', 'RuleID': 'no label', 'ESTADO': 'no label', 'fid_2': 'no label', 'OBJECTID_2': 'no label', 'ESCALA_2': 'no label', 'PLANCHA_2': 'no label', 'RESPONSABLE_2': 'no label', 'Override_2': 'no label', 'RuleID_2': 'no label', 'ESTADO_2': 'no label', });
lyr_Zona7_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', });
lyr_Zona7_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});