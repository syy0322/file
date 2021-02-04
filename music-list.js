const ap = new APlayer({
    container: document.getElementById('aplayer'),
    mini: false,
    autoplay: false,
    theme: '#767676',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    lrcType: 3,
    audio: [
        {
            name: 'Jackpot',
            artist: 'TheFatRat',
            url: 'https://file.imsyy.top/music/songs/TheFatRat-Jackpot.mp3',
            cover: 'https://p2.music.126.net/MoyUJHTq1RcFvGy3N3Ooxg==/18596040161820969.jpg?param=130y130',
            lrc: 'https://file.imsyy.top/music/lrc/music.lrc',
            theme: '#813D25'
        },
        {
            name: 'Mojito',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-Mojito.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000009C3rp3Kfwg0_3.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-Mojito.lrc',
            theme: '#3fbce8'
        },
        {
            name: '夜曲',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%A4%9C%E6%9B%B2.lrc',
            theme: '#171513'
        },
        {
            name: '发如雪',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%8F%91%E5%A6%82%E9%9B%AA.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000024bjiL2aocxT_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E5%8F%91%E5%A6%82%E9%9B%AA.lrc',
            theme: '#171513'
        },
        {
            name: '稻香',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%A8%BB%E9%A6%99.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%A8%BB%E9%A6%99.lrc',
            theme: '#e3ae55'
        },
        {
            name: '七里香',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E4%B8%83%E9%87%8C%E9%A6%99.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003DFRzD192KKD_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E4%B8%83%E9%87%8C%E9%A6%99.lrc',
            theme: '#395732'
        },
        {
            name: '晴天',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%99%B4%E5%A4%A9.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%99%B4%E5%A4%A9.lrc',
            theme: '#08362e'
        },
        {
            name: '以父之名',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E4%BB%A5%E7%88%B6%E4%B9%8B%E5%90%8D.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000MkMni19ClKG_3.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E4%BB%A5%E7%88%B6%E4%B9%8B%E5%90%8D2.lrc',
            theme: '#08362e'
        },
        {
            name: '本草纲目',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%9C%AC%E8%8D%89%E7%BA%B2%E7%9B%AE.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E6%9C%AC%E8%8D%89%E7%BA%B2%E7%9B%AE.lrc',
            theme: '#171513'
        }, {
            name: '简单爱',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AE%80%E5%8D%95%E7%88%B1.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000I5jJB3blWeN_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AE%80%E5%8D%95%E7%88%B1.lrc',
            theme: '#c21c0f'
        },
        {
            name: '青花瓷',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E9%9D%92%E8%8A%B1%E7%93%B7.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002eFUFm2XYZ7z_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E9%9D%92%E8%8A%B1%E7%93%B7.lrc',
            theme: '#000000'
        },
        {
            name: '烟花易冷',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%83%9F%E8%8A%B1%E6%98%93%E5%86%B7.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000000bviBl4FjTpO_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%83%9F%E8%8A%B1%E6%98%93%E5%86%B7.lrc',
            theme: '#86b5bb'
        },
        {
            name: '给我一首歌的时间',
            artist: '周杰伦',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BB%99%E6%88%91%E4%B8%80%E9%A6%96%E6%AD%8C%E7%9A%84%E6%97%B6%E9%97%B4.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002Neh8l0uciQZ_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%BB%99%E6%88%91%E4%B8%80%E9%A6%96%E6%AD%8C%E7%9A%84%E6%97%B6%E9%97%B4.lrc',
            theme: '#e3ae55'
        },
        {
            name: '千里之外',
            artist: '周杰伦 / 费玉清',
            url: 'https://file.imsyy.top/music/songs/%E5%91%A8%E6%9D%B0%E4%BC%A6%26%E8%B4%B9%E7%8E%89%E6%B8%85-%E5%8D%83%E9%87%8C%E4%B9%8B%E5%A4%96.mp3',
            cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000002jLGWe16Tf1H_1.jpg?max_age=2592000',
            lrc: 'https://file.imsyy.top/music/lrc/%E5%91%A8%E6%9D%B0%E4%BC%A6%26%E8%B4%B9%E7%8E%89%E6%B8%85-%E5%8D%83%E9%87%8C%E4%B9%8B%E5%A4%96.lrc',
            theme: '#171513'
        }
    ]
});