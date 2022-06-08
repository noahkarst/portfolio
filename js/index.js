console.log("Script running!")

//Check Done

var $code = $('#code')

$('.navmenu-button').on('mousedown', function () {
    $(this).data('inputFocused', $code.is(":focus"));
}).click(function () {
    if ($(this).data('inputFocused')) {
        $code.blur();   
    } else {
        $code.focus();
    }
});