let h1 = document.querySelector("h1");
h1.addEventListener("click", function () {
    h1.style.color = "red";
})
let p = document.querySelector("p");
function para() {
    p.style.color = "Green"
};
p.addEventListener("dblclick", para);
p.removeEventListener("dblclick", para);
let inp = document.querySelector("input");
inp.addEventListener("input", function (info) {
    if (info.data !== null) {
        console.log(info.data);
    }
});
let selc = document.querySelector("select");
let device = document.querySelector("#device");

selc.addEventListener("change", function (info) {
    device.textContent = `${info.target.value} Device Selected`
});

let head = document.querySelector("#heading")
window.addEventListener("keydown", function (info) {
    if (info.key === " ") {
        head.textContent = "SPC";
    } else {
        head.textContent = info.key;
    }
})

let file = document.querySelector("#file");
let fileinp = document.querySelector("#fileinp");
file.addEventListener("click", function () {
    fileinp.click();
});
fileinp.addEventListener("change", function (info) {
    const files = info.target.files[0];
    if(files){
        file.textContent = files.name;
    }
})
