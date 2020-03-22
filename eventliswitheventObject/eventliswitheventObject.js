function checkLength(e, minLength) {  //declare function
  var el, elMesg;                    //decare variables
  if (!e) {                          //if event object doesn't exist
    e = window.event;                 //use ie fallback
  }

  var el = e.target || e.srcElement;  //get target of event
  elMesg = el.nextSibling;            //get its next sibling 

  if (el.value.length < minLength) {//if length is too sort set msg
    elMesg.innerHTML = "Username must be " + minLength + "character or more";
  } else {                          //otherwise
    elMesg.innerHTML = "";          //clear message 
  }
}

var elUsername = document.getElementById("username");//get username input
if (elUsername.addEventListener) {                 //if event listener supported
  elUsername.addEventListener('blur',function(e){  //on blur event
    checkUsername(e, 5);                           //call checkUsername()
  }, false);                                       //capture in bubble phase 
} else {                                        //otherwise
  elUsername.attachEvent('onblur',function(e){  //IE fallback on blur
    checkUsername(e, 5);                        //call checkUsername() 
  });
}
