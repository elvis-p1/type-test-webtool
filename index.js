class TimerObject {
	constructor(startTime){
		this.startTime = startTime;
		this.endTime;
		this.charactersTyped = 0;
		this.started = false;
	}
	
	startTimer() {
		this.charactersTyped = 0;
		this.startTime = new Date();
		document.getElementById("text-area").disabled = false;
		document.getElementById("end-button").disabled = false;
	};
	
	getElapsedTime() {
		this.endTime = new Date();
		var timeDiff = this.endTime - this.startTime; //in ms
	
		// convert ms to seconds
		var seconds = timeDiff/1000;
	
		// calculate characters per second and words per second (wps = cps/5)
		var wordsPerSecond = (this.charactersTyped/seconds)/5;
		var wordsPerMinute = wordsPerSecond*60;
		console.log(wordsPerMinute.toFixed(2) + " WPM");
		
		return wordsPerMinute;
	}

	incrementCharactersTyped() {
		this.charactersTyped++;
	}

	getStarted() {
		return this.started;
	}
}

timer = new TimerObject();

function aFunction() {
	timer.incrementCharactersTyped();
	document.getElementById("speed-text").innerHTML = "WPM: " + timer.getElapsedTime().toFixed(2).toString();
}


