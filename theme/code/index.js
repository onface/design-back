__inline('../vendor/clipboard.js')
$(function () {
    $('.face-one-code-info-switchCode').on('click', function () {
        $(this).closest('.face-one-code').toggleClass('face-one-code--open')
    })
    $('.face-one-code-source-tool-copy').each(function () {
        var node = this
        var clipboard = new Clipboard(node, {
            target: function (trigger) {
                return $(trigger).closest('.face-one-code-source').find('pre').get(0)
            }
        })
    })
})
