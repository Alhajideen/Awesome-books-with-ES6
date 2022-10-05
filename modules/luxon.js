class Time {
  static displayTime() {
    const timeNow = luxon.DateTime.now()
      .setLocale(navigator.language)
      .toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: 'false',
      });

    document.querySelector('.display-time').textContent = timeNow;
  }
}

export default Time;
