document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".read-more");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Read More functionality is coming soon!");
        });
    });
});
