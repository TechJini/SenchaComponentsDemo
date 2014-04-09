Ext.define('SenchaSample.view.Button', {
    extend: 'Ext.Container',
    requires: [
        'Ext.Button'
    ],
    id: 'Button',
    config: {
        title: 'Button',
        fullscreen: true,
        padding: 5,
        defaults: {
            xtype: 'button',
            margin: 5
        },
        layout: {
            type: 'vbox',
            align: 'center'
        },
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [{
            text: 'Button',
        }, {
            text: 'Refresh',
            iconCls: 'refresh'
        }, {

            text: 'Badge',
            badgeText: '2'
        }, {
            ui: 'normal',
            text: 'normal'
        }, {
            ui: 'round',
            text: 'round'
        }, {
            ui: 'action',
            text: 'action'
        }, {
            ui: 'decline',
            text: 'decline'
        }, {
            ui: 'confirm',
            text: 'confirm'
        }, {
            ui: 'decline-round',
            text: 'decline'
        }, {
            ui: 'confirm-round',
            text: 'confirm'
        }]
    }
});