
$(document).ready(function () {
    $('nav a').click(function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(target).offset().top }, 800);
    });
});
