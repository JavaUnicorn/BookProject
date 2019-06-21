var typeE = $('.typeE')
    var typeI = $('.typeI')
    var typeS = $('.typeS')
    var typeN = $('.typeN')
    var typeT = $('.typeT')
    var typeF = $('.typeF')
    var typeJ = $('.typeJ')
    var typeP = $('.typeP')
    var results = $('.button')
    results.on("click", appendAnswers);
    function appendAnswers(){

      if (typeI.checked == true && typeS.checked == true && typeT.checked == true && typeJ.checked == true) {
    localStorage.setItem("type1","I");localStorage.setItem("type2","S");localStorage.setItem("type3","T");localStorage.setItem("type4","J");
  }else if (typeI.checked == true && typeS.checked == true && typeT.checked == true && typeP.checked == true){
 localStorage.setItem("type1","I");localStorage.setItem("type2","S");localStorage.setItem("type3","T");localStorage.setItem("type4","P");
}  else if  (typeI.checked == true && typeS.checked == true && typeF.checked == true && typeJ.checked == true){
localStorage.setItem("type1","I");localStorage.setItem("type2","S");localStorage.setItem("type3","F");localStorage.setItem("type4","J");
 }  else if  (typeI.checked == true && typeS.checked == true && typeF.checked == true && typeP.checked == true){
localStorage.setItem("type1","I");localStorage.setItem("type2","S");localStorage.setItem("type3","F");localStorage.setItem("type4","P");
 }  else if  (typeI.checked == true && typeN.checked == true && typeT.checked == true && typeP.checked == true){
localStorage.setItem("type1","I");   localStorage.setItem("type2","N");localStorage.setItem("type3","T");localStorage.setItem("type4","P");
 }  else if  (typeI.checked == true && typeN.checked == true && typeT.checked == true && typeJ.checked == true){
localStorage.setItem("type1","I");   localStorage.setItem("type2","N");localStorage.setItem("type3","T");localStorage.setItem("type4","J");
 }  else if  (typeI.checked == true && typeN.checked == true && typeF.cheked == true && typeJ.checked == true){
localStorage.setItem("type1","I");   localStorage.setItem("type2","N");localStorage.setItem("type3","F");localStorage.setItem("type4","J");
 }  else if  (typeI.checked == true && typeN.checked == true && typeF.checked == true && typeP.checked == true)
localStorage.setItem("type1","I");   localStorage.setItem("type2","N");localStorage.setItem("type3","F");localStorage.setItem("type4","P");
 }



// localStorage.setItem('items', JSON.stringify(itemsArray))
// const data = JSON.parse(localStorage.getItem('items'))
// e.preventDefault()
//
// itemsArray.push(input.value)
// localStorage.setItem('items', JSON.stringify(itemsArray))
