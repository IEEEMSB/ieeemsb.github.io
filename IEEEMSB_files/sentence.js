﻿anime.timeline({ loop: true })
    .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 3000,
        delay: function (el, i) {
            return 800 * i;
        }
    }).add({
        targets: '.ml15',
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 2500,
    });
