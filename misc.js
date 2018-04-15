~ function() {
    // console.log('safsdf');
    // $('.js-box-wrap').height($('.js-box-wrap').height()+72);
}()

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
        var box = document.getElementsByClassName('js-box-wrap')[0];
        height = parseInt(box.style.height) + 72;

        box.style.height = height + 'px';
    }
}