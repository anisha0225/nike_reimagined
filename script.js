
(function () {
  const locomotiveScroll = new LocomotiveScroll({
    lerp: 0.05,
  });
})();

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


function select(e) {
  return document.querySelector(e);
}

let ismobile = window.innerWidth < 768;




var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".ri-arrow-right-line",
    prevEl: ".ri-arrow-left-line",
  },
});



let content = [
  {
    description: " { Experience ultimate performance and style on the basketball court. }",
  },
  {
    description: " { Elevate your golf game with our innovative and comfortable golf shoes. }",
  },
  {
    description: " { Conquer any trail with our durable and supportive trail running shoes. }",
  },
  {
    description: " { Dominate the tennis court with our high-performance tennis shoes. }",
  },
  {
    description: " { Unleash your skills on the football field with our top-quality football shoes. }",
  },
];
function page3() {
  let curr = 0;
  select("#page3-part2-second p").textContent = content[curr].description;
  curr++;
  let images = [
    // select(".slide-am img:nth-child(5)"),
    select(".slides-am img:nth-child(4)"),
    select(".slides-am img:nth-child(3)"),
    select(".slides-am img:nth-child(2)"),
    select(".slides-am img:nth-child(1)"),
  ]

  let images2 = [
    // select(".slide-am img:nth-child(5)"),
    select(".slides-am2 img:nth-child(4)"),
    select(".slides-am2 img:nth-child(3)"),
    select(".slides-am2 img:nth-child(2)"),
    select(".slides-am2 img:nth-child(1)"),
  ]

  let tl = gsap.timeline({
    repeat: -1,
    onComplete: () => {
      gsap.set(images[2], {
        clipPath: "inset(0 0 0 0)"
      })
    }
  });
  let tl2 = gsap.timeline({
    repeat: -1,
  });

  let description = select("#page3-part2-second p");

  images.forEach((image, index) => {
    tl.to(image, {
      zIndex: index,
      duration: 0,
    })
      .from(image, {
        clipPath: "inset(50%)",
        ease: "circ",
        duration: 1,
      })
      .to(description, {
        opacity: 0,
        y: 30,
        duration: 0.3,
        ease: "sine",
      }, "<")
      .to(description, {
        textContent: content[index].description,
        y: 0,
        duration: 0.5,
        ease: "sine",
      },)
      .to(description, {
        opacity: 1,
        duration: 3.3,
        ease: "expo",
      }, "<")

  });


  images2.forEach((image, index) => {
    tl2.to(image, {
      zIndex: index,
    })
      .from(image, {
        clipPath: "inset(50%)",
        ease: "circ",
        duration: 1,
      })
      .to(image, {
        duration: 2.3,
      })
  });

}
page3();

function textAnimation() {

  function textIn(elem, stagger, top, yp) {
    gsap.from(elem, {
      yPercent: yp,
      ease: "circ",
      skewY: 10,
      stagger,
      scrollTrigger: {
        trigger: elem,
        start: `top ${top}%`,
        end: 'bottom 90%',
        scrub: 2,
      }
    })
  }

  textIn('.p-animate', 0, 90, 100)
  textIn('.p-animate2', 0, 90, 100)
  textIn('.p-animate3', .2, 90, 100)
  textIn('.heading_page2', 0, 90, 100)
  const text = SplitType.create('.p-animate5')
  textIn(text.words, .1, 90, 100)

  const text2 = SplitType.create('.p-animate7')
  textIn(text2.lines, 0, 90, 150)

  const text3 = SplitType.create('.p-animate8')
  textIn(text3.lines, 0, 90, 150)

  // const text4 = SplitType.create('.p-animate9')
  // textIn(text4.lines, .4, 100, 100)

  if (!ismobile) {

    gsap.from('.p-animate10', {
      yPercent: 100,
      skewY: 20,
      scrollTrigger: {
        trigger: 'footer',
        start: "top 30%",
        end: "bottom bottom",
        scrub: 1,
      }
    })


  }

  gsap.from(".p-animate9", {
    yPercent: 100,
    stagger: .3,
    ease: "circ",
    scrollTrigger: {
      trigger: "#page8",
      start: "top 50%",
      end: "bottom 90%",
    }
  })

}
textAnimation()



gsap.to("#page6-image2", {
  x: ismobile? -10:-50 ,
  ease: "sine",
  scrollTrigger: {
    trigger: "#page6",
    start: "top 90%",
    end: "bottom 90%",
    scrub: 1,
  }
})

gsap.to("#page6-image3", {
  x: ismobile? -10:-50 ,
  y: ismobile? -10:-50 ,
  ease: "sine",
  scrollTrigger: {
    trigger: "#page6",
    start: "top 90%",
    end: "bottom 90%",
    scrub: 1,
  }
})
gsap.to("#page6-image4", {
  x: ismobile? 14 : 100,
  ease: "sine",
  scrollTrigger: {
    trigger: "#page6",
    start: "top 90%",
    end: "bottom 90%",
    scrub: 1,
  }
})

gsap.to("#page6-image5", {
  x:ismobile? 10 : 50,
  y: -30,
  ease: "sine",
  scrollTrigger: {
    trigger: "#page6",
    start: "top 90%",
    end: "bottom 90%",
    scrub: 1,
  }
})

let toggle;
let tl = gsap.timeline({ paused: true });
function hamburger() {
  toggle = true;

  let ham1 = select(".ham-line-1");
  let ham2 = select(".ham-line-2");

  let icon = select(".hamburger");
  let hamContents = select("#ham-contents");
  gsap.set(hamContents, {
    clipPath: "inset(0 0 100% 0)",
  })

  tl.to(hamContents, {
    clipPath: "inset(0 0 0% 0)",
    ease: "favEase",
    duration: .5,
  }, "A")
  tl.to(ham1, {
    rotate: 45,
    y: 3.5,
    duration: .5,
    ease: "circ"
  }, "A")
  tl.to(ham2, {
    rotate: -45,
    y: -3.5,
    ease: "circ",
    duration: .5,
  }, "A")
  tl.from('.ham-row span h2', {
    yPercent: 100,
    stagger: .1,
    ease: "circ",
  }, "A")

  icon.addEventListener('click', () => {
    if (toggle === true) {
      tl.play();
    }
    else {
      tl.reverse();
    }
    toggle = !toggle
  });


  let home = select('.home-link');
  let news = select('.new-link');
  let blog = select('.blog-link');
  let sports = select('.sports-link');
  let best = select('.best-link');

  home.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: "#page1",
      duration: 1,
    })
    tl.reverse();
    toggle = !toggle
  });

  news.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: "#page3",
      duration: 2,
    })
    tl.reverse();
    toggle = !toggle
  });

  best.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: "#page4",
      duration: 2,
    })
    tl.reverse();
    toggle = !toggle
  });

  sports.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: "#page6",
      duration: 2,
    })
    tl.reverse();
    toggle = !toggle
  });

  blog.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: "#page8",
      duration: 2,
    })
    tl.reverse();
    toggle = !toggle
  });





}
hamburger()







