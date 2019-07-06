//加载动画延时
setTimeout(
    "loding.classList.remove('active')", 888
)

//控制topNavBar动画
let topNavBar = document.getElementById('topNavBar')
document.onscroll = function () {
    if (scrollY > 0) {
        topNavBar.classList.add('active')
    } else {
        topNavBar.classList.remove('active')
    }
}

let li = document.querySelectorAll('div.topNavBar-inner > nav > ul > li')
for (i = 0; i < li.length; i++) {
    li[i].onmouseover = function (move) {
        //获取当前监听元素
        let li = move.currentTarget
        //给监听元素添加类
        li.classList.add('active')
    }
    li[i].onmouseout = function (move) {
        //获取当前监听元素
        let li = move.currentTarget
        //移除类
        li.classList.remove('active')
    }
}


//选择项目类型
nav1.onclick = function () {
    navBarInner.className = "navBar-inner state-1"
}
nav2.onclick = function () {
    navBarInner.className = "navBar-inner state-2"
}
nav3.onclick = function () {
    navBarInner.className = "navBar-inner state-3"
}

