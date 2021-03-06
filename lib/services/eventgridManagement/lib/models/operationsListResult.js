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

/**
 * Result of the List Operations operation
 */
class OperationsListResult extends Array {
  /**
   * Create a OperationsListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OperationsListResult
   *
   * @returns {object} metadata of OperationsListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationsListResult',
      type: {
        name: 'Composite',
        className: 'OperationsListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OperationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Operation'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = OperationsListResult;
