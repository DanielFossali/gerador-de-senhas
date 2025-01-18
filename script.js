function generatePassword () {
    let passwordLength = 16
    const inputElement = document.querySelector("#password")
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#123456789"
    let password = ""

    for (let i= 0; i< passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        password +=chars.substring(randomNumber, randomNumber + 1)

        console.log(password)
    }

    inputElement.value = password 

    console.log(password)

    const passwordLengthElement = document.querySelector("#password-length")
    passwordLengthElement.addEventListener("input", function () {
        passwordLength = passwordLengthElement.value

        generatePassword()
    })

    function copyPassword () {
        navigator.clipboard.writeText(inputElement.value)
    }

    document.querySelector("#copy-1").addEventListener("click", copyPassword)
    document.querySelector("#copy-2").addEventListener("click", copyPassword)

}
generatePassword()
