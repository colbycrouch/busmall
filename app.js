var randomPictures = [];
var totalClicks = [];
var click = document.getElementById('show-image');

var addRt = document.getElementById('add-right');
var addCntr = document.getElementById('add-center');
var addLft = document.getElementById('add-left');
var showImage = document.getElementById('show-image');

function Picture(imgName, filePath) {
  this.imgName = imgName;
  this.filePath = filePath;
  this.newPath = 'img/' + this.filePath + '.jpg alt="' + this.imgName + '" />';
  this.timesShown = 0;
  this.timesClicked = 0;

  randomPictures.push(new Picture('bag', 'bag'));
  randomPictures.push(new Picture('banana', 'banana'));
  randomPictures.push(new Picture('bathroom', 'bathroom'));
  randomPictures.push(new Picture('boots', 'boots'));
  randomPictures.push(new Picture('breakfast', 'breakfast'));
  randomPictures.push(new Picture('bubblegum', 'bubblegum'));
  randomPictures.push(new Picture('chair', 'chair'));
  randomPictures.push(new Picture('cthulhu', 'cthulhu'));
  randomPictures.push(new Picture('dog-duck', 'dog-duck'));
  randomPictures.push(new Picture('dragon', 'dragon'));
  randomPictures.push(new Picture('pen', 'pen'));
  randomPictures.push(new Picture('pet-sweep', 'pet-sweep'));
  randomPictures.push(new Picture('scissors', 'scissors'));
  randomPictures.push(new Picture('shark', 'shark'));
  randomPictures.push(new Picture('sweep', 'sweep'));
  randomPictures.push(new Picture('tauntaun', 'tauntaun'));
  randomPictures.push(new Picture('unicorn', 'unicorn'));
  randomPictures.push(new Picture('usb', 'usb'));
  randomPictures.push(new Picture('water-can', 'water-can'));
  randomPictures.push(new Picture('wine-glass', 'wine-glass'));

  function runMath() {
    return Math.floor(Math.random() * randomPictures.length);
  }

  function generateThree() {
    var img1 = runMath();

    var divEl = document.createElement('div');
    divEl.innerHTML = '<img src=' + randomPictures[img1].newPath;
    randomPictures[img1].timesShown++;
    showImage.appendChild(divEl);

    var img2 = runMath(Picture);

    while (img1 === img2) {
      img2 = runMath();
    }

    var divElTwo = document.createElement('div');
    divElTwo.innerHTML = '<img src=' + randomPictures[img2].newPath;
    randomPictures[img2].timesShown++;
    showImage.appendChild(divEl2);

    var img3 = runMath();

    while (img3 === img1 || img3 === img2) {
      img3 = runMath();
    }

    var divElThree = document.createElement('div');
    divElThree.innerHTML = '<img src=' + randomPictures[img3].newPath;
    randomPictures[img3].timesShown++;
    showImage.appendChild(divEl3);
  }

  function handleClick(event) {
    console.log('you done clicked on ' + event.target.alt);

    for (var q = 0; q < randomPictures.length; q++) {
      if (event.target.alt === randomPictures[q].imgName) {
        randomPictures[q].timesClicked++;
      }
      showImg.innerHTML = ' ';

      generateThree();
    }
  }

  newClick.addEventListener('click', handleClick);

  generateThree();
  handleClick();
