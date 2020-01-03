export default self={
toShow:(str)=>{
    var Reg = new RegExp('(import|class|from|extends|function|div|constructor|super|this|const|let)',"g");
    var Reg1 = new RegExp("(<|>|log|render)","g")
    var Reg2 = new RegExp("({|})","g")
    var Reg3 = new RegExp("([\'\"][a-zA-Z-.\s]*?[\'\"])",'g')
    return str.replace(Reg1,'<font color=#f81d22>$1</font>')
              .replace(Reg3,'<font color=#0b8235>$1</font>')
              .replace(Reg2,'<font color=#999>$1</font>')
              .replace(Reg, "<font color=#008dff>$1</font>")
},
// innerHTML转译成文本
toCopy:(str)=>{
        let reg=/<\/?.+?\/?>/g;
        return str.replace(reg,'').replace(/&lt;/g,"<").replace(/&gt;/g,">")
      }
} 