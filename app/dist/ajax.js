function ajax(url, options) {
  options.url = url;

  var xhr = new XMLHttpRequest()

  xhr.open((!options.type ? 'GET': options.type), options.url, true)
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
      options.success(this.response)
    }
  }
  xhr.send("json=" + JSON.stringify(options.data))
}

/*
ajax(url, {
  type: "POST",
  data: "data",
  success: function(response) {
    console.log(res);
  }
})
 */
