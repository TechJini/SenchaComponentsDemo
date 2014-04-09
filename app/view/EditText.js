Ext.define('SenchaSample.view.EditText', {
    extend: 'Ext.Container',
    id: 'EditText',
    requires: ['Ext.field.Password', 'Ext.field.Email', 'Ext.field.Url'],
    config: {
        title: 'EditText',
        fullscreen: true,
        padding: 5,
        layout: {
            type: 'vbox'
        },
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [{
            xtype: 'fieldset',
            title: 'Personal Info',
            items: [{
                xtype: 'textfield',
                name: 'name',
                label: 'Name',
                autoCapitalize: true,
                autoComplete: true,
                autoCorrect: true
            }, {
                xtype: 'passwordfield',
                name: 'password',
                label: 'Password'
            }, {
                xtype: 'textfield',
                name: 'disabled',
                label: 'Disabled',
                disabled: true
            }, {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email',
                placeHolder: 'you@sencha.com'
            }, {
                xtype: 'urlfield',
                name: 'url',
                label: 'Url',
                placeHolder: 'http://sencha.com'
            }]

        }]
    }
});