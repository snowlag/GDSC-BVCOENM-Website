//pass these function to scroll event
export const scrollAnimators = () => {
  AddClassOnScroll(".animateComeUpOnce", "active");
  AddClassOnScroll(".fadeOutOnce", "active");
  AddClassOnScroll(".animateComeFromRightOnce", "active");
  AddClassOnScroll(".animateComeFromLeftOnce", "active");
};

const AddClassOnScroll = (animationClass, activeClass) => {
  let reveals = document.querySelectorAll(animationClass);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(activeClass);
    }
  }
};

const toggleClassOnScroll = (animationClass, activeClass) => {
  let reveals = document.querySelectorAll(animationClass);
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add(activeClass);
    } else {
      reveals[i].classList.remove(activeClass);
    }
  }
};
