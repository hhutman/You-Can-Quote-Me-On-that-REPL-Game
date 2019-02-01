const rs = require('readline-sync');

const response = rs.question ('Who said' + ' ' + '"Nobody respects women more than me?"');


console.log(response);



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
