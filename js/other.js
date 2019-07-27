!function () {
    //选择项目类型
    addClass(nav1, 1)
    addClass(nav2, 2)
    addClass(nav3, 3)

    function addClass(items, n) {
        items.onclick = function () {
            navBarInner.className = "navBar-inner state-" + n
        }
    }
}.call()