import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'real_estate',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44390',
    redirectUri: baseUrl,
    clientId: 'real_estate_App',
    responseType: 'code',
    scope: 'offline_access real_estate',
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'https://localhost:44390',
      rootNamespace: 'Ssmti.real_estate',
    },
  },
} as Environment;
