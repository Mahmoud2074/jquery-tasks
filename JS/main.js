// <------------------------------------------- task 1  -------------------------------------> 

// $(document).ready(function() {
//     var $passwordInput = $("#password");
//     var $btnShow = $("#show");

//     $btnShow.on("click", function() {
//       if ($passwordInput.attr("type") === "password") {
//         $passwordInput.attr("type", "text");
//         $btnShow.text("hide");
//       } else {
//         $passwordInput.attr("type", "password");
//         $btnShow.text("show");
//       }
//     });
//   });



// <------------------------------------------- task 2  -------------------------------------> 


// $(document).ready(function() {
//     $(".links a").on("click", function() {
//         var data = $(this).attr("data");
//         $(".gallary img").hide();
//         $("." + data).show();
//     });
// });



// <------------------------------------------- task 3  -------------------------------------> 


// $(document).ready(function() {
//     var imgs = [
//         "/images/image12.webp",
//         "/images/image13.webp",
//         "/images/image14.webp",
//         "/images/image10.webp",
//     ];

//     var i = 0;

//     $("#next").click(function() {
//         i++;
//         $("#img").attr("src", imgs[i % imgs.length]);
//     });

//     $("#prev").click(function() {
//         i--;
//         if (i < 0) {
//             i = imgs.length - 1;
//         }
//         $("#img").attr("src", imgs[i % imgs.length]);
//     });
// });



// <------------------------------------------- task 4  -------------------------------------> ( Scroll animation bar)



// $(document).ready(function() {
//     const progressBar = $('<div>').addClass('progress-bar');
//     $('body').append(progressBar);

//     $(window).on('scroll', function() {
//       const windowHeight = $(document).height() - $(window).height();
//       const scrollPosition = $(window).scrollTop();
//       const scrollPercentage = (scrollPosition / windowHeight) * 100;

//       progressBar.css('width', scrollPercentage + '%');
//     });
//   });