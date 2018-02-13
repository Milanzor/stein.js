/*!
 * Authored by Milan van As
 * Released under the MIT license
 *
 * Router
 */

/* Get the Mediator */
import {Mediator} from "./Mediator";

export const Router = (() => {

    class Router {
        constructor() {

            // Give this class access to the mediator
            Mediator.installTo(this);

        }


    }


    return new Router;
})();
