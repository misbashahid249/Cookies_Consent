const cookieBox = document.querySelector(".wrapper"),
acceptBtn=cookieBox.querySelector(".buttons button");
acceptBtn.onclick=()=>{
  document.cookie = "CookieBy=MisbahShahid; max-age=" + 60*60*24*30;
    if(document.cookie){//if the above cookie set
cookieBox.classList.add("hide")//hide cookie box once its set
    } else{
        alert("cookies can't be set!!") //if cookie box can't be set then show an error
    }
}
let checkCookie=document.cookie.indexOf("CookieBy=MisbahShahid"); //checking our set cookie
// if cookiehide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide"):cookieBox.classList.remove("hide")
