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
			var string = random.toString();
			ranRupee.push(string);
		}
		green = parseInt(ranRupee[0]);
		blue = parseInt(ranRupee[1]);
		red = parseInt(ranRupee[2]);
		purple = parseInt(ranRupee[3]);
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

	// Start Game
	$(".zelda-container").on("click", function() {
		titleMusic.pause();
		selectSound.play();
		gameStart();
		$(".zelda-container").fadeOut(400, function() {
			$(".game-container").fadeIn(400, function() {
				gameMusic.play();
				gameMusic.loop = true;
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
		$("#bag").text(rupeeBag);
		newRound();
	});
});