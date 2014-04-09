Ext.define('SenchaSample.model.Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{
            name: 'name',
            type: 'string'
        }, {
            name: 'url',
            type: 'string'
        }]
    }
});