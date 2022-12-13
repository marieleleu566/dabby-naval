const video2 = () => {
    $("#video2").hover(function(e) { //Only show controls on hover
      if(e.type === "mouseenter") {
          $(this).attr("controls", "controls");
      } else if(e.type === "mouseleave") {
          $(this).removeAttr("controls");
      }
    });
}
export {video2};
