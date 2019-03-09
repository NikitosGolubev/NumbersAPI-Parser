/**
 * @fileOverview Base controller.
 * @namespace NikitosGolubev\Controllers
 */

/**
 * Base controller, which should be inheritated by other controllers.
 * Abstract class.
 */
export default class Controller {
    constructor(model, view) {
    	try {
    	    if (!model || !view) {
    	        throw new Error('Provide "view" and "model" to controller constructor.');
    	    }
    	} catch (e) {
    	    console.log(`${e.name}: ${e.message}`);
    	}

        this.model = model;
        this.view = view;
    }
 
    /**
     * View getter
     * @returns {Object} View
     */
    getView() { return this.view; }
}
