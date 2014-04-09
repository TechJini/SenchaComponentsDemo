Ext.define('SenchaSample.view.Switches', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.field.Toggle'
    ],

    config: {
        title: 'Switches',
        scrollable: true,
        xtype: 'formpanel',
        items: [{
            xtype: 'fieldset',
            defaults: {
                labelWidth: '35%',
                labelAlign: 'top'
            },
            items: [{
                xtype: 'togglefield',
                name: 'toggle',
                label: 'Toggle'
            }]
        }]
    }
});