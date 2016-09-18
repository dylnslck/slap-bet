$(document).ready(() => {
  const date = new Date(2017, 5, 7);
  const now = new Date();
  const diff = (date.getTime() / 1000) - (now.getTime() / 1000);

  const clock = $('#clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
		countdown: true
  });
});
