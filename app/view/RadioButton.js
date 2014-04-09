Ext.define('SenchaSample.view.RadioButton', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],
    id: 'RadioButton',
    config: {
        title: 'RadioButton',
        items: [{
            xtype: 'fieldset',
            id: 'fieldset2',
            title: 'Favorite color',
            defaults: {
                xtype: 'radiofield',
                labelWidth: '35%'
            },
            items: [{
                name: 'color',
                value: 'red',
                label: 'Red'
            }, {
                name: 'color',
                label: 'Blue',
                value: 'blue'
            }, {
                name: 'color',
                label: 'Green',
                value: 'green'
            }, {
                name: 'color',
                label: 'Purple',
                value: 'purple'
            }]
        }]
    }
});