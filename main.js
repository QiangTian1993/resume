//加载动画延时
setTimeout(
    "loding.classList.remove('active')", 300
)

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

//导航栏增加跳转锚点

// 获取导航栏下的所有a标签
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

let aTags = document.querySelectorAll('div.topNavBar-inner > nav > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (aTags) {

        //清除a连接的默认跳转
        aTags.preventDefault()
        //获取当前监听的a标签
        let aTarget = aTags.currentTarget
        //获取当前a标签的href
        let href = aTarget.getAttribute('href')
        //获取id为href的元素
        let element = document.querySelector(href)
        //页面滚动高度等于id为href元素距窗口顶部的距离
        //获取窗口已滚动高度
        let currentTop = window.scrollY
        //获取元素距离页面顶部的高度
        let targetTop = element.offsetTop - 80
        //页面需要滚动的高度
        let s = targetTop - currentTop
        //100px走3ms
        var t = Math.abs((s / 100) * 300)
        if (t > 500) { t = 500 }
        const coords = { y: currentTop };
        const tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Cubic.InOut)
            .onUpdate(() => {
                window.scrollTo(0, coords.y)
            })
            .start();
    }
}

let highlightElement = document.querySelectorAll('[data-x]')
for (let i = 0; i < highlightElement.length; i++) {
    if (i != 0) {
        highlightElement[i].classList.add('offset')
    }
}


//导航栏高亮
//滚动事件
let topNavBar = document.getElementById('topNavBar')
document.onscroll = function () {
    //控制topNavBar动画
    if (scrollY > 0) {
        topNavBar.classList.add('active')
    } else {
        topNavBar.classList.remove('active')
    }

    //窗口滚动高度
    let scrollTop = window.scrollY
    //获取需要高亮的元素
    let highlightElement = document.querySelectorAll('[data-x]')
    //对比大小
    let index = 0
    for (let i = 1; i < highlightElement.length; i++) {
        if (Math.abs(highlightElement[i].offsetTop - scrollTop) < Math.abs(highlightElement[index].offsetTop - scrollTop)) {
            index = i
        }
    }
    //获取高亮元素的id
    let id = highlightElement[index].id
    //找到href为高亮元素的节点
    let sibling = document.querySelector('a[href="#' + id + '"]').parentNode.parentNode.children
    for (let i = 0; i < sibling.length; i++) {
        sibling[i].classList.remove('highlight')
    }
    document.querySelector('a[href="#' + id + '"]').parentNode.classList.add('highlight')
    highlightElement[index].style.animation = 'upSlide s ease 0s'
    highlightElement[index].classList.remove('offset')
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