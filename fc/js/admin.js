
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