ThemeCtrl={
  currentTheme:"default",
  themePaths:{
    "default":"styles/default.css",
    "inverse":"styles/inverse.css"
  },
  toggleTheme:function(){
    if(ThemeCtrl.currentTheme=="default"){
      ThemeCtrl.currentTheme="inverse";
      ThemeCtrl.applyTheme(ThemeCtrl.themePaths.inverse);
    }
    else{
      ThemeCtrl.currentTheme="default";
      ThemeCtrl.applyTheme(ThemeCtrl.themePaths.default);
    }
  },
  applyTheme:function(path){
    ThemeCtrl.removeCSSfiles();
  	var link = ThemeCtrl.getLink(path);
  	document.getElementsByTagName('head')[0].appendChild(link);
  },
  getLink:function(path){
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', path);
    return link;
  },

  removeCSSfiles:function(){
    ThemeCtrl.removecssfile("default");
    ThemeCtrl.removecssfile("inverse");
  },
  removecssfile:function(filename){
    var allsuspects=document.getElementsByTagName("link")
    for (var i=0; i<allsuspects.length; i++){ 
      if (allsuspects[i] && allsuspects[i].getAttribute("href")!=null && allsuspects[i].getAttribute("href").indexOf(filename)!=-1)
          allsuspects[i].parentNode.removeChild(allsuspects[i]) 
    }
  },
};

jQuery.fn.extend({
    creditcard16: function (keyCode) {
        var str = $(this).val();
        $('#cardType').removeClass('visaimg').removeClass('masterimg');

        /*Visa Validation*/
        if(/^4[0-9]{12}(?:[0-9]{3})?$/.test(str)) {
            $('#cardType').addClass('visaimg')
        }

        /*Master Validation*/
        if(/^5[1-5][0-9]{14}$/.test(str)) {
            $('#cardType').addClass('masterimg')
        }

        /*American Express Validation*/
        if(/^3[47][0-9]{13}$/.test(str)) {
            //$('#cardType').addClass('masterimg')
        }

        /*Diners Club Validation*/
        if(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(str)) {
            //$('#cardType').addClass('masterimg')
        }

        /*Discover Validation*/
        if(/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(str)) {
            //$('#cardType').addClass('masterimg')
        }

        /*JCB Validation*/
        if(/^(?:2131|1800|35\d{3})\d{11}$/.test(str)) {
            //$('#cardType').addClass('masterimg')
        }
    }
});