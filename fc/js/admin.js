
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
            url: "https://docs.google.com/forms/d/e/1FAIpQLSffYsRH5CHOyMHOVuDw88_W2BOfscmKVubf9LNBPQsKLHpwsA/formResponse", 
            data: data,
            type: "POST",
            dataType: "xml",
            beforeSend: function(){
            	form.find('button').attr('disabled');
            },
            statusCode: { 
                0: function (){ 
                	form.html('<p class="accept">Ваша заявка <br> отправлена</p><i class="fa fa-check fa-3x" aria-hidden="true"></i>'); 
                },
                200: function (){
                	form.html('<p class="accept">Ваша заявка <br> отправлена</p><i class="fa fa-check fa-3x" aria-hidden="true"></i>'); 
                }
            }
		});
	});
});