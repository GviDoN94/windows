'use strict';

import {calcScroll, modifyBody} from "./removeWindowJump";

const modals = () => {
    const scroll = calcScroll();

    function bindModal(triggersSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const triggers = document.querySelectorAll(triggersSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        triggers.forEach(item => item.addEventListener('click', (e) => {
            e.preventDefault();

            windows.forEach(item => item.style.display = 'none');

            modal.style.display = 'block';
            modifyBody('hidden', scroll);
        }));


        close.addEventListener('click', () => {
            windows.forEach(item => item.style.display = 'none');
            modal.style.display = 'none';
            modifyBody('', 0);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => item.style.display = 'none');
                modal.style.display = 'none';
                modifyBody('', 0);
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            modifyBody('hidden', scroll);
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup[data-modal]', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    showModalByTime('.popup[data-modal]', 60000);
};

export default modals;
