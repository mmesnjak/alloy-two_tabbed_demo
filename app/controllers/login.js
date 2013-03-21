var sha1 = require('alloy/sha1');

$.loginBut.addEventListener('click', function(e)
{
	var url = 'http://iplustest.pis.hr/techSupport/Api/Login',	
		xhr = Ti.Network.createHTTPClient(),
        login_key_p = 'vUVuzafRa7heX3Kaz9b6V3drenes48tu',
	    uname = $.user.value,
	    mac = Ti.Platform.getMacaddress(), 
	    pass = sha1.b64_hmac_sha1(login_key_p, $.pass.value),
	    post_params = {'uname': uname, 'mac': mac, 'phash': pass, 'pwd': $.pass.value};

	xhr.onload = function(e)
	{
		var response;
		try
		{
		    response = JSON.parse(this.responseText);
		}
		catch(e)
		{
		    alert(L('wrong_server_data') + ': ' + e.text);
		}
		
		if (response.authorized == true)
		{
		    $.loginWin.close();
		    var params = {
                name: response.name,
                auth_token: response.auth_token,
            };
		    Ti.App.fireEvent('grantEntrance', params);
		}
		else
		{
		    alert(response.msg);
		}
	}	
	
    if (uname != '' && pass != '')
    {
        xhr.open('POST', url);	
        xhr.send(post_params);
    }
    else
    {
        alert(L('must_fill_all_fields'));        
    }
});

$.loginWin.open();
