'use strict';

const tabs = (headerSelector, tabsSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabsSelector),
        content =  document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.closest(tabsSelector)) {
            tabs.forEach((item, i) => {
                if (target.closest(tabsSelector) === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;
