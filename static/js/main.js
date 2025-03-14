scaleBody();

function scaleBody() {
    if (window.innerWidth <= 490) {
        let scaleValue = (window.innerWidth / 490);
    
        document.body.style.transform = `scale(${scaleValue})`;
        document.body.style.transformOrigin = "top center";
    }
}