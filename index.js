function skillScroll() {
    const skills = ['CSS3', 'MongoDB', 'Express', 'React', 'Node.js', 'HTML5']
    let i = 0
    setInterval(function () {
        $('#skills').fadeOut(function () {
            $('#skills').text(skills[i++ % skills.length]).fadeIn();
        });
    }, 2000);
}
$(skillScroll)

