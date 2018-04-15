function removeMatchingHeaders(headers, regex, callback){
  for (let i = 0; i < headers.length; i++){
    if (headers[i].name.match(regex)){
      let header = headers[i];
      headers.splice(i, 1);
      console.log('Removed Security Header: {' + header.name + ': ' + header.value + '}');
      callback(headers);
      return true;
    }
  }
  return false;
}

function remove_security_headers(details) {
  //Remove X-XSS-Protection
  removeMatchingHeaders(
    details.responseHeaders,
      /x-xss-protection/i,
    function(headers){
      return true;
    }
  );
  
  // Remove Strict Transport Security
  removeMatchingHeaders(
    details.responseHeaders,
      /strict-transport-security/i,
    function(headers){
      return true;
    }
  );
  
  // Remove Content-Security-Policy
  removeMatchingHeaders(
    details.responseHeaders,
      /content-security-policy/i,
    function(headers){
      return true;
    }
  );

  // Remove X-Content-Type-Options
  removeMatchingHeaders(
    details.responseHeaders,
      /x-content-type-options/i,
    function(headers){
      return true;
    }
  );

  // Replace Access-Control-Allow-Origin
  removeMatchingHeaders(
    details.responseHeaders,
      /access-control-allow-origin/i,
    function(headers){
      let header = {
        name: 'Access-Control-Allow-Origin',
        value: '*'
      };
      console.log('Replaced Header: ' + '{' + header.name + ':' + header.value + '}');
      headers.push(header);
      return true;
    }
  );

  // Replace Access-Control-Allow-Methods
  removeMatchingHeaders(
    details.responseHeaders,
      /access-control-allow-methods/i,
    function(headers){
      let header = {
        name: 'Access-Control-Allow-Methods',
        value: '*'
      };
      headers.push(header);
      console.log('Replaced Header: ' + '{' + header.name + ':' + header.value + '}');
      return true;
    }
  );

  // Remove X-Frame-Options
  removeMatchingHeaders(
    details.responseHeaders,
      /x-frame-options/i,
    function(headers){
      return true;
    }
  );

  // Remove Public-Key-Pins-Report-Only
  removeMatchingHeaders(
    details.responseHeaders,
      /public-key-pins-report-only/i,
    function(headers){
      return true;
    }
  );

  //Remove Referrer-Policy
  removeMatchingHeaders(
    details.responseHeaders,
      /referrer-policy/i,
    function(headers){
      return true;
    }
  );
  
  return {responseHeaders: details.responseHeaders};
}

chrome.webRequest.onHeadersReceived.addListener(
  remove_security_headers,
  {
    urls: ['*://*/*']
  },
  [
    'blocking',
    'responseHeaders'
  ]
);
