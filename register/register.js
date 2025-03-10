import { participantTemplate, successTemplate } from './templates.js';

document.addEventListener('DOMContentLoaded', () => {
let participantCount = 1;

    const addParticipantBtn = document.getElementById('add');
    const form = document.querySelector('form');
    const summaryElement = document.getElementById('summary');

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, feeElement) => {
            return total + (parseFloat(feeElement.value) || 0);
        }, 0);
    }

    function submitForm(event) {
        event.preventDefault();

        const totalFee = totalFees();
        const adultName = document.getElementById('adult_name').value;

        form.style.display = 'none';
        summaryElement.style.display = 'block';
        summaryElement.innerHTML = successTemplate({
            adultName: adultName,
            participantCount: participantCount,
            totalFee: totalFee
        });
    }

    addParticipantBtn.addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantBtn.insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    form.addEventListener('submit', submitForm);
});

const info = {
    adult_naem
}