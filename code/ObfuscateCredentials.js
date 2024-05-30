function replacer(match) {
  /*
  Function used when a match is found.
  This is used to keep the exact same variable name and just replace 
  the value of the credentials with a random value.
  */
  console.log(match);
  var variable = match.split("=");
  return variable[0].concat(" = " + generateRandomString(variable[1].trim().length));
}

function generateRandomString(length) {
  /*
  Function to generate a random string of the same length as the original credential value.
  */
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function searchCredentials(data) {
  /*
  Function used to search for credentials and replace them when found.
  */
  const keywordRegex = /(api|key|username|user|uname|pw|password|pass|email|mail|credentials|credential|login|token|secret|apikey|passwd)/i;
  const wordRegex = /\s*=\s*["']?[a-zA-Z0-9]{15,}(==)?["']?/;

  const credentialsRegex = new RegExp(keywordRegex.source + wordRegex.source, "gi");

  var textareabis = document.querySelector('textarea');
  var input = data.target.value;

  var replaced = input.replace(credentialsRegex, replacer);
  textareabis.value = replaced;
}

var textarea = document.querySelector('textarea');
textarea.addEventListener('input', searchCredentials);
