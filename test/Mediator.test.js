const assert = require('assert');
import {Mediator} from "../lib/stein.js";

describe('Mediator', () => {
    it('should be an Object', () => {
        assert.equal(typeof Mediator, typeof {});
    });
    it('should have a publish function', () => {
        assert.equal('publish' in Mediator, true);
    });
    it('should have a subscribe function', () => {
        assert.equal('subscribe' in Mediator, true);
    });
    it('should have an installTo function', () => {
        assert.equal('installTo' in Mediator, true);
    });
    it('should be installable to a new object', () => {
        let installToMe = {};
        Mediator.installTo(installToMe);
        assert.equal('publish' in installToMe && 'subscribe' in installToMe, true);
    });
});

describe('Mediator.subscribe', () => {
    it('should be able to take an array', () => {
        let installToMe = {};
        Mediator.installTo(installToMe);
        let changeMe = false;
        installToMe.subscribe(['test:event:one', 'test:event:two'], () => {
            changeMe = true;
        });
        Mediator.publish('test:event:two');
        assert.equal(changeMe, true);
    });
    it('should return the Mediator', () => {
        assert.equal(Mediator.subscribe('test', () => {}), Mediator);
    });
});
