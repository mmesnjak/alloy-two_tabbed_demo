var userProfile = Alloy.Globals.userProfile;
var renderTable = function()
{
    $.dwtWindow.add(Alloy.createController('dwtTable').getView());
}
exports.renderTable = renderTable;

$.dwtWindow.addEventListener('open', function(event)
{
    if (!userProfile || !userProfile.auth_token)
    {
        Ti.API.info('NOT loggedin u dwt');
        var label = Ti.UI.createLabel({text: L('not_loggedin')});
        $.dwtWindow.add(label);
    }
    else
    {
        Ti.API.info('loggedin u dwt');
        renderTable();
    }
});
