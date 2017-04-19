(function(window){

	'use strict';
	function Spaceship(){

		var _Spaceship = {};

		_Spaceship.init = function(){
			var css = window.document.createElement("style");
			css.type = "text/css";
			css.innerHTML = ".sp__ctn{ position: fixed;	right: 20px;bottom:90px;height: 70%;width:400px;border: 1px solid #CCC;border-radius: 10px;box-shadow: 0 7px 16px #CCC;font-family: Helvetica,Arial,sans-serif!important;} .sp__hdr{position: absolute;	height: 150px;top: 0;left:0;width: 100%;background-color: #2980b9;border-top-right-radius: 10px;border-top-left-radius: 10px;}.sp__chat{position: absolute;	top: 150px;	left:0;	padding: 10px 10px 10px 10px;bottom:60px;width: 100%;overflow-y: scroll;}.sp__chat__box__holder{position:relative;float:left;width:100%;margin-bottom:15px}.sp__chat__box__avatar{position:relative;height:35px;float:left;background-color:#CCC;width:35px;border-radius:50%}.chat__box__bubble{position:relative;float:left;margin-left:10px;background-color:#CCC;padding:5px 5px 5px 5px 5px;word-wrap:break-word;min-height:50px;width:85%;border-radius:5px}.sp__me__chat{float:right;background-color:#3498db}.sp__txt{position: absolute;left: 0;bottom: 0;height:60px;width: 100%;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px;}.sp__launcher{position: fixed;right: 20px;bottom:20px;height: 60px;width: 60px;border-radius: 50%;cursor: pointer;background-color: #2980b9;line-height: 70px;color: #FFF;text-align: center;box-shadow: 0 7px 16px #CCC;}.sp__inp__box{position: absolute;top:10px;bottom: 10px;right: 10px;left: 10px;border-radius: 5px;border: 1px solid #CCC;padding: 5px 5px 5px 5px;}.sp__txt__area{line-height: 20px;color:#666;border: none;width: 100%;height: 20px;resize: none;outline: none;}";
			window.document.head.appendChild(css);

			var sp__ctn = window.document.createElement("div");
			sp__ctn.className = "sp__ctn";
			window.document.body.appendChild(sp__ctn);

			var sp__hdr = window.document.createElement("div");
			sp__hdr.className = "sp__hdr";
			window.document.getElementsByClassName("sp__ctn")[0].appendChild(sp__hdr);

			var sp__chat = window.document.createElement("div");
			sp__chat.className = "sp__chat";
			window.document.getElementsByClassName("sp__ctn")[0].appendChild(sp__chat);

			var sp__chat__box__holder = window.document.createElement("div");
			sp__chat__box__holder.className = "sp__chat__box__holder";
			window.document.getElementsByClassName("sp__chat")[0].appendChild(sp__chat__box__holder);

			var sp__chat__box__avatar = window.document.createElement("div");
			sp__chat__box__avatar.className = "sp__chat__box__avatar";
			window.document.getElementsByClassName("sp__chat__box__holder")[0].appendChild(sp__chat__box__avatar);

			var chat__box__bubble = window.document.createElement("div");
			chat__box__bubble.className = "chat__box__bubble";
			window.document.getElementsByClassName("sp__chat__box__holder")[0].appendChild(chat__box__bubble);

			//=================================================================================================================

			sp__chat__box__holder = window.document.createElement("div");
			sp__chat__box__holder.className = "sp__chat__box__holder";
			window.document.getElementsByClassName("sp__chat")[0].appendChild(sp__chat__box__holder);



			chat__box__bubble = window.document.createElement("div");
			chat__box__bubble.className = "chat__box__bubble sp__me__chat";
			window.document.getElementsByClassName("sp__chat__box__holder")[1].appendChild(chat__box__bubble);

			//==================================================================================================================
			var sp__txt = window.document.createElement("div");
			sp__txt.className = "sp__txt";
			window.document.getElementsByClassName("sp__ctn")[0].appendChild(sp__txt);

			var sp__inp__box = window.document.createElement("div");
			sp__inp__box.className = "sp__inp__box";
			window.document.getElementsByClassName("sp__txt")[0].appendChild(sp__inp__box);

			var sp__txt__area = window.document.createElement("textarea");
			sp__txt__area.className = "sp__txt__area";
			window.document.getElementsByClassName("sp__inp__box")[0].appendChild(sp__txt__area);

			var sp__launcher = window.document.createElement("div");
			sp__launcher.className = "sp__launcher";
			window.document.body.appendChild(sp__launcher);

			var sp__launcher__img = window.document.createElement("img");
			sp__launcher__img.setAttribute("src","chat.svg");
			sp__launcher__img.setAttribute("height","20");
			sp__launcher__img.setAttribute("width","20");
			window.document.getElementsByClassName("sp__launcher")[0].appendChild(sp__launcher__img);

		}

		_Spaceship.ahoy = function(){
			return 'ahoy matey !';
		}

		return _Spaceship;

	}

	if(typeof(window.Spaceship) === 'undefined'){
		window.Spaceship = Spaceship();
	}

})(window);
