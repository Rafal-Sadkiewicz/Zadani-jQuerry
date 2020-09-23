$(document).ready(function () {
    console.log($('p'));
    console.log($('p').first());
    console.log($('p').last());
    $('#upButt').click(function ()
    {
        $('p').first().before($('p').last());   
    });

    $('#downButt').click(function ()
    {
        
        $('p').last().after($('p').first());
        
        console.log($('p'));
        console.log($('p').first());
        console.log($('p').last());
    });


    
    
});