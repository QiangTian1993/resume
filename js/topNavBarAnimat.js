!function () {
    let view = document.getElementById('topNavBar')
    let controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            document.addEventListener('scroll', function (e) {
                //控制topNavBar动画
                if (scrollY > 0) {
                    view.classList.add('active')
                } else {
                    view.classList.remove('active')
                }
            })
        }
    }
    controller.init(view)
}.call()