
async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    // myDisplay(myText);
    document.getElementById(myText).innerHTML = 5 + 6 /*myText.toString()*/;
} 

getText("file.txt");