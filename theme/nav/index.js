$(function () {
    var parentClass = '.face-one-nav'
    var cntClass = '.face-one-nav-F-inner'
    var toggleClass = "face-one-nav--open"
    var $switch = $('.face-one-nav-switch')
    $switch.on('click', function () {
        var $this = $(this)
        var $nav = $this.closest(parentClass)
        $nav.toggleClass(toggleClass)
    })
    $(parentClass).on('click', function (e) {
        var $target = $(e.target)
        if ($target.hasClass(parentClass.slice(1))) {
            $target.removeClass(toggleClass)
        }
    })
    $('.face-one-nav-item--group .face-one-nav-item-label').on('click', function () {
        $(this).closest('.face-one-nav-item--group').toggleClass('face-one-nav-item--group-on')
    })
})
