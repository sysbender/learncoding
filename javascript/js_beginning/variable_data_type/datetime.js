const assert = require("assert");
const exp = require("constants");

// Date from string ISO8601: YYYY-MM-DDTHH:mm:ss.sssZ   1997-07-16T19:20:30.45+01:00
//(Z +|-HH:mm)  , defult MM/DD is 01, HH/mm/ss is 00
// if time zone offset is absent , Date only string are interpreted as UTC
// and date-time are interpreted as local time

// 1. parse date only into utc , then add timezone offset
let expected = "2023-09-01T04:00:00.000Z";

let dUTC1 = new Date("2023-09-01");

dUTC1.setMinutes(dUTC1.getMinutes() + dUTC1.getTimezoneOffset());
let sUTC1 = dUTC1.toISOString();

assert.strictEqual(sUTC1, expected);

// 2. parse date time into local
let dLocal1 = new Date("2023-09-01T00:00:00");
let sLocal1 = dLocal1.toISOString();

assert.strictEqual(sLocal1, expected);

// 3. construct from number
let dDate = new Date(2023, 9 - 1, 1);
let sDate = dDate.toISOString();

assert.strictEqual(sDate, expected);

// 4. millisecond from 1970

let m1 = dDate.valueOf();
let m2 = dDate.getTime();
assert.strictEqual(m1, m2);

let dM = new Date(m1);
let sM = dM.toISOString();
assert.strictEqual(sM, expected);

// Date and timezone = https://www.youtube.com/watch?v=oKFb2Us9kmg

// Date.parse() - local time from string
let dParse = new Date(Date.parse("Sep 1, 2023"));
let sParse = dParse.toISOString();
assert.strictEqual(sParse, expected);

// Date.UTC() -  UTC time from number
let dUTC = new Date(Date.UTC(2023, 9 - 1, 1));
dUTC.setMinutes(dUTC.getMinutes() + dUTC.getTimezoneOffset());
let sUTC = dUTC.toISOString();
assert.strictEqual(sUTC, expected);

//=================method
/**
 * getTime = valueOf
 * getFullYear , getHours/Minutes/Seconds/Milliseconds
 */
let d = new Date(Date.parse("2023-09-01T00:00:00"));
assert.strictEqual(d.getFullYear(), 2023);
assert.strictEqual(d.getMonth() + 1, 9);
assert.strictEqual(d.getDate(), 1);

x = Intl.DateTimeFormat("en-US").format(d);
assert.strictEqual(x, "9/1/2023");

x = Intl.DateTimeFormat("default", { month: "short" }).format(d);
assert.strictEqual(x, "Sep");

x = d.toLocaleString("default", { month: "short" });
assert.strictEqual(x, "Sep");
