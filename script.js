function reveal(){
    let elements = document.querySelectorAll(".reveal");

    for(let el of elements){
        let top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();
