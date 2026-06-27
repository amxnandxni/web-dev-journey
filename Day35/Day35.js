let h1 = document.querySelector("h1");
h1.textContent = "Aman Welcome Back";
h1.innerHTML = "<i>Aman</>";
let img = document.querySelector("img");
img.setAttribute("src", "https://imgs.search.brave.com/obNDIJ7uNTWlQ63SZD1nJeiuySFbIKac__o3octsMXk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvMTAwMHYv/OTIvNTkvc2ltcGxl/LWxldHRlcmluZy1i/b2xkLXJhbmRvbS1s/b2dvLXZlY3Rvci0z/MzU4OTI1OS5qcGc");
let a = document.querySelector("a");
console.log(a.getAttribute("href"));
a.removeAttribute("href");
let h3 = document.createElement("h3");
h3.textContent = "Have a Nice Journey";
document.querySelector("body").prepend(h3);
h3.style.color = "red";
h1.style.backgroundColor = "blue";
h1.style.fontFamily = "Gilroy";
let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);
});
let li = document.createElement("li");
li.textContent = "New Li";
let ul = document.querySelector("ul");
ul.appendChild(li);
let uli = document.querySelectorAll("ul li:nth-child(2n)");
uli.forEach(function(elem){
    elem.classList.add("highlight");
})
