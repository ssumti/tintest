import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
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
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44390',
      rootNamespace: 'Ssmti.real_estate',
    },
  },
} as Environment;
