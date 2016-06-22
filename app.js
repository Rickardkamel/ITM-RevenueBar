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
            var revenue = Math.round(rawFile.responseText)
            
            var formattedRevenue = intToString(revenue);

            var pxCalc = 200 - value;
            executeCss(pxCalc);
            document.getElementById("valueContainer").innerHTML = formattedRevenue;


        }
    }
    rawFile.send();
});

function intToString (value) {
    var suffixes = ["", "k", "m", "b","t"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
    return shortValue+suffixes[suffixNum];
}













