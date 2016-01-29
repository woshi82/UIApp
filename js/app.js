
var H = $(window).height(),W = $(window).width();
function fit(){
	H = $(window).height();
	W = $(window).width();
	(W < H) ? ( $('#stage').css({'transform': 'rotate(90deg)'}),$("#UI").attr('viewBox', '0 0 960 640').height(W).width(H) ) : ( $('#stage').css({'transform': 'rotate(0deg)'}),$("#UI").attr('viewBox', '0 0 640 960').height(H).width(W) );
};
window.onerror = function(sMessage,sUrl,sLine){
	alert(sMessage+'::'+sLine)
}

$(function(){
    fit();
    $(window).resize(function(){
        fit();
    });

function shake(obj,or,range,v){
	rotate()
	var rotate_deg = 0,
		rotate_t = true;
	function rotate(){
		(rotate_t)? rotate_deg+=v : rotate_deg-=v;
		(rotate_deg>= range.max || rotate_deg<= range.min)&& (rotate_t= !rotate_t);
		obj.transform(new Snap.Matrix().rotate(rotate_deg, or.x, or.y));
		window.requestAnimationFrame(rotate);
	}
}
function roll(obj,v){
	r_roll()
	var r_roll_deg = 0;
	v = v || 2;
	function r_roll(){

		r_roll_deg+= v;
		obj.attr({
			transform:"t0,0r-"+r_roll_deg
		})
		window.requestAnimationFrame(r_roll);

	}
};
function slide(obj,fn){
	var bB = true,s_x,s_y,e_x,e_y;
    obj.touchstart(function(e){
    	if(!bB) return false;
    	s_x = e_x = e.touches[0].pageX;
    	s_y = e_y = e.touches[0].pageY;

		obj.touchmove(function(e){
			e.preventDefault();
			e_x = e.touches[0].pageX;
    		e_y = e.touches[0].pageY;
		});
		obj.touchend(function(e){
			obj.untouchmove();
			obj.untouchend();
			// alert('qaas::'+ s_y + 'e::'+ e_y+'delt::'+(e_y-s_y))
			((e_y-s_y)<=0) && (fn(),bB = false);
			
		});
    });
};


var s = Snap("#UI");
var gf0=gf1=gf2=gf3=gf4=gf5=gf6=gf7=null,c = 0;
loadSvg();
function loadSvg(){
	gf0=gf1=gf2=gf3=gf4=gf5=gf6=gf7=null;
	c = 0;
	Snap.load("./svg/p0.svg", function (f0) {
		gf0 = f0;	
		begin();
	});
	Snap.load("./svg/p1.svg", function (f1) {
		gf1 = f1;
		begin();
	});
	Snap.load("./svg/p2.svg", function (f2) {
		gf2 = f2;
		begin();
	});
	Snap.load("./svg/p3.svg", function (f3) {
		gf3 = f3;
		begin();
	});
	Snap.load("./svg/p4.svg", function (f4) {
		gf4 = f4;
		begin();
	});
	Snap.load("./svg/p5.svg", function (f5) {
		gf5 = f5;
		begin();
	});
	Snap.load("./svg/p6.svg", function (f6) {
		gf6 = f6;
		begin();
	});
	Snap.load("./svg/p7.svg", function (f7) {
		gf7 = f7;
		begin();
	});
}

function begin(){
	c++;
	(c >= 8) && (p0(gf0));
}

// p0();
function p0(f){
	// Snap.load("./svg/p0.svg", function (f) {
		var rec = s.paper.rect(0, 0, 960,640, 0).attr({'fill': '#65B9EC'}),
			p0_earth = f.select("#p0_earth").attr({'transform':new Snap.Matrix().scale(0,0,480,640)}),
			p0_light = f.select("#p0_light").attr({'opacity': '0'}),
			p0_static = f.select("#p0_static").attr({'opacity': '0'}),
			p0_line1 = s.paper.path(data.p0_line1).attr({'fill': 'none'}),
			p0_line2 = s.paper.path(data.p0_line2).attr({'fill': 'none'}),
			p0_bub1 = f.select("#p0_bub1").attr({'opacity': '0'}),
			p0_bub2 = f.select("#p0_bub2").attr({'opacity': '0'}),
			p0_bub3 = f.select("#p0_bub3").attr({'opacity': '0'}),
			p0_bub4 = f.select("#p0_bub4").attr({'opacity': '0'}),
			p0_tri1 = f.select("#p0_tri1").attr({'opacity': '0'}),
			p0_tri2 = f.select("#p0_tri2").attr({'opacity': '0'}),
			p0_tri3 = f.select("#p0_tri3").attr({'opacity': '0'}),
			p0_build = f.select("#p0_build").attr({'opacity': '0'}),
			hand = f.select("#hand").attr({'opacity': '0'}),
			gesture = f.select("#gesture").attr({'opacity': '0'}),
			p0_g = s.paper.g(rec,p0_light,p0_build,p0_static,p0_earth,p0_line1,p0_line2,p0_bub1,p0_bub2,p0_bub3,p0_bub4,p0_tri1,p0_tri2,p0_tri3,gesture).attr({"transform":'matrix(1,0,0,1,0,0)'});
		s.append(p0_g);

		var p0_tlen1 = p0_line1.getTotalLength(),
			p0_tlen2 = p0_line2.getTotalLength(),
			len = p0_tlen1/4-80;

		// p0_g.animate({'transform':'matrix(1,0,0,1,0,0)'},1000,mina.linear,function(){
			Snap.animate(0, 1, function(v) {
		        p0_earth.transform(new Snap.Matrix().scale(v,v,480,640));
		    }, 800);
		    setTimeout(function(){
		    	p0_light.animate({'opacity': '1'},600,mina.linear);
		    	p0_static.animate({'opacity': '1'},600,mina.linear,function(){
		    		p0_build.animate({'opacity': '1'},700,mina.linear,function(){
		    			guide();

				    	p0_line1.attr({
							stroke : "#552E2E",
							"stroke-dasharray": p0_tlen1,
							"stroke-dashoffset" : p0_tlen1
						}).animate({"stroke-dashoffset":0},1500,mina.linear);
						p0_line2.attr({
							stroke : "#552E2E",
							"stroke-dasharray": p0_tlen2,
							"stroke-dashoffset" : p0_tlen2
						}).animate({"stroke-dashoffset":0},1500,mina.linear);
						p0_bub1.animate({'opacity': '1'},300,mina.linear);
						setTimeout(function(){
							p0_bub2.animate({'opacity': '1'},300,mina.linear);
						},300);
						setTimeout(function(){
							p0_bub3.animate({'opacity': '1'},300,mina.linear);
						},600);
						setTimeout(function(){
							p0_bub4.animate({'opacity': '1'},300,mina.linear);
						},1000);
						setTimeout(function(){
							gesture.animate({'opacity': '1'},200,mina.linear);
							handM();
							function handM(){
								hand.animate({'opacity': '1'},200,mina.linear);
								hand.animate({"transform":'matrix(1,0,0,1,-130,0)'},1200,mina.linear,function(){
									setTimeout(function(){
										hand.attr({'opacity': '1',"transform":'matrix(1,0,0,1,0,0)'});
										window.requestAnimationFrame(handM);
									},1000)

								});
							}
						},2500)
		    		});
		    	});
		    	
	           	
		    }, 900);	
		// });
		
		

	    slide(p0_g,function(){
	    	p0_g.animate({"transform":'matrix(1,0,0,1,-960,0)'},1000,mina.linear,function(){
				p0_g.remove();
			});
			p1(gf1);
	    });
	   	
	
		function guide(){
			p0_tri1.animate({'opacity': '1'},100,mina.linear);

	    	Snap.animate(0, len, function (l) {
                
                var dot = p0_line1.getPointAtLength(l);
                
                p0_tri1.attr({
                    transform: "t" + [dot.x, dot.y] +
                               "r" + (dot.alpha - 180)
                });
            }, 500);
            setTimeout(function(){
				p0_tri2.animate({'opacity': '1'},100,mina.linear);

            	Snap.animate(0, len-30, function (l) {
                
	                var dot = p0_line1.getPointAtLength(l+p0_tlen1/3+60);
	                
	                p0_tri2.attr({
	                    transform: "t" + [dot.x, dot.y] +
	                               "r" + (dot.alpha - 180)
	                });
	            }, 500);
            },500)
            setTimeout(function(){
				p0_tri3.animate({'opacity': '1'},500,mina.linear);

            	Snap.animate(0, len, function (l) {
                
	                var dot = p0_line1.getPointAtLength(l+p0_tlen1/3*2+60);
	                
	                p0_tri3.attr({
	                    transform: "t" + [dot.x, dot.y] +
	                               "r" + (dot.alpha - 180)
	                });
	            }, 500);
	            setTimeout(function(){
					p0_tri1.animate({'opacity': '0'},100,mina.linear,function(){
						window.requestAnimationFrame(guide);
					});
					p0_tri2.animate({'opacity': '0'},100,mina.linear);
					p0_tri3.animate({'opacity': '0'},100,mina.linear);


	            },800);
            },1000);

		}


	// });
}

// p1();
function p1(f){
	// Snap.load("./svg/p1.svg", function (f) {
		var 
			p1_Windmill = f.select(".p1_Windmill").attr({'opacity': 0}),
			p1_Windmill1 = f.select(".p1_Windmill1"),
			p1_static = f.select(".p1_static").attr({'opacity': 0}),
			p1_car = f.select(".p1_car").attr({'opacity': 0}),

			p1_cloud = f.select(".p1_cloud"),
			p1_cloud1 = f.select(".p1_cloud1"),
			p1_cloud2 = f.select(".p1_cloud2"),
			p1_dash = f.select(".p1_dash").attr({'opacity': 0}),
			p1_chip1 = f.selectAll(".p1_chip1").attr({'opacity': 0}),
			p1_chipW = s.paper.g(p1_chip1),
			rec = s.paper.rect(0, 0, 960,640, 0).attr({'fill': '#fff'}),
			p1_line1 = s.paper.path(data.p1_line1),
			p1_line2 = s.paper.path(data.p1_line2),
			p1_line3 = s.paper.path(data.p1_line3),
			p1_line4 = s.paper.path({
				d: data.p1_line4,
				fill:'none'
			}),
			p1_line5 = s.paper.path(data.p1_line5),
			p1_line6 = s.paper.path(data.p1_line6),
			p1_line7 = s.paper.path(data.p1_line7),
			p1_line8 = s.paper.path(data.p1_line8),
			p1_line9 = s.paper.path({
				d:data.p1_line9,
				fill:'none'
			}),
			p1_line10 = s.paper.path(data.p1_line10),
			p1_line11 = s.paper.path(data.p1_line11),
			p1_carline = s.paper.path({
				d: data.p1_carline,
				fill:'none'
			}), 
			p1_yue1 = s.paper.path({
				d:data.p1_yue1,
				fill:'none',
				'stroke-width': "22px",
				'stroke': '#66B9EC',
			}),
			p1_yue2 = s.paper.path({
				d:data.p1_yue2,
				fill:'#562F2F'
			}),
			p1_yue3 = s.paper.path({
				d:data.p1_yue3,
				fill:'none',
				'stroke-width': "22px",
				'stroke': '#DB7473',
			}),
			p1_yue = s.paper.g(p1_yue3, p1_yue2, p1_yue1).attr({id: 'p1_yue'}).attr({'opacity': 0});

		var p1_g = s.paper.g(rec,p1_Windmill,p1_cloud,p1_cloud2,p1_chip1,p1_yue,p1_line1,p1_line2,p1_line3,p1_line4,p1_line5,p1_line6,p1_line7,p1_line8,p1_line9,p1_line10,p1_line11,p1_chipW,p1_dash,p1_static,p1_cloud1,p1_car).attr({'transform':'matrix(1,0,0,1,960,0)'});
		s.append(p1_g);
		p1_g.animate({'transform':'matrix(1,0,0,1,0,0)'},1000,mina.linear);
		function chip(obj){
			this.obj = obj;
			this.len = obj.length || 1;
			this.iNow = this.len;
			var _this = this;
			obj.forEach(function(element, index) {
				var newEle = element.clone();
				newEle.i = index;
			    _this.init(newEle);			 
			});
		}
		chip.prototype.init = function(ele){
			var  _this = this,
				bx = (Math.floor(100*Math.random())-50),
	    		by = (Math.floor(90*Math.random())+30),
	    		br=Math.floor(360*Math.random()),
	    		// d=0;
	    		d=Math.floor(1e3*Math.random())+.5e3;
	    	ele.attr({'opacity': 0,'transform': "t" + [bx, by]+"r" + (br)});
	    	setTimeout(function(){
	    		p1_chipW.append(ele);
	    		_this.range(ele);
	    	},d)
	    	
		}
		chip.prototype.range = function(ele){
			var _this = this,
				x = -(Math.floor(100*Math.random())-50),
		    	y = -(Math.floor(90*Math.random())+30),
		    	d=Math.floor(1e3*Math.random())+.5e3,
		    	b=Math.random()/4+.5,
		    	r=Math.floor(360*Math.random());
			ele.animate({'opacity': b},200,mina.linear,function(){
				ele.animate({'transform': "t" + [x, y]+"r" + (r) },4e3,mina.linear,function(){
					setTimeout(function(){
						ele.animate({opacity:0},200,mina.linear,function(){
							ele.remove();
							_this.frame(ele.i);						
						})
					},d);
				})
				
			})
		}
		chip.prototype.frame = function(index){
			var newEle = this.obj[index].clone();
				newEle.i = index;
			this.init(newEle);	
		}
		var chip = new chip(p1_chip1);


		var p1_tlen1 = p1_line1.getTotalLength(),
			p1_tlen2 = p1_line2.getTotalLength(),
			p1_tlen3 = p1_line3.getTotalLength(),
			p1_tlen4 = p1_line4.getTotalLength(),
			p1_tlen5 = p1_line5.getTotalLength(),
			p1_tlen6 = p1_line6.getTotalLength(),
			p1_tlen7 = p1_line7.getTotalLength(),
			p1_tlen8 = p1_line8.getTotalLength(),
			p1_tlen9 = p1_line9.getTotalLength(),
			p1_tlen10 = p1_line10.getTotalLength(),
			p1_tlen11 = p1_line11.getTotalLength(),
			p1_carlinelen = p1_carline.getTotalLength();
		p1_line1.attr({
			fill : "none",
			stroke : "#66B9EC",
			"stroke-width": "22px",
			"stroke-dasharray": p1_tlen1+" "+p1_tlen1,
			"stroke-dashoffset" : p1_tlen1
		}).animate({"stroke-dashoffset":0},2e3,mina.easeout);
		
		

		setTimeout(function(){
			p1_line2.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen2,
				"stroke-dashoffset" : p1_tlen2
			}).animate({"stroke-dashoffset":0},500,mina.easeout);
			p1_static.animate({"opacity":1},1500,mina.easeout)
			p1_dash.animate({"opacity":1},1500,mina.easeout)
		},1.3e3);
		setTimeout(function(){
			p1_line3.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen3,
				"stroke-dashoffset" : p1_tlen3
			}).animate({"stroke-dashoffset":p1_tlen3*2},600,mina.linear);
			
			// p1_Windmill.attr({'class': 'bk'});
			p1_Windmill.animate({"opacity":1},600,mina.easeout)
			
			roll(p1_Windmill1);
		        
			p1_cloud.attr({'class': 'p1_cloud cloudM'});
			p1_cloud1.attr({'class': 'p1_cloud1 cloudM1'});
			p1_cloud2.attr({'class': 'p1_cloud2 cloudM2'});
		},1.5e3);
		setTimeout(function(){
			p1_line9.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen9,
				"stroke-dashoffset" : p1_tlen9
			}).animate({"stroke-dashoffset":0},600,mina.easeout);
			p1_line6.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen6,
				"stroke-dashoffset" : p1_tlen6
			}).animate({"stroke-dashoffset":p1_tlen6*2},600,mina.linear);
			p1_line7.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen7,
				"stroke-dashoffset" : p1_tlen7
			}).animate({"stroke-dashoffset":0},600,mina.linear);
				
			
		},1.8e3);
		setTimeout(function(){
			p1_line4.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen4,
				"stroke-dashoffset" : p1_tlen4
			}).animate({"stroke-dashoffset":p1_tlen4*2},600,mina.linear);
			p1_yue.animate({"opacity":1},1300,mina.linear);
			// p1_yue.attr({'class': 'move'});
			p1_cargo();
			function p1_cargo(){
				p1_car.animate({"opacity":1},200,mina.linear);
				Snap.animate(0, p1_carlinelen, function (l) {
		            var dot = p1_carline.getPointAtLength(p1_carlinelen-l);
		            p1_car.attr({
		                transform: "t" + [dot.x+0, dot.y+15] +
		                           "r" + (dot.alpha + 0)
		            });
		        }, 5800);
		        setTimeout(function(){
					p1_car.animate({"opacity":0},300,mina.linear,function(){
						window.requestAnimationFrame(p1_cargo);
					});

		        },5500)
			};

		},2e3);
		setTimeout(function(){
			p1_line5.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen5,
				"stroke-dashoffset" : p1_tlen5
			}).animate({"stroke-dashoffset":0},400,mina.linear);
			
			p1_line8.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen8,
				"stroke-dashoffset" : p1_tlen8
			}).animate({"stroke-dashoffset":p1_tlen8*2},600,mina.linear);
			p1_line10.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen10,
				"stroke-dashoffset" : p1_tlen10
			}).animate({"stroke-dashoffset":0},300,mina.easeout);
			p1_line11.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p1_tlen11,
				"stroke-dashoffset" : p1_tlen11
			}).animate({"stroke-dashoffset":0},500,mina.easeout);
		},2.2e3);

		slide(p1_g,function(){
	    	p1_g.animate({"transform":'matrix(1,0,0,1,-960,0)'},1000,mina.linear,function(){
				p1_g.remove();
			});
			p2(gf2);
	    });
	// })
}
// p2();
function p2(f){
	// Snap.load("./svg/p2.svg", function (f) {

		var p2_line1 = s.paper.path(data.p2_line1).attr({
				'fill': 'none',
				
			}),
			rec = s.paper.rect(0, 0, 960,640, 0).attr({'fill': '#fff'}),
			p2_bg = f.select(".p2_bg").attr({'opacity':0}),
			p2_txt = f.select(".p2_txt").attr({'opacity':0}),
			
			p2_car1 = f.select(".p2_car1").attr({'opacity':0}),
			p2_bub1 = f.select(".p2_bub1").attr({'opacity':0}),
			p2_car2 = f.select(".p2_car2").attr({'opacity':0}),
			p2_car3 = f.select(".p2_car3").attr({'opacity':0,"transform":'matrix(1,0,0,1,-100,40)'}),
			p2_bubs = f.select(".p2_bubs").attr({'opacity':0}),
			p2_building = f.select(".p2_building").attr({'opacity':0}),

			p2_g = s.paper.g(rec,p2_bg,p2_line1,p2_building,p2_bubs,p2_bub1,p2_car2,p2_car1,p2_car3,p2_txt).attr({"transform":'matrix(1,0,0,1,960,0)'});

		s.append(p2_g);
		var p2_tlen1 = p2_line1.getTotalLength();
		p2_g.animate({"transform":'matrix(1,0,0,1,0,0)'},1000,mina.linear);
		p2_line1.attr({

			stroke : "#66B9EC",
			"stroke-width": "22px",
			"stroke-dasharray": p2_tlen1,
			"stroke-dashoffset" : p2_tlen1
		}).animate({"stroke-dashoffset":0,"transform":'matrix(1,0,0,1,0,0)'},1000,mina.linear,function(){
			// p2_bg.attr({'class': 'bk'});
			p2_bg.animate({'opacity':0.2},1000,mina.linear);

			setTimeout(function(){
				
				p2_car1.animate({'opacity':1},200,mina.linear);
				Snap.animate(0, p2_tlen1*.65, function (l) {
	                var dot = p2_line1.getPointAtLength(l);
	                p2_car1.attr({
	                    transform: "t" + [dot.x+20, dot.y-32] +
	                               "r" + (dot.alpha - 180)
	                });

	            }, 1800);

				setTimeout(function(){
					
					p2_building.animate({'opacity':1},1000,mina.linear);
					p2_car2.animate({'opacity':1},200,mina.linear);
					Snap.animate(0, p2_tlen1*.425, function (l) {
		                var dot = p2_line1.getPointAtLength(l);
		                p2_car2.attr({
		                    transform: "t" + [dot.x+10, dot.y-22] +
		                               "r" + (dot.alpha - 180)
		                });
		            }, 1800);
					setTimeout(function(){
						shake(p2_bub1,{x:650,y:516},{max:15,min:0},.2);
						p2_bub1.animate({'opacity':1},200,mina.linear);
						p2_bubs.animate({'opacity':1},800,mina.linear);
						p2_car3.animate({'opacity':1,"transform":'matrix(1,0,0,1,0,0)'},1000,mina.linear);
						p2_txt.animate({'opacity':1},1000,mina.linear);
					},1600)
				},800);		
			},400)
		

		});
		
		slide(p2_g,function(){
	    	p2_g.animate({"transform":'matrix(1,0,0,1,-960,0)'},1000,mina.linear,function(){
				p2_g.remove();
			});
			p3(gf3);
	    });

	// })
}
// p3()
function p3(f){
	// Snap.load("./svg/p3.svg", function (f) {
		var rec = s.paper.rect(0, 0, 960,640, 0).attr({'fill': '#fff'}),
			p3_bg = f.select(".p3_bg"),
			p3_txt = f.select(".p3_txt").attr({'opacity': '0'}),
			p3_one = f.select(".p3_one").attr({'opacity': '0'}),
			p3_two = f.select(".p3_two").attr({'opacity': '0'}),
			p3_three = f.select(".p3_three").attr({'opacity': '0'}),
			p3_four = f.select(".p3_four").attr({'opacity': '0'}),
			p3_five = f.select(".p3_five").attr({'opacity': '0'}),
			border = f.select(".border").attr({'opacity': '0'}),
			p3_static = f.select(".p3_static").attr({'opacity': '0'}),
			left_eye = f.select(".left_eye").attr({'opacity': '0','transform':'matrix(1,0,0,1,-35,0)'}),
			right_eye = f.select(".right_eye").attr({'opacity': '0','transform':'matrix(1,0,0,1,-35,0)'}),
			p3_super = f.select(".p3_super").attr({'transform':new Snap.Matrix().scale(0,0,218,315).rotate(300, 218,315)}),
			p3_shadow = f.select(".p3_shadow").attr({'transform':new Snap.Matrix().scale(0,0,221,546)}),
			p3_paper1 = f.select(".p3_paper1").attr({'opacity': '0','transform':new Snap.Matrix().scale(1.8,1.8,514,495)}),
			p3_paper2 = f.select(".p3_paper2").attr({'opacity': '0','transform':new Snap.Matrix().scale(1.8,1.8,410,338)}),
			p3_paper3 = f.select(".p3_paper3").attr({'opacity': '0','transform':new Snap.Matrix().scale(1.8,1.8,807,473)}),
			p3_paper4 = f.select(".p3_paper4").attr({'opacity': '0','transform':new Snap.Matrix().scale(1.8,1.8,657,435)}),
			p3_line1 = s.paper.path(data.p3_line1).attr({'fill': 'none'}),

			p3_g = s.paper.g(rec,p3_line1,border,p3_one,p3_two,p3_three,p3_four,p3_five,p3_shadow,p3_super,p3_paper1,p3_paper2,p3_paper3,p3_paper4,p3_static,p3_txt).attr({'transform':'matrix(1,0,0,1,960,0)'});
		
		s.append(p3_g);
		var p3_tlen1 = p3_line1.getTotalLength();

		
		p3_g.animate({'transform':'matrix(1,0,0,1,0,0)'},1000,mina.linear,function(){
			p3_g.append(p3_bg);
			p3_bg = p3_bg.pattern(0,0,10,10);
			rec.attr({
				fill: p3_bg
			});
			p3_paper1.animate({'opacity': '1'},400,mina.linear,function(){
				
			    p3_paper2.animate({'opacity': '1'},400,mina.linear,function(){
				     p3_paper3.animate({'opacity': '1'},400,mina.linear,function(){
					    p3_paper4.animate({'opacity': '1'},400,mina.linear,function(){
							p3_static.animate({'opacity': '1'},1000,mina.linear)
							Snap.animate(0, 1, function(v) {
						        p3_super.transform(new Snap.Matrix().scale(v,v,218,315).rotate(v*720,218,315));
						        p3_shadow.transform(new Snap.Matrix().scale(v,v,221,546));
						    }, 600);
							eyeGo(right_eye);
							eyeGo(left_eye);
							function eyeGo(obj){
								obj.attr({'opacity':1});
							    obj.animate({'transform':'matrix(1,0,0,1,0,0)'},300,mina.linear,function(){

							    	obj.attr({'transform':'matrix(1,0,0,1,-35,0)'});
							    	// obj.attr({'opacity':0,'transform':'matrix(1,0,0,1,-35,0)'});
							    	setTimeout(function(){
							    		window.requestAnimationFrame(function(){
							    			eyeGo(obj);
							    		});
							    	},1000)
							    });
							    setTimeout(function(){
							    	obj.animate({'opacity':0},150,mina.linear);
							    },150)
							}
						    
						});
					    Snap.animate(1.8, 1, function(v) {
					        p3_paper4.transform(new Snap.Matrix().scale(v,v,657,435));
					    }, 500);
					});
				    Snap.animate(1.8, 1, function(v) {
				        p3_paper3.transform(new Snap.Matrix().scale(v,v,807,473));
				    }, 500);
				});
				Snap.animate(1.8, 1, function(v) {
			        p3_paper2.transform(new Snap.Matrix().scale(v,v,410,338));
			    }, 500);
			});
			Snap.animate(1.8, 1, function(v) {
		        p3_paper1.transform(new Snap.Matrix().scale(v,v,514,495));
		    }, 500);
			

		});

		p3_line1.attr({
			stroke : "#66BAED",
			'stroke-width' : "4px",
			"stroke-dasharray": p3_tlen1,
			"stroke-dashoffset" : p3_tlen1
		}).animate({"stroke-dashoffset":0},2200,mina.linear);
		setTimeout(function(){
			p3_one.animate({'opacity': '1'},400,mina.easeout,function(){
				p3_two.animate({'opacity': '1'},400,mina.easeout,function(){
					p3_three.animate({'opacity': '1'},400,mina.easeout,function(){
						p3_four.animate({'opacity': '1'},400,mina.easeout,function(){
							p3_five.animate({'opacity': '1'},400,mina.easeout)
							border.animate({'opacity': '1'},400,mina.easeout)
							p3_txt.animate({'opacity': '1'},400,mina.linear)
						})
					})
				})
			})
		},500);
		slide(p3_g,function(){
	    	p3_g.animate({"transform":'matrix(1,0,0,1,-960,0)'},1000,mina.linear,function(){
				p3_g.remove();
			});
			p4(gf4);
	    });
		
		
		
	// })
}
// p4()
function p4(f){
	// Snap.load("./svg/p4.svg", function (f) {
		var rec = s.paper.rect(0, 0, 960,640, 0).attr({'fill': '#fff'}),
			p4_bg = f.select(".p4_bg"),
			p4_bot = f.select(".p4_bot"),
			p4_tree = f.select(".p4_tree").attr({'opacity': 0, 'transform':'matrix(1,0,0,1,0,40)'}),
			p4_txt = f.select(".p4_txt").attr({'opacity': 0}),
			p4_girl = f.select(".p4_girl").attr({'opacity': 0}),
			p4_paper = f.select(".p4_paper").attr({'opacity': 0}),
			p4_chip1 = f.select("#p4_chip1"),
			p4_chip2 = f.select("#p4_chip2"),
			p4_chip3 = f.select("#p4_chip3"),
			p4_chip4 = f.select("#p4_chip4"),
			p4_chip5 = f.select("#p4_chip5"),
			p4_chip6 = f.select("#p4_chip6"),
			p4_chip7 = f.select("#p4_chip7"),
			p4_chip8 = f.select("#p4_chip8"),
			p4_chip9 = f.select("#p4_chip9"),
			p4_chip10 = f.select("#p4_chip10"),
			p4_chip11 = f.select("#p4_chip11"),
			p4_chip12 = f.select("#p4_chip12"),
			p4_chip13 = f.select("#p4_chip13"),
			p4_chip14 = f.select("#p4_chip14"),
			p4_chip15 = f.select("#p4_chip15"),
			p4_chip16 = f.select("#p4_chip16"),
			p4_chip17 = f.select("#p4_chip17"),
			p4_chip18 = f.select("#p4_chip18"),
			p4_chip19 = f.select("#p4_chip19"),
			p4_chip20 = f.select("#p4_chip20"),

			p4_g = s.paper.g(rec,p4_bot,p4_tree,p4_girl,p4_paper,p4_txt).attr({'transform':'matrix(1,0,0,1,960,0)'});
		
		s.append(p4_g);

		
		

		function chip(arr){
			this.arr = arr;
			this.len = arr.length;
			this.iNow = -1;
			this.frame();
		
		}
		chip.prototype.rSort = function(arr){
			function r_s(){
				return Math.random()>.5 ? -1 : 1;
			}
			this.arr.sort(r_s);
		}
		chip.prototype.create = function(){
			var newE = this.arr[this.iNow].clone();
			newE.attr({'opacity': 0});
			p4_g.prepend(newE);
			// p4_g.before(newE);
			this.range(newE);
		}
		chip.prototype.frame = function(){
			var This = this;
			this.iNow++;
			(this.iNow>=this.len) && (this.rSort(),this.iNow=0);

			var d=Math.floor(.5e3*Math.random())+.5e3;
			setTimeout(function(){
				This.create();
				window.requestAnimationFrame(function(){
					This.frame();
				});
			},d);
		}
		chip.prototype.range = function(ele){
			var _this = this,
				x = (Math.floor(600*Math.random())-300),
		    	y = -(Math.floor(300*Math.random())+300),
		    	d=Math.floor(2e3*Math.random())+2e3,
		    	b=Math.random()/4+.5,
		    	r=Math.floor(360*Math.random());
			ele.animate({'opacity': b},400,mina.linear);
			ele.animate({'transform': "t" + [x, y]+"r" + (r) },4e3,mina.linear,function(){
				
			})
			setTimeout(function(){
					ele.animate({opacity:0},400,mina.linear,function(){
						ele.remove();
											
					})
				},d);
		}
		var chip = new chip([p4_chip1,p4_chip2,p4_chip3,p4_chip4,p4_chip5,p4_chip6,p4_chip7,p4_chip8,p4_chip9,p4_chip10,p4_chip11,p4_chip12,p4_chip13,p4_chip14,p4_chip15,p4_chip16,p4_chip17,p4_chip18,p4_chip19,p4_chip20]);
		p4_g.animate({'transform':'matrix(1,0,0,1,0,0)'},1000,mina.linear,function(){
			p4_g.append(p4_bg);
			p4_bg = p4_bg.pattern(0,0,73,45);
			rec.attr({
				fill: p4_bg
			});
			
		});

		setTimeout(function(){
			p4_tree.animate({'opacity': 1, 'transform':'matrix(1,0,0,1,0,0)'},800,mina.linear,function(){
				p4_girl.animate({'opacity': 1},1000,mina.linear,function(){
					p4_paper.animate({'opacity': 1},1500,mina.linear);
					p4_txt.animate({'opacity': 1},1000,mina.linear);
					
				});
				
			})
		},1500);

		slide(p4_g,function(){
	    	p4_g.animate({"transform":'matrix(1,0,0,1,-960,0)'},1000,mina.linear,function(){
				p4_g.remove();
			});
			p5(gf5);
	    });
		
		
		
	// })
}
// p5()
function p5(f){
	// Snap.load("./svg/p5.svg", function (f) {
		var p5_bot = f.select(".p5_bot"),
			p5_bg = f.select(".p5_bg"),
			p5_txt = f.select(".p5_txt").attr({'opacity':0}),
			rec = s.paper.rect(0, 0, 960,640, 0).attr({'fill': '#fff'}),
			wave1= s.paper.path(),
			wave2= s.paper.path(),
			wave3= s.paper.path(),
			wave4= s.paper.path(),
			wave5= s.paper.path(),
			wave6= s.paper.path(),
			wave7= s.paper.path(),
			waveG = s.paper.g(wave1,wave2,wave3,wave4,wave5,wave6,wave7).attr({'transform':'matrix(1,0,0,1,0,520)'}),
			p5_bots = s.paper.g(p5_bot,waveG),
			p5_build = f.select(".p5_build").attr({'opacity':0,'transform':'matrix(1,0,0,1,0,100)'}),
			p5_tool = f.select(".p5_tool").attr({'opacity':0,'transform':'matrix(1,0,0,1,-10,-20)'}),
			p5_man = f.select(".p5_man").attr({'opacity':0}),
			p5_fun1 = f.select(".p5_fun1").attr({'opacity':0,'transform':'matrix(1,0,0,1,-30,20)'}),
			p5_fun2 = f.select(".p5_fun2").attr({'opacity':0,'transform':'matrix(1,0,0,1,-100,80)'}),
			p5_dia = f.select(".p5_dia").attr({'opacity':0}),
			p5_dia2 = f.select(".p5_dia2").attr({'opacity':0}),
			p5_set = f.select(".p5_set").attr({'opacity':0}),
			p5_static = f.select(".p5_static").attr({'opacity':0}),
			p5_line1 = s.paper.path(data.p5_line1).attr({'fill': 'none'}),
			p5_g = s.paper.g(rec,p5_build,p5_line1,p5_static,p5_dia2,p5_dia,p5_bots,p5_fun1,p5_fun2,p5_man,p5_tool,p5_set,p5_txt).attr({'transform':'matrix(1,0,0,1,960,0)'});

		s.append(p5_g);
		var p5_tlen1 = p5_line1.getTotalLength();

		function wave(json){
			this.A = 4;
			this.T = 250;
			this.ww = 2*Math.PI/this.T;
			this.ss = 0;
			this.len = 0;
			this.c = 20 || Math.random()*1.5 +3;
			// json.tar = s.paper.path();
			// tar = s.paper.path();
			json.dy = json.dy || 0;
			json.stroke = json.stroke || "#f00000";
			json.width = json.width || 200;
			this.JSON = json;
			this.frame();
			
		}
		wave.prototype.frame = function(){
			var This = this;
			this.ss += 1;
			this.len = (this.len > this.JSON.width) ? this.JSON.width: (this.len += this.c);
			this.drawWave();
			window.requestAnimationFrame(function(){
				This.frame();
			});
		}
		wave.prototype.drawWave = function(){
			var sD = '';
			for (var i = 0; i < this.len ; i++) {
				var y = ~~this.A*Math.sin((i- this.ss*2)*this.ww );
				sD += ( (sD=='')?'M':'L') +(i+0.5)+','+(this.JSON.dy+y+0.5)
			};

			this.JSON.tar.attr({
				d: sD,
				fill: 'none',
				stroke : this.JSON.stroke,				
			});
		}

		new wave({'tar': wave1,'width': 960,'stroke': '#fff','dy':0});
		new wave({'tar': wave2,'width': 960,'stroke': '#fff','dy':10});
		new wave({'tar': wave3,'width': 960,'stroke': '#fff','dy':20});
		new wave({'tar': wave4,'width': 960,'stroke': '#fff','dy':30});
		new wave({'tar': wave5,'width': 960,'stroke': '#fff','dy':40});
		new wave({'tar': wave6,'width': 960,'stroke': '#fff','dy':50});
		new wave({'tar': wave7,'width': 960,'stroke': '#fff','dy':60});

		p5_g.animate({'transform':'matrix(1,0,0,1,0,0)'},1000,mina.linear,function(){
		

			p5_bg = p5_bg.pattern(0,0,60,60);
			p5_g.append(p5_bg);
			rec.attr({
				fill: p5_bg,
			})
			p5_tool.animate({'opacity':1,'transform':'matrix(1,0,0,1,0,0)'},400,mina.easeout,function(){
				p5_man.animate({'opacity':1},400,mina.linear,function(){
					p5_fun1.animate({'opacity':1,'transform':'matrix(1,0,0,1,0,0)'},400,mina.linear,function(){
						p5_fun2.animate({'opacity':1,'transform':'matrix(1,0,0,1,0,0)'},400,mina.linear);
						p5_dia.animate({'opacity':1},400,mina.linear,function(){
							shake(p5_dia,{x:255,y:202},{max:5,min:-10},1.2);
							p5_dia2.animate({'opacity':1},600,mina.linear,function(){
								shake(p5_dia2,{x:174,y:291},{max:5,min:-10},1.2);
								p5_line1.attr({
									stroke : "#562F2F",
									"stroke-dasharray": p5_tlen1,
									"stroke-dashoffset" : p5_tlen1
								}).animate({"stroke-dashoffset":p5_tlen1*2},1500,mina.linear,function(){

									
									p5_static.animate({'opacity':1},800,mina.linear)
									p5_txt.animate({'opacity':1},1000,mina.linear)
									
									roll(p5_set);
								})
								p5_set.animate({'opacity':1},400,mina.linear);
							})
						});

					});
				});
			});
		});
		setTimeout(function(){
			p5_build.animate({'opacity':1,'transform':'matrix(1,0,0,1,0,0)'},600,mina.easeout);
		},900);
		

		
		slide(p5_g,function(){
	    	p5_g.animate({"transform":'matrix(1,0,0,1,-960,0)'},1000,mina.linear,function(){
				p5_g.remove();
			});
			p6(gf6);
	    });

		
		
	// })
}


