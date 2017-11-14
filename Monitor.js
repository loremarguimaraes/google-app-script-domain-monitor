//////////////////// 1.0 CONFIG ////////////////////////////////////////////////////////////
// Here you can change the script to run with your info.

var Config = {
    Spreadsheet_URL:'SPREADSHEET_URL',
    Email_SenderName: 'Your Name',
    Email_To: 'your@email.com',
    Email_Subject: 'Warning: Domains offline',
  }
  
  // Please don't change bellow this section (unless you know what you're doing :)
  //////////////////// END CONFIG ////////////////////////////////////////////////////////////
  
  
  //////////////////// 2.0 MAIN //////////////////////////////////////////////////////////////
  // 2.1 Retrieve data from spreadsheet and runs main functions
  function Main() {
    
    var spreadsheet = SpreadsheetApp.openByUrl(Config.Spreadsheet_URL); // working file
  
    var sheet = spreadsheet.getSheets()[1]; // working sheet
  
    var range = sheet.getDataRange(); // range with valid data
    
    var values = range.getValues(); // extract values into array
      
    var rows =  myRows(values); // my custom format for rows
    
    rows.shift() // removing the header
    
    // doing the job
    fetchURLs(rows);
    updateURLStatus(rows, range);
    notifyErrors(rows);
   
  }
  
  // 2.2 Creates an object from values array for easier data manipulation
  function myRows(values) {
  
    var rows = values.map(function(item) {
      return {
        domain: {val:item[0], col:1},
        status: {val:item[1], col:2},
        message: {val:item[2], col:3}
      }
    });
    
    return rows
  }
  
  // 2.3 Requests URLs and updates status and message for each data row
  function fetchURLs(rows) {
    
    for (var i=0; i<rows.length; i++) {
  
      var response;
  
      try {
        
        response = UrlFetchApp.fetch(rows[i].domain.val, {muteHttpExceptions: true});
        rows[i].status.val = response.getResponseCode();
        
      } catch(e) {
        Logger.log(e);
        rows[i].status.val = -1;
      }
      
      rows[i].message.val = HTTP_STATUS(rows[i].status.val).message;
      
      Utilities.sleep(1000); //Short delay between requests
      
    }
    
  }
  
  // 2.4 Persists results into spreadsheet
  function updateURLStatus(rows, range) {
    
    rows.forEach(function(item, index) {
      
      range.getCell(index+2, item.status.col).setValue(item.status.val);
      range.getCell(index+2, item.message.col).setValue(item.message.val);
      
    });
    
  }
  
  // 2.5 If there are errors, send email notification
  function notifyErrors (rows) {
    
    var errors = rows.filter(function(e) {
      return e.status !== 200;
    });
    
    if (errors.length === 0) return;
    
    var htmlBody = '';
    htmlBody += emailBody(errors);
    htmlBody += emailFooter();
    
    MailApp.sendEmail({
      name: Config.Email_SenderName,
      to: Config.Email_To,
      subject: Config.Email_Subject,
          htmlBody: htmlBody
    });
    
  }
  
  //////////////////// 3.0 HELPERS //////////////////////////////////////////////////////////
  // 3.1 Merge data with email body template
  var emailBody = function(rows) {
    
    var email_body_template = HtmlService.createTemplateFromFile('Email_Body.html');
    var email_body = '';
    
    rows.forEach(function(item) {
     
      if(item.status.val !== 200) {
        
        email_body_template.domain = item.domain.val;
        email_body_template.status = item.status.val;
        email_body_template.message = item.message.val;
        email_body += email_body_template.evaluate().getContent()
        
      }
      
    });
    
    return email_body;
    
  }
  
  // 3.1 Merge data with email footer template
  var emailFooter = function() {
    
    var email_footer_template = HtmlService.createTemplateFromFile('Email_Footer.html');
   
    return email_footer_template.evaluate().getContent()
    
  }
  //////////////////////////////////////////////////////////////////////////////////////////