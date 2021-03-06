// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEXT_ANALYTICS_KEY'] = 'dummy';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0b1f6471-1bf0-4dda-aec3-cb9272f09590';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://westus.api.cognitive.microsoft.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/text/analytics/v2.0/sentiment', '*')
  .reply(200, "{\"documents\":[{\"score\":0.99979335069656372,\"id\":\"1\"},{\"score\":8.5532665252685547E-06,\"id\":\"2\"}],\"errors\":[]}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  'x-ms-transaction-count': '2',
  'x-aml-ta-request-id': '34594f7d-7bc9-4442-9aa4-55c44edc0f8b',
  'x-content-type-options': 'nosniff',
  'apim-request-id': '3f2c70df-9f51-4519-b7ea-4ba0840fa8da',
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
  date: 'Fri, 10 Nov 2017 01:17:56 GMT',
  connection: 'close' });
 return result; }]];