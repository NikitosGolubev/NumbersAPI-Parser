import NumOfFactsController from '../../controllers/forms-validation/index/num-of-facts';
import FactNumInRangeController from '../../controllers/forms-validation/index/fact-num-in-range';
import ParticularFactNumbersController from '../../controllers/forms-validation/index/particular-fact-numbers';

// Defining controllers
let numOfFactsController = new NumOfFactsController;
let factNumInRangeController = new FactNumInRangeController;
let particularFactNumbersController = new ParticularFactNumbersController;

// Getting elements for binding events
let numOfFactsForm = numOfFactsController.getView().getForm();
let factNumInRangeForm = factNumInRangeController.getView().getForm();
let particularFactNumbersForm = particularFactNumbersController.getView().getForm();
let addFactNumberBtn = particularFactNumbersController.getView().getAddFactNumberBtn();

// Binding events on forms
numOfFactsForm.addEventListener(
    'submit',
    (event) => numOfFactsController.validate(event)
);

factNumInRangeForm.addEventListener(
    'submit',
    (event) => factNumInRangeController.validate(event)
);

particularFactNumbersForm.addEventListener(
    'submit', 
    (event) => particularFactNumbersController.validate(event)
);

addFactNumberBtn.addEventListener(
    'click',
    (event) => particularFactNumbersController.validateFactNumberSubForm(event)
);
