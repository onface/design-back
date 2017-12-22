$(function () {
    var parentClass = '.face-one-head-nav'
    var toggleClass = "face-one-head-nav--open"
    $('.face-one-head-nav-switch').on('click', function () {
        var $this = $(this)
        var $nav = $this.closest(parentClass)
        $nav.toggleClass(toggleClass)
    })
    var removeClass = function (e) {
        if ($(e.target).closest(parentClass).length === 0) {
            var $nav = $(parentClass)
            $nav.removeClass(toggleClass)
        }
    }
    $(document).on('click', removeClass)
    document.addEventListener('touchstart', removeClass)
})
