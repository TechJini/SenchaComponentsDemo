Ext.define('SenchaSample.view.DatePicker', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.DatePicker'
    ],
    id: 'basicform',
    config: {
        title: 'DatePicker',
        items: [{
            xtype: 'fieldset',
            id: 'fieldset3',
            defaults: {
                labelWidth: '35%'
            },
            items: [{
                xtype: 'datepickerfield',
                destroyPickerOnHide: true,
                name: 'date1',
                id: 'date1',
                label: 'Date',
                value: new Date(),
                dateFormat: '',
                picker: {
                    yearFrom: 1990,
                    yearTo: 2030
                }
            }]

        }, {
            xtype: 'container',
            defaults: {
                xtype: 'button',

                style: 'margin: .5em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [{
                text: 'Done',
                id: 'doneButton',
                handler: function() {
                    var datePickerField = Ext.ComponentQuery.query('datepickerfield')[0];
                    var startDate = datePickerField.getFormattedValue();


                    Ext.Msg.alert('Date Picker', 'Selected date is ' + startDate, function(btn, text) {
                        if (btn == 'ok') {
                            Ext.getCmp('Main').pop();
                        }
                    });


                }
            }]
        }]
    }
});