import { RelayingServices } from '../src';
import { MockRelayingServices } from './mock';
import { MOCK_TOKEN_ADDRESS } from './constants';

describe('Tests for is allow token', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices();
        sdk.initialize({});
    });

    it('Should run is allow token', async () => {
        try {
            await sdk.isAllowedToken(MOCK_TOKEN_ADDRESS);
        } catch (error) {
            fail('The token is not allow');
        }
    });
});
