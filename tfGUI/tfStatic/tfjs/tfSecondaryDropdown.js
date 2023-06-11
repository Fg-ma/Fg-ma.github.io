// logic behind display the appropriate fields in the second dropdown menu
enterButton2.onclick = function() {
    mySelect1.selectedIndex = "0";
    userPrompt.style.display = "block";
    hiddenGrid.style.display = "grid";
    addLayerButton.style.display = "inline"; 
    clearLayerButton.style.display = "inline"; 
    var displayEntries = mySelect2.value;
    if (displayEntries === "Select a layer") {
        hiddenGrid.style.display = "none";
        userPrompt.style.display = "none";
        addLayerButton.style.display = "none"; 
        clearLayerButton.style.display = "none"; 
    };

    labelTF1.textContent = "";
    labelTF2.textContent = "";
    labelTF3.textContent = "";
    labelTF4.textContent = "";
    TF1.textContent = '';
    TF2.textContent = '';
    TF3.textContent = '';
    TF4.textContent = '';
    labelDropdown1.textContent = "";
    labelDropdown2.textContent = "";
    labelDropdown3.textContent = "";
    labelDropdown4.textContent = "";
    dropdown1.textContent = '';
    dropdown2.textContent = '';
    dropdown3.textContent = '';
    dropdown4.textContent = '';
    labelTextEntry1.textContent = "";
    labelTextEntry2.textContent = "";
    labelTextEntry3.textContent = "";
    labelTextEntry4.textContent = "";
    textEntry1.textContent = '';
    textEntry2.textContent = '';
    textEntry3.textContent = '';
    textEntry4.textContent = '';
    labelNumEntry1.textContent = "";
    labelNumEntry2.textContent = "";
    labelNumEntry3.textContent = "";
    labelNumEntry4.textContent = "";
    numEntry1.textContent = '';
    numEntry2.textContent = '';
    numEntry3.textContent = '';
    numEntry4.textContent = '';

    labelMultiNumEntry1.textContent = "";
    labelMultiNumEntry2.textContent = "";
    labelMultiNumEntry3.textContent = "";
    labelMultiNumEntry4.textContent = "";
    multiNumEntry1.textContent = '';
    multiNumEntry2.textContent = '';
    multiNumEntry3.textContent = '';
    multiNumEntry4.textContent = '';

    labelExtra1.textContent = "";
    labelExtra2.textContent = "";
    labelExtra3.textContent = "";
    labelExtra4.textContent = "";
    extra1.textContent = '';
    extra2.textContent = '';
    extra3.textContent = '';
    extra4.textContent = '';
    labelSlider1.textContent = "";
    labelSlider2.textContent = "";
    labelSlider3.textContent = "";
    labelSlider4.textContent = "";
    slider1.textContent = '';
    slider2.textContent = '';
    slider3.textContent = '';
    slider4.textContent = '';
    labelkwargs1.textContent = "";
    labelkwargs2.textContent = "";
    labelkwargs3.textContent = "";
    labelkwargs4.textContent = "";
    kwargs1.textContent = '';
    kwargs2.textContent = '';
    kwargs3.textContent = '';
    kwargs4.textContent = '';

    switch(displayEntries) {
    case 'TextVectorization':
        var optionsList1 = ["None", "lower_and_strip_punctuation", "lower", "strip_punctuation"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "whitespace", "character"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["int", "binary", "count", "tf-idf"];
        optionsListLength3 = optionsList3.length;

        labelTF1.innerHTML = 'pad_to_max_tokens';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input");
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelDropdown1.innerHTML = 'standardize';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'split';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength2; i++) {
        var opt2 = document.createElement('option');
        opt2.value = optionsList2[i];
        opt2.innerHTML = optionsList2[i];
        selectElement2.appendChild(opt2);
        };

        dropdown2.appendChild(selectElement2);

        labelDropdown3.innerHTML = 'output_mode';
        var selectElement3 = document.createElement("select");
        selectElement3.id = "dropdown3";
        selectElement3.style.height = "28px";
        selectElement3.style.width = "100%";
        selectElement3.style.backgroundColor = "#8094A6";
        selectElement3.style.margin = "0px 0px";
                        
        for (var i = 0; i < optionsListLength3; i++) {
        var opt3 = document.createElement('option');
        opt3.value = optionsList3[i];
        opt3.innerHTML = optionsList3[i];
        selectElement3.appendChild(opt3);
        };
        
        dropdown3.appendChild(selectElement3);

        labelTextEntry1.innerHTML = "vocabulary";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);
        
        
        labelNumEntry1.innerHTML = "max_tokens";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "output_sequence_length";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);


        labelMultiNumEntry1.innerHTML = "ngrams";
        var tripletGridDiv11 = document.createElement("div");
        tripletGridDiv11.style.gridColumn = "1 / 3";
        tripletGridDiv11.style.gridRow = "1 / 2";
        var multiNumEntryElement11 = document.createElement("input");
        multiNumEntryElement11.id = "multiNumEntry11";
        multiNumEntryElement11.type = "number";
        multiNumEntryElement11.style.height = "18%";
        multiNumEntryElement11.style.width = "100%";
        multiNumEntryElement11.style.backgroundColor = "#8094A6";
        multiNumEntryElement11.style.margin = "0px 0px";
        tripletGridDiv11.appendChild(multiNumEntryElement11);
        multiNumEntry1.appendChild(tripletGridDiv11);
        var tripletGridDiv21 = document.createElement("div");
        tripletGridDiv21.style.gridColumn = "3 / 5";
        tripletGridDiv21.style.gridRow = "1 / 2";
        var multiNumEntryElement21 = document.createElement("input");
        multiNumEntryElement21.id = "multiNumEntry21";
        multiNumEntryElement21.type = "number";
        multiNumEntryElement21.style.height = "18%";
        multiNumEntryElement21.style.width = "100%";
        multiNumEntryElement21.style.backgroundColor = "#8094A6";
        multiNumEntryElement21.style.margin = "0px 0px";
        tripletGridDiv21.appendChild(multiNumEntryElement21);
        multiNumEntry1.appendChild(tripletGridDiv21);
        var tripletGridDiv31 = document.createElement("div");
        tripletGridDiv31.style.gridColumn = "5 / 7";
        tripletGridDiv31.style.gridRow = "1 / 2";
        var multiNumEntryElement31 = document.createElement("input");
        multiNumEntryElement31.id = "multiNumEntry31";
        multiNumEntryElement31.type = "number";
        multiNumEntryElement31.style.height = "18%";
        multiNumEntryElement31.style.width = "100%";
        multiNumEntryElement31.style.backgroundColor = "#8094A6";
        multiNumEntryElement31.style.margin = "0px 0px";
        tripletGridDiv31.appendChild(multiNumEntryElement31);
        multiNumEntry1.appendChild(tripletGridDiv31);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Normalization':
        labelTextEntry1.innerHTML = "axis";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);
        
        labelNumEntry1.innerHTML = "mean";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "variance";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Discretization':
        labelTextEntry1.innerHTML = "bin_boundaries";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);
        
        labelNumEntry1.innerHTML = "num_bins";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "epsilon";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'CategoryEncoding':
        var optionsList1 = ["multi_hot", "one_hot", "count"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'sparse';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelDropdown1.innerHTML = 'output_mode';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);
        
        labelNumEntry1.innerHTML = "num_tokens";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Hashing':
        var optionsList1 = ["int", "one_hot", "multi_hot", "count"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'TF1';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelDropdown1.innerHTML = 'output_mode';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelNumEntry1.innerHTML = "num_bins";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "mask_value";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "salt";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);


        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'StringLookup':
        var optionsList1 = ["int", "one_hot", "multi_hot", "count", "tf_idf"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'invert';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelTF2.innerHTML = 'pad_to_max_tokens';
        var labelElement12 = document.createElement("label");
        labelElement12.innerHTML = "True";
        labelElement12.style.padding = "10px";
        TF2.appendChild(labelElement12);
        var inputElement12 = document.createElement("input");
        inputElement12.id = "TF12";
        inputElement12.type = 'checkbox';
        inputElement12.style.padding = "10px";
        inputElement12.setAttribute("onclick", "document.getElementById(\"TF22\").checked = false;");
        TF2.appendChild(inputElement12);
        var labelElement22 = document.createElement("label");
        labelElement22.innerHTML = "False";
        labelElement22.style.padding = "10px";
        TF2.appendChild(labelElement22);
        var inputElement22 = document.createElement("input");
        inputElement22.id = "TF22";
        inputElement22.type = 'checkbox';
        inputElement22.style.padding = "10px";
        inputElement22.setAttribute("onclick", "document.getElementById(\"TF12\").checked = false;");
        TF2.appendChild(inputElement22);

        labelTF3.innerHTML = 'sparse';
        var labelElement13 = document.createElement("label");
        labelElement13.innerHTML = "True";
        labelElement13.style.padding = "10px";
        TF3.appendChild(labelElement13);
        var inputElement13 = document.createElement("input");
        inputElement13.id = "TF13";
        inputElement13.type = 'checkbox';
        inputElement13.style.padding = "10px";
        inputElement13.setAttribute("onclick", "document.getElementById(\"TF23\").checked = false;");
        TF3.appendChild(inputElement13);
        var labelElement23 = document.createElement("label");
        labelElement23.innerHTML = "False";
        labelElement23.style.padding = "10px";
        TF3.appendChild(labelElement23);
        var inputElement23 = document.createElement("input");
        inputElement23.id = "TF23";
        inputElement23.type = 'checkbox';
        inputElement23.style.padding = "10px";
        inputElement23.setAttribute("onclick", "document.getElementById(\"TF13\").checked = false;");
        TF3.appendChild(inputElement23);

        labelDropdown1.innerHTML = 'output_mode';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelTextEntry1.innerHTML = "mask_token";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelTextEntry2.innerHTML = "oov_token";
        var textEntryElement2 = document.createElement("input");
        textEntryElement2.id = "textEntry2";
        textEntryElement2.type = "text";
        textEntryElement2.style.height = "100%";
        textEntryElement2.style.width = "100%";
        textEntryElement2.style.backgroundColor = "#8094A6";
        textEntryElement2.style.margin = "0px 0px";
        textEntry2.appendChild(textEntryElement2);

        labelTextEntry3.innerHTML = "vocabulary";
        var textEntryElement3 = document.createElement("input");
        textEntryElement3.id = "textEntry3";
        textEntryElement3.type = "text";
        textEntryElement3.style.height = "100%";
        textEntryElement3.style.width = "100%";
        textEntryElement3.style.backgroundColor = "#8094A6";
        textEntryElement3.style.margin = "0px 0px";
        textEntry3.appendChild(textEntryElement3);

        labelTextEntry4.innerHTML = "idf_weights";
        var textEntryElement4 = document.createElement("input");
        textEntryElement4.id = "textEntry4";
        textEntryElement4.type = "text";
        textEntryElement4.style.height = "100%";
        textEntryElement4.style.width = "100%";
        textEntryElement4.style.backgroundColor = "#8094A6";
        textEntryElement4.style.margin = "0px 0px";
        textEntry4.appendChild(textEntryElement4);

        labelNumEntry1.innerHTML = "max_tokens";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "num_oov_indices";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'IntegerLookup':
    var optionsList1 = ["int", "one_hot", "multi_hot", "count", "tf_idf"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'invert';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelTF2.innerHTML = 'pad_to_max_tokens';
        var labelElement12 = document.createElement("label");
        labelElement12.innerHTML = "True";
        labelElement12.style.padding = "10px";
        TF2.appendChild(labelElement12);
        var inputElement12 = document.createElement("input");
        inputElement12.id = "TF12";
        inputElement12.type = 'checkbox';
        inputElement12.style.padding = "10px";
        inputElement12.setAttribute("onclick", "document.getElementById(\"TF22\").checked = false;");
        TF2.appendChild(inputElement12);
        var labelElement22 = document.createElement("label");
        labelElement22.innerHTML = "False";
        labelElement22.style.padding = "10px";
        TF2.appendChild(labelElement22);
        var inputElement22 = document.createElement("input");
        inputElement22.id = "TF22";
        inputElement22.type = 'checkbox';
        inputElement22.style.padding = "10px";
        inputElement22.setAttribute("onclick", "document.getElementById(\"TF12\").checked = false;");
        TF2.appendChild(inputElement22);

        labelTF3.innerHTML = 'sparse';
        var labelElement13 = document.createElement("label");
        labelElement13.innerHTML = "True";
        labelElement13.style.padding = "10px";
        TF3.appendChild(labelElement13);
        var inputElement13 = document.createElement("input");
        inputElement13.id = "TF13";
        inputElement13.type = 'checkbox';
        inputElement13.style.padding = "10px";
        inputElement13.setAttribute("onclick", "document.getElementById(\"TF23\").checked = false;");
        TF3.appendChild(inputElement13);
        var labelElement23 = document.createElement("label");
        labelElement23.innerHTML = "False";
        labelElement23.style.padding = "10px";
        TF3.appendChild(labelElement23);
        var inputElement23 = document.createElement("input");
        inputElement23.id = "TF23";
        inputElement23.type = 'checkbox';
        inputElement23.style.padding = "10px";
        inputElement23.setAttribute("onclick", "document.getElementById(\"TF13\").checked = false;");
        TF3.appendChild(inputElement23);

        labelDropdown1.innerHTML = 'output_mode';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelTextEntry1.innerHTML = "vocabulary";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelTextEntry2.innerHTML = "vocabulary_dtype";
        var textEntryElement2 = document.createElement("input");
        textEntryElement2.id = "textEntry2";
        textEntryElement2.type = "text";
        textEntryElement2.style.height = "100%";
        textEntryElement2.style.width = "100%";
        textEntryElement2.style.backgroundColor = "#8094A6";
        textEntryElement2.style.margin = "0px 0px";
        textEntry2.appendChild(textEntryElement2);

        labelTextEntry3.innerHTML = "idf_weights";
        var textEntryElement3 = document.createElement("input");
        textEntryElement3.id = "textEntry3";
        textEntryElement3.type = "text";
        textEntryElement3.style.height = "100%";
        textEntryElement3.style.width = "100%";
        textEntryElement3.style.backgroundColor = "#8094A6";
        textEntryElement3.style.margin = "0px 0px";
        textEntry3.appendChild(textEntryElement3);

        labelNumEntry1.innerHTML = "max_tokens";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "num_oov_indices";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "mask_token";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);
                        
        labelNumEntry4.innerHTML = "oov_token";
        var numEntryElement4 = document.createElement("input");
        numEntryElement4.id = "numEntry4";
        numEntryElement4.type = "number";
        numEntryElement4.style.height = "100%";
        numEntryElement4.style.width = "100%";
        numEntryElement4.style.backgroundColor = "#8094A6";
        numEntryElement4.style.margin = "0px 0px";
        numEntry4.appendChild(numEntryElement4);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Resizing':
        var optionsList1 = ["bilinear", "nearest", "bicubic", "area", "lanczos3", "lanczos5", "gaussian", "mitchellcubic"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'crop_to_aspect_ratio';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelDropdown1.innerHTML = 'interpolation';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);
  
        labelNumEntry1.innerHTML = "height";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);
        
        labelNumEntry2.innerHTML = "width";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Rescaling':    
        labelNumEntry1.innerHTML = "scale";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "offset";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'CenterCrop':
        labelNumEntry1.innerHTML = "height";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "width";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'RandomCrop':                    
        labelNumEntry1.innerHTML = "height";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "width";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "seed";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'RandomFlip':
        var optionsList1 = ["horizontal", "vertical", "horizontal_and_vertical"];
        optionsListLength1 = optionsList1.length;

        labelDropdown1.innerHTML = 'mode';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);
        
        labelNumEntry1.innerHTML = "seed";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'RandomTranslation':
        var optionsList1 = ["constant", "reflect", "wrap", "nearest"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["nearest", "bilinear"];
        optionsListLength2 = optionsList2.length;

        labelDropdown1.innerHTML = 'fill_mode';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'interpolation';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength2; i++) {
        var opt2 = document.createElement('option');
        opt2.value = optionsList2[i];
        opt2.innerHTML = optionsList2[i];
        selectElement2.appendChild(opt2);
        };

        dropdown2.appendChild(selectElement2);
        
        labelNumEntry1.innerHTML = "height_factor";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "width_factor";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "seed";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);

        labelNumEntry4.innerHTML = "fill_value";
        var numEntryElement4 = document.createElement("input");
        numEntryElement4.id = "numEntry4";
        numEntryElement4.type = "number";
        numEntryElement4.style.height = "100%";
        numEntryElement4.style.width = "100%";
        numEntryElement4.style.backgroundColor = "#8094A6";
        numEntryElement4.style.margin = "0px 0px";
        numEntry4.appendChild(numEntryElement4);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'RandomRotation':
        var optionsList1 = ["constant", "reflect", "wrap", "nearest"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["nearest", "bilinear"];
        optionsListLength2 = optionsList2.length;

        labelDropdown1.innerHTML = 'fill_mode';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'interpolation';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength2; i++) {
        var opt2 = document.createElement('option');
        opt2.value = optionsList2[i];
        opt2.innerHTML = optionsList2[i];
        selectElement2.appendChild(opt2);
        };

        dropdown2.appendChild(selectElement2);

        labelTextEntry1.innerHTML = "factor";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);
        
        
        labelNumEntry1.innerHTML = "seed";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "fill_value";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'RandomZoom':
    var optionsList1 = ["constant", "reflect", "wrap", "nearest"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["nearest", "bilinear"];
        optionsListLength2 = optionsList2.length;

        labelDropdown1.innerHTML = 'fill_mode';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'interpolation';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength2; i++) {
        var opt2 = document.createElement('option');
        opt2.value = optionsList2[i];
        opt2.innerHTML = optionsList2[i];
        selectElement2.appendChild(opt2);
        };

        dropdown2.appendChild(selectElement2);
        
        labelNumEntry1.innerHTML = "seed";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "fill_value";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelMultiNumEntry1.innerHTML = "height_factor";
        var tripletGridDiv11 = document.createElement("div");
        tripletGridDiv11.style.gridColumn = "1 / 3";
        tripletGridDiv11.style.gridRow = "1 / 2";
        var multiNumEntryElement11 = document.createElement("input");
        multiNumEntryElement11.id = "multiNumEntry11";
        multiNumEntryElement11.type = "number";
        multiNumEntryElement11.style.height = "18%";
        multiNumEntryElement11.style.width = "100%";
        multiNumEntryElement11.style.backgroundColor = "#8094A6";
        multiNumEntryElement11.style.margin = "0px 0px";
        tripletGridDiv11.appendChild(multiNumEntryElement11);
        multiNumEntry1.appendChild(tripletGridDiv11);
        var tripletGridDiv21 = document.createElement("div");
        tripletGridDiv21.style.gridColumn = "3 / 5";
        tripletGridDiv21.style.gridRow = "1 / 2";
        var multiNumEntryElement21 = document.createElement("input");
        multiNumEntryElement21.id = "multiNumEntry21";
        multiNumEntryElement21.type = "number";
        multiNumEntryElement21.style.height = "18%";
        multiNumEntryElement21.style.width = "100%";
        multiNumEntryElement21.style.backgroundColor = "#8094A6";
        multiNumEntryElement21.style.margin = "0px 0px";
        tripletGridDiv21.appendChild(multiNumEntryElement21);
        multiNumEntry1.appendChild(tripletGridDiv21);
        var tripletGridDiv31 = document.createElement("div");
        tripletGridDiv31.style.gridColumn = "5 / 7";
        tripletGridDiv31.style.gridRow = "1 / 2";
        var multiNumEntryElement31 = document.createElement("input");
        multiNumEntryElement31.id = "multiNumEntry31";
        multiNumEntryElement31.type = "number";
        multiNumEntryElement31.style.height = "18%";
        multiNumEntryElement31.style.width = "100%";
        multiNumEntryElement31.style.backgroundColor = "#8094A6";
        multiNumEntryElement31.style.margin = "0px 0px";
        tripletGridDiv31.appendChild(multiNumEntryElement31);
        multiNumEntry1.appendChild(tripletGridDiv31);

        labelMultiNumEntry2.innerHTML = "width_factor";
        var tripletGridDiv12 = document.createElement("div");
        tripletGridDiv12.style.gridColumn = "1 / 3";
        tripletGridDiv12.style.gridRow = "1 / 2";
        var multiNumEntryElement12 = document.createElement("input");
        multiNumEntryElement12.id = "multiNumEntry12";
        multiNumEntryElement12.type = "number";
        multiNumEntryElement12.style.height = "18%";
        multiNumEntryElement12.style.width = "100%";
        multiNumEntryElement12.style.backgroundColor = "#8094A6";
        multiNumEntryElement12.style.margin = "0px 0px";
        tripletGridDiv12.appendChild(multiNumEntryElement12);
        multiNumEntry2.appendChild(tripletGridDiv12);
        var tripletGridDiv22 = document.createElement("div");
        tripletGridDiv22.style.gridColumn = "3 / 5";
        tripletGridDiv22.style.gridRow = "1 / 2";
        var multiNumEntryElement22 = document.createElement("input");
        multiNumEntryElement22.id = "multiNumEntry22";
        multiNumEntryElement22.type = "number";
        multiNumEntryElement22.style.height = "18%";
        multiNumEntryElement22.style.width = "100%";
        multiNumEntryElement22.style.backgroundColor = "#8094A6";
        multiNumEntryElement22.style.margin = "0px 0px";
        tripletGridDiv22.appendChild(multiNumEntryElement22);
        multiNumEntry2.appendChild(tripletGridDiv22);
        var tripletGridDiv32 = document.createElement("div");
        tripletGridDiv32.style.gridColumn = "5 / 7";
        tripletGridDiv32.style.gridRow = "1 / 2";
        var multiNumEntryElement32 = document.createElement("input");
        multiNumEntryElement32.id = "multiNumEntry32";
        multiNumEntryElement32.type = "number";
        multiNumEntryElement32.style.height = "18%";
        multiNumEntryElement32.style.width = "100%";
        multiNumEntryElement32.style.backgroundColor = "#8094A6";
        multiNumEntryElement32.style.margin = "0px 0px";
        tripletGridDiv32.appendChild(multiNumEntryElement32);
        multiNumEntry2.appendChild(tripletGridDiv32);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'RandomHeight':
        var optionsList1 = ["bilinear", "nearest", "bicubic", "area", "lanczos3", "lanczos5", "gaussian", "mitchellcubic"];
        optionsListLength1 = optionsList1.length;

        labelDropdown1.innerHTML = 'interpolation';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelNumEntry1.innerHTML = "factor";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "seed";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'RandomWidth':
        var optionsList1 = ["bilinear", "nearest", "bicubic", "area", "lanczos3", "lanczos5", "gaussian", "mitchellcubic"];
        optionsListLength1 = optionsList1.length;

        labelDropdown1.innerHTML = 'interpolation';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelNumEntry1.innerHTML = "factor";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "seed";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'RandomContrast':
        labelNumEntry1.innerHTML = "factor";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "seed";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'BatchNormalization':
        var optionsList1 = ["Zeros", "Constant", "GlorotUniform", "HeNormal", "HeUniform:", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotNormal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["Ones", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["Zeros", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotNormal"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["Ones", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength8 = optionsList8.length;

        labelTF1.innerHTML = 'center';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelTF2.innerHTML = 'scale';
        var labelElement12 = document.createElement("label");
        labelElement12.innerHTML = "True";
        labelElement12.style.padding = "10px";
        TF2.appendChild(labelElement12);
        var inputElement12 = document.createElement("input");
        inputElement12.id = "TF12";
        inputElement12.type = 'checkbox';
        inputElement12.style.padding = "10px";
        inputElement12.setAttribute("onclick", "document.getElementById(\"TF22\").checked = false;");
        TF2.appendChild(inputElement12);
        var labelElement22 = document.createElement("label");
        labelElement22.innerHTML = "False";
        labelElement22.style.padding = "10px";
        TF2.appendChild(labelElement22);
        var inputElement22 = document.createElement("input");
        inputElement22.id = "TF22";
        inputElement22.type = 'checkbox';
        inputElement22.style.padding = "10px";
        inputElement22.setAttribute("onclick", "document.getElementById(\"TF12\").checked = false;");
        TF2.appendChild(inputElement22);

        labelDropdown1.innerHTML = 'beta_initializer';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'gamma_initializer';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength2; i++) {
        var opt2 = document.createElement('option');
        opt2.value = optionsList2[i];
        opt2.innerHTML = optionsList2[i];
        selectElement2.appendChild(opt2);
        };

        dropdown2.appendChild(selectElement2);

        labelDropdown3.innerHTML = 'moving_mean_initializer';
        var selectElement3 = document.createElement("select");
        selectElement3.id = "dropdown3";
        selectElement3.style.height = "28px";
        selectElement3.style.width = "100%";
        selectElement3.style.backgroundColor = "#8094A6";
        selectElement3.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength3; i++) {
        var opt3 = document.createElement('option');
        opt3.value = optionsList3[i];
        opt3.innerHTML = optionsList3[i];
        selectElement3.appendChild(opt3);
        };

        dropdown3.appendChild(selectElement3);

        labelDropdown4.innerHTML = 'moving_variance_initializer';
        var selectElement4 = document.createElement("select");
        selectElement4.id = "dropdown4";
        selectElement4.style.height = "28px";
        selectElement4.style.width = "100%";
        selectElement4.style.backgroundColor = "#8094A6";
        selectElement4.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
        var opt4 = document.createElement('option');
        opt4.value = optionsList4[i];
        opt4.innerHTML = optionsList4[i];
        selectElement4.appendChild(opt4);
        };

        dropdown4.appendChild(selectElement4);

        labelTextEntry1.innerHTML = "axis";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelNumEntry1.innerHTML = "momentum";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "epsilon";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelExtra1.innerHTML = 'beta_regularizer';
        labelExtra1.id = "labelDropdown5";
        var selectElement5 = document.createElement("select");
        selectElement5.id = "dropdown5";
        selectElement5.style.height = "28px";
        selectElement5.style.width = "100%";
        selectElement5.style.backgroundColor = "#8094A6";
        selectElement5.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength5; i++) {
            var opt5 = document.createElement('option');
            opt5.value = optionsList5[i];
            opt5.innerHTML = optionsList5[i];
            selectElement5.appendChild(opt5);
        };

        extra1.appendChild(selectElement5);

        labelExtra2.innerHTML = 'gamma_regularizer';
        labelExtra2.id = "labelDropdown6";
        var selectElement6 = document.createElement("select");
        selectElement6.id = "dropdown6";
        selectElement6.style.height = "28px";
        selectElement6.style.width = "100%";
        selectElement6.style.backgroundColor = "#8094A6";
        selectElement6.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength6; i++) {
            var opt6 = document.createElement('option');
            opt6.value = optionsList6[i];
            opt6.innerHTML = optionsList6[i];
            selectElement6.appendChild(opt6);
        };

        extra2.appendChild(selectElement6);

        labelExtra3.innerHTML = 'beta_constraint';
        labelExtra3.id = "labelDropdown7";
        var selectElement7 = document.createElement("select");
        selectElement7.id = "dropdown7";
        selectElement7.style.height = "28px";
        selectElement7.style.width = "100%";
        selectElement7.style.backgroundColor = "#8094A6";
        selectElement7.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength7; i++) {
            var opt7 = document.createElement('option');
            opt7.value = optionsList7[i];
            opt7.innerHTML = optionsList7[i];
            selectElement7.appendChild(opt7);
        };

        extra3.appendChild(selectElement7);

        labelExtra4.innerHTML = 'beta_constraint';
        labelExtra4.id = "labelDropdown8";
        var selectElement8 = document.createElement("select");
        selectElement8.id = "dropdown8";
        selectElement8.style.height = "28px";
        selectElement8.style.width = "100%";
        selectElement8.style.backgroundColor = "#8094A6";
        selectElement8.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength8; i++) {
            var opt8 = document.createElement('option');
            opt8.value = optionsList7[i];
            opt8.innerHTML = optionsList7[i];
            selectElement8.appendChild(opt8);
        };

        extra4.appendChild(selectElement8);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'LayerNormalization':
        var optionsList1 = ["Zeros", "Constant", "GlorotUniform", "HeNormal", "HeUniform:", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotNormal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["Ones", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength6 = optionsList6.length;

        labelTF1.innerHTML = 'center';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelTF2.innerHTML = 'scale';
        var labelElement12 = document.createElement("label");
        labelElement12.innerHTML = "True";
        labelElement12.style.padding = "10px";
        TF2.appendChild(labelElement12);
        var inputElement12 = document.createElement("input");
        inputElement12.id = "TF12";
        inputElement12.type = 'checkbox';
        inputElement12.style.padding = "10px";
        inputElement12.setAttribute("onclick", "document.getElementById(\"TF22\").checked = false;");
        TF2.appendChild(inputElement12);
        var labelElement22 = document.createElement("label");
        labelElement22.innerHTML = "False";
        labelElement22.style.padding = "10px";
        TF2.appendChild(labelElement22);
        var inputElement22 = document.createElement("input");
        inputElement22.id = "TF22";
        inputElement22.type = 'checkbox';
        inputElement22.style.padding = "10px";
        inputElement22.setAttribute("onclick", "document.getElementById(\"TF12\").checked = false;");
        TF2.appendChild(inputElement22);

        labelDropdown1.innerHTML = 'beta_initializer';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'gamma_initializer';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength2; i++) {
        var opt2 = document.createElement('option');
        opt2.value = optionsList2[i];
        opt2.innerHTML = optionsList2[i];
        selectElement2.appendChild(opt2);
        };

        dropdown2.appendChild(selectElement2);

        labelDropdown3.innerHTML = 'beta_regularizer';
        var selectElement3 = document.createElement("select");
        selectElement3.id = "dropdown3";
        selectElement3.style.height = "28px";
        selectElement3.style.width = "100%";
        selectElement3.style.backgroundColor = "#8094A6";
        selectElement3.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength3; i++) {
        var opt3 = document.createElement('option');
        opt3.value = optionsList3[i];
        opt3.innerHTML = optionsList3[i];
        selectElement3.appendChild(opt3);
        };

        dropdown3.appendChild(selectElement3);

        labelDropdown4.innerHTML = 'gamma_regularizer';
        var selectElement4 = document.createElement("select");
        selectElement4.id = "dropdown4";
        selectElement4.style.height = "28px";
        selectElement4.style.width = "100%";
        selectElement4.style.backgroundColor = "#8094A6";
        selectElement4.style.margin = "0px 0px";
        
        for (var i = 0; i < optionsListLength1; i++) {
        var opt4 = document.createElement('option');
        opt4.value = optionsList4[i];
        opt4.innerHTML = optionsList4[i];
        selectElement4.appendChild(opt4);
        };
        
        dropdown4.appendChild(selectElement4);

        labelTextEntry1.innerHTML = "axis";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelTextEntry2.innerHTML = "beta_regularizer";
        var textEntryElement2 = document.createElement("input");
        textEntryElement2.id = "textEntry2";
        textEntryElement2.type = "text";
        textEntryElement2.style.height = "100%";
        textEntryElement2.style.width = "100%";
        textEntryElement2.style.backgroundColor = "#8094A6";
        textEntryElement2.style.margin = "0px 0px";
        textEntry2.appendChild(textEntryElement2);

        labelTextEntry3.innerHTML = "gamma_regularizer";
        var textEntryElement3 = document.createElement("input");
        textEntryElement3.id = "textEntry3";
        textEntryElement3.type = "text";
        textEntryElement3.style.height = "100%";
        textEntryElement3.style.width = "100%";
        textEntryElement3.style.backgroundColor = "#8094A6";
        textEntryElement3.style.margin = "0px 0px";
        textEntry3.appendChild(textEntryElement3);

        labelTextEntry4.innerHTML = "beta_constraint";
        var textEntryElement4 = document.createElement("input");
        textEntryElement4.id = "textEntry4";
        textEntryElement4.type = "text";
        textEntryElement4.style.height = "100%";
        textEntryElement4.style.width = "100%";
        textEntryElement4.style.backgroundColor = "#8094A6";
        textEntryElement4.style.margin = "0px 0px";
        textEntry4.appendChild(textEntryElement4);
        
        labelNumEntry1.innerHTML = "epsilon";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelExtra1.innerHTML = 'beta_constraint';
        labelExtra1.id = "labelDropdown5";
        var selectElement5 = document.createElement("select");
        selectElement5.id = "dropdown5";
        selectElement5.style.height = "28px";
        selectElement5.style.width = "100%";
        selectElement5.style.backgroundColor = "#8094A6";
        selectElement5.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength5; i++) {
            var opt5 = document.createElement('option');
            opt5.value = optionsList5[i];
            opt5.innerHTML = optionsList5[i];
            selectElement5.appendChild(opt5);
        };

        extra1.appendChild(selectElement5);

        labelExtra2.innerHTML = 'gamma_constraint';
        labelExtra2.id = "labelDropdown6";
        var selectElement6 = document.createElement("select");
        selectElement6.id = "dropdown6";
        selectElement6.style.height = "28px";
        selectElement6.style.width = "100%";
        selectElement6.style.backgroundColor = "#8094A6";
        selectElement6.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength6; i++) {
            var opt6 = document.createElement('option');
            opt6.value = optionsList6[i];
            opt6.innerHTML = optionsList6[i];
            selectElement6.appendChild(opt6);
        };

        extra2.appendChild(selectElement6);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'UnitNormalization':
        labelTextEntry1.innerHTML = "axis";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'MultiHeadAttention':
        var optionsList1 = ["GlorotNormal", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["Zeros", "GlorotNormal", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Constant"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength7 = optionsList7.length;

        labelTF1.innerHTML = 'use_bias';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelDropdown1.innerHTML = 'kernel_initializer';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'bias_initializer';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";
        
        for (var i = 0; i < optionsListLength2; i++) {
        var opt2 = document.createElement('option');
        opt2.value = optionsList2[i];
        opt2.innerHTML = optionsList2[i];
        selectElement2.appendChild(opt2);
        };
        
        dropdown2.appendChild(selectElement2);

        labelDropdown3.innerHTML = 'kernel_regularizer';
        var selectElement3 = document.createElement("select");
        selectElement3.id = "dropdown3";
        selectElement3.style.height = "28px";
        selectElement3.style.width = "100%";
        selectElement3.style.backgroundColor = "#8094A6";
        selectElement3.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength3; i++) {
        var opt3 = document.createElement('option');
        opt3.value = optionsList3[i];
        opt3.innerHTML = optionsList3[i];
        selectElement3.appendChild(opt3);
        };

        dropdown3.appendChild(selectElement3);

        labelDropdown4.innerHTML = 'bias_regularizer';
        var selectElement4 = document.createElement("select");
        selectElement4.id = "dropdown4";
        selectElement4.style.height = "28px";
        selectElement4.style.width = "100%";
        selectElement4.style.backgroundColor = "#8094A6";
        selectElement4.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
        var opt4 = document.createElement('option');
        opt4.value = optionsList4[i];
        opt4.innerHTML = optionsList4[i];
        selectElement4.appendChild(opt4);
        };

        dropdown4.appendChild(selectElement4);

        labelTextEntry1.innerHTML = "output_shape";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelTextEntry2.innerHTML = "attention_axes";
        var textEntryElement2 = document.createElement("input");
        textEntryElement2.id = "textEntry2";
        textEntryElement2.type = "text";
        textEntryElement2.style.height = "100%";
        textEntryElement2.style.width = "100%";
        textEntryElement2.style.backgroundColor = "#8094A6";
        textEntryElement2.style.margin = "0px 0px";
        textEntry2.appendChild(textEntryElement2);

        labelNumEntry1.innerHTML = "num_heads";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "key_dim";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "value_dim";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);

        labelNumEntry4.innerHTML = "dropout";
        var numEntryElement4 = document.createElement("input");
        numEntryElement4.id = "numEntry4";
        numEntryElement4.type = "number";
        numEntryElement4.style.height = "100%";
        numEntryElement4.style.width = "100%";
        numEntryElement4.style.backgroundColor = "#8094A6";
        numEntryElement4.style.margin = "0px 0px";
        numEntry4.appendChild(numEntryElement4);

        labelExtra1.innerHTML = 'activity_regularizer';
        labelExtra1.id = "labelDropdown5";
        var selectElement5 = document.createElement("select");
        selectElement5.id = "dropdown5";
        selectElement5.style.height = "28px";
        selectElement5.style.width = "100%";
        selectElement5.style.backgroundColor = "#8094A6";
        selectElement5.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength5; i++) {
            var opt5 = document.createElement('option');
            opt5.value = optionsList5[i];
            opt5.innerHTML = optionsList5[i];
            selectElement5.appendChild(opt5);
        };

        extra1.appendChild(selectElement5);

        labelExtra2.innerHTML = 'kernel_constraint';
        labelExtra2.id = "labelDropdown6";
        var selectElement6 = document.createElement("select");
        selectElement6.id = "dropdown6";
        selectElement6.style.height = "28px";
        selectElement6.style.width = "100%";
        selectElement6.style.backgroundColor = "#8094A6";
        selectElement6.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength6; i++) {
            var opt6 = document.createElement('option');
            opt6.value = optionsList6[i];
            opt6.innerHTML = optionsList6[i];
            selectElement6.appendChild(opt6);
        };

        extra2.appendChild(selectElement6);

        labelExtra3.innerHTML = 'bias_constraint';
        labelExtra3.id = "labelDropdown7";
        var selectElement7 = document.createElement("select");
        selectElement7.id = "dropdown7";
        selectElement7.style.height = "28px";
        selectElement7.style.width = "100%";
        selectElement7.style.backgroundColor = "#8094A6";
        selectElement7.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength7; i++) {
            var opt7 = document.createElement('option');
            opt7.value = optionsList7[i];
            opt7.innerHTML = optionsList7[i];
            selectElement7.appendChild(opt7);
        };

        extra3.appendChild(selectElement7);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Attention':
        var optionsList1 = ["dot", "concat"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'use_scale';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelDropdown1.innerHTML = 'score_mode';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'AdditiveAttention':
        labelTF1.innerHTML = 'use_scale';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Concatenate':
        labelTextEntry1.innerHTML = "axis";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelTextEntry2.innerHTML = "layers";
        var textEntryElement2 = document.createElement("input");
        textEntryElement2.id = "textEntry1";
        textEntryElement2.type = "text";
        textEntryElement2.style.height = "100%";
        textEntryElement2.style.width = "100%";
        textEntryElement2.style.backgroundColor = "#8094A6";
        textEntryElement2.style.margin = "0px 0px";
        textEntry2.appendChild(textEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Average':
        labelTextEntry1.innerHTML = "layers";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Maximum':
        labelTextEntry1.innerHTML = "layers";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Minimum':
        labelTextEntry1.innerHTML = "layers";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Add':
        labelTextEntry1.innerHTML = "layers";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Subtract':
        labelTextEntry1.innerHTML = "layers";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'Dot':
        labelTF1.innerHTML = 'normalize';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        TF1.appendChild(inputElement21)
        
        labelTextEntry1.innerHTML = "axes";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelTextEntry2.innerHTML = "layers";
        var textEntryElement2 = document.createElement("input");
        textEntryElement2.id = "textEntry2";
        textEntryElement2.type = "text";
        textEntryElement2.style.height = "100%";
        textEntryElement2.style.width = "100%";
        textEntryElement2.style.backgroundColor = "#8094A6";
        textEntryElement2.style.margin = "0px 0px";
        textEntry2.appendChild(textEntryElement2);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'UpSampling1D':
        labelNumEntry1.innerHTML = "size";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'UpSampling2D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["area", "bicubic", "bilinear", "gaussian", "lanczos3", "lanczos5", "mitchellcubic", "nearest"];
        optionsListLength2 = optionsList2.length;

        labelDropdown1.innerHTML = 'data_format';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'interpolation';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength2; i++) {
        var opt2 = document.createElement('option');
        opt2.value = optionsList2[i];
        opt2.innerHTML = optionsList2[i];
        selectElement2.appendChild(opt2);
        };

        dropdown2.appendChild(selectElement2);

        labelMultiNumEntry1.innerHTML = "size";
        var tupleGridDiv11 = document.createElement("div");
        tupleGridDiv11.style.gridColumn = "1 / 4";
        tupleGridDiv11.style.gridRow = "1 / 2";
        var multiNumEntryElement11 = document.createElement("input");
        multiNumEntryElement11.id = "multiNumEntry11";
        multiNumEntryElement11.type = "number";
        multiNumEntryElement11.style.height = "18%";
        multiNumEntryElement11.style.width = "100%";
        multiNumEntryElement11.style.backgroundColor = "#8094A6";
        multiNumEntryElement11.style.margin = "0px 0px";
        tupleGridDiv11.appendChild(multiNumEntryElement11);
        multiNumEntry1.appendChild(tupleGridDiv11);
        var tupleGridDiv21 = document.createElement("div");
        tupleGridDiv21.style.gridColumn = "4 / 7";
        tupleGridDiv21.style.gridRow = "1 / 2";
        var multiNumEntryElement21 = document.createElement("input");
        multiNumEntryElement21.id = "multiNumEntry21";
        multiNumEntryElement21.type = "number";
        multiNumEntryElement21.style.height = "18%";
        multiNumEntryElement21.style.width = "100%";
        multiNumEntryElement21.style.backgroundColor = "#8094A6";
        multiNumEntryElement21.style.margin = "0px 0px";
        tupleGridDiv21.appendChild(multiNumEntryElement21);
        multiNumEntry1.appendChild(tupleGridDiv21);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'UpSampling3D':
        var optionsList1 = ["None", "channels_last ", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelDropdown1.innerHTML = 'data_format';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelMultiNumEntry1.innerHTML = "size";
        var tripletGridDiv11 = document.createElement("div");
        tripletGridDiv11.style.gridColumn = "1 / 3";
        tripletGridDiv11.style.gridRow = "1 / 2";
        var multiNumEntryElement11 = document.createElement("input");
        multiNumEntryElement11.id = "multiNumEntry11";
        multiNumEntryElement11.type = "number";
        multiNumEntryElement11.style.height = "18%";
        multiNumEntryElement11.style.width = "100%";
        multiNumEntryElement11.style.backgroundColor = "#8094A6";
        multiNumEntryElement11.style.margin = "0px 0px";
        tripletGridDiv11.appendChild(multiNumEntryElement11);
        multiNumEntry1.appendChild(tripletGridDiv11);
        var tripletGridDiv21 = document.createElement("div");
        tripletGridDiv21.style.gridColumn = "3 / 5";
        tripletGridDiv21.style.gridRow = "1 / 2";
        var multiNumEntryElement21 = document.createElement("input");
        multiNumEntryElement21.id = "multiNumEntry21";
        multiNumEntryElement21.type = "number";
        multiNumEntryElement21.style.height = "18%";
        multiNumEntryElement21.style.width = "100%";
        multiNumEntryElement21.style.backgroundColor = "#8094A6";
        multiNumEntryElement21.style.margin = "0px 0px";
        tripletGridDiv21.appendChild(multiNumEntryElement21);
        multiNumEntry1.appendChild(tripletGridDiv21);
        var tripletGridDiv31 = document.createElement("div");
        tripletGridDiv31.style.gridColumn = "5 / 7";
        tripletGridDiv31.style.gridRow = "1 / 2";
        var multiNumEntryElement31 = document.createElement("input");
        multiNumEntryElement31.id = "multiNumEntry31";
        multiNumEntryElement31.type = "number";
        multiNumEntryElement31.style.height = "18%";
        multiNumEntryElement31.style.width = "100%";
        multiNumEntryElement31.style.backgroundColor = "#8094A6";
        multiNumEntryElement31.style.margin = "0px 0px";
        tripletGridDiv31.appendChild(multiNumEntryElement31);
        multiNumEntry1.appendChild(tripletGridDiv31);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'ZeroPadding1D':
        labelNumEntry1.innerHTML = "padding";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'ZeroPadding2D':
        var optionsList1 = ["None", "channels_last ", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelDropdown1.innerHTML = 'data_format';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelTextEntry1.innerHTML = "padding";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);
        
        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'ZeroPadding3D':
        var optionsList1 = ["None", "channels_last ", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelDropdown1.innerHTML = 'data_format';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelTextEntry1.innerHTML = "padding";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'LocallyConnected1D':
        var optionsList1 = ["valid"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last ", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["GlorotNormal", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["Zeros", "GlorotNormal", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Constant"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength8 = optionsList8.length;
        var optionsList9 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength9 = optionsList9.length;
        var optionsList10 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength10 = optionsList10.length;
        var optionsList11 = ["1", "2", "3.1"];
        optionsListLength11 = optionsList11.length;

        labelTF1.innerHTML = 'use_bias';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelDropdown1.innerHTML = 'padding';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'data_format';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength2; i++) {
            var opt2 = document.createElement('option');
            opt2.value = optionsList2[i];
            opt2.innerHTML = optionsList2[i];
            selectElement2.appendChild(opt2);
        };

        dropdown2.appendChild(selectElement2);

        labelDropdown3.innerHTML = 'activation';
        var selectElement3 = document.createElement("select");
        selectElement3.id = "dropdown3";
        selectElement3.style.height = "28px";
        selectElement3.style.width = "100%";
        selectElement3.style.backgroundColor = "#8094A6";
        selectElement3.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength3; i++) {
        var opt3 = document.createElement('option');
        opt3.value = optionsList3[i];
        opt3.innerHTML = optionsList3[i];
        selectElement3.appendChild(opt3);
        };

        dropdown3.appendChild(selectElement3);

        labelDropdown4.innerHTML = 'kernel_initializer';
        var selectElement4 = document.createElement("select");
        selectElement4.id = "dropdown4";
        selectElement4.style.height = "28px";
        selectElement4.style.width = "100%";
        selectElement4.style.backgroundColor = "#8094A6";
        selectElement4.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength4; i++) {
        var opt4 = document.createElement('option');
        opt4.value = optionsList4[i];
        opt4.innerHTML = optionsList4[i];
        selectElement4.appendChild(opt4);
        };

        dropdown4.appendChild(selectElement4);
        
        labelNumEntry1.innerHTML = "filters";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "kernel_size";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "strides";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);

        labelSlider1.innerHTML = 'kernel_constraint';
        labelSlider1.id = "labelDropdown9";
        var selectElement9 = document.createElement("select");
        selectElement9.id = "dropdown9";
        selectElement9.style.height = "28px";
        selectElement9.style.width = "100%";
        selectElement9.style.backgroundColor = "#8094A6";
        selectElement9.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength9; i++) {
            var opt9 = document.createElement('option');
            opt9.value = optionsList9[i];
            opt9.innerHTML = optionsList9[i];
            selectElement9.appendChild(opt9);
        };

        slider1.appendChild(selectElement9);

        labelSlider2.innerHTML = 'bias_constraint';
        labelSlider2.id = "labelDropdown10";
        var selectElement10 = document.createElement("select");
        selectElement10.id = "dropdown10";
        selectElement10.style.height = "28px";
        selectElement10.style.width = "100%";
        selectElement10.style.backgroundColor = "#8094A6";
        selectElement10.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength10; i++) {
            var opt10 = document.createElement('option');
            opt10.value = optionsList10[i];
            opt10.innerHTML = optionsList10[i];
            selectElement10.appendChild(opt10);
        };

        slider2.appendChild(selectElement10);

        labelSlider3.innerHTML = 'implementation';
        labelSlider3.id = "labelDropdown11";
        var selectElement11 = document.createElement("select");
        selectElement11.id = "dropdown11";
        selectElement11.style.height = "28px";
        selectElement11.style.width = "100%";
        selectElement11.style.backgroundColor = "#8094A6";
        selectElement11.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength11; i++) {
            var opt11 = document.createElement('option');
            opt11.value = optionsList11[i];
            opt11.innerHTML = optionsList11[i];
            selectElement11.appendChild(opt11);
        };

        slider3.appendChild(selectElement11);

        labelExtra1.innerHTML = 'bias_initializer';
        labelExtra1.id = "labelDropdown5";
        var selectElement5 = document.createElement("select");
        selectElement5.id = "dropdown5";
        selectElement5.style.height = "28px";
        selectElement5.style.width = "100%";
        selectElement5.style.backgroundColor = "#8094A6";
        selectElement5.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength5; i++) {
            var opt5 = document.createElement('option');
            opt5.value = optionsList5[i];
            opt5.innerHTML = optionsList5[i];
            selectElement5.appendChild(opt5);
        };

        extra1.appendChild(selectElement5);

        labelExtra2.innerHTML = 'kernel_regularizer';
        labelExtra2.id = "labelDropdown6";
        var selectElement6 = document.createElement("select");
        selectElement6.id = "dropdown6";
        selectElement6.style.height = "28px";
        selectElement6.style.width = "100%";
        selectElement6.style.backgroundColor = "#8094A6";
        selectElement6.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength6; i++) {
            var opt6 = document.createElement('option');
            opt6.value = optionsList6[i];
            opt6.innerHTML = optionsList6[i];
            selectElement6.appendChild(opt6);
        };

        extra2.appendChild(selectElement6);

        labelExtra3.innerHTML = 'bias_regularizer';
        labelExtra3.id = "labelDropdown7";
        var selectElement7 = document.createElement("select");
        selectElement7.id = "dropdown7";
        selectElement7.style.height = "28px";
        selectElement7.style.width = "100%";
        selectElement7.style.backgroundColor = "#8094A6";
        selectElement7.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength7; i++) {
            var opt7 = document.createElement('option');
            opt7.value = optionsList7[i];
            opt7.innerHTML = optionsList7[i];
            selectElement7.appendChild(opt7);
        };

        extra3.appendChild(selectElement7);

        labelExtra4.innerHTML = 'activity_regularizer';
        labelExtra4.id = "labelDropdown8";
        var selectElement8 = document.createElement("select");
        selectElement8.id = "dropdown8";
        selectElement8.style.height = "28px";
        selectElement8.style.width = "100%";
        selectElement8.style.backgroundColor = "#8094A6";
        selectElement8.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength8; i++) {
            var opt8 = document.createElement('option');
            opt8.value = optionsList8[i];
            opt8.innerHTML = optionsList8[i];
            selectElement8.appendChild(opt8);
        };

        extra4.appendChild(selectElement8);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    case 'LocallyConnected2D':
        var optionsList1 = ["valid"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last ", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["GlorotNormal", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["Zeros", "GlorotNormal", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Constant"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength8 = optionsList8.length;
        var optionsList9 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength9 = optionsList9.length;
        var optionsList10 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength10 = optionsList10.length;
        var optionsList11 = ["1", "2", "3.1"];
        optionsListLength11 = optionsList11.length;

        labelTF1.innerHTML = 'use_bias';
        var labelElement11 = document.createElement("label");
        labelElement11.innerHTML = "True";
        labelElement11.style.padding = "10px";
        TF1.appendChild(labelElement11);
        var inputElement11 = document.createElement("input"); 
        inputElement11.id = "TF11";
        inputElement11.type = 'checkbox';
        inputElement11.style.padding = "10px";
        inputElement11.setAttribute("onclick", "document.getElementById(\"TF21\").checked = false;");
        TF1.appendChild(inputElement11);
        var labelElement21 = document.createElement("label");
        labelElement21.innerHTML = "False";
        labelElement21.style.padding = "10px";
        TF1.appendChild(labelElement21);
        var inputElement21 = document.createElement("input");
        inputElement21.id = "TF21";
        inputElement21.type = 'checkbox';
        inputElement21.style.padding = "10px";
        inputElement21.setAttribute("onclick", "document.getElementById(\"TF11\").checked = false;");
        TF1.appendChild(inputElement21);

        labelDropdown1.innerHTML = 'padding';
        var selectElement1 = document.createElement("select");
        selectElement1.id = "dropdown1";
        selectElement1.style.height = "28px";
        selectElement1.style.width = "100%";
        selectElement1.style.backgroundColor = "#8094A6";
        selectElement1.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength1; i++) {
            var opt1 = document.createElement('option');
            opt1.value = optionsList1[i];
            opt1.innerHTML = optionsList1[i];
            selectElement1.appendChild(opt1);
        };

        dropdown1.appendChild(selectElement1);

        labelDropdown2.innerHTML = 'data_format';
        var selectElement2 = document.createElement("select");
        selectElement2.id = "dropdown2";
        selectElement2.style.height = "28px";
        selectElement2.style.width = "100%";
        selectElement2.style.backgroundColor = "#8094A6";
        selectElement2.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength2; i++) {
            var opt2 = document.createElement('option');
            opt2.value = optionsList2[i];
            opt2.innerHTML = optionsList2[i];
            selectElement2.appendChild(opt2);
        };

        dropdown2.appendChild(selectElement2);

        labelDropdown3.innerHTML = 'activation';
        var selectElement3 = document.createElement("select");
        selectElement3.id = "dropdown3";
        selectElement3.style.height = "28px";
        selectElement3.style.width = "100%";
        selectElement3.style.backgroundColor = "#8094A6";
        selectElement3.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength3; i++) {
        var opt3 = document.createElement('option');
        opt3.value = optionsList3[i];
        opt3.innerHTML = optionsList3[i];
        selectElement3.appendChild(opt3);
        };

        dropdown3.appendChild(selectElement3);

        labelDropdown4.innerHTML = 'kernel_initializer';
        var selectElement4 = document.createElement("select");
        selectElement4.id = "dropdown4";
        selectElement4.style.height = "28px";
        selectElement4.style.width = "100%";
        selectElement4.style.backgroundColor = "#8094A6";
        selectElement4.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength4; i++) {
        var opt4 = document.createElement('option');
        opt4.value = optionsList4[i];
        opt4.innerHTML = optionsList4[i];
        selectElement4.appendChild(opt4);
        };

        dropdown4.appendChild(selectElement4);

        labelNumEntry1.innerHTML = "filters";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelSlider1.innerHTML = 'kernel_constraint';
        labelSlider1.id = "labelDropdown9";
        var selectElement9 = document.createElement("select");
        selectElement9.id = "dropdown9";
        selectElement9.style.height = "28px";
        selectElement9.style.width = "100%";
        selectElement9.style.backgroundColor = "#8094A6";
        selectElement9.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength9; i++) {
            var opt9 = document.createElement('option');
            opt9.value = optionsList9[i];
            opt9.innerHTML = optionsList9[i];
            selectElement9.appendChild(opt9);
        };

        slider1.appendChild(selectElement9);

        labelSlider2.innerHTML = 'bias_constraint';
        labelSlider2.id = "labelDropdown10";
        var selectElement10 = document.createElement("select");
        selectElement10.id = "dropdown10";
        selectElement10.style.height = "28px";
        selectElement10.style.width = "100%";
        selectElement10.style.backgroundColor = "#8094A6";
        selectElement10.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength10; i++) {
            var opt10 = document.createElement('option');
            opt10.value = optionsList10[i];
            opt10.innerHTML = optionsList10[i];
            selectElement10.appendChild(opt10);
        };

        slider2.appendChild(selectElement10);

        labelSlider3.innerHTML = 'implementation';
        labelSlider3.id = "labelDropdown11";
        var selectElement11 = document.createElement("select");
        selectElement11.id = "dropdown11";
        selectElement11.style.height = "28px";
        selectElement11.style.width = "100%";
        selectElement11.style.backgroundColor = "#8094A6";
        selectElement11.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength11; i++) {
            var opt11 = document.createElement('option');
            opt11.value = optionsList11[i];
            opt11.innerHTML = optionsList11[i];
            selectElement11.appendChild(opt11);
        };

        slider3.appendChild(selectElement11);

        labelMultiNumEntry1.innerHTML = "kernel_size";
        var tupleGridDiv11 = document.createElement("div");
        tupleGridDiv11.style.gridColumn = "1 / 4";
        tupleGridDiv11.style.gridRow = "1 / 2";
        var multiNumEntryElement11 = document.createElement("input");
        multiNumEntryElement11.id = "multiNumEntry11";
        multiNumEntryElement11.type = "number";
        multiNumEntryElement11.style.height = "18%";
        multiNumEntryElement11.style.width = "100%";
        multiNumEntryElement11.style.backgroundColor = "#8094A6";
        multiNumEntryElement11.style.margin = "0px 0px";
        tupleGridDiv11.appendChild(multiNumEntryElement11);
        multiNumEntry1.appendChild(tupleGridDiv11);
        var tupleGridDiv21 = document.createElement("div");
        tupleGridDiv21.style.gridColumn = "4 / 7";
        tupleGridDiv21.style.gridRow = "1 / 2";
        var multiNumEntryElement21 = document.createElement("input");
        multiNumEntryElement21.id = "multiNumEntry21";
        multiNumEntryElement21.type = "number";
        multiNumEntryElement21.style.height = "18%";
        multiNumEntryElement21.style.width = "100%";
        multiNumEntryElement21.style.backgroundColor = "#8094A6";
        multiNumEntryElement21.style.margin = "0px 0px";
        tupleGridDiv21.appendChild(multiNumEntryElement21);
        multiNumEntry1.appendChild(tupleGridDiv21);

        labelMultiNumEntry2.innerHTML = "strides";
        var tupleGridDiv12 = document.createElement("div");
        tupleGridDiv12.style.gridColumn = "1 / 4";
        tupleGridDiv12.style.gridRow = "1 / 2";
        var multiNumEntryElement12 = document.createElement("input");
        multiNumEntryElement12.id = "multiNumEntry12";
        multiNumEntryElement12.type = "number";
        multiNumEntryElement12.style.height = "18%";
        multiNumEntryElement12.style.width = "100%";
        multiNumEntryElement12.style.backgroundColor = "#8094A6";
        multiNumEntryElement12.style.margin = "0px 0px";
        tupleGridDiv12.appendChild(multiNumEntryElement12);
        multiNumEntry2.appendChild(tupleGridDiv12);
        var tupleGridDiv22 = document.createElement("div");
        tupleGridDiv22.style.gridColumn = "4 / 7";
        tupleGridDiv22.style.gridRow = "1 / 2";
        var multiNumEntryElement22 = document.createElement("input");
        multiNumEntryElement22.id = "multiNumEntry22";
        multiNumEntryElement22.type = "number";
        multiNumEntryElement22.style.height = "18%";
        multiNumEntryElement22.style.width = "100%";
        multiNumEntryElement22.style.backgroundColor = "#8094A6";
        multiNumEntryElement22.style.margin = "0px 0px";
        tupleGridDiv22.appendChild(multiNumEntryElement22);
        multiNumEntry2.appendChild(tupleGridDiv22);

        labelExtra1.innerHTML = 'bias_initializer';
        labelExtra1.id = "labelDropdown5";
        var selectElement5 = document.createElement("select");
        selectElement5.id = "dropdown5";
        selectElement5.style.height = "28px";
        selectElement5.style.width = "100%";
        selectElement5.style.backgroundColor = "#8094A6";
        selectElement5.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength5; i++) {
            var opt5 = document.createElement('option');
            opt5.value = optionsList5[i];
            opt5.innerHTML = optionsList5[i];
            selectElement5.appendChild(opt5);
        };

        extra1.appendChild(selectElement5);

        labelExtra2.innerHTML = 'kernel_regularizer';
        labelExtra2.id = "labelDropdown6";
        var selectElement6 = document.createElement("select");
        selectElement6.id = "dropdown6";
        selectElement6.style.height = "28px";
        selectElement6.style.width = "100%";
        selectElement6.style.backgroundColor = "#8094A6";
        selectElement6.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength6; i++) {
            var opt6 = document.createElement('option');
            opt6.value = optionsList6[i];
            opt6.innerHTML = optionsList6[i];
            selectElement6.appendChild(opt6);
        };

        extra2.appendChild(selectElement6);

        labelExtra3.innerHTML = 'bias_regularizer';
        labelExtra3.id = "labelDropdown7";
        var selectElement7 = document.createElement("select");
        selectElement7.id = "dropdown7";
        selectElement7.style.height = "28px";
        selectElement7.style.width = "100%";
        selectElement7.style.backgroundColor = "#8094A6";
        selectElement7.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength7; i++) {
            var opt7 = document.createElement('option');
            opt7.value = optionsList7[i];
            opt7.innerHTML = optionsList7[i];
            selectElement7.appendChild(opt7);
        };

        extra3.appendChild(selectElement7);

        labelExtra4.innerHTML = 'activity_regularizer';
        labelExtra4.id = "labelDropdown8";
        var selectElement8 = document.createElement("select");
        selectElement8.id = "dropdown8";
        selectElement8.style.height = "28px";
        selectElement8.style.width = "100%";
        selectElement8.style.backgroundColor = "#8094A6";
        selectElement8.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength8; i++) {
            var opt8 = document.createElement('option');
            opt8.value = optionsList8[i];
            opt8.innerHTML = optionsList8[i];
            selectElement8.appendChild(opt8);
        };

        extra4.appendChild(selectElement8);

        labelkwargs1.innerHTML = "kwargs1";
        var kwargsElement1 = document.createElement("input");
        kwargsElement1.id = "kwargs1";
        kwargsElement1.type = "text";
        kwargsElement1.style.height = "100%";
        kwargsElement1.style.width = "100%";
        kwargsElement1.style.backgroundColor = "#8094A6";
        kwargsElement1.style.margin = "0px 0px";
        kwargs1.appendChild(kwargsElement1);

        labelkwargs2.innerHTML = "kwargs2";
        var kwargsElement2 = document.createElement("input");
        kwargsElement2.id = "kwargs2";
        kwargsElement2.type = "text";
        kwargsElement2.style.height = "100%";
        kwargsElement2.style.width = "100%";
        kwargsElement2.style.backgroundColor = "#8094A6";
        kwargsElement2.style.margin = "0px 0px";
        kwargs2.appendChild(kwargsElement2);

        labelkwargs3.innerHTML = "kwargs3";
        var kwargsElement3 = document.createElement("input");
        kwargsElement3.id = "kwargs3";
        kwargsElement3.type = "text";
        kwargsElement3.style.height = "100%";
        kwargsElement3.style.width = "100%";
        kwargsElement3.style.backgroundColor = "#8094A6";
        kwargsElement3.style.margin = "0px 0px";
        kwargs3.appendChild(kwargsElement3);

        labelkwargs4.innerHTML = "kwargs4";
        var kwargsElement4 = document.createElement("input");
        kwargsElement4.id = "kwargs4";
        kwargsElement4.type = "text";
        kwargsElement4.style.height = "100%";
        kwargsElement4.style.width = "100%";
        kwargsElement4.style.backgroundColor = "#8094A6";
        kwargsElement4.style.margin = "0px 0px";
        kwargs4.appendChild(kwargsElement4);
        break;
    };
};
