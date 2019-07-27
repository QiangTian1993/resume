!function () {
    let view = document.querySelectorAll('[data-x]')
    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            let scrollTop = window.scrollY
            let index = 0
            if (scrollTop >= 0) {
                highlight()
                for (let i = 0; i < view.length; i++) {
                    view[i].classList.add('offset')
                    view[index].style.animation = 'upSlide .8s ease 0s'
                    view[index].classList.remove('offset')
                }
            }
            document.addEventListener('scroll', function () {
                //窗口滚动高度
                scrollTop = window.scrollY
                highlight()
            })
            function highlight() {
                //对比大小
                for (let i = 0; i < view.length; i++) {
                    if (Math.abs(view[i].offsetTop - scrollTop) < Math.abs(view[index].offsetTop - scrollTop)) {
                        index = i
                    }
                }
                //获取高亮元素的id
                let id = view[index].id
                //找到href为高亮元素的节点
                let sibling = document.querySelector('a[href="#' + id + '"]').parentNode.parentNode.children
                for (let i = 0; i < sibling.length; i++) {
                    sibling[i].classList.remove('highlight')
                }
                document.querySelector('a[href="#' + id + '"]').parentNode.classList.add('highlight')
                view[index].style.animation = 'upSlide .8s ease 0s'
                view[index].classList.remove('offset')
            }
        }
    }
    controller.bindEvents(view)
}.call()