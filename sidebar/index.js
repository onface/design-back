!(function () {
    function markrunSidebar(settings) {
        settings = settings || {}
        settings.content = settings.content || document.body
        var map = {}
        var sidebar = document.createElement('ul')
        var childNodes = settings.content.childNodes
        var childNodesLength = childNodes.length
        var i = 0
        var currentSubHeaderId = null
        for (; i<childNodesLength; i++) {
            var element = childNodes[i]
            var id = element.id
            var text = element.innerText
            var data = {
                id: id,
                text: text
            }
            switch (element.tagName) {
                case 'H2':
                    currentSubHeaderId = id
                    map[id] = map[id] || data
                    break
                // case 'H3':
                //     if (currentSubHeaderId !== null) {
                //         map[currentSubHeaderId].child = map[currentSubHeaderId].child ||[]
                //         map[currentSubHeaderId].child.push(data)
                //     }
                //     break
                default:
            }
        }
        for(var key in map) {
            var item = map[key]
            var li = document.createElement('li')
            var link = document.createElement('a')
            link.innerHTML = item.text
            link.setAttribute('href', '#' + item.id)
            link.setAttribute('class', 'markdown-sidebar-link')
            li.appendChild(link)
            sidebar.appendChild(li)
            if (item.child) {
                var littleUl = document.createElement('ul')
                item.child.forEach(function (littleTitle) {
                    var littleLi = document.createElement('li')
                    var littleLink = document.createElement('a')
                    littleLink.innerHTML = littleTitle.text
                    littleLink.setAttribute('href', '#' + littleTitle.id)
                    littleLink.setAttribute('class', 'markdown-sidebar-link')
                    littleLi.appendChild(littleLink)
                    littleUl.appendChild(littleLi)
                })
                li.appendChild(littleUl)
            }
        }
        settings.element.appendChild(sidebar)
        return map
    }
    if (typeof window !== 'undefined') {
        window.markrunSidebar = markrunSidebar
    }
    if (typeof module !== 'undefined') {
        module.exports = markrunSidebar
    }
})()


markrunSidebar({
    element: document.getElementById('face-one-sidebar'),
    content: document.getElementById('face-one-cnt'),
})
var intersectionObserver = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) {
        return
    }
    $('.markdown-sidebar-link--on').removeClass('markdown-sidebar-link--on')
    $('.markdown-sidebar-link[href="#' + entries[0].target.id + '"]').addClass('markdown-sidebar-link--on')
})
$('.markdown-sidebar-link').on('click', function () {
    $('.markdown-sidebar-link--on').removeClass('markdown-sidebar-link--on')
    $(this).addClass('markdown-sidebar-link--on')
})
$('#face-one-cnt h2').each(function () {
    intersectionObserver.observe(this)
})
