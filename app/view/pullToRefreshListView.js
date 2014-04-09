Ext.define('SenchaSample.view.pullToRefreshListView', {
    extend: 'Ext.List',
    id: 'PullToRefreshListView',
    xtype: ['SenchaSample.view.List', 'widget.SenchaSample.view.List'],
    requires: [
        'Ext.plugin.PullRefresh'
    ],
    config: {
        title: 'Pull To Refresh',
        plugins: [{
            xclass: 'Ext.plugin.PullRefresh',
            pullText: 'Pull To Refresh'
        }],

        itemTpl: new Ext.XTemplate('<div class="listClass">',
            '<img src="http://demos.telerik.com/kendo-ui/content/web/foods/{ProductID}.jpg">',
            '<h3>{ProductName }</h3>',
            '<p>$ {UnitPrice }</p>',
            '<tpl for=".">',
            '<div class="testbutton" id="renderbutton"></div>',
            '</tpl>'),
        store: 'PullToRefreshListstore',
        listeners: {
            itemtap: function(list, index, target, record, e, eOpts) {
                alert(record.data.ProductName);
            },
            afterrender: function() {
                new Ext.Button({
                    text: 'Click Me',
                    ui: 'action',
                    renderTo: 'renderbutton',

                });
            }
        }
    }
});