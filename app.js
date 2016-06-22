function executeCss(pxCalc) {

    $("#top").css
        ("clip", function () {
            return "rect(" + pxCalc + "px " + "auto " + "auto " + "auto)"
        })
}


$(document).ready(function () {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "resources/value.txt", true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {

            var value = 200 * (rawFile.responseText / 100000000);

            value = Math.round(value);

            var pxCalc = 200-value;
            executeCss(pxCalc);
        }
    }
    rawFile.send();

});













