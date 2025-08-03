import pic from './assets/images/1.png' //后缀不能省略
console.log('pic', pic) //拿到绝对路径

// 默认参数为url
// import pic from './assets/images/1.png?url'
// raw 原始数据 Buffer 二进制字符串
// import pic from './assets/images/1.png?raw'

// 配置别名
import pic2 from '@assets/images/1.png'
console.log('pic2', pic2) //拿到绝对路径




const image = document.createElement('img')
image.src = pic
document.body.appendChild(image)