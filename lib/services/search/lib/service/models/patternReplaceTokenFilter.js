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
 * @class
 * Initializes a new instance of the PatternReplaceTokenFilter class.
 * @constructor
 * A character filter that replaces characters in the input string. It uses a
 * regular expression to identify character sequences to preserve and a
 * replacement pattern to identify characters to replace. For example, given
 * the input text "aa bb aa bb", pattern "(aa)\s+(bb)", and replacement
 * "$1#$2", the result would be "aa#bb aa#bb". This token filter is implemented
 * using Apache Lucene.
 *
 * @member {string} pattern A regular expression pattern.
 *
 * @member {string} replacement The replacement text.
 *
 */
class PatternReplaceTokenFilter extends models['TokenFilter'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PatternReplaceTokenFilter
   *
   * @returns {object} metadata of PatternReplaceTokenFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Azure.Search.PatternReplaceTokenFilter',
      type: {
        name: 'Composite',
        className: 'PatternReplaceTokenFilter',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            type: {
              name: 'String'
            }
          },
          pattern: {
            required: true,
            serializedName: 'pattern',
            type: {
              name: 'String'
            }
          },
          replacement: {
            required: true,
            serializedName: 'replacement',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PatternReplaceTokenFilter;