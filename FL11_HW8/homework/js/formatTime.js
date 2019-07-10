function formatTime(time) {
  const day = parseInt(time / 1440);
  const hour = parseInt(time % 1440 / 60);
  const minute = time % 1440 % 60;

  return `${day} day(s) ${hour} hour(s) ${minute} minute(s).`;
}

formatTime(120);
formatTime(59);
formatTime(3601);