function p6(f){
	// Snap.load("./svg/p6.svg", function (f) {
		var p6_car = f.select(".p6_car").attr({'opacity': 0,'transform':'matrix(1,0,0,1,-220,0)'}),
			rec = s.paper.rect(0, 0,960,640, 0).attr({'fill': 'none'}),
			p6_paper = f.select(".p6_paper").attr({'opacity': 0,'transform':'matrix(1,0,0,1,-320,0)'}),
			p6_static = f.select(".p6_static").attr({'opacity':'0'}),
			p6_build = f.select(".p6_build").attr({'opacity':'0','transform':'matrix(1,0,0,1,0,190)'}),
			p6_txt = f.select(".p6_txt").attr({'opacity':'0'}),
			p6_bub1 = f.select(".p6_bub1").attr({'opacity':'0'}),
			p6_bub2 = f.select(".p6_bub2").attr({'opacity':'0','transform':'matrix(1,0,0,1,0,310)'}),
			p6_mask1 = s.paper.rect(443, 78, 320, 320, 0).attr({'fill': '#fff'}),
			p6_mask2 = s.paper.rect(443, 78, 320, 320, 0).attr({'fill': '#000'}),
			p6_maskg = s.paper.g(p6_mask1,p6_mask2),
			p6_bg = f.select(".p6_bg"),
			
			p6_line1 = s.paper.path(data.p6_line1).attr({'fill': 'none'}),
			p6_line2 = s.paper.path(data.p6_line2).attr({'fill': 'none','transform':'matrix(1,0,0,1,960,0)'});
		p6_g = s.paper.g(rec,p6_car,p6_paper,p6_build,p6_maskg, p6_line2,p6_line1,p6_static,p6_bub1,p6_bub2,p6_txt);
		s.append(p6_g);

		var p6_tlen1 = p6_line1.getTotalLength(),
			p6_tlen2 = p6_line2.getTotalLength();
		p6_paper.attr({
			'mask': p6_maskg,
		});
		p6_line2.attr({
			stroke : "#8AD4F9",
			"stroke-width": "100px",
			"stroke-dasharray": p6_tlen2,
			"stroke-dashoffset" : p6_tlen2
		}).animate({"stroke-dashoffset":0,'transform':'matrix(1,0,0,1,0,0)'},1000,mina.linear,function(){
			p6_bg = p6_bg.pattern(0,0,75,80);
			rec.attr({
				fill: p6_bg,
			})
			p6_mask2.animate({'width': 0},1000,mina.linear);
			p6_paper.animate({'opacity': 1,'transform':'matrix(1,0,0,1,0,0)'},1000,mina.linear,function(){
				p6_paper.attr({'class':'p6_paper bubFloat'});
			});
			p6_car.animate({'opacity': 1,'transform':'matrix(1,0,0,1,0,0)'},1000,mina.linear);
			

			p6_bub1.animate({'opacity': 1},400,mina.linear,function(){
				p6_build.animate({'opacity': 1,'transform':'matrix(1,0,0,1,0,0)'},600,mina.linear);
				p6_line1.attr({
					stroke : "#562F2F",
					"stroke-dasharray": p6_tlen1,
					"stroke-dashoffset" : p6_tlen1
				}).animate({"stroke-dashoffset":p6_tlen1*2},800,mina.linear,function(){
					// alert(11223345)
					p6_static.animate({'opacity': 1},1000,mina.linear);
					p6_txt.animate({'opacity': 1},1000,mina.linear);
					
				});
				
				
			});
			setTimeout(function(){
				p6_bub2.animate({'opacity': 1,'transform':'matrix(1,0,0,1,0,0)'},400,mina.linear)
			},750);	
		});

		slide(p6_g,function(){
	    	p6_g.animate({"transform":'matrix(1,0,0,1,-960,0)'},1000,mina.linear,function(){
				p6_g.remove();
			});
			p7(gf7);
	    });

	// })
}
// p7()
function p7(f){
	// Snap.load("./svg/p7.svg", function (f) {
		var p7_line1 = s.paper.path(data.p7_line1).attr({'fill': 'none'}),
			p7_line2 = s.paper.path(data.p7_line2).attr({'fill': 'none'}),
			p7_line3 = s.paper.path(data.p7_line3).attr({'fill': 'none'}),
			p7_line4 = s.paper.path(data.p7_line4).attr({'fill': 'none'}),
			p7_line5 = s.paper.path(data.p7_line5).attr({'fill': 'none'}),
			p7_line6 = s.paper.path(data.p7_line6).attr({'fill': 'none'}),
			p7_line7 = s.paper.path(data.p7_line7).attr({'fill': 'none'}),
			p7_line8 = s.paper.path(data.p7_line8).attr({'fill': 'none'}),
			p7_UIl1 = s.paper.path(data.p7_UIl1).attr({'fill': 'none'}),
			p7_txt = f.select("#p7_txt").attr({'opacity': 0}),
			p7_bg = f.select("#p7_bg").attr({'opacity': 0}),
			p7_static = f.select("#p7_static").attr({'opacity': 0}),
			p7_UI = f.select("#p7_UI").attr({'opacity': 0}),
			p7_mask = f.select("#p7_mask").attr({'opacity': 0}),
			p7_reload = f.select("#p7_reload").attr({'opacity': 0}),
			p7_bub = f.select("#p7_bub").attr({'opacity': 0,'transform':'matrix(1,0,0,1,-10,200)'}),
			p7_g = s.paper.g(p7_bg,p7_line1,p7_line2,p7_line3,p7_line4,p7_line5,p7_line6,p7_line7,p7_line8,p7_static,p7_UIl1,p7_UI,p7_bub,p7_mask,p7_txt,p7_reload).attr({'transform':'matrix(1,0,0,1,960,0)'});

			s.append(p7_g);
		var p7_tlen1 = p7_line1.getTotalLength(),
			p7_tlen2 = p7_line2.getTotalLength(),
			p7_tlen3 = p7_line3.getTotalLength(),
			p7_tlen4 = p7_line4.getTotalLength(),
			p7_tlen5 = p7_line5.getTotalLength(),
			p7_tlen6 = p7_line6.getTotalLength(),
			p7_tlen7 = p7_line7.getTotalLength(),
			p7_tlen8 = p7_line8.getTotalLength(),
			p7_tUIl1 = p7_UIl1.getTotalLength();


			


		p7_g.animate({'transform':'matrix(1,0,0,1,0,0)'},1000,mina.linear);
		p7_line1.attr({
			stroke : "#66B9EC",
			"stroke-width": "22px",
			"stroke-dasharray": p7_tlen1,
			"stroke-dashoffset" : p7_tlen1
		}).animate({"stroke-dashoffset":0},1200,mina.easeout,function(){
			p7_bg.animate({'opacity': 0.2},800,mina.linear);
			p7_line2.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p7_tlen2,
				"stroke-dashoffset" : p7_tlen2
			}).animate({"stroke-dashoffset":0},1200,mina.linear);
			p7_line8.attr({
				stroke : "#66B9EC",
				"stroke-width": "22px",
				"stroke-dasharray": p7_tlen8,
				"stroke-dashoffset" : p7_tlen8
			}).animate({"stroke-dashoffset":0},600,mina.linear);

			setTimeout(function(){
				p7_static.animate({'opacity': 1},800,mina.linear);
				p7_UI.animate({'opacity': 1},200,mina.linear);
				UI();
				function UI(){
					p7_UI.animate({'transform': 'matrix(1,0,0,1,0,240)'},2000,mina.linear);
					p7_UIl1.attr({
						stroke : "#552F2E",
						"stroke-dasharray": p7_tUIl1,
						"stroke-dashoffset" : p7_tUIl1+50
					}).animate({"stroke-dashoffset":p7_tUIl1*2},2000,mina.linear);
					
					setTimeout(function(){
						p7_UI.animate({'transform': 'matrix(1,0,0,1,0,0)'},2000,mina.linear);
						p7_UIl1.attr({
							stroke : "#552F2E",
							"stroke-dasharray": p7_tUIl1,
							"stroke-dashoffset" : p7_tUIl1*2 
						}).animate({"stroke-dashoffset":p7_tUIl1+50},2000,mina.linear,function(){
							window.requestAnimationFrame(UI);
						});
					},2200)	
				}
				p7_line7.attr({
					stroke : "#66B9EC",
					"stroke-width": "22px",
					"stroke-dasharray": p7_tlen7,
					"stroke-dashoffset" : p7_tlen7
				}).animate({"stroke-dashoffset":0},600,mina.easeout);
			},400);
			setTimeout(function(){
				p7_line3.attr({
					stroke : "#66B9EC",
					"stroke-width": "22px",
					"stroke-dasharray": p7_tlen3,
					"stroke-dashoffset" : p7_tlen3
				}).animate({"stroke-dashoffset":p7_tlen3*2},600,mina.linear);
				


			},800);
			setTimeout(function(){
				p7_line4.attr({
					stroke : "#66B9EC",
					"stroke-width": "22px",
					"stroke-dasharray": p7_tlen4,
					"stroke-dashoffset" : p7_tlen4
				}).animate({"stroke-dashoffset":0},600,mina.linear);
				p7_bub.animate({'opacity': 1,'transform': 'matrix(1,0,0,1,0,0)'},800,mina.linear,function(){
					p7_bub.attr('class', 'bubFloat')
				});
			},1000);
			setTimeout(function(){
				p7_line5.attr({
					stroke : "#66B9EC",
					"stroke-width": "22px",
					"stroke-dasharray": p7_tlen5,
					"stroke-dashoffset" : p7_tlen5
				}).animate({"stroke-dashoffset":0},300,mina.easeout);
				
				p7_line6.attr({
					stroke : "#66B9EC",
					"stroke-width": "22px",
					"stroke-dasharray": p7_tlen6,
					"stroke-dashoffset" : p7_tlen6
				}).animate({"stroke-dashoffset":0},300,mina.easeout,function(){
					
					
					p7_mask.animate({'opacity': 0.8},1000,mina.linear,function(){
						p7_txt.animate({'opacity': 1},1000,mina.linear);
						p7_reload.animate({'opacity': 1},1000,mina.linear);
						roll(p7_reload,8)
						p7_reload.touchstart(function(){
							p7_g.animate({"transform":'matrix(1,0,0,1,-960,0)'},1000,mina.linear,function(){
								p7_g.remove();
								// p0(gf0);
								loadSvg();
							});
							
						});
					});
				});
			},1200);
		})

	// })
	
}

});



