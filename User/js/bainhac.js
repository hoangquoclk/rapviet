$(document).ready(function(){
	var song = new Audio();
	function playSong(){
		song.src = '..//User/mp3/Cua-HIEUTHUHAIMANBO-6408297.mp3';
		// song.muted = "muted";
		song.allow = "autoplay";
		// $('.img-and-text .form-image').addClass('xoayvong');
		song.play();
	}

	playSong();

	$('.song-controll-left .fa-step-backward').click(function(){
		song.src = '..//User/mp3/bai2.mp3';
		song.play();
		$('.song-controll-left .pause-play .fa-play').removeClass('fa-play').addClass('fa-pause');
	});

	$('.song-controll-left .fa-step-forward').click(function(){
		song.src = '..//User/mp3/Cua-HIEUTHUHAIMANBO-6408297.mp3';
		song.play();
		$('.song-controll-left .pause-play .fa-play').removeClass('fa-play').addClass('fa-pause');
	});

	// dừng hoặc chạy bài hát
	$('.song-controll-left .pause-play').click(function(){
		if(song.paused){
			$('.song-controll-left .pause-play .fa-play').removeClass('fa-play').addClass('fa-pause');
			song.play();
			$('.img-and-text .form-image img').css('webkitAnimationPlayState','running');
		}
		else{			
			$('.song-controll-left .pause-play .fa-pause').removeClass('fa-pause').addClass('fa-play');
			song.pause();
			$('.img-and-text .form-image img').css('webkitAnimationPlayState','paused');
		}
	});

	// tự động phát hoặc ngừng lại
	$('#tudongphat input').click(function(){
		var check_or_not = $('#tudongphat input').prop('checked');
		if(check_or_not == false){
			$('#tudongphat input').prop('title','Ngừng tự động phát');
		}
		else{
			$('#tudongphat input').prop('title','Tự động phát');
		}
	});

	// phát random hoặc theo thứ tự 
	$('.song-controll-right .fa-random').click(function(){
		var color_of_random = $('.song-controll-right .fa-random').css('color');
		if(color_of_random == 'rgb(0, 0, 0)'){
			$('.song-controll-right .fa-random').css('color','rgb(3, 169, 244)');
			$('.song-controll-right .fa-random').prop('title','Phát ngẫu nhiên');
		}
		else{
			$('.song-controll-right .fa-random').css('color','rgb(0, 0, 0)');
			$('.song-controll-right .fa-random').prop('title','Phát theo thứ tự');
		}
	});

	$('.song-controll-right .fa-redo').click(function(){
		var color_of_random = $('.song-controll-right .fa-redo').css('color');
		if(color_of_random == 'rgb(0, 0, 0)'){
			$('.song-controll-right .fa-redo').css('color','rgb(3, 169, 244)');
			$('.song-controll-right .fa-redo').prop('title','Lặp lại');
		}
		else{
			$('.song-controll-right .fa-redo').css('color','rgb(0, 0, 0)');
			$('.song-controll-right .fa-redo').prop('title','Không lặp lại');
		}
	});
	var thanhnhac = document.getElementById('thanhnhac');
	song.addEventListener('timeupdate',function(){
		var position = song.currentTime / song.duration;
		var currentTime_min = Math.floor(song.currentTime/60);
		currentTime_min = (currentTime_min<10) ? "0" + currentTime_min : currentTime_min;
		var currentTime = Math.floor(song.currentTime%60);
		currentTime = (currentTime<10) ? "0" + currentTime : currentTime;
		var duration_min = Math.floor(song.duration/60);
		duration_min = (duration_min<10) ? "0" + duration_min : duration_min;
		var duration = Math.floor(song.duration%60);
		duration = (duration<10) ? "0" + duration : duration;
		$('#time-song').html(currentTime_min+':'+currentTime+' / '+duration_min+':'+duration);
		thanhnhac.value = Math.round(song.currentTime/song.duration*100);
		var color = 'linear-gradient(90deg,rgb(3, 169, 244) '+thanhnhac.value+'%, white '+thanhnhac.value+'%)';
		$('#thanhnhac').css('background',color);

		// Nếu như chạy hết bài hát
		if(song.currentTime == song.duration){
			$('.img-and-text .form-image img').css('webkitAnimationPlayState','paused');
			$('.song-controll-left .pause-play .fa-pause').removeClass('fa-pause').addClass('fa-play');
		}
	});

	$('#thanhnhac').change(function(){
		song.currentTime = thanhnhac.value/100*song.duration;
	});

	// tắt bật âm lượng 
	$('.song-controll-right .muted').click(function(){
		var muc_am_luong = $('#vol').val();
		if(song.muted || muc_am_luong==0){
			song.muted = false;
			volumn_img();
		}
		else{
			$('.song-controll-right .muted i').removeClass('fa-volume-up fa-volume-down').addClass('fa-volume-mute');
			song.muted = true;
		}
	});

	// xác định hình âm lương
	function volumn_img(){
		if($('#vol').val()==0){
			$('.song-controll-right .muted i').removeClass('fa-volume-up fa-volume-down').addClass('fa-volume-mute');
			song.muted = true;
		}
		else if($('#vol').val()>=5){
			$('.song-controll-right .muted i').removeClass('fa-volume-mute fa-volume-down').addClass('fa-volume-up');
			song.muted = false;
		}
		else {
			$('.song-controll-right .muted i').removeClass('fa-volume-up fa-volume-mute').addClass('fa-volume-down');
			song.muted = false;
		}
	}
	// thay đổi âm lượng
	$('#vol').change(function(){
		song.volume = 0.1*$('#vol').val();
		var x = $('#vol').val()*10;
		volumn_img();
		var color = 'linear-gradient(90deg,rgb(3, 169, 244) '+x+'%, white '+x+'%)';
		$('#vol').css('background',color);
	});

});