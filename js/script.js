// let $btnTop = $(".btn__top");
// $(window).on("scroll", function() {
//     if($(window).scrollTop() >= 660){
//         $btnTop.fadeIn();
//     } else {
//         $btnTop.fadeOut();
//     }
// });

// $btnTop.on("click", function(){
//     $("html, body").animate({scrollTop:0}, 900);
// });


const blocRowContainer = document.querySelector(".block__row");
const blocks = document.querySelectorAll(".block__row__cell");
const btn20 = document.querySelector('.btn__more20');

btn20.addEventListener('click', () => {
    blocRowContainer.innerHTML = blocks;
})



document.querySelector('#sort-ages').addEventListener('click', function() {
    let sortedAge = [...blocks].sort(function(a, b) {

        if (a.children[1].children[1].children[1].innerText.charAt(0) >= b.children[1].children[1].children[1].innerText.charAt(0)) {
            return 1;
        } else {
            return -1;
        }
    });
   
    blocRowContainer.innerHTML = '';

    for (let card of sortedAge) {
        blocRowContainer.append(card)
    }
    
})

document.querySelector('#sort-price').addEventListener('click', function () {
    let sorted = [...blocks]
    .sort(function(a, b) {
        
         if (a.dataset.price >= b.dataset.price) {
            return 1;
         } else {
            return - 1;
         }
    });
    
    blocRowContainer.innerHTML = '';
     
    for (let block of sorted) {
        blocRowContainer.append(block)
    }
   
});

const arr = [1, 2, 3]
const arr1 = ['Ann', 2, 3]
let arr2 = [...arr, ...arr1].filter(a => String(a));
console.log(arr2)