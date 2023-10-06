class TimerObject {
	constructor(startTime){
		this.startTime = startTime;
		this.endTime;
		this.charactersTyped = 0;
		this.started = false;
		this.timeoutID = undefined;
	}

	getWordsPerMinute() {
		this.endTime = new Date();
		var timeDiff = this.endTime - this.startTime; //in ms
	
		// convert ms to seconds
		var seconds = timeDiff/1000;
	
		// calculate characters per second and words per second (wps = cps/5)
		var wordsPerSecond = (this.charactersTyped/seconds)/5;
		var wordsPerMinute = wordsPerSecond*60;
		console.log(wordsPerMinute.toFixed(2) + " WPM");
		
		if(isNaN(wordsPerMinute)) {
			return 0;
		}

		return wordsPerMinute;
	}

	updateWPMLabel() {
		document.getElementById("speed-text").innerHTML = "WPM: " + timer.getWordsPerMinute().toFixed(2).toString();
		
		this.timeoutID = setTimeout(() => {
			this.updateWPMLabel();
		}, "2500");
	}

	startTimer() {
		this.charactersTyped = 0;
		this.startTime = new Date();
		document.getElementById("text-area").disabled = false;
		document.getElementById("end-button").disabled = false;
		this.updateWPMLabel();
	};
	
	stopTimer() {
		document.getElementById("speed-text").innerHTML = "WPM: " + timer.getWordsPerMinute().toFixed(2).toString();
		clearTimeout(this.timeoutID);
		document.getElementById("text-area").disabled = true;
		document.getElementById("end-button").disabled = true;
		clearTextField();
	}

	incrementCharactersTyped() {
		this.charactersTyped++;
	}

	getStarted() {
		return this.started;wordsPerMinute()
	}
}

timer = new TimerObject();

function clearTextField() {
	document.getElementById("text-area").value = ""
}

const textAreaElement = document.getElementById("text-area");
textAreaElement.addEventListener("input", function() {
	timer.incrementCharactersTyped();
	if(textAreaElement.value.slice(-1) === " ") {
		clearTextField();
	}
}, false);

const startButtonElement = document.getElementById("start-button");
const endButtonElement = document.getElementById("end-button");
startButtonElement.addEventListener("click", function() {
	timer.startTimer();
}, false);
endButtonElement.addEventListener("click", function() {
	timer.stopTimer();
}, false);