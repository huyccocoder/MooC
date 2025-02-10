const options = document.querySelectorAll(".item-img");
const onChange = document.querySelector('.img-box'); // Đặt ở ngoài để dùng cho cả hai sự kiện

let currentIndex = 0;

for (const img of options) {
    img.addEventListener('mouseenter', displayImg);
}

function displayImg(event) {
    const hoveredImgSrc = event.target.getAttribute("src"); 
    onChange.setAttribute("src", hoveredImgSrc); 

   
    currentIndex = Array.from(options).indexOf(event.target);
}


document.addEventListener('keydown', function(event) {
    if (event.key === "Tab") {
        event.preventDefault();

        currentIndex = (currentIndex + 1) % options.length; 
        const nextImgSrc = options[currentIndex].getAttribute("src");

        onChange.setAttribute("src", nextImgSrc); 
    }
});
