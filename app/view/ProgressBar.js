Ext.define('SenchaSample.view.ProgressBar', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.DatePicker'
    ],
    id: 'basicform',
    config: {
        title: 'ProgressBar',
        items: [{

            html: [
                "<center><h3 style='padding:1em;'>Press the button below to<br/> display the activity indicator <h3></center>"
            ].join("")
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
                text: 'Press Here',
                docked: 'bottom',
                id: 'doneButton',
                handler: function() {
                    var loadmask = new Ext.LoadMask();
                    showLoading(loadmask);
                }
            }]
        }]
    }
});

function showLoading(arg) {
    Ext.Viewport.setMasked({
        xtype: 'loadmask',
        message: 'Loading...',
        indicator: true
    });
    Ext.defer(function() {
        Ext.Viewport.setMasked(false);
        //showAlert(arg);
    }, 2000);
}

function showAlert(arg) {
    Ext.Msg.confirm('Activity Indicator', 'Redo ?', function(btn, text) {
        // if (btn == 'yes') {
        //     showLoading(arg);
        // } else {
        //     Ext.getCmp('basicform').fireEvent('myEventPop');
        // }
    });
}