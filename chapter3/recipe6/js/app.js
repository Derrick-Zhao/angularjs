var app = angular.module("MyApp", []);

app.directive("repeatNtimes", function() {
  return {
    restrict: "E",
    compile: function(tElements, attrs) {
      var content = tElements.children();
      for (var i=1; i<attrs.repeat; i++) {
        tElements.append(content.clone());
      }

      return function (scope, element, attrs) {
        element.on("click", "h1", function() {
          $(this).css({ "background-color": "red" });
        });
      };
    }
  };
});