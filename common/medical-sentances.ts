export function transformSentence(sentence: any){
    const text = sentence.text;
    if (sentence.text.startsWith("{")){
      console.log("Parsing text sentence: "+text)
      const obj = JSON.parse(text);
      const answers = obj['corr_answ'];
      const questionText = obj['q_text'].replace("*","");
      let allAnswersText = "";
      answers.forEach( (a:String) => { allAnswersText = allAnswersText + a.trim() + ", ";})
      allAnswersText = allAnswersText.substr(0, allAnswersText.length - 2);
      return questionText + " " + allAnswersText;
    }
    return sentence.text;
  };