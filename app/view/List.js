Ext.define('SenchaSample.view.List', {
    extend: 'Ext.List',
    id: 'ListView',
    xtype: ['SenchaSample.view.List', 'widget.SenchaSample.view.List'],
    config: {
        title: 'List View',
        itemTpl: '<div >{name}</div>',
        store: 'ListDetailsstore',
        listeners: {
            itemtap: function(list, index, target, record, e, eOpts) {
                console.log('list clicked view');
                var newView = Ext.create(record.data.url);
                Ext.getCmp('Main').push(newView);
            }
        }
    }
});