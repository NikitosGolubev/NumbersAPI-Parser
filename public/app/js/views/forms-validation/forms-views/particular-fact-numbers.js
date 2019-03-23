/**
 * @fileOverview View for 'particular fact numbers' form
 * @namespace NikitosGolubev\Views\FormsValidation\FormsViews
 */

import FormsValidationView from '../forms-validation-view';
import { $ } from '../../../services/functional/client/dom-service';
import ParticularFactNumbers from '../../../configs/forms/particular-fact-numbers-config';
import ParseFormsUIFactory from '../../../services/oop/ui-factories/parse-forms-ui-factory';

/**
 * @uses NikitosGolubev\Views\FormsValidation\FormsValidationView
 * @uses NikitosGolubev\Services\Functional\Client\DomService
 * @uses NikitosGolubev\Configs\Forms\ParticularFactNumbersConfig
 * @uses NikitosGolubev\Services\OOP\UIFactories\ParseFormsUIFactory
 */
export default class ParticularFactNumbersView extends FormsValidationView {
    constructor(model,  $failBehaviour = false, $successBehaviour = false) {
        super(model, $failBehaviour, $successBehaviour);
        this.model.registerNSObserver(this);
    }

    /**
     * @see FormsValidationView defineUI() method
     */
    defineUI() {
        this.form = $(ParticularFactNumbers.FORM_SELECTOR);
        this.addFactNumberBtn = $(ParticularFactNumbers.ADD_FACT_NUMBER_BTN_SELECTOR);
        this.numbersStorageBox = $(ParticularFactNumbers.NUMEBRS_STORAGE_BOX_SELECTOR);
        this.numbersStorageField = $(ParticularFactNumbers.NUMBERS_STORAGE_FIELD_SELECTOR);
        this.NSMesageContainer = $(ParticularFactNumbers.NUMBERS_STORAGE_MESSAGE_SELECTOR);
        this.removeNumberBtnClassName = ParticularFactNumbers.REMOVE_NUMBER_BTN_CLASS_NAME;
        this.numberContainerClassName = ParticularFactNumbers.NUMBER_CONTAINER_CALSS_NAME;
    }

    /**
     * Recieves fact number when user decided to add it to numbers storage
     * and than parse. Displays that fact number somehow.
     * 
     * @param  {Number} factNumber
     * @return {Void}
     */
    updateNS(factNumber) {
        this.addNumberToStorageField(factNumber); // for form, to send to server
        this.addNumberToStorageBox(factNumber); // visually
    }

    /**
     * Recieves number container which is inside storage box and removes
     * the data about number both from box and field storages.
     * 
     * @param  {Object} numberContainer DOM
     * @return {Void}
     */
    removeNumber(numberContainer) {
        this.removeNumberFromStorageField(numberContainer);
        this.removeNumberFromStorageBox(numberContainer);
    }

    /**
     * Removes VISUALLY number element from box storage.
     * 
     * @param  {Object} numberContainer DOM
     * @return {Void}
     */
    removeNumberFromStorageBox(numberContainer) {
        let numbersContainerParent = numberContainer.parentNode;
        numbersContainerParent.removeChild(numberContainer);
        // Updating message due to changings in storage
        this.adjustStorageBoxMessage();
    }

    /**
     * Removes number data from HIDDEN field storage.
     * 
     * @param  {Object} numberContainer DOM
     * @return {Void}
     */
    removeNumberFromStorageField(numberContainer) {
        let factNumber = numberContainer.getAttribute('fact-number');
        let numbersStorage = this.getNumbersStorageArray();

        // Getting index of fact number in numbers storage.
        let index = numbersStorage.indexOf(factNumber);
        // Removing fact number from storage.
        numbersStorage.splice(index, 1);
        
        this.setNumbersStorageFieldValue(numbersStorage);
    }

    /**
     * Adds number VISUALLY to storage box. It's for user.
     * @param {Number} factNumber
     */
    addNumberToStorageBox(factNumber) {
        let numberElement = ParseFormsUIFactory.createFactNumberElem(factNumber);
        this.numbersStorageBox.appendChild(numberElement);
        this.adjustStorageBoxMessage();
    }

    /**
     * Add number to STORAGE HIDDEN FIELD. It's for server.
     * 
     * @param {Number} factNumber
     */
    addNumberToStorageField(factNumber) {
        let numbersStorage = this.getNumbersStorageArray();
        numbersStorage.push(factNumber);
        this.setNumbersStorageFieldValue(numbersStorage);
    }

    /**
     * Changing "numbers storage box" message depends on how many elements it contains.
     * 
     * @return {Void}
     */
    adjustStorageBoxMessage() {
        let numbersStorage = this.getNumbersStorageArray();
        let message = ''; // New message that would be shown.

        // If numbers storage array is NOT empty
        if (numbersStorage.length > 0) {
            // Getting num of items user already added
            let numFactNumbersAdded = numbersStorage.length;
            message = ParticularFactNumbers.genCommonStorageMessage(numFactNumbersAdded);
        } else {
            // If user has't added anything still, so show him an appropriare message.
            message = ParticularFactNumbers.NUMBERS_STORAGE_EMPTINESS_MESSAGE;
        }

        this.setStorageBoxMessage(message);
    }

    /**
     * Changing the text message inside numbers storage box element.
     * 
     * @param {String} message
     */
    setStorageBoxMessage(message) {
        this.NSMesageContainer.innerText = message;
    }

    /**
     * Fetching numbers storage value.
     * (It's whether a serrialized array or empty string.)
     * Converting string to an array. If it's empty - [];
     * 
     * @return {Array}
     */
    getNumbersStorageArray() {
        let numbersStorage = [];

        // If value is not empty
        if (this.numbersStorageField.value) {
            numbersStorage = JSON.parse(this.numbersStorageField.value);
        }

        return numbersStorage;
    }

    /**
     * Setting value for storage field.
     * 
     * @param {Array} numbersStorageArray
     */
    setNumbersStorageFieldValue(numbersStorageArr) {
        // If numbers storage array is NOT empty
        if (numbersStorageArr.length > 0) {
            // Array to string
            numbersStorageArr = JSON.stringify(numbersStorageArr);
        } else numbersStorageArr = '';
        this.numbersStorageField.value = numbersStorageArr;
    }

    /**
     * Getter for 'form' element
     * @return {Object} DOM
     */
    getForm() { return this.form; }

    getAddFactNumberBtn() { return this.addFactNumberBtn; }

    getRemoveNumberBtnClassName() { return this.removeNumberBtnClassName; }

    getNumberContainerClassName() { return this.numberContainerClassName; }
}
