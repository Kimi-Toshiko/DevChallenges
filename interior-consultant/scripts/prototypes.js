HTMLElement.prototype.addAnimation = function (name, duration) {
    $(this).css("animation-name", name)
           .css('animation-duration', duration)
           .css('animation-timing-function', 'linear')
           .css('animation-delay', '0s')
           .css('animation-direction', 'alternate')
           .css('animation-iteration-count', '1')
           .css('animation-fill-mode', 'forwards')
}