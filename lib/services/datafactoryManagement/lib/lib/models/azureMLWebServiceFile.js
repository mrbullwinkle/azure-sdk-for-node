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
 * Azure ML WebService Input/Output file
 *
 */
class AzureMLWebServiceFile {
  /**
   * Create a AzureMLWebServiceFile.
   * @member {object} filePath The relative file path, including container
   * name, in the Azure Blob Storage specified by the LinkedService. Type:
   * string (or Expression with resultType string).
   * @member {object} linkedServiceName Reference to an Azure Storage
   * LinkedService, where Azure ML WebService Input/Output file located.
   * @member {string} [linkedServiceName.referenceName] Reference LinkedService
   * name.
   * @member {object} [linkedServiceName.parameters] Arguments for
   * LinkedService.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureMLWebServiceFile
   *
   * @returns {object} metadata of AzureMLWebServiceFile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureMLWebServiceFile',
      type: {
        name: 'Composite',
        className: 'AzureMLWebServiceFile',
        modelProperties: {
          filePath: {
            required: true,
            serializedName: 'filePath',
            type: {
              name: 'Object'
            }
          },
          linkedServiceName: {
            required: true,
            serializedName: 'linkedServiceName',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'LinkedServiceReference'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureMLWebServiceFile;