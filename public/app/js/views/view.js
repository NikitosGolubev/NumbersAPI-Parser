/**
 * @fileOverview View
 * @namespace NikitosGolubev\Views
 */

/**
 * Abstract view class which describes interface and common methods
 */
export default class View {
    /**
     * Receives updates from Subject. (part of OBSERVER pattern).
     * 
     * @param  {Mixed} data Updated data
     */
    update(data) {
        throw new Error('This is abstract method which requires implementation.');
    }
}
