// Logic behind clearing teh information in the inputted fields
clearLayerButton.onclick = function() {
    var displayEntries = mySelect1.value;
    if (displayEntries == "Select a layer") {
        displayEntries = mySelect2.value;
        enterButton2.click();
    } else {
        enterButton1.click();
    };
}
