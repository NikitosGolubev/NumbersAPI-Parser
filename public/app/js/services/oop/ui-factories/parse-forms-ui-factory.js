/**
 * @fileOverview Provides methods to create ui elements for parsing forms
 * @namespace NikitosGolubev\Services\OOP\UIFactories
 */

/**
 * Provides methods to create ui elements for parsing forms
 */
export default class ParseFormsUIFactory {
    /**
     * Creates fact number label for numbers storage.
     * @param  {Number} factNumber
     * @return {Object} DOM
     */
    static createFactNumberElem(factNumber) {
        // <div></div>
        let numberElement = document.createElement('div');
        numberElement.classList.add('js-number-container');
        numberElement.classList.add('label');
        numberElement.classList.add('label_default');
        numberElement.setAttribute('fact-number', factNumber);

        // <div></div>
        let body = document.createElement('div');
        body.classList.add('label__body');

        // <div></div>
        let content = document.createElement('div');
        content.classList.add('label__content');
        content.classList.add('label__content_default');

        // <span></span>        
        let factNumberContainer = document.createElement('span');
        factNumberContainer.innerText = factNumber;

        // <div></div>
        let removeBtnContainer = document.createElement('div');
        let removeBtn = document.createElement('label');
        removeBtn.classList.add('label__btn');
        removeBtn.classList.add('label__btn_default');
        removeBtn.classList.add('js-label__remove-number');
        removeBtn.innerText = 'X';

        removeBtnContainer.appendChild(removeBtn);
        content.appendChild(factNumberContainer);

        body.appendChild(content);
        body.appendChild(removeBtnContainer);

        numberElement.appendChild(body);
        return numberElement;
    }
}
