function attest() {
    offset = getRandomInt(30);
    delay = 22*60*60*1000+offset*60*1000;
    setTimeout(() => {
        console.log("attest")

        document.querySelector("#root > div:nth-child(1) > div:nth-child(3) > div > section > div > div.basic-layout.row.no-gutters.slide-in-bottom-whole > div > div.content-area.slide-in-bottom > div.navbar-lift.navbar-lift-more > ul").children[3].children[0].click();
    }, 20000);

    setTimeout(() => {
        console.log("no1")

        document.querySelector("#drawer-popup > div > div.drawer.right.slide-in-right.drawer-medium.hero-drawer.medical.themed.undefined > div.drawer-body.px-4 > div > div > div > div > div > div > div > div > div:nth-child(2) > div.switch-options.switch-toggle.switch-toggle--off > a:nth-child(2)").click();
    }, 40000);

    setTimeout(() => {
        console.log("no2")

        document.querySelector("#drawer-popup > div > div.drawer.right.slide-in-right.drawer-medium.hero-drawer.medical.themed.undefined > div.drawer-body.px-4 > div > div > div > div > div > div > div > div > div:nth-child(3) > div.switch-options.switch-toggle.switch-toggle--off > a:nth-child(2)").click();
    }, 45000);

    setTimeout(() => {
        console.log("yes")

        document.querySelector("#drawer-popup > div > div.drawer.right.slide-in-right.drawer-medium.hero-drawer.medical.themed.undefined > div.drawer-body.px-4 > div > div > div > div > div > div > div > div > div:nth-child(4) > div.switch-options.switch-toggle.inverse.switch-toggle--off > a:nth-child(3)").click();
    }, 50000);

    setTimeout(() => {
        console.log("submit")

        document.querySelector("#Submit").click();
    }, 55000);

    setTimeout(() => {
        // alert("submit")
        console.log("im sure")

        document.querySelector("#Yes\\,\\ I\\'m\\ sure").click();
    }, 65000);
}


console.log("starting attestor")
offset = getRandomInt(30);
delay = 22*60*60*1000+offset*60*1000;
// delay = 10*60*1000
setTimeout(() => {
    console.log("starting to attest")

    setInterval(attest(), delay);
}, 20*60*60*1000);
