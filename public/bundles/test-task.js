window.onload = function() {
    var
        screen1EnterButton       = document.querySelector('.screen-1__enter-button'),
        screen1YourAgeBox        = document.querySelector('.screen-1__your-age-box'),
        screen1RegForm           = document.querySelector('.screen-1__reg-form'),
        pageFooter               = document.querySelector('.page-footer'),
        screen1RegFormGuest2     = document.querySelector('.screen-1__reg-form-guest2'),
        screen1RegFormGuest2Form = document.querySelector('.screen-1__reg-form-guest2-form'),
        screen1RegFormSubmit     = document.querySelector('.screen-1__reg-form-submit');
    
    screen1EnterButton.onclick = function() {
        screen1YourAgeBox.style.opacity = '0';
        screen1RegForm.style.opacity = '1';
        pageFooter.style.opacity = '1';
        setTimeout(function(){
            screen1YourAgeBox.style.display = 'none';
        }, 300)
    }
    
    screen1RegFormGuest2.onclick = function() {
        this.style.opacity = '0';
        setTimeout(function(){
            screen1RegFormGuest2.style.display = 'none';
            console.log(screen1RegFormGuest2)
        }, 300)
        screen1RegFormGuest2Form.style.opacity = '1';
        screen1RegFormSubmit.classList.add('screen-1__reg-form-button-guest2')
    }

    // инициализация селектов
    easydropdown.all();
}