!function () {
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

}.call()