Ext.define('SenchaSample.view.Checkbox', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.field.Toggle'
    ],

    config: {
        title: 'Checkbox',
        scrollable: true,
        xtype: 'formpanel',
        items: [{
            xtype: 'checkboxfield',
            name: 'Sencha',
            label: 'sencha',
            value: 'sencha',
            checked: true
        }, {
            xtype: 'checkboxfield',
            name: 'PhoneJs',
            label: 'phoneJs'
        }, {
            xtype: 'checkboxfield',
            name: 'Kendo',
            label: 'kendo'
        }, {
            xtype: 'checkboxfield',
            name: 'Ionic',
            label: 'ionic'
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                xtype: 'spacer'
            }, {
                text: 'getValues',
                handler: function() {
                    var form = Ext.ComponentQuery.query('formpanel')[0],
                        values = form.getValues();

                    Ext.Msg.alert(null,
                        "Sencha: " + ((values.Sencha) ? "yes" : "no") +
                        "<br />PhoneJs: " + ((values.PhoneJs) ? "yes" : "no") +
                        "<br />Kendo: " + ((values.Kendo) ? "yes" : "no") +
                        "<br />Ionic: " + ((values.Ionic) ? "yes" : "no"));
                }
            }, {
                xtype: 'spacer'
            }]
        }]
    }
});