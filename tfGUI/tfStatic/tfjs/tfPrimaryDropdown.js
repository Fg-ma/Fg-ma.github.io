// logic behind display the appropriate fields in the first dropdown menu
enterButton1.onclick = function() {
    mySelect2.selectedIndex = "0";
    userPrompt.style.display = "block";
    hiddenGrid.style.display = "grid";
    addLayerButton.style.display = "inline"; 
    clearLayerButton.style.display = "inline"; 
    var displayEntries = mySelect1.value;
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
    case 'Input':
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

        labelTF2.innerHTML = 'ragged';
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

        labelTextEntry1.innerHTML = "shape";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelTextEntry2.innerHTML = "name";
        var textEntryElement2 = document.createElement("input");
        textEntryElement2.id = "textEntry2";
        textEntryElement2.type = "text";
        textEntryElement2.style.height = "100%";
        textEntryElement2.style.width = "100%";
        textEntryElement2.style.backgroundColor = "#8094A6";
        textEntryElement2.style.margin = "0px 0px";
        textEntry2.appendChild(textEntryElement2);

        labelTextEntry3.innerHTML = "dtype";
        var textEntryElement3 = document.createElement("input");
        textEntryElement3.id = "textEntry3";
        textEntryElement3.type = "text";
        textEntryElement3.style.height = "100%";
        textEntryElement3.style.width = "100%";
        textEntryElement3.style.backgroundColor = "#8094A6";
        textEntryElement3.style.margin = "0px 0px";
        textEntry3.appendChild(textEntryElement3);

        labelTextEntry4.innerHTML = "tensor";
        var textEntryElement4 = document.createElement("input");
        textEntryElement4.id = "textEntry4";
        textEntryElement4.type = "text";
        textEntryElement4.style.height = "100%";
        textEntryElement4.style.width = "100%";
        textEntryElement4.style.backgroundColor = "#8094A6";
        textEntryElement4.style.margin = "0px 0px";
        textEntry4.appendChild(textEntryElement4);

        labelNumEntry1.innerHTML = "batch_size";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelExtra1.innerHTML = "type_spec";
        labelExtra1.id = "labelTextEntry5";
        var textEntryElement5 = document.createElement("input");
        textEntryElement5.id = "textEntry5";
        textEntryElement5.type = "text";
        textEntryElement5.style.height = "100%";
        textEntryElement5.style.width = "100%";
        textEntryElement5.style.backgroundColor = "#8094A6";
        textEntryElement5.style.margin = "0px 0px";
        extra1.appendChild(textEntryElement5);

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
    case 'Dense':
        var optionsList1 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["Zeros", "Constant", "GlorotUniform", "HeNormal", "HeUniform:", "Identity", "Initializer", "LecunNormal", "LecunUniform", "Ones", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotNormal"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["Ones", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength8 = optionsList8.length;

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

        labelDropdown1.innerHTML = 'activation';
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

        labelDropdown2.innerHTML = 'kernel_initializer';
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

        labelDropdown3.innerHTML = 'bias_initializer';
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

        labelDropdown4.innerHTML = 'kernel_regularizer';
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

        labelNumEntry1.innerHTML = "units";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelExtra1.innerHTML = 'bias_regularizer';
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

        labelExtra2.innerHTML = 'activity_regularizer';
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

        labelExtra3.innerHTML = 'kernel_constraint';
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

        labelExtra4.innerHTML = 'bias_constraint';
        labelExtra4.id = "labelDropdown8";
        var selectElement8 = document.createElement("select");
        selectElement8.id = "dropdown8";
        selectElement8.style.height = "100%";
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
    case 'Activation':
        var optionsList1 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength1 = optionsList1.length;

        labelDropdown1.innerHTML = 'activation';
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
    case 'Embedding':
        var optionsList1 = ["Ones", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength3 = optionsList3.length;

        labelTF1.innerHTML = 'mask_zero';
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

        labelDropdown1.innerHTML = 'embeddings_initializer';
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

        labelDropdown2.innerHTML = 'embeddings_regularizer';
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

        labelDropdown3.innerHTML = 'embeddings_constraint';
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

        labelNumEntry1.innerHTML = "input_dim";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "output_dim";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "input_length";
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
    case 'Masking':
        labelNumEntry1.innerHTML = "mask_value";
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
    case 'Lambda':
        labelTextEntry1.innerHTML = "function";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelTextEntry2.innerHTML = "output_shape";
        var textEntryElement2 = document.createElement("input");
        textEntryElement2.id = "textEntry2";
        textEntryElement2.type = "text";
        textEntryElement2.style.height = "100%";
        textEntryElement2.style.width = "100%";
        textEntryElement2.style.backgroundColor = "#8094A6";
        textEntryElement2.style.margin = "0px 0px";
        textEntry2.appendChild(textEntryElement2);

        
        labelTextEntry3.innerHTML = "mask";
        var textEntryElement3 = document.createElement("input");
        textEntryElement3.id = "textEntry3";
        textEntryElement3.type = "text";
        textEntryElement3.style.height = "100%";
        textEntryElement3.style.width = "100%";
        textEntryElement3.style.backgroundColor = "#8094A6";
        textEntryElement3.style.margin = "0px 0px";
        textEntry3.appendChild(textEntryElement3);

        labelTextEntry4.innerHTML = "arguments";
        var textEntryElement4 = document.createElement("input");
        textEntryElement4.id = "textEntry4";
        textEntryElement4.type = "text";
        textEntryElement4.style.height = "100%";
        textEntryElement4.style.width = "100%";
        textEntryElement4.style.backgroundColor = "#8094A6";
        textEntryElement4.style.margin = "0px 0px";
        textEntry4.appendChild(textEntryElement4);

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
    case 'Conv1D':
        var optionsList1 = ["valid", "same", "causal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["glorot_uniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["zeros", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Ones"];
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

        for (var i = 0; i < optionsListLength1; i++) {
        var opt4 = document.createElement('option');
        opt4.value = optionsList4[i];
        opt4.innerHTML = optionsList4[i];
        selectElement4.appendChild(opt4);
        };

        dropdown4.appendChild(selectElement4);

        labelTextEntry1.innerHTML = "groups";
        labelTextEntry1.id = "labelNumEntry5";
        var numEntryElement5 = document.createElement("input");
        numEntryElement5.id = "numEntry5";
        numEntryElement5.type = "number";
        numEntryElement5.style.height = "100%";
        numEntryElement5.style.width = "100%";
        numEntryElement5.style.backgroundColor = "#8094A6";
        numEntryElement5.style.margin = "0px 0px";
        textEntry1.appendChild(numEntryElement5);

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

        labelNumEntry4.innerHTML = "dilation_rate";
        var numEntryElement4 = document.createElement("input");
        numEntryElement4.id = "numEntry4";
        numEntryElement4.type = "number";
        numEntryElement4.style.height = "100%";
        numEntryElement4.style.width = "100%";
        numEntryElement4.style.backgroundColor = "#8094A6";
        numEntryElement4.style.margin = "0px 0px";
        numEntry4.appendChild(numEntryElement4);

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

        labelExtra4.innerHTML = 'bias_regularizer';
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
    case 'Conv2D':
        var optionsList1 = ["valid", "same", "causal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["glorot_uniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["Zeros", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Ones"];
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

        for (var i = 0; i < optionsListLength1; i++) {
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

        labelNumEntry2.innerHTML = "groups";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

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

        labelMultiNumEntry3.innerHTML = "dilation_rate";
        var tupleGridDiv13 = document.createElement("div");
        tupleGridDiv13.style.gridColumn = "1 / 4";
        tupleGridDiv13.style.gridRow = "1 / 2";
        var multiNumEntryElement13 = document.createElement("input");
        multiNumEntryElement13.id = "multiNumEntry13";
        multiNumEntryElement13.type = "number";
        multiNumEntryElement13.style.height = "18%";
        multiNumEntryElement13.style.width = "100%";
        multiNumEntryElement13.style.backgroundColor = "#8094A6";
        multiNumEntryElement13.style.margin = "0px 0px";
        tupleGridDiv13.appendChild(multiNumEntryElement13);
        multiNumEntry3.appendChild(tupleGridDiv13);
        var tupleGridDiv23 = document.createElement("div");
        tupleGridDiv23.style.gridColumn = "4 / 7";
        tupleGridDiv23.style.gridRow = "1 / 2";
        var multiNumEntryElement23 = document.createElement("input");
        multiNumEntryElement23.id = "multiNumEntry23";
        multiNumEntryElement23.type = "number";
        multiNumEntryElement23.style.height = "18%";
        multiNumEntryElement23.style.width = "100%";
        multiNumEntryElement23.style.backgroundColor = "#8094A6";
        multiNumEntryElement23.style.margin = "0px 0px";
        tupleGridDiv23.appendChild(multiNumEntryElement23);
        multiNumEntry3.appendChild(tupleGridDiv23);

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

        labelExtra4.innerHTML = 'bias_regularizer';
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
    case 'Conv3D':
        var optionsList1 = ["valid", "same", "causal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["GlorotUniform", "Constant", "GlorotUniform", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Ones"];
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

        for (var i = 0; i < optionsListLength1; i++) {
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

        labelNumEntry2.innerHTML = "groups";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

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

        labelMultiNumEntry1.innerHTML = "kernel_size";
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

        labelMultiNumEntry2.innerHTML = "strides";
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

        labelMultiNumEntry3.innerHTML = "dilation_rate";
        var tripletGridDiv13 = document.createElement("div");
        tripletGridDiv13.style.gridColumn = "1 / 3";
        tripletGridDiv13.style.gridRow = "1 / 2";
        var multiNumEntryElement13 = document.createElement("input");
        multiNumEntryElement13.id = "multiNumEntry13";
        multiNumEntryElement13.type = "number";
        multiNumEntryElement13.style.height = "18%";
        multiNumEntryElement13.style.width = "100%";
        multiNumEntryElement13.style.backgroundColor = "#8094A6";
        multiNumEntryElement13.style.margin = "0px 0px";
        tripletGridDiv13.appendChild(multiNumEntryElement13);
        multiNumEntry3.appendChild(tripletGridDiv13);
        var tripletGridDiv23 = document.createElement("div");
        tripletGridDiv23.style.gridColumn = "3 / 5";
        tripletGridDiv23.style.gridRow = "1 / 2";
        var multiNumEntryElement23 = document.createElement("input");
        multiNumEntryElement23.id = "multiNumEntry23";
        multiNumEntryElement23.type = "number";
        multiNumEntryElement23.style.height = "18%";
        multiNumEntryElement23.style.width = "100%";
        multiNumEntryElement23.style.backgroundColor = "#8094A6";
        multiNumEntryElement23.style.margin = "0px 0px";
        tripletGridDiv23.appendChild(multiNumEntryElement23);
        multiNumEntry3.appendChild(tripletGridDiv23);
        var tripletGridDiv33 = document.createElement("div");
        tripletGridDiv33.style.gridColumn = "5 / 7";
        tripletGridDiv33.style.gridRow = "1 / 2";
        var multiNumEntryElement33 = document.createElement("input");
        multiNumEntryElement33.id = "multiNumEntry33";
        multiNumEntryElement33.type = "number";
        multiNumEntryElement33.style.height = "18%";
        multiNumEntryElement33.style.width = "100%";
        multiNumEntryElement33.style.backgroundColor = "#8094A6";
        multiNumEntryElement33.style.margin = "0px 0px";
        tripletGridDiv33.appendChild(multiNumEntryElement33);
        multiNumEntry3.appendChild(tripletGridDiv33);

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

        labelExtra4.innerHTML = 'bias_regularizer';
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
    case 'SeparableConv1D':
        var optionsList1 = ["valid", "same", "causal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength8 = optionsList8.length;
        var optionsList9 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength9 = optionsList9.length;
        var optionsList10 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength10 = optionsList10.length;
        var optionsList11 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength11 = optionsList11.length;
        var optionsList12 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength12 = optionsList12.length;
        var optionsList13 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength13 = optionsList13.length;

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

        labelDropdown4.innerHTML = 'depthwise_initializer';
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

        labelTextEntry1.innerHTML = "depth_multiplier";
        labelTextEntry1.id = "labelNumEntry5";
        var numEntryElement5 = document.createElement("input");
        numEntryElement5.id = "numEntry5";
        numEntryElement5.type = "number";
        numEntryElement5.style.height = "100%";
        numEntryElement5.style.width = "100%";
        numEntryElement5.style.backgroundColor = "#8094A6";
        numEntryElement5.style.margin = "0px 0px";
        textEntry1.appendChild(numEntryElement5);

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

        labelNumEntry4.innerHTML = "dilation_rate";
        var numEntryElement4 = document.createElement("input");
        numEntryElement4.id = "numEntry4";
        numEntryElement4.type = "number";
        numEntryElement4.style.height = "100%";
        numEntryElement4.style.width = "100%";
        numEntryElement4.style.backgroundColor = "#8094A6";
        numEntryElement4.style.margin = "0px 0px";
        numEntry4.appendChild(numEntryElement4);

        labelSlider1.innerHTML = 'bias_regularizer';
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

        labelSlider2.innerHTML = 'activity_regularizer';
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

        labelSlider3.innerHTML = 'depthwise_constraint';
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

        labelSlider4.innerHTML = 'pointwise_constraint';
        labelSlider4.id = "labelDropdown12";
        var selectElement12 = document.createElement("select");
        selectElement12.id = "dropdown12";
        selectElement12.style.height = "28px";
        selectElement12.style.width = "100%";
        selectElement12.style.backgroundColor = "#8094A6";
        selectElement12.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength12; i++) {
            var opt12 = document.createElement('option');
            opt12.value = optionsList12[i];
            opt12.innerHTML = optionsList12[i];
            selectElement12.appendChild(opt12);
        };

        slider4.appendChild(selectElement12);

        labelMultiNumEntry1.innerHTML = 'bias_regularizer';
        labelMultiNumEntry1.id = "labelDropdown13";
        var selectElement13 = document.createElement("select");
        selectElement13.id = "dropdown13";
        selectElement13.style.gridColumn = "1 / 7";
        selectElement13.style.gridRow = "1 / 2";
        selectElement13.style.height = "28px";
        selectElement13.style.width = "100%";
        selectElement13.style.backgroundColor = "#8094A6";
        selectElement13.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength13; i++) {
            var opt13 = document.createElement('option');
            opt13.value = optionsListLength13[i];
            opt13.innerHTML = optionsList13[i];
            selectElement13.appendChild(opt13);
        };

        multiNumEntry1.appendChild(selectElement13);

        labelExtra1.innerHTML = 'pointwise_initializer';
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

        labelExtra2.innerHTML = 'bias_initializer';
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

        labelExtra3.innerHTML = 'depthwise_regularizer';
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

        labelExtra4.innerHTML = 'pointwise_regularizer';
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
    case 'SeparableConv2D':
        var optionsList1 = ["valid", "same", "causal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength8 = optionsList8.length;
        var optionsList9 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength9 = optionsList9.length;
        var optionsList10 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength10 = optionsList10.length;
        var optionsList11 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength11 = optionsList11.length;
        var optionsList12 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength12 = optionsList12.length;
        var optionsList13 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength13 = optionsList13.length;

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

        labelDropdown4.innerHTML = 'depthwise_initializer';
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

        labelTextEntry1.innerHTML = 'bias_regularizer';
        labelTextEntry1.id = "labelDropdown13";
        var selectElement13 = document.createElement("select");
        selectElement13.id = "dropdown13";
        selectElement13.style.gridColumn = "1 / 7";
        selectElement13.style.gridRow = "1 / 2";
        selectElement13.style.height = "28px";
        selectElement13.style.width = "100%";
        selectElement13.style.backgroundColor = "#8094A6";
        selectElement13.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength13; i++) {
            var opt13 = document.createElement('option');
            opt13.value = optionsListLength13[i];
            opt13.innerHTML = optionsList13[i];
            selectElement13.appendChild(opt13);
        };

        textEntry1.appendChild(selectElement13);

        labelNumEntry1.innerHTML = "filters";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "depth_multiplier";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelSlider1.innerHTML = 'bias_regularizer';
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

        labelSlider2.innerHTML = 'activity_regularizer';
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

        labelSlider3.innerHTML = 'depthwise_constraint';
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

        labelSlider4.innerHTML = 'pointwise_constraint';
        labelSlider4.id = "labelDropdown12";
        var selectElement12 = document.createElement("select");
        selectElement12.id = "dropdown12";
        selectElement12.style.height = "28px";
        selectElement12.style.width = "100%";
        selectElement12.style.backgroundColor = "#8094A6";
        selectElement12.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength12; i++) {
            var opt12 = document.createElement('option');
            opt12.value = optionsList12[i];
            opt12.innerHTML = optionsList12[i];
            selectElement12.appendChild(opt12);
        };

        slider4.appendChild(selectElement12);

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

        labelMultiNumEntry3.innerHTML = "dilation_rate";
        var tupleGridDiv13 = document.createElement("div");
        tupleGridDiv13.style.gridColumn = "1 / 4";
        tupleGridDiv13.style.gridRow = "1 / 2";
        var multiNumEntryElement13 = document.createElement("input");
        multiNumEntryElement13.id = "multiNumEntry13";
        multiNumEntryElement13.type = "number";
        multiNumEntryElement13.style.height = "18%";
        multiNumEntryElement13.style.width = "100%";
        multiNumEntryElement13.style.backgroundColor = "#8094A6";
        multiNumEntryElement13.style.margin = "0px 0px";
        tupleGridDiv13.appendChild(multiNumEntryElement13);
        multiNumEntry3.appendChild(tupleGridDiv13);
        var tupleGridDiv23 = document.createElement("div");
        tupleGridDiv23.style.gridColumn = "4 / 7";
        tupleGridDiv23.style.gridRow = "1 / 2";
        var multiNumEntryElement23 = document.createElement("input");
        multiNumEntryElement23.id = "multiNumEntry23";
        multiNumEntryElement23.type = "number";
        multiNumEntryElement23.style.height = "18%";
        multiNumEntryElement23.style.width = "100%";
        multiNumEntryElement23.style.backgroundColor = "#8094A6";
        multiNumEntryElement23.style.margin = "0px 0px";
        tupleGridDiv23.appendChild(multiNumEntryElement23);
        multiNumEntry3.appendChild(tupleGridDiv23);

        labelExtra1.innerHTML = 'pointwise_initializer';
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

        labelExtra2.innerHTML = 'bias_initializer';
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

        labelExtra3.innerHTML = 'depthwise_regularizer';
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

        labelExtra4.innerHTML = 'pointwise_regularizer';
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
    case 'DepthwiseConv2D':
        var optionsList1 = ["valid", "same", "causal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
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

        labelDropdown4.innerHTML = 'depthwise_initializer';
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

        labelNumEntry1.innerHTML = "depth_multiplier";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelSlider1.innerHTML = 'depthwise_constraint';
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

        labelMultiNumEntry3.innerHTML = "dilation_rate";
        var tupleGridDiv13 = document.createElement("div");
        tupleGridDiv13.style.gridColumn = "1 / 4";
        tupleGridDiv13.style.gridRow = "1 / 2";
        var multiNumEntryElement13 = document.createElement("input");
        multiNumEntryElement13.id = "multiNumEntry13";
        multiNumEntryElement13.type = "number";
        multiNumEntryElement13.style.height = "18%";
        multiNumEntryElement13.style.width = "100%";
        multiNumEntryElement13.style.backgroundColor = "#8094A6";
        multiNumEntryElement13.style.margin = "0px 0px";
        tupleGridDiv13.appendChild(multiNumEntryElement13);
        multiNumEntry3.appendChild(tupleGridDiv13);
        var tupleGridDiv23 = document.createElement("div");
        tupleGridDiv23.style.gridColumn = "4 / 7";
        tupleGridDiv23.style.gridRow = "1 / 2";
        var multiNumEntryElement23 = document.createElement("input");
        multiNumEntryElement23.id = "multiNumEntry23";
        multiNumEntryElement23.type = "number";
        multiNumEntryElement23.style.height = "18%";
        multiNumEntryElement23.style.width = "100%";
        multiNumEntryElement23.style.backgroundColor = "#8094A6";
        multiNumEntryElement23.style.margin = "0px 0px";
        tupleGridDiv23.appendChild(multiNumEntryElement23);
        multiNumEntry3.appendChild(tupleGridDiv23);

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

        labelExtra2.innerHTML = 'depthwise_regularizer';
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
    case 'Conv1DTranspose':
        var optionsList1 = ["valid", "same", "causal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
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

        for (var i = 0; i < optionsListLength1; i++) {
        var opt4 = document.createElement('option');
        opt4.value = optionsList4[i];
        opt4.innerHTML = optionsList4[i];
        selectElement4.appendChild(opt4);
        };

        dropdown4.appendChild(selectElement4);

        labelTextEntry1.innerHTML = "dilation_rate";
        labelTextEntry1.id = "labelNumEntry5";
        var numEntryElement5 = document.createElement("input");
        numEntryElement5.id = "numEntry5";
        numEntryElement5.type = "number";
        numEntryElement5.style.height = "100%";
        numEntryElement5.style.width = "100%";
        numEntryElement5.style.backgroundColor = "#8094A6";
        numEntryElement5.style.margin = "0px 0px";
        textEntry1.appendChild(numEntryElement5);

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

        labelNumEntry4.innerHTML = "output_padding";
        var numEntryElement4 = document.createElement("input");
        numEntryElement4.id = "numEntry4";
        numEntryElement4.type = "number";
        numEntryElement4.style.height = "100%";
        numEntryElement4.style.width = "100%";
        numEntryElement4.style.backgroundColor = "#8094A6";
        numEntryElement4.style.margin = "0px 0px";
        numEntry4.appendChild(numEntryElement4);

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
    case 'Conv2DTranspose':
        var optionsList1 = ["valid", "same", "causal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
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

        for (var i = 0; i < optionsListLength1; i++) {
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

        labelMultiNumEntry3.innerHTML = "output_padding";
        var tupleGridDiv13 = document.createElement("div");
        tupleGridDiv13.style.gridColumn = "1 / 4";
        tupleGridDiv13.style.gridRow = "1 / 2";
        var multiNumEntryElement13 = document.createElement("input");
        multiNumEntryElement13.id = "multiNumEntry13";
        multiNumEntryElement13.type = "number";
        multiNumEntryElement13.style.height = "18%";
        multiNumEntryElement13.style.width = "100%";
        multiNumEntryElement13.style.backgroundColor = "#8094A6";
        multiNumEntryElement13.style.margin = "0px 0px";
        tupleGridDiv13.appendChild(multiNumEntryElement13);
        multiNumEntry3.appendChild(tupleGridDiv13);
        var tupleGridDiv23 = document.createElement("div");
        tupleGridDiv23.style.gridColumn = "4 / 7";
        tupleGridDiv23.style.gridRow = "1 / 2";
        var multiNumEntryElement23 = document.createElement("input");
        multiNumEntryElement23.id = "multiNumEntry23";
        multiNumEntryElement23.type = "number";
        multiNumEntryElement23.style.height = "18%";
        multiNumEntryElement23.style.width = "100%";
        multiNumEntryElement23.style.backgroundColor = "#8094A6";
        multiNumEntryElement23.style.margin = "0px 0px";
        tupleGridDiv23.appendChild(multiNumEntryElement23);
        multiNumEntry3.appendChild(tupleGridDiv23);
        
        labelMultiNumEntry4.innerHTML = "dilation_rate";
        var tupleGridDiv14 = document.createElement("div");
        tupleGridDiv14.style.gridColumn = "1 / 4";
        tupleGridDiv14.style.gridRow = "1 / 2";
        var multiNumEntryElement14 = document.createElement("input");
        multiNumEntryElement14.id = "multiNumEntry14";
        multiNumEntryElement14.type = "number";
        multiNumEntryElement14.style.height = "18%";
        multiNumEntryElement14.style.width = "100%";
        multiNumEntryElement14.style.backgroundColor = "#8094A6";
        multiNumEntryElement14.style.margin = "0px 0px";
        tupleGridDiv14.appendChild(multiNumEntryElement14);
        multiNumEntry4.appendChild(tupleGridDiv14);
        var tupleGridDiv24 = document.createElement("div");
        tupleGridDiv24.style.gridColumn = "4 / 7";
        tupleGridDiv24.style.gridRow = "1 / 2";
        var multiNumEntryElement24 = document.createElement("input");
        multiNumEntryElement24.id = "multiNumEntry24";
        multiNumEntryElement24.type = "number";
        multiNumEntryElement24.style.height = "18%";
        multiNumEntryElement24.style.width = "100%";
        multiNumEntryElement24.style.backgroundColor = "#8094A6";
        multiNumEntryElement24.style.margin = "0px 0px";
        tupleGridDiv24.appendChild(multiNumEntryElement24);
        multiNumEntry4.appendChild(tupleGridDiv24);

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
    case 'Conv3DTranspose':
        var optionsList1 = ["valid", "same", "causal"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
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

        for (var i = 0; i < optionsListLength1; i++) {
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

        labelMultiNumEntry1.innerHTML = "kernel_size";
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

        labelMultiNumEntry2.innerHTML = "strides";
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

        labelMultiNumEntry3.innerHTML = "output_padding";
        var tripletGridDiv13 = document.createElement("div");
        tripletGridDiv13.style.gridColumn = "1 / 3";
        tripletGridDiv13.style.gridRow = "1 / 2";
        var multiNumEntryElement13 = document.createElement("input");
        multiNumEntryElement13.id = "multiNumEntry13";
        multiNumEntryElement13.type = "number";
        multiNumEntryElement13.style.height = "18%";
        multiNumEntryElement13.style.width = "100%";
        multiNumEntryElement13.style.backgroundColor = "#8094A6";
        multiNumEntryElement13.style.margin = "0px 0px";
        tripletGridDiv13.appendChild(multiNumEntryElement13);
        multiNumEntry3.appendChild(tripletGridDiv13);
        var tripletGridDiv23 = document.createElement("div");
        tripletGridDiv23.style.gridColumn = "3 / 5";
        tripletGridDiv23.style.gridRow = "1 / 2";
        var multiNumEntryElement23 = document.createElement("input");
        multiNumEntryElement23.id = "multiNumEntry23";
        multiNumEntryElement23.type = "number";
        multiNumEntryElement23.style.height = "18%";
        multiNumEntryElement23.style.width = "100%";
        multiNumEntryElement23.style.backgroundColor = "#8094A6";
        multiNumEntryElement23.style.margin = "0px 0px";
        tripletGridDiv23.appendChild(multiNumEntryElement23);
        multiNumEntry3.appendChild(tripletGridDiv23);
        var tripletGridDiv33 = document.createElement("div");
        tripletGridDiv33.style.gridColumn = "5 / 7";
        tripletGridDiv33.style.gridRow = "1 / 2";
        var multiNumEntryElement33 = document.createElement("input");
        multiNumEntryElement33.id = "multiNumEntry33";
        multiNumEntryElement33.type = "number";
        multiNumEntryElement33.style.height = "18%";
        multiNumEntryElement33.style.width = "100%";
        multiNumEntryElement33.style.backgroundColor = "#8094A6";
        multiNumEntryElement33.style.margin = "0px 0px";
        tripletGridDiv33.appendChild(multiNumEntryElement33);
        multiNumEntry3.appendChild(tripletGridDiv33);

        labelMultiNumEntry4.innerHTML = "dilation_rate";
        var tripletGridDiv14 = document.createElement("div");
        tripletGridDiv14.style.gridColumn = "1 / 3";
        tripletGridDiv14.style.gridRow = "1 / 2";
        var multiNumEntryElement14 = document.createElement("input");
        multiNumEntryElement14.id = "multiNumEntry14";
        multiNumEntryElement14.type = "number";
        multiNumEntryElement14.style.height = "18%";
        multiNumEntryElement14.style.width = "100%";
        multiNumEntryElement14.style.backgroundColor = "#8094A6";
        multiNumEntryElement14.style.margin = "0px 0px";
        tripletGridDiv14.appendChild(multiNumEntryElement14);
        multiNumEntry4.appendChild(tripletGridDiv14);
        var tripletGridDiv24 = document.createElement("div");
        tripletGridDiv24.style.gridColumn = "3 / 5";
        tripletGridDiv24.style.gridRow = "1 / 2";
        var multiNumEntryElement24 = document.createElement("input");
        multiNumEntryElement24.id = "multiNumEntry24";
        multiNumEntryElement24.type = "number";
        multiNumEntryElement24.style.height = "18%";
        multiNumEntryElement24.style.width = "100%";
        multiNumEntryElement24.style.backgroundColor = "#8094A6";
        multiNumEntryElement24.style.margin = "0px 0px";
        tripletGridDiv24.appendChild(multiNumEntryElement24);
        multiNumEntry4.appendChild(tripletGridDiv24);
        var tripletGridDiv34 = document.createElement("div");
        tripletGridDiv34.style.gridColumn = "5 / 7";
        tripletGridDiv34.style.gridRow = "1 / 2";
        var multiNumEntryElement34 = document.createElement("input");
        multiNumEntryElement34.id = "multiNumEntry34";
        multiNumEntryElement34.type = "number";
        multiNumEntryElement34.style.height = "18%";
        multiNumEntryElement34.style.width = "100%";
        multiNumEntryElement34.style.backgroundColor = "#8094A6";
        multiNumEntryElement34.style.margin = "0px 0px";
        tripletGridDiv34.appendChild(multiNumEntryElement34);
        multiNumEntry4.appendChild(tripletGridDiv34);

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
    case 'MaxPooling1D':
        var optionsList1 = ["valid", "same"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;

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

        labelNumEntry1.innerHTML = "pool_size";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "strides";
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
    case 'MaxPooling2D':
        var optionsList1 = ["valid", "same"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;

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

        labelMultiNumEntry1.innerHTML = "pool_size";
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
    case 'MaxPooling3D':
        var optionsList1 = ["valid", "same"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;

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

        labelMultiNumEntry1.innerHTML = "pool_size";
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

        labelMultiNumEntry2.innerHTML = "strides";
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
    case 'GlobalMaxPooling1D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'keepdims';
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
    case 'GlobalMaxPooling2D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'keepdims';
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
    case 'GlobalMaxPooling3D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'keepdims';
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
    case 'AveragePooling1D':
        var optionsList1 = ["valid", "same"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;

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

        labelNumEntry1.innerHTML = "pool_size";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "strides";
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
    case 'AveragePooling2D':
        var optionsList1 = ["valid", "same"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;

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

        labelMultiNumEntry1.innerHTML = "pool_size";
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
    case 'AveragePooling3D':
        var optionsList1 = ["valid", "same"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;

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

        labelMultiNumEntry1.innerHTML = "pool_size";
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

        labelMultiNumEntry2.innerHTML = "strides";
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
    case 'GlobalAveragePooling1D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
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
    case 'GlobalAveragePooling2D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'keepdims';
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
    case 'GlobalAveragePooling3D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelTF1.innerHTML = 'keepdims';
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
    case 'LSTM':
        var optionsList1 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["Orthogonal", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "GlorotUniform", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength8 = optionsList8.length;
        var optionsList9 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength9 = optionsList9.length;
        var optionsList10 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength10 = optionsList10.length;
        var optionsList11 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength11 = optionsList11.length;
        var optionsList12 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength12 = optionsList12.length;

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

        labelTF2.innerHTML = 'unit_forget_bias';
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

        labelTF3.innerHTML = 'return_sequences';
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

        labelTF4.innerHTML = 'return_state';
        var labelElement14 = document.createElement("label");
        labelElement14.innerHTML = "True";
        labelElement14.style.padding = "10px";
        TF4.appendChild(labelElement14);
        var inputElement14 = document.createElement("input");
        inputElement14.id = "TF14";
        inputElement14.type = 'checkbox';
        inputElement14.style.padding = "10px";
        inputElement14.setAttribute("onclick", "document.getElementById(\"TF24\").checked = false;");
        TF4.appendChild(inputElement14);
        var labelElement24 = document.createElement("label");
        labelElement24.innerHTML = "False";
        labelElement24.style.padding = "10px";
        TF4.appendChild(labelElement24);
        var inputElement24 = document.createElement("input");
        inputElement24.id = "TF24";
        inputElement24.type = 'checkbox';
        inputElement24.style.padding = "10px";
        inputElement24.setAttribute("onclick", "document.getElementById(\"TF14\").checked = false;");
        TF4.appendChild(inputElement24);

        labelDropdown1.innerHTML = 'activation';
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

        labelDropdown2.innerHTML = 'recurrent_activation';
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

        labelDropdown3.innerHTML = 'kernel_initializer';
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

        labelDropdown4.innerHTML = 'recurrent_initializer';
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

        labelTextEntry1.innerHTML = 'go_backwards';
        labelTextEntry1.id = "labelTF5";
        var labelElement15 = document.createElement("label");
        labelElement15.innerHTML = "True";
        labelElement15.style.padding = "10px";
        textEntry1.appendChild(labelElement15);
        var inputElement15 = document.createElement("input");
        inputElement15.id = "TF15";
        inputElement15.type = 'checkbox';
        inputElement15.style.padding = "10px";
        inputElement15.setAttribute("onclick", "document.getElementById(\"TF25\").checked = false;");
        textEntry1.appendChild(inputElement15);
        var labelElement25 = document.createElement("label");
        labelElement25.innerHTML = "False";
        labelElement25.style.padding = "10px";
        textEntry1.appendChild(labelElement25);
        var inputElement25 = document.createElement("input");
        inputElement25.id = "TF25";
        inputElement25.type = 'checkbox';
        inputElement25.style.padding = "10px";
        inputElement25.setAttribute("onclick", "document.getElementById(\"TF15\").checked = false;");
        textEntry1.appendChild(inputElement25);

        labelTextEntry2.innerHTML = 'stateful';
        labelTextEntry2.id = "labelTF6";
        var labelElement16 = document.createElement("label");
        labelElement16.innerHTML = "True";
        labelElement16.style.padding = "10px";
        textEntry2.appendChild(labelElement16);
        var inputElement16 = document.createElement("input");
        inputElement16.id = "TF16";
        inputElement16.type = 'checkbox';
        inputElement16.style.padding = "10px";
        inputElement16.setAttribute("onclick", "document.getElementById(\"TF26\").checked = false;");
        textEntry2.appendChild(inputElement16);
        var labelElement26 = document.createElement("label");
        labelElement26.innerHTML = "False";
        labelElement26.style.padding = "10px";
        textEntry2.appendChild(labelElement26);
        var inputElement26 = document.createElement("input");
        inputElement26.id = "TF26";
        inputElement26.type = 'checkbox';
        inputElement26.style.padding = "10px";
        inputElement26.setAttribute("onclick", "document.getElementById(\"TF16\").checked = false;");
        textEntry2.appendChild(inputElement26);

        labelTextEntry3.innerHTML = 'time_major';
        labelTextEntry3.id = "labelTF7";
        var labelElement17 = document.createElement("label");
        labelElement17.innerHTML = "True";
        labelElement17.style.padding = "10px";
        textEntry3.appendChild(labelElement17);
        var inputElement17 = document.createElement("input");
        inputElement17.id = "TF17";
        inputElement17.type = 'checkbox';
        inputElement17.style.padding = "10px";
        inputElement17.setAttribute("onclick", "document.getElementById(\"TF27\").checked = false;");
        textEntry3.appendChild(inputElement17);
        var labelElement27 = document.createElement("label");
        labelElement27.innerHTML = "False";
        labelElement27.style.padding = "10px";
        textEntry3.appendChild(labelElement27);
        var inputElement27 = document.createElement("input");
        inputElement27.id = "TF27";
        inputElement27.type = 'checkbox';
        inputElement27.style.padding = "10px";
        inputElement27.setAttribute("onclick", "document.getElementById(\"TF17\").checked = false;");
        textEntry3.appendChild(inputElement27);

        labelTextEntry4.innerHTML = 'unroll';
        labelTextEntry4.id = "labelTF8";
        var labelElement18 = document.createElement("label");
        labelElement18.innerHTML = "True";
        labelElement18.style.padding = "10px";
        textEntry4.appendChild(labelElement18);
        var inputElement18 = document.createElement("input");
        inputElement18.id = "TF18";
        inputElement18.type = 'checkbox';
        inputElement18.style.padding = "10px";
        inputElement18.setAttribute("onclick", "document.getElementById(\"TF28\").checked = false;");
        textEntry4.appendChild(inputElement18);
        var labelElement28 = document.createElement("label");
        labelElement28.innerHTML = "False";
        labelElement28.style.padding = "10px";
        textEntry4.appendChild(labelElement28);
        var inputElement28 = document.createElement("input");
        inputElement28.id = "TF28";
        inputElement28.type = 'checkbox';
        inputElement28.style.padding = "10px";
        inputElement28.setAttribute("onclick", "document.getElementById(\"TF18\").checked = false;");
        textEntry4.appendChild(inputElement28);

        labelNumEntry1.innerHTML = "units";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "dropout";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "recurrent_dropout";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);

        labelSlider1.innerHTML = 'activity_regularizer';
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

        labelSlider2.innerHTML = 'kernel_constraint';
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

        labelSlider3.innerHTML = 'recurrent_constraint';
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

        labelSlider4.innerHTML = 'bias_constraint';
        labelSlider4.id = "labelDropdown12";
        var selectElement12 = document.createElement("select");
        selectElement12.id = "dropdown12";
        selectElement12.style.height = "28px";
        selectElement12.style.width = "100%";
        selectElement12.style.backgroundColor = "#8094A6";
        selectElement12.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength12; i++) {
            var opt12 = document.createElement('option');
            opt12.value = optionsList12[i];
            opt12.innerHTML = optionsList12[i];
            selectElement12.appendChild(opt12);
        };

        slider4.appendChild(selectElement12);

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

        labelExtra3.innerHTML = 'recurrent_regularizer';
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

        labelExtra4.innerHTML = 'bias_regularizer';
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
    case 'GRU':
        var optionsList1 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["Orthogonal", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "GlorotUniform", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength8 = optionsList8.length;
        var optionsList9 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength9 = optionsList9.length;
        var optionsList10 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength10 = optionsList10.length;
        var optionsList11 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength11 = optionsList11.length;
        var optionsList12 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength12 = optionsList12.length;

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

        labelTF2.innerHTML = 'return_sequences';
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

        labelTF3.innerHTML = 'return_state';
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

        labelTF4.innerHTML = 'go_backwards';
        var labelElement14 = document.createElement("label");
        labelElement14.innerHTML = "True";
        labelElement14.style.padding = "10px";
        TF4.appendChild(labelElement14);
        var inputElement14 = document.createElement("input");
        inputElement14.id = "TF14";
        inputElement14.type = 'checkbox';
        inputElement14.style.padding = "10px";
        inputElement14.setAttribute("onclick", "document.getElementById(\"TF24\").checked = false;");
        TF4.appendChild(inputElement14);
        var labelElement24 = document.createElement("label");
        labelElement24.innerHTML = "False";
        labelElement24.style.padding = "10px";
        TF4.appendChild(labelElement24);
        var inputElement24 = document.createElement("input");
        inputElement24.id = "TF24";
        inputElement24.type = 'checkbox';
        inputElement24.style.padding = "10px";
        inputElement24.setAttribute("onclick", "document.getElementById(\"TF14\").checked = false;");
        TF4.appendChild(inputElement24);

        labelDropdown1.innerHTML = 'activation';
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

        labelDropdown2.innerHTML = 'recurrent_activation';
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

        labelDropdown3.innerHTML = 'kernel_initializer';
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

        labelDropdown4.innerHTML = 'recurrent_initializer';
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

        labelTextEntry1.innerHTML = 'stateful';
        labelTextEntry1.id = "labelTF5";
        var labelElement15 = document.createElement("label");
        labelElement15.innerHTML = "True";
        labelElement15.style.padding = "10px";
        textEntry1.appendChild(labelElement15);
        var inputElement15 = document.createElement("input");
        inputElement15.id = "TF15";
        inputElement15.type = 'checkbox';
        inputElement15.style.padding = "10px";
        inputElement15.setAttribute("onclick", "document.getElementById(\"TF25\").checked = false;");
        textEntry1.appendChild(inputElement15);
        var labelElement25 = document.createElement("label");
        labelElement25.innerHTML = "False";
        labelElement25.style.padding = "10px";
        textEntry1.appendChild(labelElement25);
        var inputElement25 = document.createElement("input");
        inputElement25.id = "TF25";
        inputElement25.type = 'checkbox';
        inputElement25.style.padding = "10px";
        inputElement25.setAttribute("onclick", "document.getElementById(\"TF15\").checked = false;");
        textEntry1.appendChild(inputElement25);

        labelTextEntry2.innerHTML = 'unroll';
        labelTextEntry2.id = "labelTF6";
        var labelElement16 = document.createElement("label");
        labelElement16.innerHTML = "True";
        labelElement16.style.padding = "10px";
        textEntry2.appendChild(labelElement16);
        var inputElement16 = document.createElement("input");
        inputElement16.id = "TF16";
        inputElement16.type = 'checkbox';
        inputElement16.style.padding = "10px";
        inputElement16.setAttribute("onclick", "document.getElementById(\"TF26\").checked = false;");
        textEntry2.appendChild(inputElement16);
        var labelElement26 = document.createElement("label");
        labelElement26.innerHTML = "False";
        labelElement26.style.padding = "10px";
        textEntry2.appendChild(labelElement26);
        var inputElement26 = document.createElement("input");
        inputElement26.id = "TF26";
        inputElement26.type = 'checkbox';
        inputElement26.style.padding = "10px";
        inputElement26.setAttribute("onclick", "document.getElementById(\"TF16\").checked = false;");
        textEntry2.appendChild(inputElement26);

        labelTextEntry3.innerHTML = 'time_major';
        labelTextEntry3.id = "labelTF7";
        var labelElement17 = document.createElement("label");
        labelElement17.innerHTML = "True";
        labelElement17.style.padding = "10px";
        textEntry3.appendChild(labelElement17);
        var inputElement17 = document.createElement("input");
        inputElement17.id = "TF17";
        inputElement17.type = 'checkbox';
        inputElement17.style.padding = "10px";
        inputElement17.setAttribute("onclick", "document.getElementById(\"TF27\").checked = false;");
        textEntry3.appendChild(inputElement17);
        var labelElement27 = document.createElement("label");
        labelElement27.innerHTML = "False";
        labelElement27.style.padding = "10px";
        textEntry3.appendChild(labelElement27);
        var inputElement27 = document.createElement("input");
        inputElement27.id = "TF27";
        inputElement27.type = 'checkbox';
        inputElement27.style.padding = "10px";
        inputElement27.setAttribute("onclick", "document.getElementById(\"TF17\").checked = false;");
        textEntry3.appendChild(inputElement27);

        labelTextEntry4.innerHTML = 'reset_after';
        labelTextEntry4.id = "labelTF8";
        var labelElement18 = document.createElement("label");
        labelElement18.innerHTML = "True";
        labelElement18.style.padding = "10px";
        textEntry4.appendChild(labelElement18);
        var inputElement18 = document.createElement("input");
        inputElement18.id = "TF18";
        inputElement18.type = 'checkbox';
        inputElement18.style.padding = "10px";
        inputElement18.setAttribute("onclick", "document.getElementById(\"TF28\").checked = false;");
        textEntry4.appendChild(inputElement18);
        var labelElement28 = document.createElement("label");
        labelElement28.innerHTML = "False";
        labelElement28.style.padding = "10px";
        textEntry4.appendChild(labelElement28);
        var inputElement28 = document.createElement("input");
        inputElement28.id = "TF28";
        inputElement28.type = 'checkbox';
        inputElement28.style.padding = "10px";
        inputElement28.setAttribute("onclick", "document.getElementById(\"TF18\").checked = false;");
        textEntry4.appendChild(inputElement28);

        labelNumEntry1.innerHTML = "units";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "dropout";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "recurrent_dropout";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);

        labelSlider1.innerHTML = 'activity_regularizer';
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

        labelSlider2.innerHTML = 'kernel_constraint';
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

        labelSlider3.innerHTML = 'recurrent_constraint';
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

        labelSlider4.innerHTML = 'bias_constraint';
        labelSlider4.id = "labelDropdown12";
        var selectElement12 = document.createElement("select");
        selectElement12.id = "dropdown12";
        selectElement12.style.height = "28px";
        selectElement12.style.width = "100%";
        selectElement12.style.backgroundColor = "#8094A6";
        selectElement12.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength12; i++) {
            var opt12 = document.createElement('option');
            opt12.value = optionsList12[i];
            opt12.innerHTML = optionsList12[i];
            selectElement12.appendChild(opt12);
        };

        slider4.appendChild(selectElement12);

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

        labelExtra3.innerHTML = 'recurrent_regularizer';
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

        labelExtra4.innerHTML = 'bias_regularizer';
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
    case 'SimpleRNN':
        var optionsList1 = ["relu", "sigmoid", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["Orthogonal", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "GlorotUniform", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
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
        var optionsList11 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
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

        labelTF2.innerHTML = 'return_sequences';
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

        labelTF3.innerHTML = 'return_state';
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

        labelTF4.innerHTML = 'go_backwards';
        var labelElement14 = document.createElement("label");
        labelElement14.innerHTML = "True";
        labelElement14.style.padding = "10px";
        TF4.appendChild(labelElement14);
        var inputElement14 = document.createElement("input");
        inputElement14.id = "TF14";
        inputElement14.type = 'checkbox';
        inputElement14.style.padding = "10px";
        inputElement14.setAttribute("onclick", "document.getElementById(\"TF24\").checked = false;");
        TF4.appendChild(inputElement14);
        var labelElement24 = document.createElement("label");
        labelElement24.innerHTML = "False";
        labelElement24.style.padding = "10px";
        TF4.appendChild(labelElement24);
        var inputElement24 = document.createElement("input");
        inputElement24.id = "TF24";
        inputElement24.type = 'checkbox';
        inputElement24.style.padding = "10px";
        inputElement24.setAttribute("onclick", "document.getElementById(\"TF14\").checked = false;");
        TF4.appendChild(inputElement24);

        labelDropdown1.innerHTML = 'activation';
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

        labelDropdown2.innerHTML = 'kernel_initializer';
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

        labelDropdown3.innerHTML = 'recurrent_initializer';
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

        labelDropdown4.innerHTML = 'bias_initializer';
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

        labelTextEntry1.innerHTML = 'stateful';
        labelTextEntry1.id = "labelTF5";
        var labelElement15 = document.createElement("label");
        labelElement15.innerHTML = "True";
        labelElement15.style.padding = "10px";
        textEntry1.appendChild(labelElement15);
        var inputElement15 = document.createElement("input");
        inputElement15.id = "TF15";
        inputElement15.type = 'checkbox';
        inputElement15.style.padding = "10px";
        inputElement15.setAttribute("onclick", "document.getElementById(\"TF25\").checked = false;");
        textEntry1.appendChild(inputElement15);
        var labelElement25 = document.createElement("label");
        labelElement25.innerHTML = "False";
        labelElement25.style.padding = "10px";
        textEntry1.appendChild(labelElement25);
        var inputElement25 = document.createElement("input");
        inputElement25.id = "TF25";
        inputElement25.type = 'checkbox';
        inputElement25.style.padding = "10px";
        inputElement25.setAttribute("onclick", "document.getElementById(\"TF15\").checked = false;");
        textEntry1.appendChild(inputElement25);

        labelTextEntry2.innerHTML = 'unroll';
        labelTextEntry2.id = "labelTF6";
        var labelElement16 = document.createElement("label");
        labelElement16.innerHTML = "True";
        labelElement16.style.padding = "10px";
        textEntry2.appendChild(labelElement16);
        var inputElement16 = document.createElement("input");
        inputElement16.id = "TF16";
        inputElement16.type = 'checkbox';
        inputElement16.style.padding = "10px";
        inputElement16.setAttribute("onclick", "document.getElementById(\"TF26\").checked = false;");
        textEntry2.appendChild(inputElement16);
        var labelElement26 = document.createElement("label");
        labelElement26.innerHTML = "False";
        labelElement26.style.padding = "10px";
        textEntry2.appendChild(labelElement26);
        var inputElement26 = document.createElement("input");
        inputElement26.id = "TF26";
        inputElement26.type = 'checkbox';
        inputElement26.style.padding = "10px";
        inputElement26.setAttribute("onclick", "document.getElementById(\"TF16\").checked = false;");
        textEntry2.appendChild(inputElement26);

        labelNumEntry1.innerHTML = "units";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "dropout";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "recurrent_dropout";
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

        labelSlider2.innerHTML = 'recurrent_constraint';
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

        labelSlider3.innerHTML = 'bias_constraint';
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

        labelExtra1.innerHTML = 'kernel_regularizer';
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

        labelExtra2.innerHTML = 'recurrent_regularizer';
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
    case 'TimeDistributed':
        labelTextEntry1.innerHTML = "layer";
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
    case 'Bidirectional':
        var optionsList1 = ["None", "sum", "mul", "concat", "ave"];
        optionsListLength1 = optionsList1.length;

        labelDropdown1.innerHTML = 'merge_mode';
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

        labelTextEntry1.innerHTML = "layer";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelTextEntry2.innerHTML = "weights";
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
    case 'ConvLSTM1D':
        var optionsList1 = ["valid", "same"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["tanh", "sigmoid", "softmax", "softplus", "softsign", "relu", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["sigmoid", "relu", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["Orthogonal", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "GlorotUniform", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength8 = optionsList8.length;
        var optionsList9 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength9 = optionsList9.length;
        var optionsList10 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength10 = optionsList10.length;
        var optionsList11 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength11 = optionsList11.length;
        var optionsList12 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength12 = optionsList12.length;
        var optionsList13 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength13 = optionsList13.length;
        var optionsList14 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength14 = optionsList14.length;

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

        labelTF2.innerHTML = 'unit_forget_bias';
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

        labelTF3.innerHTML = 'return_sequences';
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

        labelTF4.innerHTML = 'return_state';
        var labelElement14 = document.createElement("label");
        labelElement14.innerHTML = "True";
        labelElement14.style.padding = "10px";
        TF4.appendChild(labelElement14);
        var inputElement14 = document.createElement("input");
        inputElement14.id = "TF14";
        inputElement14.type = 'checkbox';
        inputElement14.style.padding = "10px";
        inputElement14.setAttribute("onclick", "document.getElementById(\"TF24\").checked = false;");
        TF4.appendChild(inputElement14);
        var labelElement24 = document.createElement("label");
        labelElement24.innerHTML = "False";
        labelElement24.style.padding = "10px";
        TF4.appendChild(labelElement24);
        var inputElement24 = document.createElement("input");
        inputElement24.id = "TF24";
        inputElement24.type = 'checkbox';
        inputElement24.style.padding = "10px";
        inputElement24.setAttribute("onclick", "document.getElementById(\"TF14\").checked = false;");
        TF4.appendChild(inputElement24);

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

        labelDropdown4.innerHTML = 'recurrent_activation';
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

        labelTextEntry1.innerHTML = 'recurrent_constraint';
        labelTextEntry1.id = "labelDropdown13";
        var selectElement13 = document.createElement("select");
        selectElement13.id = "dropdown13";
        selectElement13.style.height = "28px";
        selectElement13.style.width = "100%";
        selectElement13.style.backgroundColor = "#8094A6";
        selectElement13.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength13; i++) {
        var opt13 = document.createElement('option');
        opt13.value = optionsList13[i];
        opt13.innerHTML = optionsList13[i];
        selectElement13.appendChild(opt13);
        };

        textEntry1.appendChild(selectElement13);

        labelTextEntry2.innerHTML = 'bias_constraint';
        labelTextEntry2.id = "labelDropdown14";
        var selectElement14 = document.createElement("select");
        selectElement14.id = "dropdown14";
        selectElement14.style.height = "28px";
        selectElement14.style.width = "100%";
        selectElement14.style.backgroundColor = "#8094A6";
        selectElement14.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength14; i++) {
        var opt14 = document.createElement('option');
        opt14.value = optionsList14[i];
        opt14.innerHTML = optionsList14[i];
        selectElement14.appendChild(opt14);
        };

        textEntry2.appendChild(selectElement14);

        labelTextEntry3.innerHTML = 'use_bias';
        labelTextEntry3.id = "labelTF5";
        var labelElement15 = document.createElement("label");
        labelElement15.innerHTML = "True";
        labelElement15.style.padding = "10px";
        textEntry3.appendChild(labelElement15);
        var inputElement15 = document.createElement("input");
        inputElement15.id = "TF15";
        inputElement15.type = 'checkbox';
        inputElement15.style.padding = "10px";
        inputElement15.setAttribute("onclick", "document.getElementById(\"TF25\").checked = false;");
        textEntry3.appendChild(inputElement15);
        var labelElement25 = document.createElement("label");
        labelElement25.innerHTML = "False";
        labelElement25.style.padding = "10px";
        textEntry3.appendChild(labelElement25);
        var inputElement25 = document.createElement("input");
        inputElement25.id = "TF25";
        inputElement25.type = 'checkbox';
        inputElement25.style.padding = "10px";
        inputElement25.setAttribute("onclick", "document.getElementById(\"TF15\").checked = false;");
        textEntry3.appendChild(inputElement25);

        labelTextEntry4.innerHTML = 'unit_forget_bias';
        labelTextEntry4.id = "labelTF6";
        var labelElement16 = document.createElement("label");
        labelElement16.innerHTML = "True";
        labelElement16.style.padding = "10px";
        textEntry4.appendChild(labelElement16);
        var inputElement16 = document.createElement("input");
        inputElement16.id = "TF16";
        inputElement16.type = 'checkbox';
        inputElement16.style.padding = "10px";
        inputElement16.setAttribute("onclick", "document.getElementById(\"TF26\").checked = false;");
        textEntry4.appendChild(inputElement16);
        var labelElement26 = document.createElement("label");
        labelElement26.innerHTML = "False";
        labelElement26.style.padding = "10px";
        textEntry4.appendChild(labelElement26);
        var inputElement26 = document.createElement("input");
        inputElement26.id = "TF26";
        inputElement26.type = 'checkbox';
        inputElement26.style.padding = "10px";
        inputElement26.setAttribute("onclick", "document.getElementById(\"TF16\").checked = false;");
        textEntry4.appendChild(inputElement26);

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
            
        labelNumEntry4.innerHTML = "dilation_rate";
        var numEntryElement4 = document.createElement("input");
        numEntryElement4.id = "numEntry4";
        numEntryElement4.type = "number";
        numEntryElement4.style.height = "100%";
        numEntryElement4.style.width = "100%";
        numEntryElement4.style.backgroundColor = "#8094A6";
        numEntryElement4.style.margin = "0px 0px";
        numEntry4.appendChild(numEntryElement4);

        labelSlider1.innerHTML = 'recurrent_regularizer';
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

        labelSlider2.innerHTML = 'bias_regularizer';
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

        labelSlider3.innerHTML = 'activity_regularizer';
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

        labelSlider4.innerHTML = 'kernel_constraint';
        labelSlider4.id = "labelDropdown12";
        var selectElement12 = document.createElement("select");
        selectElement12.id = "dropdown12";
        selectElement12.style.height = "28px";
        selectElement12.style.width = "100%";
        selectElement12.style.backgroundColor = "#8094A6";
        selectElement12.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength12; i++) {
            var opt12 = document.createElement('option');
            opt12.value = optionsList12[i];
            opt12.innerHTML = optionsList12[i];
            selectElement12.appendChild(opt12);
        };

        slider4.appendChild(selectElement12);

        labelExtra1.innerHTML = 'kernel_initializer';
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

        labelMultiNumEntry1.innerHTML = "dropout";
        var numMultiNumEntryElement1 = document.createElement("input");
        numMultiNumEntryElement1.style.gridColumn = "1 / 7";
        numMultiNumEntryElement1.style.gridRow = "1 / 2";
        numMultiNumEntryElement1.type = "number";
        numMultiNumEntryElement1.style.height = "100%";
        numMultiNumEntryElement1.style.width = "100%";
        numMultiNumEntryElement1.style.backgroundColor = "#8094A6";
        numMultiNumEntryElement1.style.margin = "0px 0px";
        multiNumEntry1.appendChild(numMultiNumEntryElement1);

        labelMultiNumEntry2.innerHTML = "recurrent_dropout";
        var numMultiNumEntryElement2 = document.createElement("input");
        numMultiNumEntryElement2.style.gridColumn = "1 / 7";
        numMultiNumEntryElement2.style.gridRow = "1 / 2";
        numMultiNumEntryElement2.type = "number";
        numMultiNumEntryElement2.style.height = "100%";
        numMultiNumEntryElement2.style.width = "100%";
        numMultiNumEntryElement2.style.backgroundColor = "#8094A6";
        numMultiNumEntryElement2.style.margin = "0px 0px";
        multiNumEntry2.appendChild(numMultiNumEntryElement2);


        extra1.appendChild(selectElement5);

        labelExtra2.innerHTML = 'recurrent_initializer';
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

        labelExtra3.innerHTML = 'bias_initializer';
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

        labelExtra4.innerHTML = 'kernel_regularizer';
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
    case 'ConvLSTM2D':
        var optionsList1 = ["valid", "same"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["tanh", "sigmoid", "softmax", "softplus", "softsign", "relu", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["sigmoid", "relu", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["Orthogonal", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "GlorotUniform", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength8 = optionsList8.length;
        var optionsList9 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength9 = optionsList9.length;
        var optionsList10 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength10 = optionsList10.length;
        var optionsList11 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength11 = optionsList11.length;
        var optionsList12 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength12 = optionsList12.length;
        var optionsList13 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength13 = optionsList13.length;
        var optionsList14 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength14 = optionsList14.length;

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

        labelTF2.innerHTML = 'unit_forget_bias';
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

        labelTF3.innerHTML = 'return_sequences';
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

        labelTF4.innerHTML = 'return_state';
        var labelElement14 = document.createElement("label");
        labelElement14.innerHTML = "True";
        labelElement14.style.padding = "10px";
        TF4.appendChild(labelElement14);
        var inputElement14 = document.createElement("input");
        inputElement14.id = "TF14";
        inputElement14.type = 'checkbox';
        inputElement14.style.padding = "10px";
        inputElement14.setAttribute("onclick", "document.getElementById(\"TF24\").checked = false;");
        TF4.appendChild(inputElement14);
        var labelElement24 = document.createElement("label");
        labelElement24.innerHTML = "False";
        labelElement24.style.padding = "10px";
        TF4.appendChild(labelElement24);
        var inputElement24 = document.createElement("input");
        inputElement24.id = "TF24";
        inputElement24.type = 'checkbox';
        inputElement24.style.padding = "10px";
        inputElement24.setAttribute("onclick", "document.getElementById(\"TF14\").checked = false;");
        TF4.appendChild(inputElement24);

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

        labelDropdown4.innerHTML = 'recurrent_activation';
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

        labelTextEntry1.innerHTML = 'recurrent_constraint';
        var selectElement13 = document.createElement("select");
        selectElement13.id = "dropdown13"
        selectElement13.style.height = "28px";
        selectElement13.style.width = "100%";
        selectElement13.style.backgroundColor = "#8094A6";
        selectElement13.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength13; i++) {
        var opt13 = document.createElement('option');
        opt13.value = optionsList13[i];
        opt13.innerHTML = optionsList13[i];
        selectElement13.appendChild(opt13);
        };

        textEntry1.appendChild(selectElement13);

        labelTextEntry2.innerHTML = 'bias_constraint';
        var selectElement14 = document.createElement("select");
        selectElement14.id = "dropdown14"
        selectElement14.style.height = "28px";
        selectElement14.style.width = "100%";
        selectElement14.style.backgroundColor = "#8094A6";
        selectElement14.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength14; i++) {
        var opt14 = document.createElement('option');
        opt14.value = optionsList14[i];
        opt14.innerHTML = optionsList14[i];
        selectElement14.appendChild(opt14);
        };

        textEntry2.appendChild(selectElement14);

        labelTextEntry3.innerHTML = 'use_bias';
        labelTextEntry3.id = "labelTF5";
        var labelElement15 = document.createElement("label");
        labelElement15.innerHTML = "True";
        labelElement15.style.padding = "10px";
        textEntry3.appendChild(labelElement15);
        var inputElement15 = document.createElement("input");
        inputElement15.id = "TF15";
        inputElement15.type = 'checkbox';
        inputElement15.style.padding = "10px";
        inputElement15.setAttribute("onclick", "document.getElementById(\"TF25\").checked = false;");
        textEntry3.appendChild(inputElement15);
        var labelElement25 = document.createElement("label");
        labelElement25.innerHTML = "False";
        labelElement25.style.padding = "10px";
        textEntry3.appendChild(labelElement25);
        var inputElement25 = document.createElement("input");
        inputElement25.id = "TF25";
        inputElement25.type = 'checkbox';
        inputElement25.style.padding = "10px";
        inputElement25.setAttribute("onclick", "document.getElementById(\"TF15\").checked = false;");
        textEntry3.appendChild(inputElement25);

        labelTextEntry4.innerHTML = 'unit_forget_bias';
        labelTextEntry4.id = "labelTF6";
        var labelElement16 = document.createElement("label");
        labelElement16.innerHTML = "True";
        labelElement16.style.padding = "10px";
        textEntry4.appendChild(labelElement16);
        var inputElement16 = document.createElement("input");
        inputElement16.id = "TF16";
        inputElement16.type = 'checkbox';
        inputElement16.style.padding = "10px";
        inputElement16.setAttribute("onclick", "document.getElementById(\"TF26\").checked = false;");
        textEntry4.appendChild(inputElement16);
        var labelElement26 = document.createElement("label");
        labelElement26.innerHTML = "False";
        labelElement26.style.padding = "10px";
        textEntry4.appendChild(labelElement26);
        var inputElement26 = document.createElement("input");
        inputElement26.id = "TF26";
        inputElement26.type = 'checkbox';
        inputElement26.style.padding = "10px";
        inputElement26.setAttribute("onclick", "document.getElementById(\"TF16\").checked = false;");
        textEntry4.appendChild(inputElement26);

        labelNumEntry1.innerHTML = "filters";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "dropout";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "recurrent_dropout";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);

        labelSlider1.innerHTML = 'recurrent_regularizer';
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

        labelSlider2.innerHTML = 'bias_regularizer';
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

        labelSlider3.innerHTML = 'activity_regularizer';
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

        labelSlider4.innerHTML = 'kernel_constraint';
        labelSlider4.id = "labelDropdown12";
        var selectElement12 = document.createElement("select");
        selectElement12.id = "dropdown12";
        selectElement12.style.height = "28px";
        selectElement12.style.width = "100%";
        selectElement12.style.backgroundColor = "#8094A6";
        selectElement12.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength12; i++) {
            var opt12 = document.createElement('option');
            opt12.value = optionsList12[i];
            opt12.innerHTML = optionsList12[i];
            selectElement12.appendChild(opt12);
        };

        slider4.appendChild(selectElement12);

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

        labelMultiNumEntry3.innerHTML = "dilation_rate";
        var tupleGridDiv13 = document.createElement("div");
        tupleGridDiv13.style.gridColumn = "1 / 4";
        tupleGridDiv13.style.gridRow = "1 / 2";
        var multiNumEntryElement13 = document.createElement("input");
        multiNumEntryElement13.id = "multiNumEntry13";
        multiNumEntryElement13.type = "number";
        multiNumEntryElement13.style.height = "18%";
        multiNumEntryElement13.style.width = "100%";
        multiNumEntryElement13.style.backgroundColor = "#8094A6";
        multiNumEntryElement13.style.margin = "0px 0px";
        tupleGridDiv13.appendChild(multiNumEntryElement13);
        multiNumEntry3.appendChild(tupleGridDiv13);
        var tupleGridDiv23 = document.createElement("div");
        tupleGridDiv23.style.gridColumn = "4 / 7";
        tupleGridDiv23.style.gridRow = "1 / 2";
        var multiNumEntryElement23 = document.createElement("input");
        multiNumEntryElement23.id = "multiNumEntry23";
        multiNumEntryElement23.type = "number";
        multiNumEntryElement23.style.height = "18%";
        multiNumEntryElement23.style.width = "100%";
        multiNumEntryElement23.style.backgroundColor = "#8094A6";
        multiNumEntryElement23.style.margin = "0px 0px";
        tupleGridDiv23.appendChild(multiNumEntryElement23);
        multiNumEntry3.appendChild(tupleGridDiv23);

        labelExtra1.innerHTML = 'kernel_initializer';
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

        labelExtra2.innerHTML = 'recurrent_initializer';
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

        labelExtra3.innerHTML = 'bias_initializer';
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

        labelExtra4.innerHTML = 'kernel_regularizer';
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
    case 'ConvLSTM3D':
        var optionsList1 = ["valid", "same"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "channels_last", "channels_first"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["tanh", "sigmoid", "softmax", "softplus", "softsign", "relu", "selu", "elu", "exponential"];
        optionsListLength3 = optionsList3.length;
        var optionsList4 = ["sigmoid", "relu", "softmax", "softplus", "softsign", "tanh", "selu", "elu", "exponential"];
        optionsListLength4 = optionsList4.length;
        var optionsList5 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength5 = optionsList5.length;
        var optionsList6 = ["Orthogonal", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "GlorotUniform", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength6 = optionsList6.length;
        var optionsList7 = ["Zeros", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "GlorotUniform"];
        optionsListLength7 = optionsList7.length;
        var optionsList8 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength8 = optionsList8.length;
        var optionsList9 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength9 = optionsList9.length;
        var optionsList10 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength10 = optionsList10.length;
        var optionsList11 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength11 = optionsList11.length;
        var optionsList12 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength12 = optionsList12.length;
        var optionsList13 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength13 = optionsList13.length;
        var optionsList14 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength14 = optionsList14.length;

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

        labelTF2.innerHTML = 'unit_forget_bias';
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

        labelTF3.innerHTML = 'return_sequences';
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

        labelTF4.innerHTML = 'return_state';
        var labelElement14 = document.createElement("label");
        labelElement14.innerHTML = "True";
        labelElement14.style.padding = "10px";
        TF4.appendChild(labelElement14);
        var inputElement14 = document.createElement("input");
        inputElement14.id = "TF14";
        inputElement14.type = 'checkbox';
        inputElement14.style.padding = "10px";
        inputElement14.setAttribute("onclick", "document.getElementById(\"TF24\").checked = false;");
        TF4.appendChild(inputElement14);
        var labelElement24 = document.createElement("label");
        labelElement24.innerHTML = "False";
        labelElement24.style.padding = "10px";
        TF4.appendChild(labelElement24);
        var inputElement24 = document.createElement("input");
        inputElement24.id = "TF24";
        inputElement24.type = 'checkbox';
        inputElement24.style.padding = "10px";
        inputElement24.setAttribute("onclick", "document.getElementById(\"TF14\").checked = false;");
        TF4.appendChild(inputElement24);

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

        labelDropdown4.innerHTML = 'recurrent_activation';
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

        labelTextEntry1.innerHTML = 'recurrent_constraint';
        var selectElement13 = document.createElement("select");
        selectElement13.id = "dropdown13"
        selectElement13.style.height = "28px";
        selectElement13.style.width = "100%";
        selectElement13.style.backgroundColor = "#8094A6";
        selectElement13.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength13; i++) {
        var opt13 = document.createElement('option');
        opt13.value = optionsList13[i];
        opt13.innerHTML = optionsList13[i];
        selectElement13.appendChild(opt13);
        };

        textEntry1.appendChild(selectElement13);

        labelTextEntry2.innerHTML = 'bias_constraint';
        var selectElement14 = document.createElement("select");
        selectElement14.id = "dropdown14"
        selectElement14.style.height = "28px";
        selectElement14.style.width = "100%";
        selectElement14.style.backgroundColor = "#8094A6";
        selectElement14.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength14; i++) {
        var opt14 = document.createElement('option');
        opt14.value = optionsList14[i];
        opt14.innerHTML = optionsList14[i];
        selectElement14.appendChild(opt14);
        };

        textEntry2.appendChild(selectElement14);

        labelTextEntry3.innerHTML = 'use_bias';
        labelTextEntry3.id = "labelTF5";
        var labelElement15 = document.createElement("label");
        labelElement15.innerHTML = "True";
        labelElement15.style.padding = "10px";
        textEntry3.appendChild(labelElement15);
        var inputElement15 = document.createElement("input");
        inputElement15.id = "TF15";
        inputElement15.type = 'checkbox';
        inputElement15.style.padding = "10px";
        inputElement15.setAttribute("onclick", "document.getElementById(\"TF25\").checked = false;");
        textEntry3.appendChild(inputElement15);
        var labelElement25 = document.createElement("label");
        labelElement25.innerHTML = "False";
        labelElement25.style.padding = "10px";
        textEntry3.appendChild(labelElement25);
        var inputElement25 = document.createElement("input");
        inputElement25.id = "TF25";
        inputElement25.type = 'checkbox';
        inputElement25.style.padding = "10px";
        inputElement25.setAttribute("onclick", "document.getElementById(\"TF15\").checked = false;");
        textEntry3.appendChild(inputElement25);

        labelTextEntry4.innerHTML = 'unit_forget_bias';
        labelTextEntry4.id = "labelTF6";
        var labelElement16 = document.createElement("label");
        labelElement16.innerHTML = "True";
        labelElement16.style.padding = "10px";
        textEntry4.appendChild(labelElement16);
        var inputElement16 = document.createElement("input");
        inputElement16.id = "TF16";
        inputElement16.type = 'checkbox';
        inputElement16.style.padding = "10px";
        inputElement16.setAttribute("onclick", "document.getElementById(\"TF26\").checked = false;");
        textEntry4.appendChild(inputElement16);
        var labelElement26 = document.createElement("label");
        labelElement26.innerHTML = "False";
        labelElement26.style.padding = "10px";
        textEntry4.appendChild(labelElement26);
        var inputElement26 = document.createElement("input");
        inputElement26.id = "TF26";
        inputElement26.type = 'checkbox';
        inputElement26.style.padding = "10px";
        inputElement26.setAttribute("onclick", "document.getElementById(\"TF16\").checked = false;");
        textEntry4.appendChild(inputElement26);

        labelNumEntry1.innerHTML = "filters";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "dropout";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "recurrent_dropout";
        var numEntryElement3 = document.createElement("input");
        numEntryElement3.id = "numEntry3";
        numEntryElement3.type = "number";
        numEntryElement3.style.height = "100%";
        numEntryElement3.style.width = "100%";
        numEntryElement3.style.backgroundColor = "#8094A6";
        numEntryElement3.style.margin = "0px 0px";
        numEntry3.appendChild(numEntryElement3);

        labelSlider1.innerHTML = 'recurrent_regularizer';
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

        labelSlider2.innerHTML = 'bias_regularizer';
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

        labelSlider3.innerHTML = 'activity_regularizer';
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

        labelSlider4.innerHTML = 'kernel_constraint';
        labelSlider4.id = "labelDropdown12";
        var selectElement12 = document.createElement("select");
        selectElement12.id = "dropdown12";
        selectElement12.style.height = "28px";
        selectElement12.style.width = "100%";
        selectElement12.style.backgroundColor = "#8094A6";
        selectElement12.style.margin = "0px 0px";

        for (var i = 0; i < optionsListLength12; i++) {
            var opt12 = document.createElement('option');
            opt12.value = optionsList12[i];
            opt12.innerHTML = optionsList12[i];
            selectElement12.appendChild(opt12);
        };

        slider4.appendChild(selectElement12);

        labelMultiNumEntry1.innerHTML = "kernel_size";
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

        labelMultiNumEntry2.innerHTML = "strides";
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

        labelMultiNumEntry3.innerHTML = "dilation_rate";
        var tripletGridDiv13 = document.createElement("div");
        tripletGridDiv13.style.gridColumn = "1 / 3";
        tripletGridDiv13.style.gridRow = "1 / 2";
        var multiNumEntryElement13 = document.createElement("input");
        multiNumEntryElement13.id = "multiNumEntry13";
        multiNumEntryElement13.type = "number";
        multiNumEntryElement13.style.height = "18%";
        multiNumEntryElement13.style.width = "100%";
        multiNumEntryElement13.style.backgroundColor = "#8094A6";
        multiNumEntryElement13.style.margin = "0px 0px";
        tripletGridDiv13.appendChild(multiNumEntryElement13);
        multiNumEntry3.appendChild(tripletGridDiv13);
        var tripletGridDiv23 = document.createElement("div");
        tripletGridDiv23.style.gridColumn = "3 / 5";
        tripletGridDiv23.style.gridRow = "1 / 2";
        var multiNumEntryElement23 = document.createElement("input");
        multiNumEntryElement23.id = "multiNumEntry23";
        multiNumEntryElement23.type = "number";
        multiNumEntryElement23.style.height = "18%";
        multiNumEntryElement23.style.width = "100%";
        multiNumEntryElement23.style.backgroundColor = "#8094A6";
        multiNumEntryElement23.style.margin = "0px 0px";
        tripletGridDiv23.appendChild(multiNumEntryElement23);
        multiNumEntry3.appendChild(tripletGridDiv23);
        var tripletGridDiv33 = document.createElement("div");
        tripletGridDiv33.style.gridColumn = "5 / 7";
        tripletGridDiv33.style.gridRow = "1 / 2";
        var multiNumEntryElement33 = document.createElement("input");
        multiNumEntryElement33.id = "multiNumEntry33";
        multiNumEntryElement33.type = "number";
        multiNumEntryElement33.style.height = "18%";
        multiNumEntryElement33.style.width = "100%";
        multiNumEntryElement33.style.backgroundColor = "#8094A6";
        multiNumEntryElement33.style.margin = "0px 0px";
        tripletGridDiv33.appendChild(multiNumEntryElement33);
        multiNumEntry3.appendChild(tripletGridDiv33);

        labelExtra1.innerHTML = 'kernel_initializer';
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

        labelExtra2.innerHTML = 'recurrent_initializer';
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

        labelExtra3.innerHTML = 'bias_initializer';
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

        labelExtra4.innerHTML = 'kernel_regularizer';
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
    case 'Base_RNN':
        labelTF1.innerHTML = 'return_sequences';
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

        labelTF2.innerHTML = 'return_state';
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

        labelTF3.innerHTML = 'go_backwards';
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

        labelTF4.innerHTML = 'stateful';
        var labelElement14 = document.createElement("label");
        labelElement14.innerHTML = "True";
        labelElement14.style.padding = "10px";
        TF4.appendChild(labelElement14);
        var inputElement14 = document.createElement("input");
        inputElement14.id = "TF14";
        inputElement14.type = 'checkbox';
        inputElement14.style.padding = "10px";
        inputElement14.setAttribute("onclick", "document.getElementById(\"TF24\").checked = false;");
        TF4.appendChild(inputElement14);
        var labelElement24 = document.createElement("label");
        labelElement24.innerHTML = "False";
        labelElement24.style.padding = "10px";
        TF4.appendChild(labelElement24);
        var inputElement24 = document.createElement("input");
        inputElement24.id = "TF24";
        inputElement24.type = 'checkbox';
        inputElement24.style.padding = "10px";
        inputElement24.setAttribute("onclick", "document.getElementById(\"TF14\").checked = false;");
        TF4.appendChild(inputElement24);

        labelTextEntry1.innerHTML = "cell";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelExtra1.innerHTML = 'return_sequences';
        labelExtra1.id = "labelTF5";
        var labelElement15 = document.createElement("label");
        labelElement15.innerHTML = "True";
        labelElement15.style.padding = "10px";
        extra1.appendChild(labelElement15);
        var inputElement15 = document.createElement("input");
        inputElement15.id = "TF15";
        inputElement15.type = 'checkbox';
        inputElement15.style.padding = "10px";
        inputElement15.setAttribute("onclick", "document.getElementById(\"TF25\").checked = false;");
        extra1.appendChild(inputElement15);
        var labelElement25 = document.createElement("label");
        labelElement25.innerHTML = "False";
        labelElement25.style.padding = "10px";
        extra1.appendChild(labelElement25);
        var inputElement25 = document.createElement("input");
        inputElement25.id = "TF25";
        inputElement25.type = 'checkbox';
        inputElement25.style.padding = "10px";
        inputElement25.setAttribute("onclick", "document.getElementById(\"TF15\").checked = false;");
        extra1.appendChild(inputElement25);

        labelExtra2.innerHTML = 'return_state';
        labelExtra2.id = "labelTF6";
        var labelElement16 = document.createElement("label");
        labelElement16.innerHTML = "True";
        labelElement16.style.padding = "10px";
        extra2.appendChild(labelElement16);
        var inputElement16 = document.createElement("input");
        inputElement16.id = "TF16";
        inputElement16.type = 'checkbox';
        inputElement16.style.padding = "10px";
        inputElement16.setAttribute("onclick", "document.getElementById(\"TF26\").checked = false;");
        extra2.appendChild(inputElement16);
        var labelElement26 = document.createElement("label");
        labelElement26.innerHTML = "False";
        labelElement26.style.padding = "10px";
        extra2.appendChild(labelElement26);
        var inputElement26 = document.createElement("input");
        inputElement26.id = "TF26";
        inputElement26.type = 'checkbox';
        inputElement26.style.padding = "10px";
        inputElement26.setAttribute("onclick", "document.getElementById(\"TF16\").checked = false;");
        extra2.appendChild(inputElement26);

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
    case 'Dropout':
        labelTextEntry1.innerHTML = "noise_shape";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelNumEntry1.innerHTML = "rate";
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
    case 'SpatialDropout1D':
        labelNumEntry1.innerHTML = "rate";
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
    case 'SpatialDropout2D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
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

        labelNumEntry1.innerHTML = "rate";
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
    case 'SpatialDropout3D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
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

        labelNumEntry1.innerHTML = "rate";
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
    case 'GaussianDropout':
        labelNumEntry1.innerHTML = "rate";
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
    case 'GaussianNoise':
        labelNumEntry1.innerHTML = "stddev";
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
    case 'ActivityRegularization':
        labelNumEntry1.innerHTML = "l1";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "l2";
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
    case 'AlphaDropout':
        labelTextEntry1.innerHTML = "noise_shape";
        var textEntryElement1 = document.createElement("input");
        textEntryElement1.id = "textEntry1";
        textEntryElement1.type = "text";
        textEntryElement1.style.height = "100%";
        textEntryElement1.style.width = "100%";
        textEntryElement1.style.backgroundColor = "#8094A6";
        textEntryElement1.style.margin = "0px 0px";
        textEntry1.appendChild(textEntryElement1);

        labelNumEntry1.innerHTML = "rate";
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
    case 'Reshape':
        labelTextEntry1.innerHTML = "target_shape";
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
    case 'Flatten':
        var optionsList1 = ["None", "channels_last", "channels_first"];
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
    case 'RepeatVector':
        labelNumEntry1.innerHTML = "n";
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
    case 'Permute':
        labelTextEntry1.innerHTML = "dims";
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
    case 'Cropping1D':
        labelTextEntry1.innerHTML = "cropping";
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
    case 'Cropping2D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelTextEntry1.innerHTML = "cropping";
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
    case 'Cropping3D':
        var optionsList1 = ["None", "channels_last", "channels_first"];
        optionsListLength1 = optionsList1.length;

        labelTextEntry1.innerHTML = "cropping";
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
    case 'ReLU':
        labelNumEntry1.innerHTML = "max_value";
        var numEntryElement1 = document.createElement("input");
        numEntryElement1.id = "numEntry1";
        numEntryElement1.type = "number";
        numEntryElement1.style.height = "100%";
        numEntryElement1.style.width = "100%";
        numEntryElement1.style.backgroundColor = "#8094A6";
        numEntryElement1.style.margin = "0px 0px";
        numEntry1.appendChild(numEntryElement1);

        labelNumEntry2.innerHTML = "negative_slope";
        var numEntryElement2 = document.createElement("input");
        numEntryElement2.id = "numEntry2";
        numEntryElement2.type = "number";
        numEntryElement2.style.height = "100%";
        numEntryElement2.style.width = "100%";
        numEntryElement2.style.backgroundColor = "#8094A6";
        numEntryElement2.style.margin = "0px 0px";
        numEntry2.appendChild(numEntryElement2);

        labelNumEntry3.innerHTML = "threshold";
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
    case 'LeakyReLU':
        labelNumEntry1.innerHTML = "alpha";
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
    case 'ThresholdedReLU':
        labelNumEntry1.innerHTML = "theta";
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
    case 'PReLU':
        var optionsList1 = ["GlorotUniform", "Constant", "Ones", "HeNormal", "HeUniform", "Identity", "Initializer", "LecunNormal", "LecunUniform", "GlorotNormal", "Orthogonal", "RandomNormal", "RandomUniform", "TruncatedNormal", "VarianceScaling", "Zeros"];
        optionsListLength1 = optionsList1.length;
        var optionsList2 = ["None", "L1", "L2", "L1L2", "OrthogonalRegularizer"];
        optionsListLength2 = optionsList2.length;
        var optionsList3 = ["None", "MaxNorm", "MinMaxNorm", "NonNeg", "UnitNorm", "RadialConstraint"];
        optionsListLength3 = optionsList3.length;
        labelDropdown1.innerHTML = 'alpha_initializer';
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

        labelDropdown2.innerHTML = 'alpha_regularizer';
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

        labelDropdown3.innerHTML = 'alpha_constraint';
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

        labelTextEntry1.innerHTML = "shared_axes";
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
    case 'ELU':
        labelNumEntry1.innerHTML = "alpha";
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
    case 'Softmax':
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
    };    
};
