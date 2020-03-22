module.exports = function repeater(str, options) {
    let strOut = '';
    let additionRep = '';
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || '+';
    let addition = options.addition;
    (addition === undefined) ? addition = '' : addition = addition ; //crutch
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';
    for (let i = 1; i <= additionRepeatTimes; i++) {
        if (i === additionRepeatTimes) {
            additionRep = additionRep + addition
        } else {
            additionRep = additionRep + addition + additionSeparator
        };
    };
    for (let i = 1; i <= repeatTimes; i++) {
        if (i === repeatTimes) {
            strOut = strOut + str + additionRep
        } else {
            strOut = strOut + str + additionRep + separator
        };
    };
    return strOut;
};