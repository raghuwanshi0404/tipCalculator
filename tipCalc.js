let tipRange = document.getElementById("inputRange");
let tipPercentage = document.getElementById("rangeResult");

let numOfPpl = document.getElementById("pplSharing");
let SharingResult = document.getElementById("SharingResult");
function change() {
    tipPercentage.innerHTML = tipRange.value + '%';
    SharingResult.innerHTML = numOfPpl.value;
}
function calculate() {
    let billingAmount = document.querySelector(".bill").value;
    console.log(billingAmount)
    let tipRange = document.querySelector("#inputRange").value;
    console.log(tipRange)
    let numOfPpl = document.querySelector("#pplSharing").value;
    console.log(numOfPpl)

    if (billingAmount === "" || tipRange == 0) {
        alert("Bill Please");
        return;
    }

    if (numOfPpl != 0 || numOfPpl >= 1) {
        
        
        document.getElementById("each").style.display = "block";
    } else {
        numOfPpl = 1;
        document.getElementById("each").style.display = "none";
      }
     // calculate tip
    let  totalTip = (billingAmount*(tipRange/100))/numOfPpl;
    totalTip = Number(totalTip)
    console.log(totalTip);
    let tipAmt = document.getElementById("tip1");
    tipAmt.innerHTML = Math.ceil(totalTip);
    TotalBillAmt = document.getElementById("tip2");
    totalAmt = Number(billingAmount) + Number(totalTip);
    TotalBillAmt.innerHTML = Math.ceil(totalAmt);
} 
