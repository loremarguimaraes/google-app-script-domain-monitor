# Google App Script - Domain / Website Monitor

Using this App Script with Google Spreadsheet you can:

* Monitor a list of domains/websites/URLs you define in the spreadsheet
* Get notified by email if one of them is offline (http status code other than 200)
* Customize email sender, to, subject and body template
* Define a trigger to automaticaly run the script (e.g. every 15 minutes)

This script is under active development. New features will be regularly added but I can't guarantee when new updates will be published (since this is one of my side projects).

## Limitations

The script uses Google URL Fetch calls to request URLs. This service has limited quotas you can use on 24h basis. You can check this limitations in detail at <a href="https://developers.google.com/apps-script/guides/services/quotas" target="_blank">Quotas for Google Services</a>

For example, if you monitor 100 URLs, every 15 minutes, will be using 9.600 request per day wich is under the current quota of 20.000 requests per day (for regular Gmail users).

## How to Set Up

This is how you can manually instal the script

1) Create new Google App Script you account and add four files: Monitor.gs, HttpStatusCodes.gs, Email_Body.html, Email_Footer.html

2) Copy and paste the contents of Monitor.js, HttpStatusCodes.js, Email_Body.html, Email_Footer.html, respectively

3) Create a Google Spreasheet with three columns (Domain, Status and Message) as picture below:

![google-app-script-domain-monitor-readme-1](https://user-images.githubusercontent.com/19185946/32801703-98ecdf4a-c95c-11e7-80a6-49e7e3806a4c.png)

4) Configure Monitor.gs with your info:

![google-app-script-domain-monitor-readme-2](https://user-images.githubusercontent.com/19185946/32801704-991aedc2-c95c-11e7-9198-072ae9adfe09.png)

5) Running the script immediately or configuring a trigger you'll get something like this:

![google-app-script-domain-monitor-readme-3](https://user-images.githubusercontent.com/19185946/32801706-9944ab1c-c95c-11e7-8e28-4e9023ddd719.png)


## Bugs and Ideas
If you have ideas to improve the script or run into bugs please open an issue or pull request, thanks!

