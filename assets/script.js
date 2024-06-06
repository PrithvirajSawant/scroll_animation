const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

// Function to toggle classes based on scroll direction
function toggleButtonsOnScroll() {
    const scrollableSection = document.querySelector('.scrollable-section');
    const scrollPosition = scrollableSection.scrollTop;
    // const box = document.getElementById('inside');
    const sec1 = document.querySelector('.sec1');
    const sec2 = document.querySelector('.sec2');

    // if (!sec2) {
    //     console.error('Element #sec2 nott found');
    //     return;
    // }else{
    //     console.log('Element #sec2 found :', sec2);
        
    // }


    // Height of each section
    const sectionHeight = scrollableSection.scrollHeight / 16;

    // Reset all buttons
    [btn1, btn2, btn3, btn4, btn5].forEach((btn) => {
        btn.classList.add('hidden');
        btn.classList.remove('visible');
    });

    if (scrollPosition < sectionHeight) {
        // Show button 1
        btn1.classList.remove('hidden');
        btn1.classList.add('visible');
        // box.style.border = '2px solid red';
        // box.style.animation = 'flow 3s ease-in-out 1s infinite';
        sec1.classList.remove('sec_hide')
        sec2.classList.remove('sec_visible')
        sec1.classList.add('sec_visible');
        sec2.classList.add('sec_hide');
    } else if (scrollPosition >= sectionHeight && scrollPosition < 2 * sectionHeight) {
        // Show button 2
        btn2.classList.remove('hidden');
        btn2.classList.add('visible');
        btn3.classList.remove('visible3');
        // box.style.border = '2px solid blue';
        // box.style.animation = 'flow 3s ease-in-out 1s infinite';
        sec2.classList.remove('sec_hide');
        sec2.classList.add('sec_visible');
        sec1.classList.remove('sec_visible')
        sec1.classList.add('sec_hide');
    } else if (scrollPosition >= 2 * sectionHeight && scrollPosition < 3 * sectionHeight) {
        // Show button 3
        btn3.classList.remove('hidden');
        // btn3.classList.add('visible');
        btn3.classList.add('visible3');
        btn4.classList.remove('visible4');
        // box.style.border = '2px solid green';
        // box.style.animation = 'flow 3s ease-in-out 1s infinite';
    } else if (scrollPosition >= 3 * sectionHeight && scrollPosition < 4 * sectionHeight) {
        // Show button 4
        btn4.classList.remove('hidden');
        btn4.classList.add('visible');
        btn3.classList.remove('visible3');
        btn4.classList.add('visible4');
        btn5.classList.remove('visible5');
        // box.style.border = '2px solid yellow';
        // box.style.animation = 'flow 3s ease-in-out 1s infinite';
    } else {
        // Show button 5
        btn5.classList.remove('hidden');
        btn5.classList.add('visible');
        btn4.classList.remove('visible4');
        btn5.classList.add('visible5');
        // box.style.border = '2px solid purple';
        // box.style.animation = 'flow 3s ease-in-out 1s infinite';
    }
}

// Add scroll event listener
document.querySelector('.scrollable-section').addEventListener('scroll', toggleButtonsOnScroll);

// window pre_Loader
const preloader = document.getElementById("pre_loder");

window.addEventListener("load",function(){
    preloader.style.display="none";
})

// json preloader
const animation = lottie.loadAnimation({
    container: document.getElementById('loader3'),
    // renderer: 'svg',
    // loop: true,
    // autoplay: true,
    path: 'assets/Json/pan.json'
});

