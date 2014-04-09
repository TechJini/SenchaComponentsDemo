Ext.define('SenchaSample.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    id: 'Main',
    requires: [
        'Ext.List'
    ],
    config: {
        fullscreen: true,
        useTitleForBackButtonText: true,
        items: [{
            id: 'list',
            title: 'Sencha Sample',
            xtype: 'list',
            itemTpl: '<div>{name}</div>',
            store: 'Liststore',
            listeners: {
                itemtap: function(list, index, target, record, e, eOpts) {
                    var newView = Ext.create(record.data.url);
                    Ext.getCmp('Main').push(newView);
                }
            }
        }],
    },
    platformConfig: [{
        platform: ['android'],
        useTitleForBackButtonText: false
    }]
});