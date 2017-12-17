/**
 * Authored by Milan van As (CodingKorner)
 * Released under the MIT license
 *
 * Dispatcher
 *
 * Use:
 * Dispatch([Class1, Class2, Class3]);
 * Dispatch(Class1)
 * Dispatch({class1: Class1, class2: Class2, class3: Class3});
 */
export const Dispatch = (modules) => {
    if (Array.isArray(modules)) {
        modules.forEach((module, i) => {
            new modules[i];
        });
    } else if (typeof modules === 'object') {
        Object.getOwnPropertyNames(modules).foreach((module) => {
            new modules[module];
        });
    } else if (typeof modules === 'function') {
        let holder = {c: modules};
        new holder.c;
    }
    return this;
};
