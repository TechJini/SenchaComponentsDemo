Ext.define('SenchaSample.store.Liststore', {
    extend: 'Ext.data.Store',
    requires: ['SenchaSample.model.Contact'],
    config: {
        model: 'SenchaSample.model.Contact',
        data: [{
                name: 'Listview',
                url: 'SenchaSample.view.List',
                id: 'List'
            }, {
                name: 'Date picker',
                url: 'SenchaSample.view.DatePicker',
                id: 'DatePicker'
            }, {
                name: 'Switches',
                url: 'SenchaSample.view.Switches',
                id: 'Switches'
            }, {
                name: 'Seek bar',
                url: 'SenchaSample.view.SeekBar',
                id: 'SeekBar'
            }, {
                name: 'Checkbox',
                url: 'SenchaSample.view.Checkbox',
                id: 'Checkbox'
            }, {
                name: 'Radio Group',
                url: 'SenchaSample.view.RadioButton',
                id: 'RadioButton'
            }, {
                name: 'EditText/TextView',
                url: 'SenchaSample.view.EditText',
                id: 'EditText'
            }, {
                name: 'Button',
                url: 'SenchaSample.view.Button',
                id: 'Button'
            }, {
                name: 'Dropdown',
                url: 'SenchaSample.view.Dropdown',
                id: 'Dropdown'
            }, {
                name: 'Progress bar',
                url: 'SenchaSample.view.ProgressBar',
                id: 'ProgressBar'
            }, {
                name: 'Dialogs',
                url: 'SenchaSample.view.Dialogs',
                id: 'Dialogs'
            }
            // , {
            //     name: 'Search bar/Autocomplete',
            //     url: 'SenchaSample.view.Welcome'
            // }, {
            //     name: 'Tab',
            //     url: 'SenchaSample.view.Tab'
            // }, {
            //     name: 'Expandable Listview',
            //     url: 'SenchaSample.view.Welcome'
            // }, {
            //     name: 'Grid View',
            //     url: 'SenchaSample.view.Welcome'
            // }, {
            //     name: 'View Pager',
            //     url: 'SenchaSample.view.Welcome'
            // }, {
            //     name: 'Rating bar',
            //     url: 'SenchaSample.view.Welcome'
            // }, {
            //     name: 'Menu',
            //     url: 'SenchaSample.view.Welcome'
            // }, {
            //     name: 'Animations',
            //     url: 'SenchaSample.view.Welcome'
            // }
        ]
    }
});