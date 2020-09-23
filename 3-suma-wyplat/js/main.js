$(document).ready(function () {
    $('#count-sum').click(function() { 
        let sum = 0;
        
        $('.salary').each(function()
        {
            console.log($(this).text());
            sum += parseInt($(this).text());
        });

        $('#sum').text(sum);
        
    });

    
    
});