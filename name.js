const rs = require('readline-sync');

const questions = ['"Nobody respects women more than me?"', '"Why can’t we use nuclear weapons?"','"We won with poorly educated. I love the poorly educated."','"I know more about ISIS than the generals do, believe me"','"The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive."',"'I would bomb the s**it out of them='"]

questions.forEach( function(question){

  const response = rs.question(`Who said ${question}\n:`);

  answers(response)

})


function answers(response){

  if (response === 'Donald J Trump'){
    console.log(`Yep, he's our president!!!`);
  }
  else if (response === 'Trump'){
    console.log(`Yep, he's our president!!!`);
  }

  else if (response === 'trump'){
    console.log(`Yep, he's our president!!!`);
  }

  else if (response === '45'){
    console.log(`Yep, he's our president!!!`);
  }

  else {
    console.log("Nope, that quote if from the 45th President of the United States, Donald J Trump!")
  }


}
