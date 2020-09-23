$(document).ready(function () {
    
    $('#animButt').click(function ()
    { 
        $('#square').animate({width: '100px', height: '100px', left: '100px'}, 3000, function()
        {
            console.log('koniec animacji pierwszej');
            $(this).animate({backgroundColor: "blue"}, 5000, function()
            {
                $(this).append('<h2>Animacja zakończona</h2>');
            });
        });
        
    });
    
});