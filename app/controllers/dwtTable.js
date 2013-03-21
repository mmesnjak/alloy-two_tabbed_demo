var mockup_arr = ['prvi', 'drugi', 'treći', 'četvrti', 'šesti'];
var data = [];

var viewWorkTask = function(event)
{
    Alloy.createController('workTask');    
}

var populate = function()
{
    Ti.API.info('usao u populate');
    mockup_arr.forEach(function(val, i, arr)
    {
        var row = Ti.UI.createTableViewRow({
            title: val
        });
        row.addEventListener('click', viewWorkTask);
        data.push(row);
    });
    try{
    $.dwtTable.setData(data);
    }catch(e){Ti.API.info(e.toString());}
}
exports.populate = populate;

populate();