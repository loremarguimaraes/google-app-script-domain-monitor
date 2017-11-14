# Google App Script - Domain / Website Monitor

Using this App Script with Google Spreadsheet you can:

* Monitor a list of domains/websites/URLs you define in the spreadsheet
* Get notified by email if one of them is offline (http status code other than 200)
* Customize email sender, to, subject and body template
* Define a trigger to automaticaly run the script (e.g. every 15 minutes)

This script is under active development. New features will be regularly added but I can't guarantee when new updates will be published (since this is one of my side projects).

## Limitations

The script uses Google URL Fetch calls to request URLs. This service has limited quotas you can use on 24h basis. You can check this limitations in detail at: [Quotas for Google Services](https://developers.google.com/apps-script/guides/services/quotas target="_blank")

For example, if you monitor 100 URLs, every 15 minutes, will be using 9.600 request per day wich is under the current quota of 20.000 requests per day (for regular Gmail users).

## How to Set Up

I'm working on, publishing soon...

## Bugs and Ideas
If you have ideas to improve the script or run into bugs please open an issue or pull request, thanks!

