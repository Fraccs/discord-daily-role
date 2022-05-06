const dayjs = require('dayjs');

let currentDay = dayjs().minute();

// Asyncronous check, (called once per second)
async function checkTimeout(callback) {
    setTimeout(() => {
        if(currentDay < dayjs().minute() || (dayjs().minute() === 1 && currentDay !== 1)) {
            currentDay = dayjs().minute();
            callback();
        }

        checkTimeout(callback);
    }, 1000);
}

module.exports = { checkTimeout };
