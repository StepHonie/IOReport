$(function()
{
  loadCustomer();
  loadFamily();
  loadArea();
  loadInputStation();
  loadOutputStation();

  $('#asList tr').hover(
    function(){this.childNodes[15].childNodes[1].style.display="block";},
    function(){this.childNodes[15].childNodes[1].style.display="none";}
  );

  $('#btnAdd').click(function(){
    var obj = {customer_id:$('#customer').val(),
               family_id:$('#family').val(),
               area:$('#area').val(),
               input_station:$('#input_station').val(),
               output_station:$('#output_station').val(),
               input_panelcount:$('#ipcount').val(),
               output_panelcount:$('#opcount').val()
              };
    getAreaList('areaList',{sqlName:'addAreaStationList',params:obj});

  });

});

function getAreaList(objid,query){
  $.ajax({
    url:'/post/addAreaStation',
    type:'POST',
    contentType:'application/json',
    data:JSON.stringify(query),
    success:function(res){
      if(res.originalError!=null)
      {
        if(res.originalError.message!="")
        {alert(res.originalError.info.message);}
      }else{
        var oPa = query.params;
        $('#asList').append('<tr><td>'+oPa.customer_id+'</td><td>'+oPa.family_id+'</td><td>'+oPa.area+'</td><td>'+oPa.input_station+'</td><td>'+oPa.output_station+'</td><td>'+oPa.input_panelcount+'</td><td>'+oPa.output_panelcount+'</td><td><img src="/images/icons/close.png" style="margin:0 auto;display:block"></td></tr>');
      }
    }
  });
}

function loadCustomer()
{
  getOptions('customer',{sqlName:'getCustomer'});
}

function loadFamily()
{
  getOptions('family',{sqlName:'getFamily'});
}

function loadArea()
{
  getOptions('area',{sqlName:'getArea'});
}

function loadInputStation()
{
  getOptions('input_station',{sqlName:'getInputStation'});
}

function loadOutputStation()
{
  getOptions('output_station',{sqlName:'getOutputStation'});
}
