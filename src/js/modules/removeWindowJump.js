'use strict';

const calcScroll = () => {
    const div = document.createElement('div');

    div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `;
    document.body.append(div);

    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
};

const modifyBody = (flow, scroll) => {
    document.body.style.cssText = `
        overflow: ${flow};
        margin-right: ${scroll}px;
    `;
};

export {calcScroll, modifyBody};