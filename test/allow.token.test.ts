import { RelayingServices } from '../src';
import { MockRelayingServices } from './mock';
import { MOCK_ACCOUNT, MOCK_TOKEN_ADDRESS } from './constants';

describe('Tests for allow token', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices();
        await sdk.initialize({});
    });

    it('Should run allow token', async () => {
        await sdk.allowToken(MOCK_TOKEN_ADDRESS, MOCK_ACCOUNT.address);
    });
});
