function preventDefaultByScroll(e) {
    e.preventDefault();
    e.stopPropagation();
}

function noMove() {
    document.body.addEventListener("touchmove", preventDefaultByScroll, {
        passive: false,
        capture: true
    });
}

function canMove() {
    document.body.removeEventListener(
        "touchmove",
        preventDefaultByScroll,
        { capture: true }
    );
}

function test() {
    console.log('1632')
}


function install(Vue, options) {
    Vue.prototype.$noMove = noMove;
    Vue.prototype.$canMove = canMove;
    Vue.prototype.$test = test;
}

export default {
    install
}