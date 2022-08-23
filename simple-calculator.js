function simpleCalcu() {
    let a = document.getElementById("1stnumber").value
    let b = document.getElementById("2ndnumber").value
    
    function sum() {
        return Number(a) + Number(b)
    }
    
    function sub() {
        return a - b
    }
    
    function div() {
        return a / b
    }
    
    function mul() {
        return a * b
    }

    let userOption = document.getElementById('option').value
    if (userOption == '1') {
        count = sum(a,b)
    } else if (userOption == '2') {
        count = sub(a,b)
    } else if (userOption == '3') {
        count = div(a,b)
    } else if (userOption == '4') {
        count = mul(a,b)
    } else {
        alert("Please input check your option!")
    }

    // let operatio = mul(a,b)
    let result = document.getElementById('result')
    result.value = count
}