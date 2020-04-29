var id=[] ;

//Check all the chekboxes and if it is checked then conside it as deletable and grab its id and 
//push to the id array

$('input[type="checkbox"]').click(function(){
    if($(this).is(":checked")){
        id.push($(this).attr('id'));
    }
})

//On pressing the delete button, take the id array and append each id of it to a variable href
//separated by comma then finally attaching that href to the href of delete

$('#delete').click(function(event){
    $(this).attr('href','/delete_task/?id=') 
    for(let entry of id){
    var href = $(this).attr('href');
    href+=entry+',';
    $(this).attr('href', href);
    }
    id=[];
})

$('.todo-card').css('text-transform','uppercase');
$('.work').css('background-color','yellow');
$('.school').css('background-color','cyan');
$('.personal').css('background-color','lightblue');
$('.cleaning').css('background-color','white');
$('.other').css('background-color','grey');



