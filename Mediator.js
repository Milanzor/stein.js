/**
 * Authored by Milan van As (CodingKorner)
 * Released under the MIT license
 *
 * Mediator pattern taken from https://gist.github.com/TCotton/d85e879fdbf856ddae3511652f9260f0
 * With a bit of own magic
 */


export const Mediator = (() => {

    /**
     * @description Subscribe to an event, supply a callback to be executed when that event is published
     * @param event {string}
     * @param fn {function}
     * @returns {subscribe} {object}
     */
    const subscribe = function (event, fn) {

        // Multiple events
        if (Array.isArray(event)) {
            event.forEach((singleStore) => {
                subscribe(singleStore, fn);
            });
        } else {

            // Single event


            // If the event hasnt been subscribed to before, initialze the event store
            if (!Mediator.events[event]) {
                Mediator.events[event] = [];
            }

            // Add the new callback to the event list
            Mediator.events[event].push({
                context: this,
                callback: fn
            });
        }

        return this;
    };

    /**
     * @description Publish an event to the rest of the application
     * @param event {string}
     * @param args {object}
     * @returns {*||boolean}
     */
    const publish = function (event, ...args) {

        // If this event doesnt exist
        if (!Mediator.events[event]) {
            return false;
        }


        // Loop through the event lists and callback in context
        for (let value of Mediator.events[event]) {
            const subscription = value;
            subscription.callback.apply(subscription.context, args);
        }

        return this;
    };

    /**
     * @description a function to `install` the
     * subscribe and publish functions to other objects
     * @param obj
     * @returns undefined
     */
    const installTo = function (obj) {
        obj.subscribe = subscribe;
        obj.publish = publish;
    };

    return {
        events: {},
        publish,
        subscribe,
        installTo
    };
})();