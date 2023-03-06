function showLengthOfTime() {
    var start = new Date("October 30, 2020 00:00:00");
    setInterval(function() {
      var now = new Date();
      var diff = now - start;

      var year = Math.floor(diff / 31536000000);
      diff -= year * 31536000000;

      var month = Math.floor(diff / 2592000000);
      diff -= month * 2592000000;

      var day = Math.floor(diff / 86400000);
      diff -= day * 86400000;

      var hour = Math.floor(diff / 3600000);
      diff -= hour * 3600000;

      var minute = Math.floor(diff / 60000);
      diff -= minute * 60000;

      var second = Math.floor(diff / 1000);

      var countdown = year + " Tahun<br\>" + month + " Bulan<br\>" + day + " Hari<br\>" + hour + " Jam<br\>" + minute + " Menit<br\>" + second + " Detik";

      document.getElementById("countdown").innerHTML = countdown;
    }, 1000);
  }