/*!
 * Authored by Milan van As
 * Released under the MIT license
 *
 * DefaultModule
 * Installs the Mediator and runs the subscriptions() function if it exists
 */

/* Get the Mediator */
import {Mediator} from "./Mediator";

export class DefaultModule {

    /**
     * Constructor
     */
    constructor() {

        // Give this class access to the mediator
        Mediator.installTo(this);

        // If this class has the subscriptions function, run it
        if (typeof this.subscriptions === 'function') {
            this.subscriptions();
        }
    }
}