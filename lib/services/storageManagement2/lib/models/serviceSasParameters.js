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
 * @class
 * Initializes a new instance of the ServiceSasParameters class.
 * @constructor
 * The parameters to list service SAS credentials of a speicific resource.
 *
 * @member {string} canonicalizedResource The canonical path to the signed
 * resource.
 *
 * @member {string} resource The signed services accessible with the service
 * SAS. Possible values include: Blob (b), Container (c), File (f), Share (s).
 * Possible values include: 'b', 'c', 'f', 's'
 *
 * @member {string} [permissions] The signed permissions for the service SAS.
 * Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a),
 * Create (c), Update (u) and Process (p). Possible values include: 'r', 'd',
 * 'w', 'l', 'a', 'c', 'u', 'p'
 *
 * @member {string} [iPAddressOrRange] An IP address or a range of IP addresses
 * from which to accept requests.
 *
 * @member {string} [protocols] The protocol permitted for a request made with
 * the account SAS. Possible values include: 'https,http', 'https'
 *
 * @member {date} [sharedAccessStartTime] The time at which the SAS becomes
 * valid.
 *
 * @member {date} [sharedAccessExpiryTime] The time at which the shared access
 * signature becomes invalid.
 *
 * @member {string} [identifier] A unique value up to 64 characters in length
 * that correlates to an access policy specified for the container, queue, or
 * table.
 *
 * @member {string} [partitionKeyStart] The start of partition key.
 *
 * @member {string} [partitionKeyEnd] The end of partition key.
 *
 * @member {string} [rowKeyStart] The start of row key.
 *
 * @member {string} [rowKeyEnd] The end of row key.
 *
 * @member {string} [keyToSign] The key to sign the account SAS token with.
 *
 * @member {string} [cacheControl] The response header override for cache
 * control.
 *
 * @member {string} [contentDisposition] The response header override for
 * content disposition.
 *
 * @member {string} [contentEncoding] The response header override for content
 * encoding.
 *
 * @member {string} [contentLanguage] The response header override for content
 * language.
 *
 * @member {string} [contentType] The response header override for content
 * type.
 *
 */
function ServiceSasParameters() {
}

/**
 * Defines the metadata of ServiceSasParameters
 *
 * @returns {object} metadata of ServiceSasParameters
 *
 */
ServiceSasParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ServiceSasParameters',
    type: {
      name: 'Composite',
      className: 'ServiceSasParameters',
      modelProperties: {
        canonicalizedResource: {
          required: true,
          serializedName: 'canonicalizedResource',
          type: {
            name: 'String'
          }
        },
        resource: {
          required: true,
          serializedName: 'signedResource',
          type: {
            name: 'String'
          }
        },
        permissions: {
          required: false,
          serializedName: 'signedPermission',
          type: {
            name: 'String'
          }
        },
        iPAddressOrRange: {
          required: false,
          serializedName: 'signedIp',
          type: {
            name: 'String'
          }
        },
        protocols: {
          required: false,
          serializedName: 'signedProtocol',
          type: {
            name: 'Enum',
            allowedValues: [ 'https,http', 'https' ]
          }
        },
        sharedAccessStartTime: {
          required: false,
          serializedName: 'signedStart',
          type: {
            name: 'DateTime'
          }
        },
        sharedAccessExpiryTime: {
          required: false,
          serializedName: 'signedExpiry',
          type: {
            name: 'DateTime'
          }
        },
        identifier: {
          required: false,
          serializedName: 'signedIdentifier',
          constraints: {
            MaxLength: 64
          },
          type: {
            name: 'String'
          }
        },
        partitionKeyStart: {
          required: false,
          serializedName: 'startPk',
          type: {
            name: 'String'
          }
        },
        partitionKeyEnd: {
          required: false,
          serializedName: 'endPk',
          type: {
            name: 'String'
          }
        },
        rowKeyStart: {
          required: false,
          serializedName: 'startRk',
          type: {
            name: 'String'
          }
        },
        rowKeyEnd: {
          required: false,
          serializedName: 'endRk',
          type: {
            name: 'String'
          }
        },
        keyToSign: {
          required: false,
          serializedName: 'keyToSign',
          type: {
            name: 'String'
          }
        },
        cacheControl: {
          required: false,
          serializedName: 'rscc',
          type: {
            name: 'String'
          }
        },
        contentDisposition: {
          required: false,
          serializedName: 'rscd',
          type: {
            name: 'String'
          }
        },
        contentEncoding: {
          required: false,
          serializedName: 'rsce',
          type: {
            name: 'String'
          }
        },
        contentLanguage: {
          required: false,
          serializedName: 'rscl',
          type: {
            name: 'String'
          }
        },
        contentType: {
          required: false,
          serializedName: 'rsct',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ServiceSasParameters;