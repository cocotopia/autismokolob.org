import React from "react";

function new_script(src) {
  return new Promise(function(resolve, reject) {
    var script = document.createElement("script");
    script.async = "async";
    script.defer = "defer";
    script.crossOrigin = "anonymous";
    script.src = src;
    script.id = "script-facebook";
    script.addEventListener("load", function() {
      resolve();
    });
    script.addEventListener("error", function(e) {
      reject(e);
    });
    document.body.appendChild(script);
    //document.getElementById("root").appendChild(script);
  });
}
// Promise Interface can ensure load the script only once.
var my_script = new_script(
  "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.3&appId=170164016869020&autoLogAppEvents=1"
);

export default class WidgetFacebook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "start"
    };
  }

  do_load = () => {
    var self = this;
    my_script
      .then(function() {
        self.setState({ status: "done" });
      })
      .catch(function() {
        self.setState({ status: "error" });
      });
  };

  componentDidMount() {
    // var scriptFacebook = document.createElement("script");
    // scriptFacebook.async = "async";
    // scriptFacebook.defer = "defer";
    // scriptFacebook.crossOrigin = "anonymous";
    // scriptFacebook.src =
    //   "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.3&appId=170164016869020&autoLogAppEvents=1";
    // setTimeout(function() {
    //   document.getElementById("widget-facebook").appendChild(scriptFacebook);
    // }, 0);
  }

  componentWillUnmount() {
    //document.querySelector("#script-facebook").remove();
    //document.querySelector("#fb-root").innerHTML = "";
  }

  render() {
    var self = this;
    if (self.state.status === "start") {
      self.state.status = "loading";
      setTimeout(function() {
        self.do_load();
      }, 0);
    }

    return (
      <div>
        <div id="fb-root" />
        {/*<div>
          {self.state.status}{" "}
          {self.state.status === "done" && "here you can use the script loaded"}
        </div>*/}

        <div
          className="fb-page"
          data-href="https://www.facebook.com/KOLOBPERU/"
          data-tabs="mensajes"
          data-width="450"
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/KOLOBPERU/"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/KOLOBPERU/">KOLOB Autismo PERÚ</a>
          </blockquote>
        </div>
      </div>
    );
  }
}
