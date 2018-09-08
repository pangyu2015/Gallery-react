require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

//获取图片相关的数据
var imgDatas=require('../data/imgDatas.json');

//利用自执行函数,将图片名信息转成图片URL路径信息
imgDatas=(function getImageURL(Arr){
	for(var i=0,j=Arr.length;i<j;i++){
		var single=Arr[i];
		
		single.imageURL=require('../images/'+single.fileName);
		
		Arr[i]=single;
	}
	
	return Arr;
})(imgDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
