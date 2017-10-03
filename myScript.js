function scrollDown() {
    document.getElementById("header").style.height = "0";
    document.getElementById("header").style.padding = "0";
    document.getElementById("button").style.display = "none";
    document.getElementById("imgcontent").style.display = "none";
}
function scrollUp() {
    document.getElementById("header").style.height = "90vh";
    document.getElementById("header").style.paddingTop = "60px";
    document.getElementById("button").style.display = "inline-block";
    document.getElementById("imgcontent").style.display = "inline-block";
}



function myFunction() {
    var x = document.getElementById("contact");
    var y = document.getElementById("prices");
    var z = document.getElementById("about");
    var a = document.getElementById("imgcontact");
    var b = document.getElementById("imgprices");
    var c = document.getElementById("imgabout");
    var contact = x.clientHeight / 2 - a.clientHeight / 4;
    var prices = y.clientHeight / 2 - b.clientHeight / 4;
    var about = z.clientHeight / 2 - c.clientHeight / 4;
    var one = z.clientHeight - c.clientHeight - about + prices;
    var two = y.clientHeight - b.clientHeight - prices + contact;
    var padone = about + c.clientHeight;
    document.getElementById("imgcontact").style.paddingTop = contact + 'px';
    document.getElementById("imgprices").style.paddingTop = prices + 'px';
    document.getElementById("imgabout").style.paddingTop = about + 'px';
    document.getElementById("pawsone").style.height = one + 'px';
    document.getElementById("pawsone").style.paddingTop = padone + 'px';
    document.getElementById("pawstwo").style.height = two + 'px';
}
function showCredit(){
	document.getElementById("imgcontact").src = "DewiandMasaru2.png" ;
    document.getElementById("imgprices").src = "KeithandLucy2.png" ;
    document.getElementById("imgabout").src = "AliceandLeia2.png" ;
}
function noCredit(){
	document.getElementById("imgcontact").src = "DewiandMasaru.png" ;
    document.getElementById("imgprices").src = "KeithandLucy.png" ;
    document.getElementById("imgabout").src = "AliceandLeia.png" ;
}
