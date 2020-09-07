$(document).ready(function(){
	changeImage = function(){
		var slide_sau_active = $('.songs-big div.active').next();
		var slide_sau_active_a = $('.songs-small a.active-a').next();
		if(slide_sau_active.length!=0){
			$('.songs-big div.active').removeClass('active');
			slide_sau_active.addClass('active');
			$('.songs-small a').removeClass('active-a');
			slide_sau_active_a.addClass('active-a');
			
		}
		else{
			$('.songs-big div.active').removeClass('active');
			$('.songs-big div:first-child').addClass('active');
			$('.songs-small a.active-a').removeClass('active-a');
			$('.songs-small a:first-child').addClass('active-a');
		}
	}

	var run = setInterval(changeImage,3000);

	
	// hover vào hình ảnh
	$('.songs-small a').mouseover(function(event){
		// var vi_tri_hien_tai = $('.songs-small a').index($('.active-a'))+1;
		$('.songs-small a').removeClass('active-a');
		var vi_tri_hover = $(this).index()+1;
		$(this).addClass('active-a');
		// var vi_tri_hover = $('.songs-small a').index($('.active-a'))+1;
		$('.songs-big div').removeClass('active');
		$('.songs-big div:nth-child('+vi_tri_hover+')').addClass('active');
	});


	changeArtistsImage = function(){
		var slide_sau_active = $('.artists-content div.active').next();
		var slide_sau_active_name = $('#artists-name-contain div.active').next();
		var image_sau = $('.artists-list-image ul li.active').next();
		
		if(slide_sau_active.length!=0){
			$('.artists-content div.active').removeClass('active');
			slide_sau_active.addClass('active');
			$('#artists-name-contain div.active').removeClass('active');
			slide_sau_active_name.addClass('active');
			$('.artists-list-image ul li.active').removeClass('active');
			image_sau.addClass('active');
			
		}
		else{
			$('.artists-content div.active').removeClass('active');
			$('.artists-content div:first-child').addClass('active');
			$('#artists-name-contain div.active').removeClass('active');
			$('#artists-name-contain div:first-child').addClass('active');
			$('.artists-list-image ul li.active').removeClass('active');
			$('.artists-list-image ul li:first-child').addClass('active');
		}
	}

	var run2 = setInterval(changeArtistsImage,4500);

	// hover vào hình ảnh
	$('.artists-list-image ul li').mouseover(function(event){
		// var vi_tri_hien_tai = $('.artists-list-image ul li.active').index()+1;
		var vi_tri_hover = $(this).index()+1;
		$('.artists-list-image ul li').removeClass('active');
		$(this).addClass('active');
		
		$('.artists-content div').removeClass('active');
		$('.artists-content div:nth-child('+vi_tri_hover+')').addClass('active');
		$('#artists-name-contain div').removeClass('active');
		$('#artists-name-contain div:nth-child('+vi_tri_hover+')').addClass('active');
	});

	// hover để nghe
	$('.list-nghegihomnay').mouseover(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.list-nghegihomnay:nth-child('+vi_tri_hien_tai+') a div div div.list-nghegihomnay-hover').css('display','block');
	});
	//hover ra lại
	$('.list-nghegihomnay').mouseout(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.list-nghegihomnay:nth-child('+vi_tri_hien_tai+') a div div div.list-nghegihomnay-hover').css('display','none');
	});

	// hover để nghe
	$('.list-nhacmoiphathanh').mouseover(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.list-nhacmoiphathanh:nth-child('+vi_tri_hien_tai+') a div div div.list-nhacmoiphathanh-hover').css('display','block');
	});
	//hover ra lại
	$('.list-nhacmoiphathanh').mouseout(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.list-nhacmoiphathanh:nth-child('+vi_tri_hien_tai+') a div div div.list-nhacmoiphathanh-hover').css('display','none');
	});
	// hover để nghe
	$('.list-nhacmoiphathanh-hang2').mouseover(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.list-nhacmoiphathanh-hang2:nth-child('+vi_tri_hien_tai+') a div div div.list-nhacmoiphathanh-hover').css('display','block');
	});
	//hover ra lại
	$('.list-nhacmoiphathanh-hang2').mouseout(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.list-nhacmoiphathanh-hang2:nth-child('+vi_tri_hien_tai+') a div div div.list-nhacmoiphathanh-hover').css('display','none');
	});

	// hover bên mỗi bài hát
	$('.list-baihat .moibaihat').mouseover(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.list-baihat .moibaihat:nth-child('+vi_tri_hien_tai+') .the-span').css('display','none');
		$('.list-baihat .moibaihat:nth-child('+vi_tri_hien_tai+') .the-span-hover').css('display','block');
	});
	//hover ra lại
	$('.list-baihat .moibaihat').mouseout(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.list-baihat .moibaihat:nth-child('+vi_tri_hien_tai+') .the-span').css('display','block');
		$('.list-baihat .moibaihat:nth-child('+vi_tri_hien_tai+') .the-span-hover').css('display','none');
	});

	$('.fa-heart').mouseover(function(event){
		$(this).addClass('duoi-len-binh-thuong');
	});
	$('.fa-play').mouseover(function(event){
		$(this).addClass('duoi-len-binh-thuong');
	});
	$('.fa-list').mouseover(function(event){
		$(this).addClass('duoi-len-binh-thuong');
	});

	$('.fa-heart').mouseout(function(event){
		$(this).removeClass('duoi-len-binh-thuong');
	});
	$('.fa-play').mouseout(function(event){
		$(this).removeClass('duoi-len-binh-thuong');
	});
	$('.fa-list').mouseout(function(event){
		$(this).removeClass('duoi-len-binh-thuong');
	});

	// click 2 button còn lại
	$('.BXH-baihat-khuvuc div').click(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.BXH-baihat-khuvuc div').removeClass('active');
		$('.BXH-baihat-khuvuc div:nth-child('+vi_tri_hien_tai+')').addClass('active');
		console.log(vi_tri_hien_tai);
	});
});