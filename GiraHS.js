// Hinweis: Die nachfolgenden 3 Platzhalter [DYNDNS], [PORT] und [TOKEN] müssen durch die korrekten eigenen Werte
// ersetzt werden. Die eckigen Klammern sind Teil des Platzhalters und müssen mit ersetzt werden!

var REMOTE_CLOUD_HOSTNAME = '[DYNDNS]'; // Dynamic DNS Hostname ohne http/https z.B.: alexa.meinDomainName.de
var REMOTE_CLOUD_PORT = [PORT]; // zu verwendender Port (> 1024), gleicher Int-Wert wie im Logikbaustein Eingang 2
var ACCESS_TOKEN = '[TOKEN]'; // zu verwendendes Access Token, gleicher String-Wert wie im Logikbaustein Eingang 3
var REMOTE_CLOUD_BASE_PATH = '/';

var https = require('https');

	/**
	 * Main entry point.
	 * Incoming events from Smart Home API are processed via this method.
	 */
	exports.handler = function (event, context) {

	log('Input', event);

	switch (event.header.namespace) {

	case 'Alexa.ConnectedHome.Discovery':
		handleDiscovery(event, context);
		break;

	case 'Alexa.ConnectedHome.Control':
		handleControl(event, context);
		break;

	default:
		log('Err', 'Unsupported namespace: ' + event.header.namespace);
		context.fail('Something went wrong');
		break;
	}
};

function handleDiscovery(event, context) {
	handle(event, context, "discovery", "");
}

function handleControl(event, context) {

	var applianceId = event.payload.appliance.applianceId;
	var request = event.header.name;
	var query = '&applianceId=' + encodeURIComponent(applianceId) + '&request=' + event.header.name;

	if (request == "SetPercentageRequest") {
		query += '&value=' + event.payload.percentageState.value;
	} else if (request == "IncrementPercentageRequest" || request == "DecrementPercentageRequest") {
		query += '&value=' + event.payload.deltaPercentage.value;
	} else if (request == "SetTargetTemperatureRequest") {
		query += '&value=' + event.payload.targetTemperature.value;
  } else if (request == "IncrementTargetTemperatureRequest" || request == "DecrementTargetTemperatureRequest") {
    query += '&value=' + event.payload.targetTemperature.value;
  }

	handle(event, context, "control", query);
}

function handle(event, context, path, query) {

	var messageId = event.header.messageId;

	path = REMOTE_CLOUD_BASE_PATH + path + '?accessToken=' + encodeURIComponent(ACCESS_TOKEN) + "&messageId=" + messageId + query;

	var options = {
		hostname: REMOTE_CLOUD_HOSTNAME,
		port: REMOTE_CLOUD_PORT,
		path: path,
		rejectUnauthorized: false,
		headers: {
			accept: '*/*'
		}
	};

	var callback = function (response) {
		var str = '';

		response.on('data', function (chunk) {
			str += chunk.toString('utf-8');
		});

		response.on('end', function () {
			var result = JSON.parse(str);
			log('Output', result);
			context.succeed(result);
		});

		response.on('error', function (e) {
			log('Error', e.message);
			context.fail("Server Error");

		});
	};

	https.get(options, callback)
	.on('error', serverError).end();
}

function serverError(e) {
	log('Error', e.message);
}

/**
 * Utility functions.
 */
function log(title, msg) {
	console.log('*************** ' + title + ' *************');
	console.log(msg);
	console.log('*************** ' + title + ' End*************');
}
