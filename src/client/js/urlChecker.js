function checkForUrl(inputText) {
    console.log("::: Running checkForName :::", inputText);

    var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    if(urlRegex.test(inputText)) {
        alert("Urls are not acceptable ")
        return true;
    }
    return false
}

export { checkForUrl }
