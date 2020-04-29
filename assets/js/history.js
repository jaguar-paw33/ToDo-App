var id=[] ;

//On pressing the clear-history button, take the id array and append id of each row to a variable href
//separated by comma then finally attaching that href to the href of clear-history

$('#clear-history').click(function(event){
    
    $('.delete-history-helper').each(function(){
        id.push($(this).attr('id'));
    }); 

    $(this).attr('href','history/clear_history/?id='); 
    for(let entry of id){
    var href = $(this).attr('href');
    href+=entry+',';
    $(this).attr('href', href);
    }
   id=[];
})



$('input:checkbox').attr('checked', true);
$('.todo-card').css('text-transform','uppercase');
$('.work').css('background-color','yellow');
$('.school').css('background-color','cyan');
$('.personal').css('background-color','lightblue');
$('.cleaning').css('background-color','white');
$('.other').css('background-color','grey');