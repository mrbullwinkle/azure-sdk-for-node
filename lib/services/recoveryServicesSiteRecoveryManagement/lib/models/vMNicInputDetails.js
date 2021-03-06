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
 * Hyper V VM network input details.
 *
 */
class VMNicInputDetails {
  /**
   * Create a VMNicInputDetails.
   * @member {string} [nicId] The nic Id.
   * @member {string} [recoveryVMSubnetName] Recovery VM subnet name.
   * @member {string} [replicaNicStaticIPAddress] Replica nic static IP
   * address.
   * @member {string} [selectionType] Selection type for failover.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VMNicInputDetails
   *
   * @returns {object} metadata of VMNicInputDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VMNicInputDetails',
      type: {
        name: 'Composite',
        className: 'VMNicInputDetails',
        modelProperties: {
          nicId: {
            required: false,
            serializedName: 'nicId',
            type: {
              name: 'String'
            }
          },
          recoveryVMSubnetName: {
            required: false,
            serializedName: 'recoveryVMSubnetName',
            type: {
              name: 'String'
            }
          },
          replicaNicStaticIPAddress: {
            required: false,
            serializedName: 'replicaNicStaticIPAddress',
            type: {
              name: 'String'
            }
          },
          selectionType: {
            required: false,
            serializedName: 'selectionType',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VMNicInputDetails;
