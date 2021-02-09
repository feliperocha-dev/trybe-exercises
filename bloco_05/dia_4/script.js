window.onload = function (){

    const prButton = document.querySelector('#btn-add');

    prButton.addEventListener('click', changePreferences);

    function changePreferences() {
        const prBackgroundColor = document.querySelector('#preference-background');
        const prFontFamily = document.querySelector('#preference-family');
        const prFontSize = document.querySelector('#preference-size');
        const prFontColor = document.querySelector('#preference-color');
        const prFontSpacing = document.querySelector('#preference-spacing');

        changeBackgroundColor(prBackgroundColor);
        changeFontFamily(prFontFamily);
        changeFontSize(prFontSize);
        changeFontColor(prFontColor);
        changeFontSpacing(prFontSpacing);
    }

    function changeBackgroundColor(prBackgroundColor){
        let newBackgroundColor = document.body;
        newBackgroundColor.style.backgroundColor = prBackgroundColor.value;
        localStorage.setItem('backgroundcolor', prBackgroundColor.value);
    }

    function changeFontFamily(prFontFamily){
        let newFontFamily = document.body;
        newFontFamily.style.fontFamily = prFontFamily.value;
        localStorage.setItem('fontfamily', prFontFamily.value);
    }

    function changeFontSize(prFontSize){
        let newFontSize = document.querySelector('.main-article');
        newFontSize.style.fontSize = prFontSize.value;
        localStorage.setItem('fontsize', prFontSize.value);
    }

    function changeFontColor(prFontColor){
        let newFontColor = document.body.style.color;
        newFontColor = prFontColor.value;
        localStorage.setItem('fontcolor', newFontColor);
    }

    function changeFontSpacing(prFontSpacing){
        let newFontSpacing = document.querySelector('.main-article');
        newFontSpacing.style.lineHeight = prFontSpacing.value;
        localStorage.setItem('lineheight', prFontSpacing.value);
    }

    function getBackgroundColor(){
        if (localStorage.getItem('backgroundcolor') !== undefined){
            let newBackgroundColor = document.body;
            newBackgroundColor.style.backgroundColor = localStorage.getItem('backgroundcolor');
        }
    }

    function getFontFamily(){
        if (localStorage.getItem('fontfamily') !== undefined){
            let newFontFamily = document.body;
            newFontFamily.style.fontFamily = localStorage.getItem('fontfamily');
        }
    }

    function getFontSize(){
        if (localStorage.getItem('fontsize') !== undefined){
            let newFontSize = document.querySelector('.main-article');
            newFontSize.style.fontSize = localStorage.getItem('fontsize');
        }
    }

    function getFontColor(){
        if (localStorage.getItem('fontcolor') !== undefined){
            let newFontColor = document.body;
            newFontColor.style.color = localStorage.getItem('fontcolor');
        }
    }

    function getlineHeight(){
        if (localStorage.getItem('lineheight') !== undefined){
            let newSpacing = document.querySelector('.main-article');
            newSpacing.style.lineHeight = localStorage.getItem('lineheight');
        }
    }
    
    getBackgroundColor();
    getFontFamily();
    getFontSize();
    getFontColor();
    getlineHeight();
}
