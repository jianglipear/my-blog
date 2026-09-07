'use strict'

const fs = require('fs')
const path = require('path')

hexo.extend.generator.register('photo-wall', function (locals) {
  const photosDir = path.join(this.base_dir, 'source', 'img', 'photo-wall')
  const photos = []

  if (fs.existsSync(photosDir)) {
    fs.readdirSync(photosDir)
      .filter(f => /\.(png|jpe?g|gif|webp|avif|bmp|svg)$/i.test(f))
      .sort()
      .forEach(f => {
        photos.push({
          src: hexo.config.root + 'img/photo-wall/' + encodeURIComponent(f),
          name: f
        })
      })
  }

  return {
    path: 'photo-wall/index.html',
    layout: ['page'],
    data: {
      title: '照片墙',
      type: 'photo-wall',
      photos,
      comments: false
    }
  }
})
