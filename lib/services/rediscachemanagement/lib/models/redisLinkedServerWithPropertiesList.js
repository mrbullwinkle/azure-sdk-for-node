/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * List of linked servers (with properites) of a Redis cache.
 *
 */
class RedisLinkedServerWithPropertiesList {
  /**
   * Create a RedisLinkedServerWithPropertiesList.
   * @member {array} value List of linked servers (with properites) of a Redis
   * cache.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RedisLinkedServerWithPropertiesList
   *
   * @returns {object} metadata of RedisLinkedServerWithPropertiesList
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedisLinkedServerWithPropertiesList',
      type: {
        name: 'Composite',
        className: 'RedisLinkedServerWithPropertiesList',
        modelProperties: {
          value: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RedisLinkedServerWithPropertiesElementType',
                  type: {
                    name: 'Composite',
                    className: 'RedisLinkedServerWithProperties'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = RedisLinkedServerWithPropertiesList;
