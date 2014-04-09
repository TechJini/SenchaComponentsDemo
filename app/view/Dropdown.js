Ext.define('SenchaSample.view.Dropdown', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Select',

    ],
    id: 'dropdown',
    config: {
        title:'Dropdown',
        items: [{
            xtype: 'selectfield',
            name: 'dropdown',
            label: 'Dropdown',
            options: [{
                text: 'Sencha Touch',
                value: 'senchatouch'
            }, {
                text: 'Kendo',
                value: 'kendo'
            }, {
                text: 'PhoneJs',
                value: 'phonejs'
            },{
                text: 'Ionic',
                value: 'ionic'
            }]
        }]
    }
});