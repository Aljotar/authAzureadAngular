import { TokenType } from '@angular/compiler';
import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
 
export const msalConfig: Configuration = {
     auth: {
         clientId: '82defadd-5c44-43a7-ac1a-6248b0c83e3d',
         authority:'https://login.microsoftonline.com/17cd7fad-2445-4a68-9193-eb6b80b378cb',
         redirectUri:'http://localhost:4200',
         postLogoutRedirectUri: 'http://localhost:4200'
     },
     cache: {
         cacheLocation: BrowserCacheLocation.LocalStorage,
         storeAuthStateInCookie: isIE, 
     },
     system: {
         loggerOptions: {
            loggerCallback: (logLevel, message, containsPii) => {
                console.log(message);
             },
             logLevel: LogLevel.Verbose,
             piiLoggingEnabled: false
         }
     }
 }

export const protectedResources = {
  todoListApi: {
    endpoint: "https://localhost:7158/api/user/getname?name=eze",
    scopes: ["user.read"],
  },
}
export const loginRequest = {
  scopes: []
};