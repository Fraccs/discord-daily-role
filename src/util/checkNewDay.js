const dayjs = require('dayjs');

let currentDay = dayjs().minute();

// Checks if the day changed
function checkNewDay(callback) {
    if(currentDay < dayjs().minute() || (dayjs().minute() === 1 && currentDay !== 1)) {
        currentDay = dayjs().minute();
        callback();
        return true;
    }

    return false;
}

module.exports = { checkNewDay };
