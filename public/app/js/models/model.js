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
     * @param {False|Array} $observers Observers container. If false, than
     *     it's gonna be asigned to default: this.observers.
     * @returns {Void}
     */
    registerObserver(observer, $observers = false) {
        if ($observers === false) $observers = this.observers;
        $observers.push(observer);
    }

    /**
     * Removes observer
     * @param  {Object} observer (view object)
     * @param {False|Array} $observers Observers container. If false, than
     *     it's gonna be asigned to default: this.observers.
     * @returns {Void}
     */
    removeObserver(observer, $observers = false) {
        if ($observers === false) $observers = this.observers;
        let indexOfObserver = $observers.indexOf(observer);
        if (indexOfObserver > -1) {
            // Removing observer
            $observers.splice(indexOfObserver, 1);
        }
    }

    /**
     * Notifies observers sending them some data
     * @param  {Mixed} data
     * @param {False|Array} $observers Observers container. If false, than
     *     it's gonna be asigned to default: this.observers.
     * @param {String} $updateMethodName Method name that should be
     *     called to notify observers.
     * @returns {Void}
     */
    notifyObservers(data, $observers = false, $updateMethodName = "update") {
        if ($observers === false) $observers = this.observers;
        for (let i = 0; i < $observers.length; i++) {
            $observers[i][$updateMethodName](data);
        }
    }
}
