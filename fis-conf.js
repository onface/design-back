fis.hook(require('fis3-hook-relative'))
fis.match('**', {
    relative: true
})
fis.match('**.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
})
