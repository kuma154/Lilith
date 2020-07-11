var s3=true;
var s0=true;
var s1=true;
var s2=true;
var s4=true;

$(function () {
                
                $('#ban').addClass('animated fadeInUpBig');
              
            }); 

    window.onscroll = function () {
        console.log(document.documentElement.scrollTop);
      
        if (document.documentElement.scrollTop >= 200) {
            if(s0==true){
               $(function () {
                $('#s1').css('opacity','1')
                $('#s1').addClass('animated fadeInUpBig');
                
                setTimeout(() => {
                    $('#s1').removeClass('fadeInUpBig');
                }, 3000);
            }); 
                 s0=false;
            }
           

        } 
        if (document.documentElement.scrollTop >= 800) {
            if(s1==true){
               $(function () {
                $('#s2').css('opacity','1')
                $('#s2').addClass('animated fadeInUpBig');
                setTimeout(() => {
                    $('#s2').removeClass('fadeInUpBig');
                }, 3000);
            }); 
                 s1=false;
            }
           

        }
     
        if (document.documentElement.scrollTop >= 1400) {
            if(s2==true){
               $(function () {
                $('#s3').css('opacity','1')
                $('#s3').addClass('animated fadeInUpBig');
                setTimeout(() => {
                    $('#s3').removeClass('fadeInUpBig');
                }, 3000);
            }); 
                 s2=false;
            }
           

        }
        if (document.documentElement.scrollTop >=2000) {
            if(s3==true){
               $(function () {
                $('#s4').css('opacity','1')
                $('#s4').addClass('animated fadeInUpBig');
                setTimeout(() => {
                    $('#s4').removeClass('fadeInUpBig');
                }, 3000);
            }); 
                 s3=false;
            }
           

        }
        if (document.documentElement.scrollTop >= 2400) {
            if(s4==true){
               $(function () {
                $('#s5').css('opacity','1')
                $('#s5').addClass('animated fadeInUpBig');
                setTimeout(() => {
                    $('#s5').removeClass('fadeInUpBig');
                }, 3000);
            }); 
                 s4=false;
            }
           

        }
        if(document.documentElement.scrollTop <200){
                    s0=true;
            }
        if(document.documentElement.scrollTop <400){
                    s1=true;
            }
        if(document.documentElement.scrollTop <1200){
                    s2=true;
            }
            if(document.documentElement.scrollTop <1800){
                    s3=true;
            }
            if(document.documentElement.scrollTop <2400){
                    s4=true;
            }


    }