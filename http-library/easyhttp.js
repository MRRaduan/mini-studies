function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make http get request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make http post request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'aplication/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }


  this.http.send(JSON.stringify(data));
}

// Make http put request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'aplication/json');

  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  }


  this.http.send(JSON.stringify(data));
}

// Make http delete request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

