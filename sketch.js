function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (var x = 0; x < windowWidth + 50; x += 50) {
    for (var y = 0; y < windowHeight + 50; y += 50) {

      stroke(30);

      var colorListBlue = ["#2121DE", "#00FFFF", "#1E90FF", "#10517B"];
      var colorListRed = ["#FD0000", "#DC143C", "#B22222", "#C2423D"];
      var colorListGreen = ["#00FF00", "#7FFF00", "#ADFF2F", "#88D969"];
      var colorListYellow = ["#FFFF00", "#FFD700", "#FF8C00", "#FBEC5D"];

      var g = Math.round(random() * (colorListBlue.length - 1));
      var h = Math.round(random() * (colorListRed.length - 1));
      var i = Math.round(random() * (colorListGreen.length - 1));
      var j = Math.round(random() * (colorListYellow.length - 1));


      if (x <= 200 && y > 600) {
        fill(color(colorListRed[h]));
      } else if (x == 250 && y > 400) {
        fill(color(colorListBlue[g]));
      } else if (x > 250 && x < 400 && y > 500) {
        fill(color(colorListBlue[g]));
      } else if (x > 250 && x < 450 && y > 450 && y <= 500) {
        fill(color(colorListRed[h]));
      } else if (x >= 400 && x < 450 && y > 450) {
        fill(color(colorListRed[h]));
      } else if (x > 400 && x < 550 && y > 200 && y < 400) {
        fill(color(colorListYellow[j]));
      } else if (x > 500 && x < 650 && y > 450) {
        fill(color(colorListGreen[i]));
      } else if (x >= 650 && x < 800 && y > 450 && y < 600) {
        fill(color(colorListGreen[i]));
      } else if (x > 650 && x < 1000 && y > 600) {
        fill(color(colorListYellow[j]));
      } else if (x > 900 && x < 1000 && y > 400 && y <= 600) {
        fill(color(colorListRed[h]));
      } else if (x >= 1000 && x < 1050 && y > 550) {
        fill(color(colorListRed[h]));
      } else if (x > 1100 && x < 1350 && y > 600) {
        fill(color(colorListGreen[i]));
      } else if (x > 1150 && x < 1400 && y > 550 && y <= 600) {
        fill(color(colorListBlue[g]));
      } else {
        fill("black");
      }


      rect(x, y, 50, 50);
    }
  }
}
