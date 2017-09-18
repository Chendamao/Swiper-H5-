//->REM响应式布局
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);
//banner的处理
new Swiper('.swiper-container', {
    loop: true,
    direction: 'vertical',

    /*当切换结束后,给当前展示的区域添加对应的ID,由此实现对应的动画效果*/
    onSlideChangeEnd: function (swiper) {
        var slideAry = swiper.slides; //获取当前一共有多少个活动块,包含loop模式下前后多加的两个
        var curIn = swiper.activeIndex; //当前显示区域的索引
        var total = slideAry.length;

        //计算ID是page?
        var targetId = 'page';
        switch (curIn){
            case 0:
                targetId += total-2;
                break;
            case total-1:
                targetId += 1;
                break;
            default:
                targetId += curIn
        }

        //给当前的活动快设置ID即可,还要把其余的移除
        [].forEach.call(slideAry, function (item,index) {
            if(curIn === index){
                item.id = targetId
            }else {
                item.id = null
            }
        });
    }
});
// 音频处理
~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('musicAudio');

    musicMenu.addEventListener('click', function () {
        if(musicAudio.paused){  // 处于暂停状态
            musicAudio.play();
            musicMenu.className = 'music move';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
    }, false);


    function controlMusic() {
        musicAudio.volume = .1;
        musicAudio.play();  //音频播放
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music move';
        }, false)
    }

    window.setTimeout(controlMusic, 1000);

}();