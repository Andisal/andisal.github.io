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
                	form.html('<p>РЕГИСТРАЦИЯ НА IGCONF</p><h3 class="h3accept">Ваша завка отправлена организаторам</h3>'); 
                },
                200: function (){
                	form.html('<p>РЕГИСТРАЦИЯ НА IGCONF</p><h3 class="h3accept">Ваша завка отправлена организаторам</h3>'); 
                }
            }
		});
	});
	$('#gform-jquery2').submit(function(e){
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
                	form.html('<p>РЕГИСТРАЦИЯ НА IGCONF</p><h3 class="h3accept">Ваша завка отправлена организаторам</h3>'); 
                },
                200: function (){
                	form.html('<p>РЕГИСТРАЦИЯ НА IGCONF</p><h3 class="h3accept">Ваша завка отправлена организаторам</h3>'); 
                }
            }
		});
	});
	$('#gform-jquery3').submit(function(e){
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
                	form.html('<h3 class="h3accept">Ваша завка отправлена организаторам</h3>'); 
                },
                200: function (){
                	form.html('<h3 class="h3accept">Ваша завка отправлена организаторам</h3>'); 
                }
            }
		});
	});
});
$("#countdown")
.countdown("2017/12/08", function(event) {
  $(this).text(
	event.strftime('%D')
  );
});
$(function(){$(".toggle-mnu").click(function(){$(this).toggleClass("on");$(".main-menu").slideToggle();return false;});if($(window).width()>1200){setTimeout(function(){$.fancybox.open({src:"#pop-form"});},20000);}ts=(new Date(2017,11,7)).getTime();$('#countdown').countdown({timestamp:ts,});function declOfNum(number,titles){cases=[2,0,1,1,1,2];return titles[(number%100>4&&number%100<20)?2:cases[(number%10<5)?number%10:5]];}});$('.preloader').fadeOut("slow");$(window).scroll(function(){if($(this).scrollTop()>$(this).height()){$('.btn-top').addClass('active');}else{$('.btn-top').removeClass('active');}})