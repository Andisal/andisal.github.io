jQuery(document).ready(function ($) {
    
    
        //countdown timer
    
        $('.count_down').countdown('2017/12/08', function (event) {
            $(this).html(event.strftime('<div class="single_count"><h1>%D</h1><p>Days</p></div><div class="single_count"><h1>%H</h1><p>Hour</p></div><div class="single_count"><h1>%M</h1><p>Minute</p></div><div class="single_count"><h1>%S</h1><p>Secound</p></div>'));
        });
});
!function($){
	$(document).on('click', 'a[href^=#]', function () {
		 $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top }, 1000 ); 
		 return false;
	 });
 }(jQuery);
 $(document).ready(function(){
	$('#gform-jquery').submit(function(e){
		e.preventDefault();
		var form = $(this);

		var errors = false;
		form.find('.req').each(function(){
			$(this).removeClass('error'); 
			if ($(this).val() == '') {
				$(this).addClass('error');
				errors = true;
			}
		});
		if (errors) return false;

		var data = form.serialize(); 
		$.ajax({
            url: "https://docs.google.com/forms/d/e/1FAIpQLSeELs6Tkg3DeYLtmUGOWMmyGj60h_BKfF2s0p-7jlrnvGRnnA/formResponse", 
            data: data,
            type: "POST",
            dataType: "xml",
            beforeSend: function(){
            	form.find('button').attr('disabled');
            },
            statusCode: { 
                0: function (){ 
                	form.html('<p>Ваша заявка <br> отправлена</p><i class="fa fa-check fa-3x" aria-hidden="true"></i>'); 
                },
                200: function (){
                	form.html('<p>Ваша заявка <br> отправлена</p><i class="fa fa-check fa-3x" aria-hidden="true"></i>'); 
                }
            }
		});
    });
});