'use strict';

const timer = (id, deadline) => {
    const addZero = (num) => {
        if (num <= 9) {
            return `0${num}`;
        }
        return num;
    };

    function declOfNum(number, titles) {
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[
            number % 100 > 4 && number % 100 < 20 ?
            2 : cases[number % 10 < 5 ? number % 10 : 5]
        ];
    }

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
            timeInterval = setInterval(updateClock, 1000),
            daysText = timer.querySelector('#days_text'),
            hoursText = timer.querySelector('#hours_text'),
            minutesText = timer.querySelector('#minutes_text'),
            secondsText = timer.querySelector('#seconds_text');

        updateClock();

        function updateClock() {
            const  time = getTimeRemaining(endTime);

            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);
            daysText.textContent = declOfNum(time.days, ['День', 'Дня', 'Дней']);
            hoursText.textContent = declOfNum(time.hours, ['Час', 'Часа', 'Часов']);
            minutesText.textContent = declOfNum(time.minutes, ['Минута', 'Минуты', 'Минут']);
            secondsText.textContent = declOfNum(time.seconds, ['Секунда', 'Секунды', 'Секунд']);

            if (time.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;
