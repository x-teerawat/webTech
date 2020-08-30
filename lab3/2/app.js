function checkCardNo() {
    let cardNo = document.getElementById(`หมายเลขบัตรประชาชน`).value;
    if (isInteger(cardNo) == true && cardNo.length == 13) {
        alert(`True`);
    }
    else {
        alert(`False`);
    }
}