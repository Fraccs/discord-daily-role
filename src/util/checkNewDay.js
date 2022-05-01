const dayjs = require('dayjs');

let currentDay = dayjs().day();

// Asyncronous check, (called once per second)
async function checkTimeout(callback) {
    setTimeout(() => {
        if(currentDay < dayjs().day() || (dayjs().day() === 1 && currentDay !== 1)) {
            currentDay = dayjs().day();
            callback();

            return true;
        }

        checkTimeout();
    }, 1000);
}

module.exports = { checkTimeout };
