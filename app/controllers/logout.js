try
{
    var userProfile = JSON.parse(Ti.App.Properties.getString("userProfile"));
    Ti.App.Properties.removeProperty("userProfile");
    alert(userProfile.name + ', ' + L('loggedout'));    
}
catch(e)
{
    Ti.API.error(e.text);
}

