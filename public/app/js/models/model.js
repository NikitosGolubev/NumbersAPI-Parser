/**
 * @fileOverview Abstract model
 * @namespace NikitosGolubev\Models
 */

/**
 * Fundamental abstract model.
 * SUBJECT - part of Observer pattern.
 */
export default class Model {
    constructor() {
        /**
         * Model observers (view objects)
         * @type {Array}
         */
        this.observers = [];
    }

    /**
     * Registers observer
     * @param  {Object} observer (view object)
     * @returns {Void}
     */
    registerObserver(observer) {
        this.observers.push(observer);
    }

    /**
     * Removes observer
     * @param  {Object} observer (view object)
     * @returns {Void}
     */
    removeObserver(observer) {
        let indexOfObserver = this.observers.indexOf(observer);
        if (indexOfObserver > -1) {
            // Removing observer
            this.observers.splice(indexOfObserver, 1);
        }
    }

    /**
     * Notifies observers sending them some data
     * @param  {Mixed} data
     * @returns {Void}
     */
    notifyObservers(data) {
        for (let i = 0; i < this.observers.length; i++) {
            this.observers[i].update(data);
        }
    }
}
