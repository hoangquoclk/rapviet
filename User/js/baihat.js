$(document).ready(function(){
	$('.rapper-noibat').mouseover(function(event){
		$('.rapper-noibat-hover').css('display','block');
	});
	$('.rapper-noibat').mouseout(function(event){
		$('.rapper-noibat-hover').css('display','none');
	});

	$('.rapper-conlai').mouseover(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.rapper-conlai:nth-child('+vi_tri_hien_tai+') .rapper-conlai-hover').css('display','block');
	});
	$('.rapper-conlai').mouseout(function(event){
		var vi_tri_hien_tai = $(this).index()+1;
		$('.rapper-conlai:nth-child('+vi_tri_hien_tai+') .rapper-conlai-hover').css('display','none');
	});
});