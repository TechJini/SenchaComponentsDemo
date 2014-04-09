Ext.define('SenchaSample.view.Tab', {
    extend: 'Ext.tab.Panel',
    config: {
        title: 'Tab Bar',
        tabBarPosition: 'bottom',
        items: [{
            title: 'Home',
            iconCls: 'home',
            styleHtmlContent: true,
            items: [{
                html: 'Home Screen'
            }]
        }, {
            title: 'Settings',
            iconCls: 'settings',
            styleHtmlContent: true,
            items: [{
                html: 'Settings Screen'
            }]
        }]
    }
});