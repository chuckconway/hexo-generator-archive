"use strict"

hexo.extend.generator.register('archive', function(locals){
    
    var posts = locals.posts.sort('-date');
    
  return {
    path: 'archives/index.html',
    data: posts,
    layout: ['archive', 'index']
  }
});
