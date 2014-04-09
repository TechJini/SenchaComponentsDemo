Ext.define('SenchaSample.store.SectionHeaderListStore', {
    extend: 'Ext.data.Store',
    requires: ['SenchaSample.model.ListviewModel', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'SenchaSample.model.ListviewModel',
        sorters: 'ProductName',

        grouper: {
            groupFn: function(record) {
                return record.get('ProductName')[0];
            }
        },
        proxy: {
            type: 'jsonp',
            url: 'http://demos.telerik.com/kendo-ui/service/Products'
        },
        autoLoad: true
    }
});