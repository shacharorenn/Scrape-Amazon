const baseurl = 'http://localhost:3000';

async function getProductFromLink(){
  let loader = document.getElementsByClassName("loader")[0];
  let app = document.querySelector('#app');
  app.innerHTML = "";
  loader.style.visibility = "visible";
  let link = document.getElementById('search').value;
  let resSplit = link.split("/");
  let index; 
  let value;
  let productId;
  for (index = 0; index < resSplit.length; ++index) {
      value = resSplit[index];
      if (value.substring(0, 2) === "B0") {
        productId = resSplit[index].substring(0,10);
      }
  }
  try{
    console.log("from script.js call axios");
    const res = await axios.post('http://localhost:3000/getQuestionsAndAnswers', {
      productId : productId
    });
    let questions = res.data.questionsAnsAnswersArray;
    //app = document.querySelector('#app');
    loader.style.visibility = "hidden";
    app.innerHTML = '<ul>' + questions.map(function (questions) {
      return '<li>' + questions + '</li>';
    }).join('') + '</ul>';

  }
  catch(error){
    console.log(error);
  }
}


