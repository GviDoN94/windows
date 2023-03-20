'use strict';

const timer = (id, deadline) => {
    const addZero = (num) => {
        if (num <= 9) {
            return `0${num}`;
        }
        return num;
    };

    const getTimeRemaining = (endtime) => {
        const time = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((time / 1000) % 60),
            minutes = Math.floor(time / 1000 / 60) % 60,
            hours = Math.floor((time / (1000 * 60 * 60)) % 24),
            days = Math.floor((time / (1000 * 60 * 60 * 24)));

        return {
            total: time,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const  time = getTimeRemaining(endTime);

            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            if (time.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;
