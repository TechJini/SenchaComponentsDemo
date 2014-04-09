Ext.define('SenchaSample.view.SearchBarListView', {
    extend: 'Ext.List',
    id: 'SearchBarListView',
    requires: 'Ext.field.Search',
    xtype: ['SenchaSample.view.List', 'widget.SenchaSample.view.List'],
    config: {
        ui: 'round',
        pinHeaders: false,
        title: 'Search Bar',
        itemTpl: new Ext.XTemplate('<div class="listClass">',
            '<img src="http://demos.telerik.com/kendo-ui/content/web/foods/{ProductID}.jpg">',
            '<h3>{ProductName }</h3>',
            '<p>$ {UnitPrice }</p>'),
        store: 'SearchBarListStore',
        useSimpleItems: true,
        emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
        disableSelection: true,
        items: [{
            xtype: 'toolbar',
            docked: 'top',

            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'searchfield',
                placeHolder: 'Search...',
                autoComplete: true,
                listeners: {
                    scope: this,
                    clearicontap: function() {
                        var store = Ext.getStore('SearchBarListStore');
                        store.clearFilter();
                    },
                    keyup: function(field) {
                        var value = field.getValue(),
                            store = Ext.getStore('SearchBarListStore');
                        store.clearFilter( !! value);
                        if (value) {
                            var searches = value.split(','),
                                regexps = [],
                                i, regex;

                            for (i = 0; i < searches.length; i++) {
                                if (!searches[i]) continue;

                                regex = searches[i].trim();
                                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                                regexps.push(new RegExp(regex.trim(), 'i'));
                            }
                            store.filter(function(record) {
                                var matched = [];
                                for (i = 0; i < regexps.length; i++) {
                                    var search = regexps[i],
                                        didMatch = search.test(record.get('ProductName'));
                                    matched.push(didMatch);
                                }
                                return (regexps.length && matched.indexOf(true) !== -1);
                            });
                        }
                    }
                }
            }, {
                xtype: 'spacer'
            }]
        }]
    }

});