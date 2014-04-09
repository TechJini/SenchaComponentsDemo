Ext.define('SenchaSample.view.SectionHeaderListView', {
    extend: 'Ext.List',
    id: 'SectionHeaderListView',
    xtype: ['SenchaSample.view.List', 'widget.SenchaSample.view.List'],
    config: {
        title: 'Section Headers',
        itemTpl: new Ext.XTemplate('<div class="listClass">',
            '<img src="http://demos.telerik.com/kendo-ui/content/web/foods/{ProductID}.jpg">',
            '<h3>{ProductName }</h3>',
            '<p>$ {UnitPrice }</p>'),
        store: 'SectionHeaderListStore',
        grouped: true
    }
});