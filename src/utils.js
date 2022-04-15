export function random(videos) {
  var videosArr = [];
  for (var i = 0; i < 6; i++) {
    var vid = [...videos]
    var rand = vid[Math.floor(Math.random() * 16)];
    videosArr.push(rand);
  }
  return videosArr
}