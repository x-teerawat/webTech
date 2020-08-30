function validateForm() {
    let pid = document.getElementById("citizen_id").value;
    if ((isNaN(pid)) || (pid.length < 13)) {
        alert("Citizen ID requires 13 digit-number.");
        return false;
    }
    let title = document.getElementById("title").value;
    if (title == "000") {
        alert("Name title must be selected.");
        return false;
    }
    let fname = document.getElementById("first_name").value;
    if (isNaN(fname) == false) {
        alert("First name must be a characters.");
        return false;
    } else if ((fname.length <= 2) || (fname.length >= 20)) {
        alert("First name requires between 2 and 20 characters.");
        return false;
    }
    let lname = document.getElementById("last_name").value;
    if (isNaN(lname) == false) {
        alert("Last name must be a characters.");
        return false;
    } else if ((lname.length <= 2) || (lname.length >= 30)) {
        alert("Last name requires between 2 and 20 characters.");
        return false;
    }
    let address = document.getElementById("address").value.split("\n");
    if (address.length > 2) {
        alert("Address can fill maximum 2 lines.")
        return false;
    } else {
        for (i = 0; i < 2; i++) {
            if (address[i].length < 5) {
                alert("Each address row requires at least 5 characters.");
                return false;
            }
        }
    }
    let s_dist = document.getElementById("sub_district").value;
    if (isNaN(s_dist) == false) {
        alert("Sub-district must be a characters.");
        return false;
    } else if ((s_dist.length <= 2) || (s_dist.length >= 20)) {
        alert("Sub-district requires between 2 and 20 characters.");
        return false;
    }
    let dist = document.getElementById("district").value;
    if (isNaN(dist) == false) {
        alert("District must be a characters.");
        return false;
    }
    let prov = document.getElementById("province").value;
    if (prov == "not_selected") {
        alert("Province must be selected.");
        return false;
    }
    let pcode = document.getElementById("postal_code").value;
    if ((isNaN(pcode)) || (pcode.length != 5)) {
        alert("Postal code must have 5 digit-number.");
        return false;
    }
    let phone = document.getElementById("phone").value;
    if ((isNaN(phone)) || ((phone.length != 9) || (phone.length != 10))) {
        alert("Phone-number must have 9 or 10 digit-number.");
        return false;
    }
}