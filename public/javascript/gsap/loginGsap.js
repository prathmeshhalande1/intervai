console.log("loginGsap is Running");
let i = 0;
let vw = window.innerWidth;
let con1=(65/100)*vw;
let elm1=(30/100)*vw;
let position1 = con1-elm1-(con1*0.18)
let position2 = con1-elm1-(con1*0.9)
//console.log(`vh ${vh} con1 ${con1} elm ${elm1} position ${position}`)



$(document).ready(function(){

  $("#loginButton").click(function(){
    gsap.to("#Box0", {
      x: position1 + "px",
      duration: 1
    });

    $("#loginButtonBox").removeClass("active").addClass("unactive");
    $("#signupButtonBox").removeClass("unactive").addClass("active");
    $(".loginBox").removeClass("unactive").addClass("active");
    $(".signupBox").removeClass("active").addClass("unactive");
  });

  $("#signupButton").click(function(){
    gsap.to("#Box0", {
      x: "-" + position2 + "px",
      duration: 1
    });

    $("#signupButtonBox").removeClass("active").addClass("unactive");
    $("#loginButtonBox").removeClass("unactive").addClass("active");
    $(".signupBox").removeClass("unactive").addClass("active");
    $(".loginBox").removeClass("active").addClass("unactive");
  });

});



function loginsuccessful(){
$(document).ready(function () {
  gsap.set("#Box0", {
  x: window.innerWidth / 2,
  xPercent: -50
});
});
}

function buttonHoverAnimation() {
  $(".button").hover(function () {
    const $circle = $(this).find(".hover-circle");
    const $text = $(this).find(".buttonText");

    gsap.to($circle, {
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    gsap.to($text, {
      color: "#f2f2f2",
      duration: 0.2
    });

  }, function () {
    const $circle = $(this).find(".hover-circle");
    const $text = $(this).find(".buttonText");

    gsap.to($circle, {
      scale: 0,
      duration: 0.6,
      ease: "power2.inOut"
    });

    gsap.to($text, {
      color: "#000000",
      duration: 0.2
    });
  });
}

function animetion2() {
  $("#signupEmail").on('input', function () {
    let a = $("#signupEmail").val();
    if (a != "") {
      $("#signupEmailLabel").hide(); 
    } else {
      $("#signupEmailLabel").show(); 
    }
  });
  $("#signupPassword").on('input', function () {
    let a = $("#signupPassword").val();
    if (a != "") {
      $("#signupPasswordLable").hide(); 
    } else {
      $("#signupPasswordLable").show(); 
    }
  });
  $("#signupConfirmPassword").on('input', function () {
    let a = $("#signupConfirmPassword").val();
    if (a != "") {
      $("#signupConfirmPasswordLable").hide(); 
    } else {
      $("#signupConfirmPasswordLable").show(); 
    }
  });
  $("#loginUsername").on('input', function () {
    let a = $("#loginUsername").val();
    if (a != "") {
      $("#loginEmailLabel").hide(); 
    } else {
      $("#loginEmailLabel").show(); 
    }
  });
  $("#loginPassword").on('input', function () {
    let a = $("#loginPassword").val();
    if (a != "") {
      $("#loginPasswordLabel").hide(); 
    } else {
      $("#loginPasswordLabel").show(); 
    }
  });

  $("#signupNames").on('input', function () {
    let a = $("#signupNames").val();
    if (a != "") {
      $(".i1").hide(); 
      console.log("hide");
    } else {
      $(".i1").show(); 
    }
  });
}
animetion2();
buttonHoverAnimation(); 






