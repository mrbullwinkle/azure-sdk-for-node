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
 * This activity suspends pipeline execution for the specified interval.
 *
 * @extends models['ControlActivity']
 */
class WaitActivity extends models['ControlActivity'] {
  /**
   * Create a WaitActivity.
   * @member {number} waitTimeInSeconds Duration in seconds.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WaitActivity
   *
   * @returns {object} metadata of WaitActivity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Wait',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'Activity',
        className: 'WaitActivity',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          dependsOn: {
            required: false,
            serializedName: 'dependsOn',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActivityDependencyElementType',
                  type: {
                    name: 'Composite',
                    additionalProperties: {
                      type: {
                        name: 'Dictionary',
                        value: {
                            required: false,
                            serializedName: 'ObjectElementType',
                            type: {
                              name: 'Object'
                            }
                        }
                      }
                    },
                    className: 'ActivityDependency'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          waitTimeInSeconds: {
            required: true,
            serializedName: 'typeProperties.waitTimeInSeconds',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = WaitActivity;