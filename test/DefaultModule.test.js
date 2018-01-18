const assert = require('assert');
import { DefaultModule } from "../lib/ckjs.js";


class TestModule extends DefaultModule {
    constructor() {
        super();
    }

    subscriptions() {
        this.variableIsTrue = true;
    }
}

describe('DefaultModule', () => {
    it('should be a function', () => assert.equal(typeof DefaultModule, 'function'));
    it('should be have a Mediator installed', () => {
        let TestModuleInstance = new TestModule;
        assert.equal('publish' in TestModuleInstance && 'subscribe' in TestModuleInstance, true);
    });

    it('should provide execution of Class.subscriptions()', () => {
        let TestModuleInstance = new TestModule;
        assert.equal(TestModuleInstance.variableIsTrue, true);
    });
});
