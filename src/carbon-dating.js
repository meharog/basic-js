const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if ('string' === typeof (sampleActivity)) {
    // let res = /^(0(?=(\.))|[1-9][0-9]*)(\.(?=[0-9]))?[0-9]*$/; // WTF ? (test\carbon-dating.test.js:54:14)
    let res = /^(0(?=(\.))|[1-9][0-9]*)(\.(?=[0-9]))?[0-9]*(\.(?=[0-9]))?[0-9]*$/; // WTF ? (test\carbon-dating.test.js:54:14)
    if (res.test(sampleActivity)) {
      sampleActivity = parseFloat(sampleActivity); // WTF ? (test\carbon-dating.test.js:54:14)
      if (+sampleActivity <= MODERN_ACTIVITY) {
        let time = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
        return Math.ceil(time);
      };
    };
  };
  return false;
};