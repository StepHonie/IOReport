$(function()
{
  bindEvents();
  loadCustomer();
  loadFamily();
  loadArea();
  loadInputStation();
  loadOutputStation();
});

function bindEvents(){
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
    addAreaList('areaList',{sqlName:'addAreaStationList',params:obj});
  });

  $('.delAreaList').click(function(){
    // let node =
    // delAreaList('',{});
    alert("Delete me~");
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
