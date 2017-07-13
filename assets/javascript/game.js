$(document).ready(function() {

	// Audio
	var titleMusic = document.createElement("audio");
	titleMusic.setAttribute("src", "assets/audio/titleScreenHD.mp3");
	var gameMusic = document.createElement("audio");
	gameMusic.setAttribute("src", "assets/audio/darkWorldHD.mp3");
	var selectSound = document.createElement("audio");
	selectSound.setAttribute("src", "assets/audio/selectHD.wav");
	var rupeeSound = document.createElement("audio");
	rupeeSound.setAttribute("src", "assets/audio/rupeeHD.wav");

	// Number Items
	var winCount;
	var loseCount;
	var bag;
	var ranNum;

	// Intro
	$(".game-container").hide();
	titleMusic.play();

	// Start Game
	$(".zelda-container").on("click", function() {
		titleMusic.pause();
		selectSound.play();
		$(".zelda-container").fadeOut(400, function() {
			$(".game-container").fadeIn(400, function() {
				var stopped = false;
				gameMusic.play();
				gameMusic.addEventListener('ended', function() {
					if(!stopped){
						gameMusic.currentTime = 0;
						gameMusic.play();
					}
				}, false);
			});
		});
	});

});