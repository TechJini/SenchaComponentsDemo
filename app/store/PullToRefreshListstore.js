Ext.define('SenchaSample.store.PullToRefreshListstore', {
    extend: 'Ext.data.Store',
    requires: ['SenchaSample.model.ListviewModel', 'Ext.data.proxy.JsonP'],
    config: {
        model: 'SenchaSample.model.ListviewModel',
        proxy: {
            type: 'jsonp',
            url: 'http://demos.telerik.com/kendo-ui/service/Products'
        },
        autoLoad: true
    }
});