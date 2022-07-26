import { Environment } from '@abp/ng.core';

const baseUrl = 'http://tintest.tdg-am.com.vn';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'real_estate',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://abp.tdg-am.com.vn',
    redirectUri: baseUrl,
    clientId: 'real_estate_App',
    responseType: 'code',
    scope: 'offline_access real_estate',
    requireHttps: false
  },
  apis: {
    default: {
      url: 'http://abp.tdg-am.com.vn',
      rootNamespace: 'Ssmti.real_estate',
    },
  },
} as Environment;
