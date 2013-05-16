"use strict";
var tz = require('timezone-js');
tz.timezone.loadingScheme = tz.timezone.loadingSchemes.MANUAL_LOAD;
tz.timezone.loadZoneDataFromObject(require('./all-timezones.json'));

function convertToTz(date, timezone) {
	date = new tz.Date(date.getTime());
	date.setTimezone(timezone);
	return date.toString('MM-dd-yyyy HH:mm Z');
}

var dt = new Date();

console.log('now', dt.toString());
console.log('utc', dt.toISOString());

console.log('est', convertToTz(dt, 'America/New_York'));