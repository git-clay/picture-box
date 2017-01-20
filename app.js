var mainImg= document.getElementsByClassName('mainImg')[0],
	tImgs = document.getElementsByClassName('img'),
	len = tImgs.length,
	src= tImgs[0].getAttribute('src'),
	append = mainImg.innerHTML ='<img class="largeImg" src="'+src+'">';
console.log(src,append)

for(var i = 0;i<len;i++){
	tImgs[i].addEventListener('click',function(){
	var cur=this.getAttribute('src'),
		append = mainImg.innerHTML ='<img class="largeImg" src="'+cur+'">'
		console.log(cur)
	})
}

