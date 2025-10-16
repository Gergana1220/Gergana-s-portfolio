document.addEventListener("DOMContentLoaded", () => {
    const profileImg = document.querySelector("#profile-img");
    const nameTag = document.querySelector("#name");

        profileImg.addEventListener("mouseenter", () => {
            nameTag.computedStyleMap.opacity = 1;
        });
});
