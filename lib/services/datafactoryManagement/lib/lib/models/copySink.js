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
 * A copy activity sink.
 *
 */
class CopySink {
  /**
   * Create a CopySink.
   * @member {object} [writeBatchSize] Write batch size. Type: integer (or
   * Expression with resultType integer), minimum: 0.
   * @member {object} [writeBatchTimeout] Write batch timeout. Type: string (or
   * Expression with resultType string), pattern:
   * ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   * @member {object} [sinkRetryCount] Sink retry count. Type: integer (or
   * Expression with resultType integer).
   * @member {object} [sinkRetryWait] Sink retry wait. Type: string (or
   * Expression with resultType string), pattern:
   * ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).
   * @member {string} type Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of CopySink
   *
   * @returns {object} metadata of CopySink
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CopySink',
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
        polymorphicDiscriminator: {
          serializedName: 'type',
          clientName: 'type'
        },
        uberParent: 'CopySink',
        className: 'CopySink',
        modelProperties: {
          writeBatchSize: {
            required: false,
            serializedName: 'writeBatchSize',
            type: {
              name: 'Object'
            }
          },
          writeBatchTimeout: {
            required: false,
            serializedName: 'writeBatchTimeout',
            type: {
              name: 'Object'
            }
          },
          sinkRetryCount: {
            required: false,
            serializedName: 'sinkRetryCount',
            type: {
              name: 'Object'
            }
          },
          sinkRetryWait: {
            required: false,
            serializedName: 'sinkRetryWait',
            type: {
              name: 'Object'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = CopySink;