// function to macke the text bold
function setBold(btnclass, outputClass) {
    const tBold = document.getElementById(btnclass);
    tBold.addEventListener("click", () => {
      const t = document.getElementsByClassName(outputClass);
      t[0].style.fontWeight = "bold";
      console.log("anshu kaushik");
    });
  }

  // function to macke the text itailic
  function setItailic(btnId, outputClass) {
    const textItailic = document.getElementById(btnId);
    textItailic.addEventListener("click", () => {
      const t = document.getElementsByClassName(outputClass);
      t[0].style.fontStyle = "italic";
    });
  }

  // function to underline text
  function setUnderline(btnId, outputClass) {
    const textUnderline = document.getElementById(btnId);
    textUnderline.addEventListener("click", () => {
      const t = document.getElementsByClassName(outputClass);
      t[0].style.textDecoration = "underline";
    });
  }

  // function to change the font size of text
  function setFontsize(btnId, outputClass, inputId) {
    const fontsize = document.getElementById(btnId);
    const inputtag = document.getElementById(inputId);

    inputtag.addEventListener("blur", () => {
      const t = document.getElementsByClassName(outputClass);
      t[0].style.fontSize = inputtag.value + "px";
    });
  }

  // function to change the colour of text
  function setColour(btnId, outputClass, inputId) {
    const textColor = document.getElementById(btnId);
    const inputtag = document.getElementById(inputId);
    textColor.addEventListener("blur", () => {
      const t = document.getElementsByClassName(outputClass);
      t[0].style.color = inputtag.value;
    });
  }

  // box-1
  setBold("bold-1", "box-1-output");
  setItailic("itailic-1", "box-1-output");
  setUnderline("underLine-1", "box-1-output");
  setFontsize("fontSize-1", "box-1-output", "fontValue-1");
  setColour("colorValue-1", "box-1-output", "colorValue-1");

  // box-2
  setBold("bold-2", "box-2-output");
  setItailic("itailic-2", "box-2-output");
  setUnderline("underLine-2", "box-2-output");
  setFontsize("fontSize-2", "box-2-output", "fontValue-2");
  setColour("colorValue-2", "box-2-output", "colorValue-2");

  // box-3
  setBold("bold-3", "box-3-output");
  setItailic("itailic-3", "box-3-output");
  setUnderline("underLine-3", "box-3-output");
  setFontsize("fontSize-3", "box-3-output", "fontValue-3");
  setColour("colorValue-3", "box-3-output", "colorValue-3");
  
  // box-4
  setBold("bold-4", "box-4-output");
  setItailic("itailic-4", "box-4-output");
  setUnderline("underLine-4", "box-4-output");
  setFontsize("fontSize-4", "box-4-output", "fontValue-4");
  setColour("colorValue-4", "box-4-output", "colorValue-4");