function doGet(e) {
  // Enable CORS
  var headers = {'Access-Control-Allow-Origin': '*'};
  if (e.parameter.action === 'ping') {
    return ContentService.createTextOutput('Pong!').setHeaders(headers);
  } else if (e.parameter.action === 'getData') {
    try {
      var data = getData();
      return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON).setHeaders(headers);
    } catch (error) {
      return ContentService.createTextOutput('Error: ' + error.message).setHeaders(headers);
    }
  } else if (e.parameter.action === 'sync') {
    try {
      syncData();
      return ContentService.createTextOutput('Sync successful').setHeaders(headers);
    } catch (error) {
      return ContentService.createTextOutput('Error: ' + error.message).setHeaders(headers);
    }
  }
  return ContentService.createTextOutput('Invalid action').setHeaders(headers);
}

function getData() {
  // Fetch data logic here
  // Example:
  throw new Error('Fetch data failed'); // Simulate error for demonstration
  return {'key': 'value'}; // Placeholder data
}

function syncData() {
  // Synchronize data logic here
  // Example:
  throw new Error('Sync data failed'); // Simulate error for demonstration
}