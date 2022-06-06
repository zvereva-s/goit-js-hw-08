import throttle from 'lodash.throttle';
import lclStrgApi from "./storage";

    
const KEY_NAME = 'feedback-form-state'; 
const feedbackForm = document.querySelector('.feedback-form');
let feedbackFormData = {};


function fillFeedbackFrom(form) { 
    const formDataFromLclStrg = lclStrgApi.load(KEY_NAME);
    const formFeedbackElements = form.elements;

    for (const key in formDataFromLclStrg) {
        if (formDataFromLclStrg.hasOwnProperty(key)) {
        formFeedbackElements[key].value = formDataFromLclStrg[key];
        } 
    }
};

fillFeedbackFrom(feedbackForm);

function onFeedbackFormChange(e){
    const { target } = e;
    const feedbackFormValue = target.value;
    const feedbackFormName = target.name;

    feedbackFormData[feedbackFormName] = feedbackFormValue;

    lclStrgApi.save(KEY_NAME, feedbackFormData);

}

function onFeedbackFormSubmit(e) {
    e.preventDefault();

    console.log(lclStrgApi.load(KEY_NAME));

    lclStrgApi.remove(KEY_NAME);
    e.currentTarget.reset();

    feedbackFormData = {};

};

feedbackForm.addEventListener('input', throttle(onFeedbackFormChange),500);
feedbackForm.addEventListener('submit', onFeedbackFormSubmit)
