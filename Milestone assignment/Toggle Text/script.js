const toggleText = () => {
    const heading = document.getElementById("main-heading");

    if (heading.textContent === "The most affordable learning platform") {
        heading.textContent = "PW Skills";
    } else {
        heading.textContent = "The most affordable learning platform";
    }
};
