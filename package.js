Package.describe({
    'summary': "Google Maps wrapper with gmaps.js plugin",
    'version': "0.0.1",
    'git': 'https://github.com/vazco/meteor-vazco-maps.git',
    "name": 'vazco:maps'
});

Package.onUse(function (api) {
    api.addFiles(['vazco-maps.js'], 'client');
    api.addFiles(['markerclusterer.js'], 'client');
    api.addFiles(['templates.js','vazco-maps.js'], 'client');
    api.export('VazcoMaps');
});