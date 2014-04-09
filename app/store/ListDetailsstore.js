Ext.define('SenchaSample.store.ListDetailsstore', {
    extend: 'Ext.data.Store',
    requires: ['SenchaSample.model.Contact'],
    config: {
        model: 'SenchaSample.model.Contact',
        data: [{
                name: 'Pull To Refresh',
                url: 'SenchaSample.view.pullToRefreshListView',
                id: 'pullToRefreshListView'
            }, {
                name: 'Section Headers',
                url: 'SenchaSample.view.SectionHeaderListView',
                id: 'SectionHeaderListView'
            }, {
                name: 'Search Bar',
                url: 'SenchaSample.view.SearchBarListView',
                id: 'SearchBarListView'
            }
            // , {
            //     name: 'Swipe To Delete',
            //     url: 'SenchaSample.view.Welcome'
            // }
        ]
    }
});