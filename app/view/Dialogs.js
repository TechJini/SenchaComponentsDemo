Ext.define('SenchaSample.view.Dialogs', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Button'
    ],
    config: {
        title: 'Dialogs',
        fullscreen: true,
        padding: 5,
        layout: {
            type: 'vbox',
            align: 'center'
        },
        defaults: {
            xtype: 'button',
            margin: 1,
            width: '100%'
        },
        items: [{
            text: 'Alert',
            handler: function() {
                Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.', Ext.emptyFn);
            }
        }, {
            text: 'Prompt',
            handler: function() {
                Ext.Msg.prompt("Welcome!", "What's your first name?", Ext.emptyFn);
            }
        }, {
            text: 'Confirm',
            handler: function() {
                Ext.Msg.confirm("Confirmation", "Are you sure you want to do that?", Ext.emptyFn);
            }
        }]
    }
});