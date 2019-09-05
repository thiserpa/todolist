//check to-do when clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("checked");
});

//click on "X" to delete to-do
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//geting the input and adding to the to-do list
$("input[type='text']").keypress(function(e){
    //comparing if the key "enter" was pressed
    if(e.which === 13){
        //adding the value typed to a var
        var todoText = $(this).val();
        //erasing the previously text typed
        $(this).val("");
        //adding the new text as an li inside the to-do list
        $("ul").append("<li><span><i class=\"far fa-trash-alt\"></i></span> " + todoText + "</li>");
    }
});
//toggle the input
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})