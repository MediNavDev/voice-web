export function transformSentence(sentenceText: any){
    if (sentenceText.startsWith("{")){
      console.log("Parsing text sentence: "+sentenceText)
      const obj = JSON.parse(sentenceText);
      const answers = obj['corr_answ'];
      const questionText = obj['q_text'].replace("*","");
      let allAnswersText = "";
      answers.forEach( (a:String) => { allAnswersText = allAnswersText + a.trim() + ", ";})
      allAnswersText = allAnswersText.substr(0, allAnswersText.length - 2);
      return questionText + " " + allAnswersText;
    }
    return sentenceText;
  };