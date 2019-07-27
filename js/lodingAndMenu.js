!function () {
    let view = document.querySelectorAll('div.topNavBar-inner > nav > ul > li')
    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            setTimeout(
                "loding.classList.remove('active')", 300
            )
            for (i = 0; i < view.length; i++) {
                view[i].onmouseover = function (move) {
                    //获取当前监听元素
                    let li = move.currentTarget
                    //给监听元素添加类
                    li.classList.add('active')
                }
                view[i].onmouseout = function (move) {
                    //获取当前监听元素
                    let li = move.currentTarget
                    //移除类
                    li.classList.remove('active')
                }
            }
        }

    }
    controller.init.call(controller, view)
}.call()