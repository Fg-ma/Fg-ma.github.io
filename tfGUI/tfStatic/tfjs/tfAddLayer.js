// Logic behind adding a layer to the outputted file
addLayerButton.onclick = function() {
    layerCount += 1;
    var displayEntries = mySelect1.value;
    if (displayEntries == "Select a layer") {
        var displayEntries = mySelect2.value;
    };
    try {
        var labelTF1 = document.getElementById('labelTF1').innerHTML;
    } catch {
        var labelTF1 = "None";
    };
    try {
        var TF11 = document.querySelector('#TF11').checked;
    } catch {
        var TF11 = "None";
    };
    try {
        var TF21 = document.querySelector('#TF21').checked;
    } catch {
        var TF21 = "None";
    };
    try {
        var labelTF2 = document.getElementById('labelTF2').innerHTML;
    } catch {
        var labelTF2 = "None";
    };
    try {
        var TF12 = document.querySelector('#TF12').checked;
    } catch {
        var TF12 = "None";
    };
    try {
        var TF22 = document.querySelector('#TF22').checked;
    } catch {
        var TF22 = "None";
    };
    try {
        var labelTF3 = document.getElementById('labelTF3').innerHTML;
    } catch {
        var labelTF3 = "None";
    };
    try {
        var TF13 = document.querySelector('#TF13').checked;
    } catch {
        var TF13 = "None"
    };
    try {
        var TF23 = document.querySelector('#TF23').checked;
    } catch {
        var TF23 = "None";
    };
    try {
        var labelTF4 = document.getElementById('labelTF4').innerHTML;
    } catch {
        var labelTF4 = "None";
    };
    try {
        var TF14 = document.querySelector('#TF14').checked;
    } catch {
        var TF14 = "None";
    };
    try {
        var TF24 = document.querySelector('#TF24').checked;
    } catch {
        var TF24 = "None";
    };
    try {
        var labelTF5 = document.getElementById('labelTF5').innerHTML;
    } catch {
        var labelTF5 = "";
    };
    try {
        var TF15 = document.querySelector('#TF15').checked;
    } catch {
        var TF15 = "None";
    };
    try {
        var TF25 = document.querySelector('#TF25').checked;
    } catch {
        var TF25 = "None";
    };
    try {
        var labelTF6 = document.getElementById('labelTF6').innerHTML;
    } catch {
        var labelTF6 = "";
    };
    try {
        var TF16 = document.querySelector('#TF16').checked;
    } catch {
        var TF16 = "None";
    };
    try {
        var TF26 = document.querySelector('#TF26').checked;
    } catch {
        var TF26 = "None";
    };
    try {
        var labelTF7 = document.getElementById('labelTF7').innerHTML;
    } catch {
        var labelTF7 = "";
    };
    try {
        var TF17 = document.querySelector('#TF17').checked;
    } catch {
        var TF17 = "None";
    };
    try {
        var TF27 = document.querySelector('#TF27').checked;
    } catch {
        var TF27 = "None";
    };
    try {
        var labelTF8 = document.getElementById('labelTF8').innerHTML;
    } catch {
        var labelTF8 = "";
    };
    try {
        var TF18 = document.querySelector('#TF18').checked;
    } catch {
        var TF18 = "None";
    };
    try {
        var TF28 = document.querySelector('#TF28').checked;
    } catch {
        var TF28 = "None";
    };
    try {
        var labelDropdown1 = document.getElementById('labelDropdown1').innerHTML;
    } catch {
        var labelDropdown1 = "None";
    };
    try {
        var dropdown1 = document.getElementById('dropdown1').value;
    } catch {
        var dropdown1 = "None";
    };
    try {
        var labelDropdown2 = document.getElementById('labelDropdown2').innerHTML;
    } catch {
        var labelDropdown2 = "None";
    };
    try {
        var dropdown2 = document.getElementById('dropdown2').value;
    } catch {
        var dropdown2 = "None";
    };
    try {
        var labelDropdown3 = document.getElementById('labelDropdown3').innerHTML;
    } catch {
        var labelDropdown3 = "None";
    };
    try {
        var dropdown3 = document.getElementById('dropdown3').value;
    } catch {
        var dropdown3 = "None";
    };
    try {
        var labelDropdown4 = document.getElementById('labelDropdown4').innerHTML;
    } catch {
        var labelDropdown4 = "None";
    };
    try {
        var dropdown4 = document.getElementById('dropdown4').value;
    } catch {
        var dropdown4 = "None";
    };
    try {
        var labelDropdown5 = document.getElementById('labelDropdown5').innerHTML;
    } catch {
        var labelDropdown5 = "None";
    };
    try {
        var dropdown5 = document.getElementById('dropdown5').value;
    } catch {
        var dropdown5 = "None";
    };
    try {
        var labelDropdown6 = document.getElementById('labelDropdown6').innerHTML;
    } catch {
        var labelDropdown6 = "None";
    };
    try {
        var dropdown6 = document.getElementById('dropdown6').value;
    } catch {
        var dropdown6 = "None";
    };
    try {
        var labelDropdown7 = document.getElementById('labelDropdown7').innerHTML;
    } catch {
        var labelDropdown7 = "None";
    };
    try {
        var dropdown7 = document.getElementById('dropdown7').value;
    } catch {
        var dropdown7 = "None";
    };
    try {
        var labelDropdown8 = document.getElementById('labelDropdown8').innerHTML;
    } catch {
        var labelDropdown8 = "None";
    };
    try {
        var dropdown8 = document.getElementById('dropdown8').value;
    } catch {
        var dropdown8 = "None";
    };
    try {
        var labelDropdown9 = document.getElementById('labelDropdown9').innerHTML;
    } catch {
        var labelDropdown9 = "None";
    };
    try {
        var dropdown9 = document.getElementById('dropdown9').value;
    } catch {
        var dropdown9 = "None";
    };
    try {
        var labelDropdown10 = document.getElementById('labelDropdown10').innerHTML;
    } catch {
        var labelDropdown10 = "None";
    };
    try {
        var dropdown10 = document.getElementById('dropdown10').value;
    } catch {
        var dropdown10 = "None";
    };
    try {
        var labelDropdown11 = document.getElementById('labelDropdown11').innerHTML;
    } catch {
        var labelDropdown11 = "None";
    };
    try {
        var dropdown11 = document.getElementById('dropdown11').value;
    } catch {
        var dropdown11 = "None";
    };
    try {
        var labelDropdown12 = document.getElementById('labelDropdown12').innerHTML;
    } catch {
        var labelDropdown12 = "None";
    };
    try {
        var dropdown12 = document.getElementById('dropdown12').value;
    } catch {
        var dropdown12 = "None";
    };
    try {
        var labelDropdown13 = document.getElementById('labelDropdown13').innerHTML;
    } catch {
        var labelDropdown13 = "None";
    };
    try {
        var dropdown13 = document.getElementById('dropdown13').value;
    } catch {
        var dropdown13 = "None";
    };
    try {
        var labelDropdown14 = document.getElementById('labelDropdown14').innerHTML;
    } catch {
        var labelDropdown14 = "None";
    };
    try {
        var dropdown14 = document.getElementById('dropdown14').value;
    } catch {
        var dropdown14 = "None";
    };
    try {
        var labelTextEntry1 = document.getElementById('labelTextEntry1').innerHTML;
    } catch {
        var labelTextEntry1 = "None";
    };
    try {
        var textEntry1 = document.getElementById('textEntry1').value;
    } catch {
        var textEntry1 = "None";
    };
    try {
        var labelTextEntry2 = document.getElementById('labelTextEntry2').innerHTML;
    } catch {
        var labelTextEntry2 = "None";
    };
    try {
        var textEntry2 = document.getElementById('textEntry2').value;
    } catch {
        var textEntry2 = "None";
    };
    try {
        var labelTextEntry3 = document.getElementById('labelTextEntry3').innerHTML;
    } catch {
        var labelTextEntry3 = "None";
    };
    try {
        var textEntry3 = document.getElementById('textEntry3').value;
    } catch {
        var textEntry3 = "None";
    };
    try {
        var labelTextEntry4 = document.getElementById('labelTextEntry4').innerHTML;
    } catch {
        var labelTextEntry4 = "None";
    };
    try {
        var textEntry4 = document.getElementById('textEntry4').value;
    } catch {
        var textEntry4 = "None";
    };
    try {
        var labelTextEntry5 = document.getElementById('labelTextEntry5').innerHTML;
    } catch {
        var labelTextEntry5 = "None";
    };
    try {
        var textEntry5 = document.getElementById('textEntry5').value;
    } catch {
        var textEntry5 = "None";
    };
    try {
        var labelNumEntry1 = document.getElementById('labelNumEntry1').innerHTML;
    } catch {
        var labelNumEntry1 = "None";
    };
    try {
        var numEntry1 = document.getElementById('numEntry1').value;
    } catch {
        var numEntry1 = "None";
    };
    try {
        var labelNumEntry2 = document.getElementById('labelNumEntry2').innerHTML;
    } catch {
        var labelNumEntry2 = "None";
    };
    try {
        var numEntry2 = document.getElementById('numEntry2').value;
    } catch {
        var numEntry2 = "None";
    };
    try {
        var labelNumEntry3 = document.getElementById('labelNumEntry3').innerHTML;
    } catch {
        var labelNumEntry3 = "None";
    };
    try {
        var numEntry3 = document.getElementById('numEntry3').value;
    } catch {
        var numEntry3 = "None";
    };
    try {
        var labelNumEntry4 = document.getElementById('labelNumEntry4').innerHTML;
    } catch {
        var labelNumEntry4 = "None";
    };
    try {
        var numEntry4 = document.getElementById('numEntry4').value;
    } catch {
        var numEntry4 = "None";
    };
    try {
        var labelNumEntry5 = document.getElementById('labelNumEntry5').innerHTML;
    } catch {
        var labelNumEntry5 = "None";
    };
    try {
        var numEntry5 = document.getElementById('numEntry5').value;
    } catch {
        var numEntry5 = "None";
    };
    try {
        var labelSlider1 = document.getElementById('labelSlider1').innerHTML;
    } catch {
        var labelSlider1 = "None";
    };
    try {
        var slider1 = document.getElementById('slider1').value;
    } catch {
        var slider1 = "None";
    };
    try {
        var labelSlider2 = document.getElementById('labelSlider2').innerHTML;
    } catch {
        var labelSlider2 = "None";
    };
    try {
        var slider2 = document.getElementById('slider2').value;
    } catch {
        var slider2 = "None";
    };
    try {
        var labelSlider3 = document.getElementById('labelSlider3').innerHTML;
    } catch {
        var labelSlider3 = "None";
    };
    try {
        var slider3 = document.getElementById('slider3').value;
    } catch {
        var slider3 = "None";
    };
    try {
        var labelSlider4 = document.getElementById('labelSlider4').innerHTML;
    } catch {
        var labelSlider4 = "None";
    };
    try {
        var slider4 = document.getElementById('slider4').value;
    } catch {
        var slider4 = "None";
    };
    try {
        var labelMultiNumEntry1 = document.getElementById('labelMultiNumEntry1').innerHTML;
    } catch {
        var labelMultiNumEntry1 = "None";
    };
    try {
        var multiNumEntry11 = document.getElementById('multiNumEntry11').value;
    } catch {
        var multiNumEntry11 = "None";
    };
    try {
        var multiNumEntry21 = document.getElementById('multiNumEntry21').value;
    } catch {
        var multiNumEntry21 = "None";
    };
    try {
        var multiNumEntry31 = document.getElementById('multiNumEntry31').value;
    } catch {
        var multiNumEntry31 = "";
    };
    try {
        var labelMultiNumEntry2 = document.getElementById('labelMultiNumEntry2').innerHTML;
    } catch {
        var labelMultiNumEntry2 = "None";
    };
    try {
        var multiNumEntry12 = document.getElementById('multiNumEntry12').value;
    } catch {
        var multiNumEntry12 = "None";
    };
    try {
        var multiNumEntry22 = document.getElementById('multiNumEntry22').value;
    } catch {
        var multiNumEntry22 = "None";
    };
    try {
        var multiNumEntry32 = document.getElementById('multiNumEntry32').value;
    } catch {
        var multiNumEntry32 = "";
    };
    try {
        var labelMultiNumEntry3 = document.getElementById('labelMultiNumEntry3').innerHTML;
    } catch {
        var labelMultiNumEntry3 = "None";
    };
    try {
        var multiNumEntry13 = document.getElementById('multiNumEntry13').value; 
    } catch {
        var multiNumEntry13 = "None";
    };
    try {
        var multiNumEntry23 = document.getElementById('multiNumEntry23').value;
    } catch {
        var multiNumEntry23 = "None";
    };
    try {
        var multiNumEntry33 = document.getElementById('multiNumEntry33').value;
    } catch {
        var multiNumEntry33 = "";
    };
    try {
        var labelMultiNumEntry4 = document.getElementById('labelMultiNumEntry4').innerHTML;
    } catch {
        var labelMultiNumEntry4 = "None";
    };
    try {
        var multiNumEntry14 = document.getElementById('multiNumEntry14').value;
    } catch {
        var multiNumEntry14 = "None";
    };
    try {
        var multiNumEntry24 = document.getElementById('multiNumEntry24').value;
    } catch {
        var multiNumEntry24 = "None";
    };
    try {
        var multiNumEntry34 = document.getElementById('multiNumEntry34').value;
    } catch {
        var multiNumEntry34 = "";
    };
    try {
        var labelkwargs1 = document.getElementById('labelkwargs1').innerHTML;
    } catch {
        var labelkwargs1 = "None";
    };
    try {
        var kwargs1 = document.getElementById('kwargs1').value;
    } catch {
        var kwargs1 = "None";
    };
    try {
        var labelkwargs2 = document.getElementById('labelkwargs2').innerHTML;
    } catch {
        var labelkwargs2 = "None";
    };
    try {
        var kwargs2 = document.getElementById('kwargs2').value;
    } catch {
        var kwargs2 = "None";
    };
    try {
        var labelkwargs3 = document.getElementById('labelkwargs3').innerHTML;
    } catch {
        var labelkwargs3 = "None";
    };
    try {
        var kwargs3 = document.getElementById('kwargs3').value;
    } catch {
        var kwargs3 = "None";
    };
    try {
        var labelkwargs4 = document.getElementById('labelkwargs4').innerHTML;
    } catch {
        var labelkwargs4 = "None";
    };
    try {
        var kwargs4 = document.getElementById('kwargs4').value;
    } catch {
        var kwargs4 = "None";
    };

    var doc = document.getElementById("storage");
    
    doc.insertAdjacentText('beforeend', "\n" + "Layer " + layerCount + ": " + displayEntries + "\n");

    if (labelTF1 != ""){
        if (TF11 == true) {
            doc.insertAdjacentText('beforeend', labelTF1 + ': True' + "\n");
        } else if (TF21 == true) {
            doc.insertAdjacentText('beforeend', labelTF1 + ': False' + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTF1 + ': None' + "\n");
        }
    }

    if (labelTF2 != ""){
        if (TF12 == true) {
            doc.insertAdjacentText('beforeend', labelTF2 + ': True' + "\n");
        } else if (TF22 == true) {
            doc.insertAdjacentText('beforeend', labelTF2 + ': False' + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTF2 + ': None' + "\n");
        }
    }

    if (labelTF3 != ""){
        if (TF13 == true) {
            doc.insertAdjacentText('beforeend', labelTF3 + ': True' + "\n");
        } else if (TF23 == true) {
            doc.insertAdjacentText('beforeend', labelTF3 + ': False' + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTF3 + ': None' + "\n");
        }
    }
    if (labelTF4 != ""){
        if (TF14 == true) {
            doc.insertAdjacentText('beforeend', labelTF4 + ': True' + "\n");
        } else if (TF24 == true) {
            doc.insertAdjacentText('beforeend', labelTF4 + ': False' + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTF4 + ': None' + "\n");
        }
    }
    if (labelTF5 != ""){
        if (TF15 == true) {
            doc.insertAdjacentText('beforeend', labelTF5 + ': True' + "\n");
        } else if (TF25 == true) {
            doc.insertAdjacentText('beforeend', labelTF5 + ': False' + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTF5 + ': None' + "\n");
        }
    }

    if (labelTF6 != ""){
        if (TF16 == true) {
            doc.insertAdjacentText('beforeend', labelTF6 + ': True' + "\n");
        } else if (TF26 == true) {
            doc.insertAdjacentText('beforeend', labelTF6 + ': False' + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTF6 + ': None' + "\n");
        }
    }
    if (labelTF7 != ""){
        if (TF17 == true) {
            doc.insertAdjacentText('beforeend', labelTF7 + ': True' + "\n");
        } else if (TF27 == true) {
            doc.insertAdjacentText('beforeend', labelTF7 + ': False' + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTF7 + ': None' + "\n");
        }
    }
    if (labelTF8 != ""){
        if (TF18 == true) {
            doc.insertAdjacentText('beforeend', labelTF8 + ': True' + "\n");
        } else if (TF28 == true) {
            doc.insertAdjacentText('beforeend', labelTF8 + ': False' + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTF8 + ': None' + "\n");
        }
    }

    if (dropdown1 != "None") {
        if (dropdown1 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown1 + ': ' + dropdown1 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown1 + ': ' + "None" + "\n");
        };
    };
    if (dropdown2 != "None") {
        if (dropdown2 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown2 + ': ' + dropdown2 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown2 + ': ' + "None" + "\n");
        };
    };
    if (dropdown3 != "None") {
        if (dropdown3 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown3 + ': ' + dropdown3 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown3 + ': ' + "None" + "\n");
        };
    };
    if (dropdown4 != "None") {
        if (dropdown4 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown4 + ': ' + dropdown4 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown4 + ': ' + "None" + "\n");
        };
    };
    if (dropdown5 != "None") {
        if (dropdown5 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown5 + ': ' + dropdown5 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown5 + ': ' + "None" + "\n");
        };
    };
    if (dropdown6 != "None") {
        if (dropdown6 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown6 + ': ' + dropdown6 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown6 + ': ' + "None" + "\n");
        };
    };
    if (dropdown7 != "None") {
        if (dropdown7 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown7 + ': ' + dropdown7 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown7 + ': ' + "None" + "\n");
        };
    };
    if (dropdown8 != "None") {
        if (dropdown8 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown8 + ': ' + dropdown8 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown8 + ': ' + "None" + "\n");
        };
    };
    if (dropdown9 != "None") {
        if (dropdown9 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown9 + ': ' + dropdown9 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown9 + ': ' + "None" + "\n");
        };
    };
    if (dropdown10 != "None") {
        if (dropdown10 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown10 + ': ' + dropdown10 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown10 + ': ' + "None" + "\n");
        };
    };
    if (dropdown11 != "None") {
        if (dropdown11 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown11 + ': ' + dropdown11 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown11 + ': ' + "None" + "\n");
        };
    };
    if (dropdown12 != "None") {
        if (dropdown12 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown12 + ': ' + dropdown12 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown12 + ': ' + "None" + "\n");
        };
    };
    if (dropdown13 != "None") {
        if (dropdown13 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown13 + ': ' + dropdown13 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown13 + ': ' + "None" + "\n");
        };
    };
    if (dropdown14 != "None") {
        if (dropdown14 != "Select a layer") {
            doc.insertAdjacentText('beforeend', labelDropdown14 + ': ' + dropdown14 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelDropdown14 + ': ' + "None" + "\n");
        };
    };

    if (textEntry1 != "None") {
        if (textEntry1 != "") {
            doc.insertAdjacentText('beforeend', labelTextEntry1 + ': ' + textEntry1 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTextEntry1 + ': ' + "None" + "\n");
        };
    };
    if (textEntry2 != "None") {
        if (textEntry2 != "") {
            doc.insertAdjacentText('beforeend', labelTextEntry2 + ': ' + textEntry2 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTextEntry2 + ': ' + "None" + "\n");
        };
    };
    if (textEntry3 != "None") {
        if (textEntry3 != "") {
            doc.insertAdjacentText('beforeend', labelTextEntry3 + ': ' + textEntry3 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTextEntry3 + ': ' + "None" + "\n");
        };
    };
    if (textEntry4 != "None") {
        if (textEntry4 != "") {
            doc.insertAdjacentText('beforeend', labelTextEntry4 + ': ' + textEntry4 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTextEntry4 + ': ' + "None" + "\n");
        };
    };
    if (textEntry5 != "None") {
        if (textEntry5 != "") {
            doc.insertAdjacentText('beforeend', labelTextEntry5 + ': ' + textEntry5 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelTextEntry5 + ': ' + "None" + "\n");
        };
    }

    if (numEntry1 != "None") {
        if (numEntry1 != "") {
            doc.insertAdjacentText('beforeend', labelNumEntry1 + ': ' + numEntry1 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelNumEntry1 + ': ' + "None" + "\n");
        };
    };
    if (numEntry2 != "None") {
        if (numEntry2 != "") {
            doc.insertAdjacentText('beforeend', labelNumEntry2 + ': ' + numEntry2 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelNumEntry2 + ': ' + "None" + "\n");
        };
    };
    if (numEntry3 != "None") {
        if (numEntry3 != "") {
            doc.insertAdjacentText('beforeend', labelNumEntry3 + ': ' + numEntry3 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelNumEntry3 + ': ' + "None" + "\n");
        };
    };
    if (numEntry4 != "None") {
        if (numEntry4 != "") {
            doc.insertAdjacentText('beforeend', labelNumEntry4 + ': ' + numEntry4 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelNumEntry4 + ': ' + "None" + "\n");
        };
    };
    if (numEntry5 != "None") {
        if (numEntry5 != "") {
            doc.insertAdjacentText('beforeend', labelNumEntry5 + ': ' + numEntry5 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelNumEntry5 + ': ' + "None" + "\n");
        };
    };

    if (multiNumEntry11 != "None") {
        if (multiNumEntry11 != "" & multiNumEntry21 != "" & multiNumEntry31 != "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry1 + ": ('" + multiNumEntry11 + "', '" + multiNumEntry21 + "', '" + multiNumEntry31 + "')" + "\n");
        } else if (multiNumEntry11 != "" & multiNumEntry21 != "" & multiNumEntry31 === "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry1 + ": ('" + multiNumEntry11 + "', '" + multiNumEntry21 + "')" + "\n");
        } else if (multiNumEntry11 != "" & multiNumEntry21 === "" & multiNumEntry31 === "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry1 + ": ('" + multiNumEntry11 + "')" + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry1 + ': ' + "None" + "\n");
        };
    };
    if (multiNumEntry12 != "None") {
        if (multiNumEntry12 != "" & multiNumEntry22 != "" & multiNumEntry32 != "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry2 + ": ('" + multiNumEntry12 + "', '" + multiNumEntry22 + "', '" + multiNumEntry32 + "')" + "\n");
        } else if (multiNumEntry12 != "" & multiNumEntry22 != "" & multiNumEntry32 === "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry2 + ": ('" + multiNumEntry12 + "', '" + multiNumEntry22 + "')" + "\n");
        } else if (multiNumEntry12 != "" & multiNumEntry22 === "" & multiNumEntry32 === "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry2 + ": ('" + multiNumEntry12 + "')" + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry2 + ': ' + "None" + "\n");
        };
    };
    if (multiNumEntry13 != "None") {
        if (multiNumEntry13 != "" & multiNumEntry22 != "" & multiNumEntry33 != "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry3 + ": ('" + multiNumEntry13 + "', '" + multiNumEntry23 + "', '" + multiNumEntry33 + "')" + "\n");
        } else if (multiNumEntry13 != "" & multiNumEntry23 != "" & multiNumEntry33 === "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry3 + ": ('" + multiNumEntry13 + "', '" + multiNumEntry23 + "')" + "\n");
        } else if (multiNumEntry13 != "" & multiNumEntry23 === "" & multiNumEntry33 === "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry3 + ": ('" + multiNumEntry13 + "')" + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry3 + ': ' + "None" + "\n");
        };
    };
    if (multiNumEntry14 != "None") {
        if (multiNumEntry14 != "" & multiNumEntry22 != "" & multiNumEntry34 != "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry4 + ": ('" + multiNumEntry14 + "', '" + multiNumEntry24 + "', '" + multiNumEntry34 + "')" + "\n");
        } else if (multiNumEntry14 != "" & multiNumEntry24 != "" & multiNumEntry34 === "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry4 + ": ('" + multiNumEntry14 + "', '" + multiNumEntry24 + "')" + "\n");
        } else if (multiNumEntry14 != "" & multiNumEntry24 === "" & multiNumEntry34 === "") {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry4 + ": ('" + multiNumEntry14 + "')" + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelMultiNumEntry4 + ': ' + "None" + "\n");
        };
    };

    if (kwargs1 != "None") {
        if (kwargs1 != "") {
            doc.insertAdjacentText('beforeend', labelkwargs1 + ': ' + kwargs1 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelkwargs1 + ': ' + "None" + "\n");
        };
    };
    if (kwargs2 != "None") {
        if (kwargs2 != "") {
            doc.insertAdjacentText('beforeend', labelkwargs2 + ': ' + kwargs2 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelkwargs2 + ': ' + "None" + "\n");
        };
    };
    if (kwargs3 != "None") {
        if (kwargs3 != "") {
            doc.insertAdjacentText('beforeend', labelkwargs3 + ': ' + kwargs3 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelkwargs3 + ': ' + "None" + "\n");
        };
    };
    if (kwargs4 != "None") {
        if (kwargs4 != "") {
            doc.insertAdjacentText('beforeend', labelkwargs4 + ': ' + kwargs4 + "\n");
        } else {
            doc.insertAdjacentText('beforeend', labelkwargs4 + ': ' + "None" + "\n");
        };
    };
};
