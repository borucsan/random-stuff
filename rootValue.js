const EULERSERIES_COUNT = 1000;
const NUMBERS_COUNT = 10;

module.exports = () => {
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    const now = new Date();
    const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return {
        interestingUrls: ["https://smashingmagazine.com", "https://twitter.com/garrows/status/1065217184643768320"],
        firstName: 'John',
        email: 'john@example.com',
        pets: ['Mittens', 'Doggo', 'Birb'],
        randomNumbers: Array.from({length: NUMBERS_COUNT}, () => Math.floor(Math.random() * 10000)),
        amWorking: [2,3].includes(now.getDay()) || now.getHours() < 12,
        pi: Math.PI,
        workDays: DAYS_OF_WEEK.slice(1, 6),
        e: Math.E,
        eulersSeries: Array.from({length: EULERSERIES_COUNT}, (v, k) => k + 1 ).map(n => Math.pow((1 + 1/n), n)),
        timeBinary: {
            hour: dec2bin(now.getHours()),
            minute: dec2bin(now.getMinutes()),
            second: dec2bin(now.getSeconds())
        }
    }
};