$(function(){
	// banner轮播图
	var box=$('.bunnertu')[0];
	var img=$('.banner1');
	var lit=$('.b-item');
	var left=$('.anniu1')[0];
	var right=$('.anniu2')[0];
	var width=parseInt(getStyle(box,'width'));
	var next=0;
	var n=0;
	var flag0=true;

	var t=setInterval(move,2000);
	function move(){
		if(!flag0){
			return;
		}
		flag0=false
		next=n+1

		if(next>=img.length){
			next=0;
		}
		img[next].style.left=width+'px';
		animate(img[n],{left:-730},600);
		animate(img[next],{left:0},600,function(){
			flag0=true
		});
		lit[n].style.background='#3e3e3e'
		lit[next].style.background='#b61b1f'
		n=next;
	}
	box.onmouseover=function(){
		left.style.display='block'
		right.style.display='block'

		clearInterval(t)
	}
	box.onmouseout=function(){
		left.style.display='none'
		right.style.display='none'
		t=setInterval(move,2000)
	}
	right.onclick=function(){
		move();
	}
	left.onclick=function(){
		if(!flag0){
			return;
		}
		flag0=true;
		next=n-1;
		if(next<0){
			next=img.length-1;
		}
		img[next].style.left=-width+'px';
		animate(img[n],{left:730},600);
		animate(img[next],{left:0},600,function(){
			flag0=true;
		});
		lit[n].style.background='#3e3e3e'
		lit[next].style.background='#b61b1f'
		n=next;
	}

	for(var i=0;i<lit.length;i++){
		lit[i].index=i;
		lit[i].onclick=function(){
			if(this.index>n){
				if(!flag){
					return;
				}
				flag0=true;
				img[this.index].style.left=width+'px';
				animate(img[n],{left:-730},600);
				animate(img[this.index],{left:0},600,function(){
					flag0=true
				});
				lit[n].style.background='#3e3e3e'
				lit[this.index].style.background='#b61b1f'
				n=this.index;
			}else if(this.index<n){
				if(!flag0){
					return;
				}
				flag0=true;
				img[this.index].style.left=-width+'px';
				animate(img[n],{left:730},600);
				animate(img[this.index],{left:0},600,function(){
					flag0=true;
				});
				lit[n].style.background='#3e3e3e'
				lit[this.index].style.background='#b61b1f'
				n=this.index;
			}
		}
	}

// 滚动条
	var cheight=document.documentElement.clientHeight;
	var cwidth=document.documentElement.clientWidth;
	var floor=$('.floor');
	var floor_lis=$('.floor-lis');
	var floor_nav=$('.floor-nav')[0];
	var floorwen=$('.floor-lis1');
	var floorshu=$('.floor-lis2')
	var back=$('.back')[0];
	var nheight;
	var now;
	var flag=true;
	var flag2=true;
	for(var i=0;i<floor.length;i++){
		floor[i].h=floor[i].offsetTop;
	}
	window.onscroll=function(){
		// 火狐，谷歌兼容
		var obj=document.body.scrollTop?document.body:document.documentElement;
		var top=obj.scrollTop;
		// floor_nav  top_hidden back出现
		if(top>=floor[0].h-300){
			floor_nav.style.display='block';
			nheight=floor_nav.offsetHeight;
			floor_nav.style.top=(cheight-nheight)/2+'px';
			if(flag==true){
				flag=false;
			}flag=true;
		}
		if(top<floor[0].h-300){
			floor_nav.style.display='none';
			if(flag2==true){
				flag2=false;
			}flag2=true;
		}
		// 出现对应的颜色
		for(var i=0;i<floor.length;i++){
			if(top>=floor[i].h-200){
				for(var j=0;j<floor_lis.length;j++){
//					floor_lis[j].style.color='#625351'
					floorshu[j].style.display='block'
					floorwen[j].style.display='none'
				}
//				floor_lis[i].style.color='#C81576';
				floorshu[i].style.display='none'
				floorwen[i].style.display='block'
				now=i;
			}
		}

		// 点击返回对应的楼层
		for(var i=0;i<floor_lis.length;i++){
			floor_lis[i].index=i;
			// index 层级
			floor_lis[i].onclick=function(){
				animate(document.body,{scrollTop:floor[this.index].h})
				animate(document.documentElement,{scrollTop:floor[this.index].h})
			}
			back.onclick=function(){
				animate(document.body,{scrollTop:0})
			}
			
			floor_lis[i].onmouseover=function(){
				floorwen[this.index].style.display='block';
				floorshu[this.index].style.display='none'
				floorwen[this.index].style.background='#c81576';
				floorwen[this.index].style.color='#fff';
				
//				this.style.background='#C81576'
//				this.style.color='#fff'
			}
			floor_lis[i].onmouseout=function(){
				
				if(now==this.index){
					floorwen[this.index].style.background='';
					floorwen[this.index].style.color='#c81623';
					return;
				}
				floorwen[this.index].style.display='none';
				floorwen[this.index].style.background='';
				floorwen[this.index].style.color='#c81623';
				floorshu[this.index].style.display='block'
			}
		}
	}


	// 楼层选项卡

	function lou(ceng){
		var pbox=ceng;
		var pre=$('.tab-x',pbox)
		var pimgs=$('.main-body-x1',pbox)
		var fugai=$('.kuang-x',pbox)
		fugai[0].style.display='block'
		pimgs[0].style.display='block'
		pre[0].style.borderColor='#c81623'
		for(var i=0;i<pre.length;i++){
			pre[i].index=i;
			pre[i].onmouseover=function(){
				for(var j=0;j<pre.length;j++){
					pre[j].style.borderColor='#fff';
					pimgs[j].style.display='none'
					fugai[j].style.display='none'
				}
				this.style.borderColor='#c81623'
				pimgs[this.index].style.display='block'
				fugai[this.index].style.display='block'
			}
		}
	}
	lou($('.f1')[0])
	lou($('.f2')[0])
	lou($('.f3')[0])
	lou($('.f4')[0])
	lou($('.f5')[0])
	lou($('.f6')[0])
	lou($('.f7')[0])
	lou($('.f8')[0])
	lou($('.f9')[0])
	lou($('.f10')[0])
	lou($('.f11')[0])

	// 下方的轮播图
	function xia(obj){
		var box3=obj;
		var img3=$('.p-img',obj);
		var lit3=$('.p-quan',obj);
		var left3=$('.p-left',obj)[0];
		var right3=$('.p-right',obj)[0];
		var width3=parseInt(getStyle(box3,'width'));
		var next3=0;
		var n3=0;
		var flag3=true;
		lit3[0].style.background='#b61b1f'
		var t3=setInterval(move3,2000);
		function move3(){
			if(!flag3){
				return;
			}
			flag3=false
			next3=n3+1
			if(next3>=img3.length){
				next3=0;
			}
			img3[next3].style.left=width3+'px';
			animate(img3[n3],{left:-width3},600);
			animate(img3[next3],{left:0},600,function(){
				flag3=true
			});
			lit3[n3].style.background='#3e3e3e'
			lit3[next3].style.background='#b61b1f'
			n3=next3;
		}
		box3.onmouseover=function(){
			left3.style.display='block'
			right3.style.display='block'
			clearInterval(t3)
		}
		box3.onmouseout=function(){
			left3.style.display='none'
			right3.style.display='none'
			t3=setInterval(move3,2000)
		}
		right3.onclick=function(){
			move3();
		}
		left3.onclick=function(){
			if(!flag3){
				return;
			}
			flag3=true;
			next3=n3-1;
			if(next3<0){
				next3=img3.length-1;
			}
			img3[next3].style.left=-width3+'px';
			animate(img3[n3],{left:width3},600);
			animate(img3[next3],{left:0},600,function(){
				flag3=true;
			});
			lit3[n3].style.background='#3e3e3e'
			lit3[next3].style.background='#b61b1f'
			n3=next3;
		}

		for(var i=0;i<lit3.length;i++){
			lit3[i].index=i;
			lit3[i].onclick=function(){
				if(this.index>n3){
					if(!flag3){
						return;
					}
					flag3=true;
					img3[this.index].style.left=width3+'px';
					animate(img3[n3],{left:-width3},600);
					animate(img3[this.index],{left:0},600,function(){
						flag3=true
					});
					lit3[n3].style.background='#3e3e3e'
					lit3[this.index].style.background='#b61b1f'
					n3=this.index;
				}else if(this.index<n3){
					if(!flag3){
						return;
					}
					flag3=true;
					img3[this.index].style.left=-width3+'px';
					animate(img3[n3],{left:width3},600);
					animate(img3[this.index],{left:0},600,function(){
						flag3=true;
					});
					lit3[n3].style.background='#3e3e3e'
					lit3[this.index].style.background='#b61b1f'
					n3=this.index;
				}
			}
		}
	}
	xia($('.main-body-f')[0])
	xia($('.lunbof')[0])
	xia($('.p-box')[0])
	xia($('.p-box')[1])
	xia($('.p-box')[2])
	xia($('.p-box')[3])
	xia($('.p-box')[4])
	xia($('.p-box')[5])
	xia($('.p-box')[6])
	xia($('.p-box')[7])
	xia($('.p-box')[8])
	xia($('.p-box')[9])
	xia($('.p-box')[10])

	// 选项卡
	function xuan(fu){
		var box_in=fu;
		for(var i=0;i<box_in.length;i++){
			hover(box_in[i],function(){
				this.style.background='#fff';
				var box_x=$('.p-x',this)[0];
				var zhe=$('.zhe',this)[0];
				box_x.style.display='block'
				zhe.style.display='block'
			},function(){
				var box_x=$('.p-x',this)[0];
				var zhe=$('.zhe',this)[0];
				var that=this;
				box_x.style.display='none';
				zhe.style.display='none';
				that.style.background='#F1F1F1';
			})
		}
	}
	xuan($('.songz'));
	xuan($('.sj-1'))
	xuan($('.guanzhu'))
	xuan($('.wojing'))
	xuan($('.kehufuwu'))
	xuan($('.wzdaohang'))
	// banner选项卡
	var box_in1=$('.shangp');
	for(var i=0;i<box_in1.length;i++){
		
		hover(box_in1[i],function(){
			this.style.background='#fff';
			var box_x1=$('.p-x',this)[0];
			box_x1.style.display='block'
		},function(){
			var box_x1=$('.p-x',this)[0];
			var that=this;
				box_x1.style.display='none';
				that.style.background='#c81623';
		})
	}

	// 今日推荐轮播
	var lunbow=$(".tjcp")[0];
	var picw=$('.tui-img')[0];
	var imgBoxw=$('.tuijian')[0];
	var widthw=parseInt(getStyle(picw,"width"));
	console.log(widthw)
	var leftw=$('#left');
	var rightw=$('#right');
	var tw=setInterval(movew,4000);
	function movew(){
		animate(imgBoxw,{left:-widthw},300,function(){
			var first=getFirst(imgBoxw);
			imgBoxw.appendChild(first);
			imgBoxw.style.left=0;
			})
	}
	lunbow.onmouseover=function(){
		clearInterval(tw);
	}
	lunbow.onmouseout=function(){
		tw=setInterval(movew,2000);
	}
	rightw.onclick=function(){
		movew();
	}
	leftw.onclick=function(){
		var first=getFirst(imgBoxw);
		var last=getLast(imgBoxw);
		insertBefore(last,first);
		imgBoxw.style.left=-widthw+'px'
		animate(imgBoxw,{left:0},300)
	}

	//右边的固定
	var jmb=$('.jbm-in');
	for(var i=0;i<jmb.length;i++){
		hover(jmb[i],function(){
				var intext=$('.in-text',this)[0];
//				intext.style.display='block'
				animate(intext,{width:64},600);
			},function(){
				var intext=$('.in-text',this)[0];
//				intext.style.display='none';
				animate(intext,{width:0},600);
			})
	}
	//热门晒单
	var sandan=$('.sanf')
	var n8=0;
	var next8=0;
	sandan[0].style.top=0;
	var t8=setInterval(san,2000)
	function san(){
		next8=n8+1
		if(next8>=sandan.length){
			next8=0;
		}
		sandan[next8].style.top="240"+"px";
		animate(sandan[n8],{top:-240},1000)
		animate(sandan[next8],{top:0},1000)
		n8=next8
	}
	


})


