!function(e,t){e.all([e.script(document,t+"build/js/post.js"),e.ajax(t+"build/x-handlebars-templates/house_images.html")]).then(function(t){function a(e,t){if(e.parentElement&&e.parentElement.parentElement&&"IMG"===e.tagName&&"LI"===e.parentElement.tagName&&e.parentElement.parentElement.classList.contains("gallery")){t.preventDefault();var a=e.getAttribute("src");r.style.backgroundImage='url("'+a+'")',r.style.backgroundPosition="center",r.style.backgroundRepeat="no-repeat",r.style.backgroundSize="contain",r.style.opacity="1",r.style.visibility="visible"}}function n(e){if(e instanceof TouchEvent){var t=Math.abs(e.pageX-i),n=Math.abs(e.pageY-o);if(t*t+n*n>1936)return}var r=e.target;do a(r,e);while(r=r.parentElement);"cover"===e.target.id&&(e.target.style.opacity="0",setTimeout(function(){e.target.style.visibility="hidden"},900))}e.append(document.querySelector("section.post-content > .images"),t[1]);var i,o,r=document.getElementById("cover");document.addEventListener("click",n),document.addEventListener("touchstart",function(e){i=e.pageX,o=e.pageY}),document.addEventListener("touchend",n),new jPlayerPlaylist({jPlayer:"#jquery_jplayer_1",cssSelectorAncestor:"#jp_container_1"},[{title:"客厅",artist:"Me",free:!0,m4v:"../../images/house/VID_20161225_102638_1.mp4"},{title:"卧室",artist:"Me",m4v:"../../images/house/VID_20161225_102638_2.mp4"}],{swfPath:"../../../3rdLib/jplayer/jplayer",supplied:"webmv, ogv, m4v",useStateClassSkin:!0,autoBlur:!1,smoothPlayBar:!0,keyEnabled:!0})})}(window.top.ES6Promise.Promise,window.top.Router.rootHref,window.top.Router,window.top.PageSlider);