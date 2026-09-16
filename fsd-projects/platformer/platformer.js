
$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms

     createPlatform(100, 600, 200, 10, "blue");
     createPlatform(500, 670, 25, 10, "purple");
     createPlatform(100, 500, 100, 10, "orange");
     createPlatform(300, 400, 25, 10,"pink");
     createPlatform(500, 300, 25, 10, "red");
     createPlatform(700, 200, 25, 10, "green");
     createPlatform(900, 300, 100, 10, "yellow");
     createPlatform(1200, 400, 110, 10,"skyblue");


    // TODO 3 - Create Collectables
    createCollectable("grace", 900, 267);
    createCollectable("diamond", 1200, 367);
    createCollectable("max", 500, 267)



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 600, 700);
    createCannon("right", 600, 1300);
    createCannon("top", 100, 700);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
