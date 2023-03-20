'use strict';

import {calcScroll, modifyBody} from "./removeWindowJump";

const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img'),
        scroll = calcScroll();

    imgPopup.classList.add('popup');
    imgPopup.style.cssText = 'display: none; justify-content: center; align-items: center;';
    workSection.append(imgPopup);
    bigImage.classList.add('faded');
    bigImage.style.height = '50%';
    imgPopup.append(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if (target.closest('.preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.href;
            bigImage.src = path;
            modifyBody('hidden', scroll);
        }
        
        if (target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            modifyBody('', 0);
        }
    });
};

export default images;
