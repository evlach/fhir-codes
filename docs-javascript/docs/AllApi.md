# FhirCodesApi.AllApi

All URIs are relative to *https://virtserver.swaggerhub.com/evlach/fhir-codes-api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCodeToValueSet**](AllApi.md#addCodeToValueSet) | **POST** /valueset/{url} | insert a code to the valueset
[**getValueSet**](AllApi.md#getValueSet) | **GET** /valueset/{url} | get valueset
[**getValueSetCode**](AllApi.md#getValueSetCode) | **GET** /valueset/{url}/concept/{code} | get code from valueset
[**getValueSetsList**](AllApi.md#getValueSetsList) | **GET** /valuesets | get list of all valuesets (list of urls)
[**updateCodeToValueSet**](AllApi.md#updateCodeToValueSet) | **PUT** /valueset/{url} | update a code to the valueset


<a name="addCodeToValueSet"></a>
# **addCodeToValueSet**
> Concept addCodeToValueSet(url, concept)

insert a code to the valueset



### Example
```javascript
var FhirCodesApi = require('fhir_codes_api');

var apiInstance = new FhirCodesApi.AllApi();

var url = "url_example"; // String | ID of pet to update

var concept = new FhirCodesApi.Concept(); // Concept | user to add to the system


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addCodeToValueSet(url, concept, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| ID of pet to update | 
 **concept** | [**Concept**](Concept.md)| user to add to the system | 

### Return type

[**Concept**](Concept.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getValueSet"></a>
# **getValueSet**
> Object getValueSet(url)

get valueset

Get valueset by id 

### Example
```javascript
var FhirCodesApi = require('fhir_codes_api');

var apiInstance = new FhirCodesApi.AllApi();

var url = "url_example"; // String | url of valueset


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getValueSet(url, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| url of valueset | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getValueSetCode"></a>
# **getValueSetCode**
> Object getValueSetCode(url, code, opts)

get code from valueset

Get concept 

### Example
```javascript
var FhirCodesApi = require('fhir_codes_api');

var apiInstance = new FhirCodesApi.AllApi();

var url = "url_example"; // String | url of valueset

var code = "code_example"; // String | url of valueset

var opts = { 
  'lang': "lang_example" // String | language
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getValueSetCode(url, code, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| url of valueset | 
 **code** | **String**| url of valueset | 
 **lang** | **String**| language | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getValueSetsList"></a>
# **getValueSetsList**
> [ValueSet] getValueSetsList()

get list of all valuesets (list of urls)

Get the full list of valuesets 

### Example
```javascript
var FhirCodesApi = require('fhir_codes_api');

var apiInstance = new FhirCodesApi.AllApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getValueSetsList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ValueSet]**](ValueSet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateCodeToValueSet"></a>
# **updateCodeToValueSet**
> Concept updateCodeToValueSet(url, concept)

update a code to the valueset



### Example
```javascript
var FhirCodesApi = require('fhir_codes_api');

var apiInstance = new FhirCodesApi.AllApi();

var url = "url_example"; // String | ID of pet to update

var concept = new FhirCodesApi.Concept(); // Concept | user to add to the system


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCodeToValueSet(url, concept, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **String**| ID of pet to update | 
 **concept** | [**Concept**](Concept.md)| user to add to the system | 

### Return type

[**Concept**](Concept.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

