$.tabGroup.addEventListener('open', function(e) {
    var activity = $.tabGroup.activity;
    activity.onCreateOptionsMenu = function(e) {
        var menu = e.menu;
        var mi1 = menu.add({
            title : L('login')
        });
        mi1.addEventListener('click', function(e) {
            Alloy.createController('login');
        });
        var mi2 = menu.add({
            title : L('logout')
        });
        mi2.addEventListener('click', function(e) {
            Alloy.createController('logout');
        });
    };
    if (Alloy.Globals.userProfile) alert(L('welcome') + ' ' + Alloy.Globals.userProfile.name);    
});

$.tabGroup.open();

Ti.App.addEventListener('grantEntrance', function(event)
{
    var userProfile = {
        name: event.name,
        auth_token: event.auth_token,
    }
    Ti.App.Properties.setString('userProfile', JSON.stringify(userProfile));
    Alloy.Globals.userProfile = userProfile;
    alert(L('welcome') + ' ' + Alloy.Globals.userProfile.name);
    try
    {
        var ctrl = Alloy.createController('delegatedWorkTasks');
        ctrl.renderTable();
        var v = ctrl.getView()
        v.open();
        var t1 = $.getView('dwtTab');
        Ti.API.info('dwtTab' + t1.toString());
    }
    catch(e)
    {
        Ti.API.info("GRESKA: "+e.toString());
    }
});