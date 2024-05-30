import { Configuration, LogLevel } from '@azure/msal-browser';

const tenantId = '73f6154b-e2df-4b22-a245-fc5dbce54731';
const clientId = 'da78f87c-db9c-4019-8b8e-f1b6d917844f';

export const msalConfig: Configuration = {
    auth: {
        clientId: clientId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        redirectUri: 'http://localhost:4200',
    },
    cache: {
        cacheLocation: 'localStorage', // This configures where your cache will be stored
        storeAuthStateInCookie: isIE(), // Set to true for Internet Explorer 11
    },
    system: {
        loggerOptions: {
            loggerCallback,
            logLevel: LogLevel.Info,
            piiLoggingEnabled: false
        }
    }
};

export const loginRequest = {
    scopes: ['User.Read']
};

export const protectedResources = {
    apiTodoList: {
        endpoint: 'https://your-api-endpoint',
        scopes: {
            read: ['api://your-api-scope/read'],
            write: ['api://your-api-scope/write']
        }
    }
};

function loggerCallback(logLevel: LogLevel, message: string) {
    console.log(message);
}

function isIE(): boolean {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}
