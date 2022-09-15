$(document).ready(() => {
    $("article>header").click(function() {
        let sct = $(this).parent();
        let crp = sct.children("div").toggle();
        sct.children("footer").toggle(!crp.is(":visible"));
    });

    $("section>header").click(function() {
        let sct = $(this).parent();
        let crp = sct.children("article").toggle();
        sct.children("footer").toggle(!crp.is(":visible"));
    });
});
