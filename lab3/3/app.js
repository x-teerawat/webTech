function checkCardId() {
    let cardId = document.getElementById(`cardId`).value;
    if (isNaN(cardId) || cardId.length != 13 || cardId.includes(`.` === true)) {
        alert(`กรุณากรอกบัตรประชาชนอีกครั้ง`);
        return false;
    } else {
        return true
    }
}

function checkTitle() {
    let title = document.getElementById(`title`).value;
    if (title == "000") {
        alert(`กรุณากรอกคำนำหน้าชื่ออีกครั้ง`);
        return false;
    } else {
        return true
    }
}

function checkFName() {
    let fName = document.getElementById(`fName`).value;
    if (fName.length < 2 || fName.length > 20) {
        alert(`กรุณากรอกชื่ออีกครั้ง`);
        return false;
    } else if (isNaN(fName) == false) {
        alert(`กรุณาใส่ตัวอักษรเท่านั้น`);
        return false;
    } else {
        return true
    }
}

function checkLName() {
    let lName = document.getElementById(`lName`).value;
    if (lName.length < 2 || lName.length > 30) {
        alert(`กรุณากรอกนามสกุลอีกครั้ง`);
        return false;
    } else if (isNaN(lName) == false) {
        alert(`กรุณาใส่ตัวอักษรเท่านั้น`);
        return false;
    } else {
        return true
    }
}

function checkAddress() {
    let address = document.getElementById(`address`).value;
    if (address.length < 5) {
        alert(`กรุณากรอกที่อยู่อีกครั้ง`);
        return false;
    } else {
        return true
    }
}

function checkSubDistrict() {
    let subDistrict = document.getElementById(`subDistrict`).value;
    if (subDistrict.length < 2) {
        alert(`กรุณากรอกตำบลหรือแขวงอีกครั้ง`);
        return false;
    } else if (isNaN(subDistrict) == false) {
        alert(`กรุณาใส่ตัวอักษรเท่านั้น`);
        return false;
    } else {
        return true
    }
}

function checkDistrict() {
    let district = document.getElementById(`district`).value;
    if (district.length < 2) {
        alert(`กรุณากรอกอำเภอหรือเขตอีกครั้ง`);
        return false;
    } else if (isNaN(district) == false) {
        alert(`กรุณาใส่ตัวอักษรเท่านั้น`);
        return false;
    } else {
        return true
    }
} 

function checkProvince() {
    let province = document.getElementById(`province`).value;
    if (province == `000`) {
        alert(`กรุณากรอกเลือกจังหวัดอีกครั้ง`);
        return false;
    } else {
        return true
    }
}

function checkPostalCode() {
    let postalCode = document.getElementById(`postalCode`).value;
    if (isNaN(postalCode) || postalCode.length != 5 || postalCode.includes(`.` === true)) {
        alert(`กรุณากรอกเลือกรหัสไปรษณีย์อีกครั้ง`);
        return false;
    } else {
        return true
    }
}

function checkPhoneNo() {
    let phoneNo = document.getElementById(`phoneNo`).value;
    if (isNaN(phoneNo) || phoneNo.length < 9 || phoneNo.length > 10 || phoneNo.includes(`.` === true)) {
        alert(`กรุณากรอกเบอร์โทรศัพท์อีกครั้ง`);
        return false;
    } else {
        return true
    }
}

function validator() {
    if (checkCardId() === true &&
    checkTitle() === true && 
    checkFName() === true && 
    checkLName() === true && 
    checkAddress() === true && 
    checkSubDistrict() === true && 
    checkDistrict() === true && 
    checkProvince() === true && 
    checkPostalCode() === true && 
    checkPhoneNo() === true) {
        alert(`ส่งข้อมูลเรียบร้อย`)
    } else
    alert(`กรุณาใส่ข้อมูลใหม่`)
}