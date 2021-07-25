const toggleFilter = () => {
    const filterBtn = document.querySelector('.filter-btn-js')
    const filterBody = document.querySelector('.filter-js')
    const pageMain = document.querySelector('.catalog')

    filterBtn.addEventListener('click',  (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        onFilterBtnPress();

    });

   const onFilterBtnPress = () => {
       showFilter();
       addBlur();


       pageMain.addEventListener('click', (evt) => {

           if (evt.target !== filterBody) {
               hideFilter();
               removeBlur();
               console.log(evt.target)
           }

       })
    };


    const showFilter = () => {
        filterBody.classList.add('filter--visible');
        console.log('showFilter')
    }

    const hideFilter = () => {
        filterBody.classList.remove('filter--visible');
        console.log('hideFilter')
    }

    const addBlur = () => {
        pageMain.classList.add('page-main--blured');
        console.log('addBlur')
    }
    const removeBlur = () => {
        pageMain.classList.remove('page-main--blured');
        console.log('removeBlur')
    }
}

export {toggleFilter};
