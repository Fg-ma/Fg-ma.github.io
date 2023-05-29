/* fix broken layers */
/* do full test */
/* make work with python program */
/* make it smart so it won't let users choose two conflicting options */

// Creates necessary variables
let
    userPrompt = document.getElementById("userPrompt");
    mySelect1 = document.getElementById("primaryDrop");
    mySelect2 = document.getElementById("secondaryDrop");
    enterButton1 = document.getElementById("enter1");
    enterButton2 = document.getElementById("enter2");
    addLayerButton = document.getElementById("addLayerButton");
    clearLayerButton = document.getElementById("clearLayerButton");
    removeLayerButton = document.getElementById("removeLayerButton");
    hiddenGrid = document.getElementById("grid");
    layerCount = 0;

    labelTF1 = document.getElementById("labelHTMLTF1");
    labelTF1.id = "labelTF1";
    TF1 = document.getElementById("HTMLTF1");
    labelTF2 = document.getElementById("labelHTMLTF2");
    labelTF2.id = "labelTF2";
    TF2 = document.getElementById("HTMLTF2");
    labelTF3 = document.getElementById("labelHTMLTF3");
    labelTF3.id = "labelTF3";
    TF3 = document.getElementById("HTMLTF3");
    labelTF4 = document.getElementById("labelHTMLTF4");
    labelTF4.id = "labelTF4";
    TF4 = document.getElementById("HTMLTF4");
    labelTF5 = document.getElementById("labelTF5");
    labelTF6 = document.getElementById("labelTF6");
    labelTF7 = document.getElementById("labelTF7");
    labelTF8 = document.getElementById("labelTF8");

    labelDropdown1 = document.getElementById("labelHTMLDropdown1");
    labelDropdown1.id = "labelDropdown1";
    dropdown1 = document.getElementById("HTMLdropdown1");
    labelDropdown2 = document.getElementById("labelHTMLDropdown2");
    labelDropdown2.id = "labelDropdown2";
    dropdown2 = document.getElementById("HTMLdropdown2");
    labelDropdown3 = document.getElementById("labelHTMLDropdown3");
    labelDropdown3.id = "labelDropdown3";
    dropdown3 = document.getElementById("HTMLdropdown3");
    labelDropdown4 = document.getElementById("labelHTMLDropdown4");
    labelDropdown4.id = "labelDropdown4";
    dropdown4 = document.getElementById("HTMLdropdown4");

    labelTextEntry1 = document.getElementById("labelHTMLTextEntry1");
    labelTextEntry1.id = "labelTextEntry1";
    textEntry1 = document.getElementById("HTMLtextEntry1");
    labelTextEntry2 = document.getElementById("labelHTMLTextEntry2");
    labelTextEntry2.id = "labelTextEntry2";
    textEntry2 = document.getElementById("HTMLtextEntry2");
    labelTextEntry3 = document.getElementById("labelHTMLTextEntry3");
    labelTextEntry3.id = "labelTextEntry3";
    textEntry3 = document.getElementById("HTMLtextEntry3");
    labelTextEntry4 = document.getElementById("labelHTMLTextEntry4");
    labelTextEntry4.id = "labelTextEntry4";
    textEntry4 = document.getElementById("HTMLtextEntry4");
    labelTextEntry5 = document.getElementById("labelTextEntry5");

    labelNumEntry1 = document.getElementById("labelHTMLNumEntry1");
    labelNumEntry1.id = "labelNumEntry1";
    numEntry1 = document.getElementById("HTMLnumEntry1");
    labelNumEntry2 = document.getElementById("labelHTMLNumEntry2");
    labelNumEntry2.id = "labelNumEntry2";
    numEntry2 = document.getElementById("HTMLnumEntry2");
    labelNumEntry3 = document.getElementById("labelHTMLNumEntry3");
    labelNumEntry3.id = "labelNumEntry3";
    numEntry3 = document.getElementById("HTMLnumEntry3");
    labelNumEntry4 = document.getElementById("labelHTMLNumEntry4");
    labelNumEntry4.id = "labelNumEntry4";
    numEntry4 = document.getElementById("HTMLnumEntry4");
    labelNumEntry5 = document.getElementById("labelNumEntry5");

    labelSlider1 = document.getElementById("labelHTMLSlider1");
    labelSlider1.id = "labelSlider1";
    slider1 = document.getElementById("HTMLslider1");
    labelSlider2 = document.getElementById("labelHTMLSlider2");
    labelSlider2.id = "labelSlider2";
    slider2 = document.getElementById("HTMLslider2");
    labelSlider3 = document.getElementById("labelHTMLSlider3");
    labelSlider3.id = "labelSlider3";
    slider3 = document.getElementById("HTMLslider3");
    labelSlider4 = document.getElementById("labelHTMLSlider4");
    labelSlider4.id = "labelSlider4";
    slider4 = document.getElementById("HTMLslider4");

    labelMultiNumEntry1 = document.getElementById("labelHTMLMultiNumEntry1");
    labelMultiNumEntry1.id = "labelMultiNumEntry1";
    multiNumEntry1 = document.getElementById("HTMLmultiNumEntry1");
    labelMultiNumEntry2 = document.getElementById("labelHTMLMultiNumEntry2");
    labelMultiNumEntry2.id = "labelMultiNumEntry2";
    multiNumEntry2 = document.getElementById("HTMLmultiNumEntry2");
    labelMultiNumEntry3 = document.getElementById("labelHTMLMultiNumEntry3");
    labelMultiNumEntry3.id = "labelMultiNumEntry3";
    multiNumEntry3 = document.getElementById("HTMLmultiNumEntry3");
    labelMultiNumEntry4 = document.getElementById("labelHTMLMultiNumEntry4");
    labelMultiNumEntry4.id = "labelMultiNumEntry4";
    multiNumEntry4 = document.getElementById("HTMLmultiNumEntry4");

    labelExtra1 = document.getElementById("labelHTMLExtra1");
    labelExtra1.id = "labelExtra1";
    extra1 = document.getElementById("HTMLextra1");
    labelExtra2 = document.getElementById("labelHTMLExtra2");
    labelExtra2.id = "labelExtra2";
    extra2 = document.getElementById("HTMLextra2");
    labelExtra3 = document.getElementById("labelHTMLExtra3");
    labelExtra3.id = "labelExtra3";
    extra3 = document.getElementById("HTMLextra3");
    labelExtra4 = document.getElementById("labelHTMLExtra4");
    labelExtra4.id = "labelExtra4";
    extra4 = document.getElementById("HTMLextra4");

    labelkwargs1 = document.getElementById("labelHTMLkwargs1");
    labelkwargs1.id = "labelkwargs1";
    kwargs1 = document.getElementById("HTMLkwargs1");
    labelkwargs2 = document.getElementById("labelHTMLkwargs2");
    labelkwargs2.id = "labelkwargs2";
    kwargs2 = document.getElementById("HTMLkwargs2");
    labelkwargs3 = document.getElementById("labelHTMLkwargs3");
    labelkwargs3.id = "labelkwargs3";
    kwargs3 = document.getElementById("HTMLkwargs3");
    labelkwargs4 = document.getElementById("labelHTMLkwargs4");
    labelkwargs4.id = "labelkwargs4";
    kwargs4 = document.getElementById("HTMLkwargs4");
