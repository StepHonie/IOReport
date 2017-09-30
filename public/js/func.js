function getOptions(select,query)
{
  let data = ajax(query,function(a)
  {
    if (a !='')
    {
      addItems(select,a);
    }
  });
};

function ajax(query,callback)
{
  $.ajax({
    url:'/post',
    type:'POST',
    contentType: 'application/json',
    data:JSON.stringify(query),
    success:function(res){
      if(res.originalError!=null)
      {
        if(res.originalError.message!=null)
        {alert(res.originalError.message);return;}
      }
      callback(res);
    }
  });
}

function addItems(select,data)
{
  let $select = $("#"+select);
  $.each(data,function(index,value){
    let opt = $("<option></option>").html(value.Label).val(value.Value);
    $select.append(opt);
  });
}
