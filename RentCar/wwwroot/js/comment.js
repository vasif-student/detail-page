function $(element) {
    return document.getElementById(element);
}
const alertBox = $("alert");
let commentSubmit = $("btn_add_comment");
const commentBox = $("text_comment");
let commentList = $("list_comments");

commentSubmit.addEventListener(
    "click",
    function (e) {
        e.preventDefault();
        const d = new Date();
        let time = d.toLocaleTimeString();
        let comment = commentBox.value.trim();
        let newLI = document.createElement("li");

        if (commentBox.value.length > 1) {
            $("alert").innerText = "";
            comment = `<div class="profile-image">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="img">
      </div>
      <p style="margin:1rem; color:black;" class="comment">${comment}</p><p class="date"><b style="font-family: monospace; color: black;">Dərc edildi: ${time}</b></p>`;
            newLI.innerHTML = comment;
            commentList.appendChild(newLI);

            fadeOut(newLI);

            commentBox.value = "";
        } else {
            $("alert").innerText = "Zəhmət olmasa şərh əlavə edin!";
        }
    },
    false
);

function fadeOut(element) {
    element.style.background = "#EAF7C8";
    var opacity = 1,
        fps = 90;
    function decrease() {
        opacity -= 0.05;
        if (opacity <= 0.4) {
            // complete
            element.style.background = "white";
            element.style.opacity = 1;
            return true;
        }
        element.style.opacity = opacity;
        setTimeout(decrease, fps);
    }
    decrease();
}
