function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName('size');
    for (var i=0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "A Slice of Pizza") {
        sizeTotal = 5;
    } else if (selectedSize === "A Small Pizza") {
        sizeTotal = 9;
    }else if (selectedSize === "A Medium Pizza") {
        sizeTotal = 12;
    }else if (selectedSize === "A Large Pizza") {
        sizeTotal = 15;
    }else if (selectedSize === "An Xtra Large Pizza") {
        sizeTotal = 19;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".99");
    console.log("size text1: "+ text1);
    console.log("subtotal: $" + runningTotal + ".99")
    getMeat(runningTotal,text1);
};

function getMeat(runningTotal,text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats")
    for (var j = 0; j < meatArray.length; j++) {
        if (meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: (+meatArray[j].value+)");
            text1 = text1 + meatArray[j].value + "<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount -1);
    } else {
        meatTotal = 0;
    }    
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: " + meatCount);
    console.log(meatCount + "meat - 1 free meat = " + "$" + meatTotal + ".99");
    console.log("meat text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".99");
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = "<h3>Total: <strong>$" + runningTotal + ".99" + "</strong></h3>";
};
