const timeFormatter = (secondsProps) => {
  let secondToBeFormatted = parseInt(secondsProps, 10); // don't forget the second param
  var hours = Math.floor(secondToBeFormatted / 3600);
  var minutes = Math.floor((secondToBeFormatted - hours * 3600) / 60);
  var seconds = secondToBeFormatted - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return hours + ':' + minutes + ':' + seconds;
};

export default timeFormatter;
