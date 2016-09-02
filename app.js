var randomPictures = [];
console.log(randomPictures);
// var timesClicked = [];

var showImage = document.getElementById('show-image');

function Picture(imgName, filePath) {
  this.imgName = imgName;
  this.filePath = filePath;
  this.newPath = 'img/' + filePath;
  this.width = 300;
  this.height = 300;
  this.timesShown = 0;
  this.timesClicked = 0;
}
randomPictures.push(new Picture('bag', 'bag.jpg'));
randomPictures.push(new Picture('banana', 'banana.jpg'));
randomPictures.push(new Picture('bathroom', 'bathroom.jpg'));
randomPictures.push(new Picture('boots', 'boots.jpg'));
randomPictures.push(new Picture('breakfast', 'breakfast.jpg'));
randomPictures.push(new Picture('bubblegum', 'bubblegum.jpg'));
randomPictures.push(new Picture('chair', 'chair.jpg'));
randomPictures.push(new Picture('cthulhu', 'cthulhu.jpg'));
randomPictures.push(new Picture('dog-duck', 'dog-duck.jpg'));
randomPictures.push(new Picture('dragon', 'dragon.jpg'));
randomPictures.push(new Picture('pen', 'pen.jpg'));
randomPictures.push(new Picture('pet-sweep', 'pet-sweep.jpg'));
randomPictures.push(new Picture('scissors', 'scissors.jpg'));
randomPictures.push(new Picture('shark', 'shark.jpg'));
randomPictures.push(new Picture('sweep', 'sweep.png'));
randomPictures.push(new Picture('tauntaun', 'tauntaun.jpg'));
randomPictures.push(new Picture('unicorn', 'unicorn.jpg'));
randomPictures.push(new Picture('usb', 'usb.gif'));
randomPictures.push(new Picture('water-can', 'water-can.jpg'));
randomPictures.push(new Picture('wine-glass', 'wine-glass.jpg'));

//function that runs math random to generate a random img from randomPictures array
function calculateMath() {
  return Math.floor(Math.random() * randomPictures.length);
}
var img1 = calculateMath();

var divEl = document.createElement('divEl');
divEl.innerHTML = '<img src=' + randomPictures[img1].newPath + '>';
randomPictures[img1].timesShown++;
showImage.appendChild(divEl);

var img2 = calculateMath(Picture);

while (img1 === img2) {
  img2 = calculateMath();
}

var divElTwo = document.createElement('divElTwo');
divElTwo.innerHTML = '<img src=' + randomPictures[img2].newPath + '>';
randomPictures[img2].timesShown++;
showImage.appendChild(divElTwo);

var img3 = calculateMath();

while (img3 === img1 || img3 === img2) {
  img3 = calculateMath();
}

var divElThree = document.createElement('divElThree');
divElThree.innerHTML = '<img src=' + randomPictures[img3].newPath + '>';
randomPictures[img3].timesShown++;
showImage.appendChild(divElThree);


function handleClick(event) {
  console.log('you have clicked here');
  for (var q = 0; q < randomPictures.length; q++) {
    if (event.target.alt === randomPictures[q].imgName) {
      randomPictures[q].timesClicked++;
    }
    showImg.innerHTML = ' ';

    //function that handles imgs and keeps them from duplicating
    function genThree() {

      genThree();
    }
  };

  handleClick.addEventListener('click', divEl);

  genThree();
  handleClick();
}
