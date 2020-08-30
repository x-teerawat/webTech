function checkCardId() {
    let cardId = document.getElementById(`cardId`).value;
    if (isNaN(cardId) || cardId.length != 13 || cardId.includes(`.` === true)) {
        alert(`กรุณากรอกบัตรประชาชนอีกครั้ง`);
        return false;
    }

    let title = document.getElementById(`title`).value;
    if (title == "000") {
        alert(`กรุณากรอกคำนำหน้าชื่ออีกครั้ง`);
        return false;
    }

    let fName = document.getElementById(`fName`).value;
    if (fName.length < 2 || fName.length > 20) {
        alert(`กรุณากรอกชื่ออีกครั้ง`);
        return false;
    } else if (isNaN(fName) == false) {
        alert(`กรุณาใส่ตัวอักษรเท่านั้น`);
        return false;
    }

    let lName = document.getElementById(`lName`).value;
    if (lName.length < 2 || lName.length > 30) {
        alert(`กรุณากรอกนามสกุลอีกครั้ง`);
        return false;
    } else if (isNaN(lName) == false) {
        alert(`กรุณาใส่ตัวอักษรเท่านั้น`);
        return false;
    }

    let address = document.getElementById(`address`).value;
    if (address.length < 5) {
        alert(`กรุณากรอกที่อยู่อีกครั้ง`);
        return false;
    }

    let subDistrict = document.getElementById(`subDistrict`).value;
    if (subDistrict.length < 2) {
        alert(`กรุณากรอกตำบลหรือแขวงอีกครั้ง`);
        return false;
    } else if (isNaN(subDistrict) == false) {
        alert(`กรุณาใส่ตัวอักษรเท่านั้น`);
        return false;
    }

    let district = document.getElementById(`district`).value;
    if (district.length < 2) {
        alert(`กรุณากรอกอำเภอหรือเขตอีกครั้ง`);
        return false;
    } else if (isNaN(district) == false) {
        alert(`กรุณาใส่ตัวอักษรเท่านั้น`);
        return false;
    }

    let province = document.getElementById(`province`).value;
    if (province == `000`) {
        alert(`กรุณากรอกเลือกจังหวัดอีกครั้ง`);
        return false;
    }

    let postalCode = document.getElementById(`postalCode`).value;
    if (isNaN(postalCode) != 5) {
        alert(`กรุณากรอกเลือกจังหวัดอีกครั้ง`);
        return false;
    } 

}
