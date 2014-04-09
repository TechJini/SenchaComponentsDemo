Ext.define('SenchaSample.store.SearchBarListStore', {
    extend: 'Ext.data.Store',
    requires: ['SenchaSample.model.ListviewModel', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'SenchaSample.model.ListviewModel',
        sorters: 'ProductName',
        groupField: 'ProductName',
        proxy: {
            type: 'jsonp',
            url: 'http://demos.telerik.com/kendo-ui/service/Products'
        },
        autoLoad: true
    },

});