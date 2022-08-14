let userAgent = navigator.userAgent;
let browser = '';
console.log(userAgent);
// console.log(navigator);
if(userAgent.match(/edg/i)) {
    browser = 'edge'
}else if(userAgent.match(/firefox/i)) {
    browser = 'firefox'
} else if(userAgent.match(/chrome/i)) {
    browser = 'chrome'
} else if (userAgent.match(/opera/i)) {
    browser = 'opera'
} else if(userAgent.match(/safari/i)) {
    browser = 'safari'
} else {
    alert('Other Browser')
}

// console.log(browser);
const logo = document.querySelector(`.logos .${browser}`);
// console.log(logo)
if(logo) {
    logo.style.opacity = '1'
}
 