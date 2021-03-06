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
 * AuthorizationRule properties.
 *
 */
class AuthorizationRuleProperties {
  /**
   * Create a AuthorizationRuleProperties.
   * @member {array} rights The rights associated with the rule.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AuthorizationRuleProperties
   *
   * @returns {object} metadata of AuthorizationRuleProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AuthorizationRuleProperties',
      type: {
        name: 'Composite',
        className: 'AuthorizationRuleProperties',
        modelProperties: {
          rights: {
            required: true,
            serializedName: 'rights',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AccessRightsElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'Manage', 'Send', 'Listen' ]
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AuthorizationRuleProperties;
