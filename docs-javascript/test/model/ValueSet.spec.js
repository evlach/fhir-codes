/**
 * FHIR Codes API
 * FHIR Codes API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: evlach@fit.fraunhofer.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FhirCodesApi);
  }
}(this, function(expect, FhirCodesApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FhirCodesApi.ValueSet();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ValueSet', function() {
    it('should create an instance of ValueSet', function() {
      // uncomment below and update the code to test ValueSet
      //var instane = new FhirCodesApi.ValueSet();
      //expect(instance).to.be.a(FhirCodesApi.ValueSet);
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new FhirCodesApi.ValueSet();
      //expect(instance).to.be();
    });

    it('should have the property concepts (base name: "concepts")', function() {
      // uncomment below and update the code to test the property concepts
      //var instane = new FhirCodesApi.ValueSet();
      //expect(instance).to.be();
    });

  });

}));
