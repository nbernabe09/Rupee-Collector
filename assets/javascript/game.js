$(document).ready(function() {

	// SD Audio
	var titleMusic = document.createElement("audio");
	titleMusic.setAttribute("src", "assets/audio/titleScreen.mp3");
	var gameMusic = document.createElement("audio");
	gameMusic.setAttribute("src", "assets/audio/darkWorld.mp3");
	var selectSound = document.createElement("audio");
	selectSound.setAttribute("src", "assets/audio/select.wav");
	var rupeeSound = document.createElement("audio");
	rupeeSound.setAttribute("src", "assets/audio/rupee.wav");
	var audio = [titleMusic, gameMusic, selectSound, rupeeSound];

	// HD Audio
	var titleMusicHD = document.createElement("audio");
	titleMusicHD.setAttribute("src", "assets/audio/titleScreenHD.mp3");
	var gameMusicHD = document.createElement("audio");
	gameMusicHD.setAttribute("src", "assets/audio/darkWorldHD.mp3");
	var selectSoundHD = document.createElement("audio");
	selectSoundHD.setAttribute("src", "assets/audio/selectHD.wav");
	var rupeeSoundHD = document.createElement("audio");
	rupeeSoundHD.setAttribute("src", "assets/audio/rupeeHD.wav");
	var audioHD = [titleMusicHD, gameMusicHD, selectSoundHD, rupeeSoundHD];

	// Number Variables
	var winCount = 0;
	var loseCount = 0;
	var green,
		blue,
		red,
		purple,
		rupeeBag,
		ranCost,
		ranRupee;

	// Game Functions
	function gameStart() {
		newRupee();
		$("#win").text(winCount);
		$("#lose").text(loseCount);
		ranCost = Math.floor(Math.random() * (120 - 19) + 19);
		$("#ran-num").text(ranCost);
		rupeeBag = 0;
		$("#bag").text(rupeeBag);
	}
	function newRupee() {
		ranRupee = [];
		for (var i = 0; i < 4; i++) {
			var random = Math.floor(Math.random() * 12) + 1;
			ranRupee.push(random);
		}
		green = ranRupee[0];
		blue = ranRupee[1];
		red = ranRupee[2];
		purple = ranRupee[3];
	}
	function newRound() {
		if (rupeeBag === ranCost) {
			winCount ++;
			gameStart();
		} else if (rupeeBag > ranCost) {
			loseCount ++;
			gameStart();
		}
	}

	// Intro
	$(".game-container").hide();
	titleMusic.play();
	titleMusicHD.play();

	// Start Game
	$(".zelda-container").on("click", function() {
		titleMusic.pause();
		titleMusicHD.pause();
		selectSound.play();
		selectSoundHD.play();
		gameStart();
		$(".zelda-container").fadeOut(400, function() {
			$(".game-container").fadeIn(400, function() {
				gameMusic.play();
				gameMusicHD.play();
				gameMusic.loop = true;
				gameMusicHD.loop = true;
				console.log("Shopkeep: Thought you can cheat, did you?")
			});
		});
	});

	// Rupee Mechanics
	$("#green").on("click", function() {
		rupeeBag += green;
	});
	$("#blue").on("click", function() {
		rupeeBag += blue;
	});
	$("#red").on("click", function() {
		rupeeBag += red;
	});
	$("#purple").on("click", function() {
		rupeeBag += purple;
	});
	$(".rupee").on("click", function() {
		rupeeSound.play();
		rupeeSoundHD.play();
		$("#bag").text(rupeeBag);
		newRound();
	});

	// Mute Button
	$("#mute").hide();
	$("#unmute").on("click", function() {
		$("#unmute").hide();
		$("#mute").show();
    for (var i = 0; i < audio.length; i++) {
    	audio[i].muted = true;
    }
	});
	$("#mute").on("click", function() {
		$("#mute").hide();
		$("#unmute").show();
    for (var i = 0; i < audio.length; i++) {
    	audio[i].muted = false;
    }
	});
		$("#unmuteHD").on("click", function() {
		$("#unmuteHD").hide();
		$("#muteHD").show();
    for (var i = 0; i < audioHD.length; i++) {
    	audioHD[i].muted = true;
    }
	});
	$("#muteHD").on("click", function() {
		$("#muteHD").hide();
		$("#unmuteHD").show();
    for (var i = 0; i < audioHD.length; i++) {
    	audioHD[i].muted = false;
    }
	});	

	// HD Button
	$("#muteHD").hide();
	$("#unmuteHD").hide();
	for (var j = 0; j < audioHD.length; j++) {
		audioHD[j].muted = true;
	}
	$("#hd").on ("click", function() {
		$("#mute").hide();
		$("#unmute").hide();
		$("#unmuteHD").show();
		for (var i = 0; i < audio.length; i++) {
    	audio[i].muted = true;
    }
    for (var j = 0; j < audioHD.length; j++) {
		audioHD[j].muted = false;
		}
	});
});