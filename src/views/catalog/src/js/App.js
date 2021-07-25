const changeCatalogView = () => {
    const buttonGrid = document.querySelector('.button-grid');
    const buttonList = document.querySelector('.button-list');
    const catalogBody = document.querySelector('.catalog-list');

    const changeView = () => {
        catalogBody.classList.toggle('view-list');
        catalogBody.classList.toggle('view-grid');
        buttonGrid.classList.toggle('button-round-active');
        buttonList.classList.toggle('button-round-active');

    }

    buttonList.addEventListener('click', changeView);
    buttonGrid.addEventListener('click', changeView);
}

export {changeCatalogView}
