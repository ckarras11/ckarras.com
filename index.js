function handleStart() {
    skillScroll();
    displayNav();
    navScroll();
}

function skillScroll() {
    const skills = ['CSS3', 'MongoDB', 'Express', 'React', 'Node.js', 'HTML5']
    let i = 0
    setInterval(function () {
        $('#skills').fadeOut(function () {
            $('#skills').text(skills[i++ % skills.length]).fadeIn();
        });
    }, 2000);
}

function displayNav () {
    $(window).scroll(function(){                          
        if ($(this).scrollTop() > 20) {
            $('#navbar').fadeIn(500).css({display: 'flex'});
        } else {
            $('#navbar').fadeOut(500);
        }
    });
};

function navScroll () {
    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top
        });
    });
}


$(handleStart)

