import {Identity} from 'openfin/_v2/main';

import {IdentityWithEndpoint} from '../../client/validation';

/**
 * Generates a unique `string` id for a window based on its application's uuid and window name
 */
export function getId(identity: Identity | IdentityWithEndpoint): string {
    if (identity.hasOwnProperty('endpointId')) {
        return `${identity.uuid}/${identity.name || identity.uuid}/${(identity as IdentityWithEndpoint).endpointId}`;
    } else {
        return `${identity.uuid}/${identity.name || identity.uuid}`;
    }
}
