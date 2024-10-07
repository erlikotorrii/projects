function saveDurations() {
    const studyDuration = document.getElementById('studyDuration').value;
    const breakDuration = document.getElementById('breakDuration').value;

    localStorage.setItem('studyDuration', studyDuration);
    localStorage.setItem('breakDuration', breakDuration);
}

function loadDurations() {
    if (localStorage.getItem('studyDuration')) {
        document.getElementById('studyDuration').value = localStorage.getItem('studyDuration');
    }
    if (localStorage.getItem('breakDuration')) {
        document.getElementById('breakDuration').value = localStorage.getItem('breakDuration');
    }
}

function startSession() {
    const studyDuration = parseInt(document.getElementById('studyDuration').value);
    const breakDuration = parseInt(document.getElementById('breakDuration').value);

    saveDurations();

    const totalTimeInSeconds = (studyDuration * 60) + (breakDuration * 60);

    let currentTime = 0;
    const progressBar = document.getElementById('progressBar');
    
    const interval = setInterval(function() {
        currentTime++;
        const progress = (currentTime / totalTimeInSeconds) * 100;
        progressBar.style.width = progress + '%';
        progressBar.setAttribute('aria-valuenow', progress);

        if (currentTime >= totalTimeInSeconds) {
            clearInterval(interval);
            alert('Session completed!');
            progressBar.style.width = '0%';
            saveSessionToHistory(studyDuration, breakDuration);
        }
    }, 1000); 
}

document.getElementById('startButton').addEventListener('click', function() {
    startSession();
});

let sessionHistory = localStorage.getItem('sessionHistory') ? JSON.parse(localStorage.getItem('sessionHistory')) : [];

function saveSessionToHistory(studyDuration, breakDuration) {
    const sessionDateAndTime = new Date();
    const sessionDate = sessionDateAndTime.toLocaleDateString();
    const sessionTime = sessionDateAndTime.toLocaleTimeString();

    const session = {
        date: sessionDate,
        time: sessionTime,
        studyDuration: parseInt(studyDuration),
        breakDuration: parseInt(breakDuration)
    };

    sessionHistory.push(session);
    localStorage.setItem('sessionHistory', JSON.stringify(sessionHistory));

    showSessionHistory(session);
}

function showSessionHistory(session) {
    const sessionHistoryDiv = document.getElementById('sessionHistory');

    const sessionHistoryText = document.createElement('p');
    sessionHistoryText.innerHTML = `Date: ${session.date}, Time: ${session.time}, Study Duration: ${session.studyDuration} minutes, Break Duration: ${session.breakDuration} minutes`;

    sessionHistoryDiv.appendChild(sessionHistoryText);
}

sessionHistory.forEach(session => {
    showSessionHistory(session);
});

loadDurations();