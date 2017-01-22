var mainImg= document.getElementsByClassName('mainImg')[0],
	tImgs = document.getElementsByClassName('img'),
	len = tImgs.length,
	lrgImgArr,
	src= tImgs[0].getAttribute('src');

	function append (newimg){ 
		mainImg.innerHTML ='<img class="largeImg" src="./img/edge'+newimg+'.jpg">'};

		append(1)

for(var i = 0;i<len;i++){
	tImgs[i].addEventListener('mouseover',function(){
		this.style.opacity = '1'
	})
	tImgs[i].addEventListener('mouseout',function(){
		this.style.opacity = '.46'
	})
	tImgs[i].addEventListener('click',function(){
		var cur=this.getAttribute('id');
		cur = parseInt(cur)
		console.log(cur)
		append(cur)
	})
}
	// var cur=this.getAttribute('src'),
	// 	append = mainImg.innerHTML ='<img class="largeImg" src="'+cur+'">'
	



//good pics__
//bevel 
//bullnose
//eased
//triple-pencil
//waterfall

//blurry__
//classic-ogee
//dupont-bullnose
//half-bullnose