function removeMatchingHeaders(headers, regex){
  for (let i = 0; i < headers.length; i++){
    if (headers[i].name.match(regex)){
      headers.splice(i, 1);
      return true;
    }
  }
  return false;
}

function remove_security_headers(details) {
  //Remove X-XSS-Protection
  removeMatchingHeaders(details.responseHeaders, /x-xss-protection/i);
  
  // Remove Strict Transport Security
  removeMatchingHeaders(details.responseHeaders, /strict-transport-security/i);
  
  // Remove Content-Security-Policy
  removeMatchingHeaders(details.responseHeaders, /content-security-policy/i);

  // Replace Access-Control-Allow-Origin
  removeMatchingHeaders(details.responseHeaders, /access-control-allow-origin/i);
  details.responseHeaders.push({name: 'Access-Control-Allow-Origin', value: '*'});

  // Replace Access-Control-Allow-Methods
  removeMatchingHeaders(details.responseHeaders, /access-control-allow-methods/i);
  details.responseHeaders.push({name: 'Access-Control-Allow-Methods', value: '*'});

  // Remove X-Frame-Options
  removeMatchingHeaders(details.responseHeaders, /x-frame-options/i);
  
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
