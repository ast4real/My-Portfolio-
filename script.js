(function(){
var root=document.documentElement,btn=document.getElementById('theme');
try{var t=localStorage.getItem('theme');if(t)root.setAttribute('data-theme',t)}catch(e){}
btn.addEventListener('click',function(){
var dark=root.getAttribute('data-theme')?root.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme: dark)').matches;
var n=dark?'light':'dark';root.setAttribute('data-theme',n);
try{localStorage.setItem('theme',n)}catch(e){}
});
var f=document.getElementById('form'),s=document.getElementById('status');
f.addEventListener('submit',function(e){
e.preventDefault();
var d=new FormData(f),n=d.get('name').trim(),m=d.get('email').trim(),b=d.get('message').trim();
if(!n||!/^\S+@\S+\.\S+$/.test(m)||!b){s.textContent='Enter your name, a valid email and a message.';return}
location.href='mailto:astewaymelese46@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(b+'\n\n'+n+' ('+m+')');
s.textContent='Opening your email app to send the message.';
});
})();
