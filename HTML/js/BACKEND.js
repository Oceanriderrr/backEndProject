//This is the code for our backend, essentially its just a post request to our database. 


//This is POST
exports = function() {
    const http = context.services.get("myHttp");
    return http.post({
        url: "https://www.example.com/messages",
        body: { msg: "This is in the body of a POST request!" },
        encodeBodyAsJSON: true
      })
      .then(response => {
        // The response body is encoded as raw BSON.Binary. Parse it to JSON.
        const ejson_body = EJSON.parse(response.body.text());
        return ejson_body;
      });
  };



