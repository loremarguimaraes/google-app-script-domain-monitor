function HTTP_STATUS (code) {
  
  var status = [];

  status[-1] = "Unspecified Error";
  
  //Success
  status[200] = "OK";
  status[201] = "Created";
  status[202] = "Accepted";
  status[204] = "No Content";
  
  //Redirection
  status[301] = "Moved Permanently";
  status[305] = "Use Proxy";
  status[307] = "Temporary Redirect";
  status[308] = "Permanent Redirect";

  //Client Errors
  status[400] = "Bad Request";
  status[401] = "Unauthorized";
  status[402] = "Payment Required";
  status[403] = "Forbidden";
  status[404] = "Not Found";
  status[405] = "Method Not Allowed";
  status[406] = "Not Acceptable";
  status[407] = "Proxy Authentication Required";
  status[408] = "Request Timeout";
  status[409] = "Conflict";
  status[410] = "Gone";
  status[411] = "Length Required";
  status[412] = "Precondition Failed";
  status[413] = "Payload Too Large";
  status[414] = "URI Too Long";
  status[415] = "Unsupported Media Type";
  status[416] = "Range Not Satisfiable";
  status[417] = "Expectation Failed";
  status[418] = "I'm a teapot"; //Joke from Hyper Text Coffee Pot Control Protocol :)
  status[421] = "Misdirected Request";
  status[422] = "Unprocessable Entity";
  status[423] = "Locked";
  status[424] = "Failed Dependency";
  status[426] = "Upgrade Required";
  status[428] = "Precondition Required";
  status[429] = "Too Many Requests";
  status[431] = "Request Header Fields Too Large";
  status[451] = "Unavailable For Legal Reasons";
 
  //Server Errors
  status[500] = "Internal Server Error";
  status[501] = "Not Implemented";
  status[502] = "Bad Gateway";
  status[503] = "Service Unavailable";
  status[504] = "Gateway Timeout";
  status[505] = "HTTP Version Not Supported";
  status[506] = "Variant Also Negotiates";
  status[507] = "Insufficient Storage";
  status[508] = "Loop Detected";  
  status[510] = "Not Extended";
  status[551] = "Network Authentication Required"; 
    
  //Cloudflare Errors
  status[520] = "Unknown Error";
  status[521] = "Web Server Is Down";
  status[522] = "Connection timed out";
  status[523] = "Origin Is Unreachable";
  status[524] = "A Timeout Occurred";
  status[525] = "SSL Handshake Failed";
  status[526] = "Invalid SSL Certificate";
  status[527] = "Railgun Error";
  
  return status[code] ? {code:code, message:status[code]} : {code:code, message:"Status not Found"}
  
}