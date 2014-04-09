Ext.define('SenchaSample.controller.MainController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'main',
            mainTitleBar: 'main titlebar',
        },
        control: {
            main: {
                push: 'onMainPush'
            },
            mainTitleBar: {
                back: 'onBack'
            }
        }
    },
    onMainPush: function(view, item) {
        if (Ext.os.is.Android) {
            var navigationBar = this.getMainTitleBar();
            navigationBar.query('button')[0].hide();
        }

        //do what ever logic you need then..
        history.pushState();
    },
    onBack: function() {
        history.back(); //will cause the onpopstate event to fire on window..
        //prevent back button popping main view directly..
        return false;
    },
    init: function() {
        var con = this;
        console.log('init called');
        /* pop a view when the back button is pressed
       note: if it's already at the root it's a noop */
        var that = this;
        window.addEventListener('popstate', function() {
            // that.getMain().pop();
            Ext.getCmp('Main').pop();
            if (Ext.os.is.Android) {
                var navigationBar = con.getMainTitleBar();
                navigationBar.query('button')[0].hide();
            }
        }, false);

        if (Ext.os.is.Android) {

        }

    }
});