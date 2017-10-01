function getOptions(select,query)
{
  ajax(query,function(data)
  {
    if (data !=null)
    {
      let $select = $("#"+select);
      $.each(data,function(index,value){
        let opt = $("<option></option>").html(value.Label).val(value.Value);
        $select.append(opt);
      });
    }
  });
};

function addAreaList(elemId,query)
{
  ajax(query,function(data)
  {
    if(data!=null)
    {
      var oPa = query.params;
      $('#asList').append('<tr><td>'+oPa.customer_id+'</td><td>'+oPa.family_id+'</td><td>'+oPa.area+'</td><td>'+oPa.input_station+'</td><td>'+oPa.output_station+'</td><td>'+oPa.input_panelcount+'</td><td>'+oPa.output_panelcount+'</td><td><img class="delAreaList" src="/images/icons/close.png" style="margin:0 auto;display:block"></td></tr>');
    }
  });
}

function ajax(query,callback)
{//Use callback() to instead "async:false" can promote efficiency;
  $.ajax({
    url:'/post',
    type:'POST',
    contentType: 'application/json',
    data:JSON.stringify(query),
    success:function(res){
      if(res.originalError!=null)
      {
        // if(res.originalError.message!=null)
        // {
          alert(res.originalError.info.message);
          return;
        // }
      }else{
        callback(res);
      }
    }
  });
}
