var mainImg= document.getElementsByClassName('mainImg')[0],
	tImgs = document.getElementsByClassName('img'),
	len = tImgs.length,
	lrgImgArr = ['bevel-bullnose','bevel','bullnose','classic-ogee','double-bevel',
	'double-ogee','double-radius','half-bullnose','step-half-bullnose',
	'eased','dupont-bullnose','triple-pencil','waterfall'],
	src= tImgs[0].getAttribute('src');

	function append (newimg){ 
		mainImg.innerHTML ='<img class="largeImg" src="./img/visualizer/'+newimg+'-countertop.jpg">'};



for(var i = 0;i<len;i++){
	var cur =lrgImgArr[i];
	tImgs[i].addEventListener('mouseover',function(){
		this.style.opacity = '.56'
	})
	tImgs[i].addEventListener('mouseout',function(){
		this.style.opacity = '1'
	})
	tImgs[i].addEventListener('click',function(){
		var cur=this.getAttribute('id');
		console.log(cur)
		append(lrgImgArr[cur])
	})
}
	// var cur=this.getAttribute('src'),
	// 	append = mainImg.innerHTML ='<img class="largeImg" src="'+cur+'">'
	
