Ext.define('SenchaSample.view.SeekBar', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.field.Slider'
    ],

    config: {
        title: 'SeekBar',
        scrollable: true,
        xtype: 'formpanel',
        items: [{
            xtype: 'fieldset',
            defaults: {
                labelWidth: '35%',
                labelAlign: 'top'
            },
            items: [{
                xtype: 'sliderfield',
                name: 'thumb',
                value: 20,
                label: 'Single Thumb'
            }]
        }]
    }
});