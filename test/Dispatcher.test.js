const assert = require('assert');
import { Dispatch } from "../lib/ck.js";

describe('Dispatch', () => {
    it('should be a function', () => assert.equal(typeof Dispatch, 'function'));
    it('should return undefined', () => assert.equal(typeof Dispatch(), typeof nothing));
});
