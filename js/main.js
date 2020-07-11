var items=document.getElementsByClassName('item');
        var left=document.getElementById('left');
        var right=document.getElementById('right');
        var icon=document.getElementsByClassName('btnn');
        var black=document.getElementsByClassName('black');

        var index=0;
        var clear=function(){
            for(var i=0;i<items.length;i++){
                items[i].className='item'
            }
        }
        var goindex=function(){
            clear();
            items[index].className='item active'
        }
        var next=function(){
            if(index<6){
                index++;
            }else{
                index=0
            }
            goindex();
        }
        var pre=function(){
            if(index>0){
                index--;
            }else{
                index=6;
            }
            goindex();
        }
        left.addEventListener('click',()=>{
            pre();
           
            console.log(index);
        })
        right.addEventListener('click',()=>{
            next();
            
            console.log(index);
        })

        for(var i=0;i<icon.length;i++){
            icon[i].addEventListener('mouseover',function(){
               var dateIndex=this.getAttribute('data-index');
              
               index=dateIndex;
               goindex();
            })
        }

        var start=function(){
            setInterval(function(){
            
           next();
         
        }, 3500);
        }
        start();