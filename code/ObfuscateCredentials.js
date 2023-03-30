document.body.style.border = "5px solid red";

//Plus qu a trouver le regex pattern qui va bien

function replacer(match){
    /*
    Function use when a match is found.
    This is used to keep the exact same variable name and just replace 
    the value of the credentials by a random value
    */
    console.log(match)
    var variable = match.split("=")
    return variable[0].concat(" = qshdlqhlqhfqfjdshqhjd")
}

function SearchCredentials(data){
    /*
    function used to search for credentials and to replace when found
    */
    const keyword = /(api)|(key)|(username)|(user)|(uname)|(pw)|(password)|(pass)|(email)|(mail)|(credentials)|(credential)|(login)|(token)|(secret)|(apikey)|(passwd)/
    const word_regex = /\s*=\s*"?[a-zA-Z0-9]{15,}(==)?"?/

    const credentials_regex = new RegExp("(" + keyword.source + ")"+ word_regex.source, "gi")

    var textareabis = document.querySelector('textarea')
    var input = data.target.value;

    var replaced = input.replace(credentials_regex, replacer)
    textareabis.value = replaced
}

var textarea = document.querySelector('textarea')
textarea.addEventListener('input', SearchCredentials)