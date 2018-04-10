const formatDate = time => {
  // return `${timeInSeconds}s`;

  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = Math.floor(time % 60);

  if (time < 60) {
    return time + "s";
  } else if (!time) {
    return 0 + "s";
  } else if (seconds === 0 && hours === 0) {
    return minutes + "m";
  } else if (hours === 0) {
    return minutes + "m " + seconds + "s";
  } else if (minutes === 0 && seconds === 0) {
    return hours + "h";
  } else if (seconds === 0) {
    return hours + "h " + minutes + "m";
  } else if (minutes === 0) {
    return hours + "h " + seconds + "s";
  } else {
    return hours + "h " + minutes + "m " + seconds + "s";
  }
};

module.exports = formatDate;
