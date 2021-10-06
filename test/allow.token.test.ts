import { RelayingServices } from '../src';
import { MockRelayingServices } from './mock';
import { MOCK_ACCOUNT, MOCK_TOKEN_ADDRESS } from './constants';
import Expect = jest.Expect;

declare const expect: Expect;

describe('Tests for allow token', () => {
    let sdk: RelayingServices;

    beforeEach(async () => {
        sdk = new MockRelayingServices();
        await sdk.initialize({});
    });

    it('Should run allow token', async () => {
        try {
            const allowedToken = await sdk.allowToken(
                MOCK_TOKEN_ADDRESS,
                MOCK_ACCOUNT.address
            );
            expect(allowedToken).toEqual(MOCK_TOKEN_ADDRESS);
        } catch (error: any) {
            fail('The allow token call was unsuccessful:' + error.message);
        }
    });
});
