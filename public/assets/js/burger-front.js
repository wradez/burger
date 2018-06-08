$(".btn").on("click", function(){

    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgers").val().trim(),
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
})