function checkNaN() {
    let value = document.getElementById(`input`).value
    if (isNaN(value) === false && value.includes(`.`) === false) {
        console.log(`False`)
        console.log(`เป็นตัวเลข`)
        return false
    }
    else {
        console.log(`True`)
        console.log(`ไม่เป็นตัวเลข`)
        return true
    }
}




