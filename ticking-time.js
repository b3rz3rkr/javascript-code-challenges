{
    function getTime() {
        const currentDate = new Date();
        return currentDate.toLocaleTimeString();
    }

    function updateClock(id = 'clock') {
        const
            time = getTime(),
            clock = document.getElementById(id);
        clock.innerText = time;
    }
    updateClock();
    setInterval(updateClock, 1000);
}