$('.knoppen').each(function()
{
    var dezeKnop = $(this);
    var actieveKnop = dezeKnop.find('li.actief');
    var link = actieveKnop.find('a');
    var actiefpaneel = $(link.attr('href'));
    
    dezeKnop.on('click', 'a', function(e)
    {
       e.preventDefault(); 
        var link =$(this);
        //alert(link.attr('href'));
        var beoogdId = this.hash;
        //alert(beoogdId);
        
        if(beoogdId && !link.parent().is('actief'))
        {
            actiefpaneel.removeClass('actief');
            actieveKnop.removeClass('actief');
            
            actiefpaneel = $(beoogdId).addClass('actief'); 
            actiefKnop = link.parent().addClass('actief'); 
        }

    });
});
$('.paneel').css('display', 'none');