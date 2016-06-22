function executeCss(pxCalc) {

    $("#top").css
        ("clip", function () {
            return "rect(" + pxCalc + "px " + "auto " + "auto " + "auto)"
        })
}

function intToString (value) {
    var suffixes = ["", "k", "mkr", "b","t"];
    var suffixNum = Math.floor((""+value).length/3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
    return shortValue+suffixes[suffixNum];
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        myFunction(xhttp);
    }
};
xhttp.open("GET", "value.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName('value')[0].childNodes[0];
    var y = xmlDoc.getElementsByTagName('month')[0].childNodes[0];

    // document.getElementById("valueContainer").innerHTML = y.nodeValue; 

    var value = 200 * (x.nodeValue / 100000000);

    value = Math.round(value);

    var revenue = Math.round(x.nodeValue)

    var formattedRevenue = intToString(revenue);

    var pxCalc = 200 - value;
    executeCss(pxCalc);
    document.getElementById("valueContainer").innerHTML = formattedRevenue;
    document.getElementById("monthContainer").innerHTML = y.nodeValue;
}