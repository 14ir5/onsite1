//yc:your choice]
var sum=0,cp=0,hp=0,sc=0,sh=0;


function rps(yc){
    var b1=document.getElementById("btc");
    if(typeof(b1) != 'undefined' && b1!= null){
        document.getElementById('btc').remove();
        document.getElementById('blc').remove();
    }
    var c1,c2;
    var element=document.getElementById("bat");
    if(typeof(element)!= 'undefined' && element != null){

      c1=yc.id; 
      c2=random();
      calc(c1,c2);
      frontend(c1,c2); 
    } 
    else{
        
        c2=yc.id; 
        c1=random();
        calc(c1,c2);
        frontend(c1,c2); 
    }
   
   
   
    
                                                                                 
   
}

function random(){
    return ['zero','one','two','three','four','five','six'][Math.floor(Math.random()*3)];
}


function calc(ch1,ch2)
{
   
    if(ch1==ch2){
        swap(sum);
    }
    else if(ch1=="zero")
    sum=sum+zero(ch2);
    else if(ch1=="one")
    sum=sum+1;
    else if(ch1=="two")
    sum=sum+2;
    else if(ch1=="three")
    sum=sum+3;
    else if(ch1=="four")
    sum=sum+4;
    else if(ch1=="five")
    sum=sum+5;
    else if(ch1=="six")
    sum=sum+6;
    
}
function zero(num){
    if(num=="one")
    return 1;
    if(num=="two")
    return 2;
    if(num=="three")
    return 3;
    if(num=="four")
    return 4;
    if(num=="five")
    return 5;
    if(num=="six")
    return 6;
    

}
function swap(runs){
    
    var element=document.getElementById("bat");
    if(typeof(element) != 'undefined' && element != null){
    document.getElementById('bat').remove();
    var cdiv=document.createElement('div');
    cdiv.innerHTML="!!!Your Balling!!!";
    document.getElementById("bd").appendChild(cdiv);
    cdiv.setAttribute("id", "ball");
    hp=runs;
    console.log(hp);
    sum=0;
    }
    else{
        document.getElementById('ball').remove();
        var cdiv=document.createElement('div');
        cdiv.innerHTML="!!1Your Batting!!!";
        document.getElementById("bd").appendChild(cdiv);
        cdiv.setAttribute("id", "bat");
        cp=runs;
        console.log(cp);
        sum=0;
        scoreboard(hp,cp);
    }

}
function scoreboard(ph,pc){
    var find=document.getElementById("hs");
    if(typeof(find) != 'undefined' && find!= null){
        document.getElementById('hs').remove();
        document.getElementById('cs').remove();
        if(ph>pc)
        {
            sh++;
        }
        else{
          sc++;
        }
        var  hs=document.createElement('div');
        var  cs=document.createElement('div');
        hs.innerHTML="Human Score :"+sh+"";
        cs.innerHTML="Computer Score :"+sc+"";
        document.getElementById("bd").appendChild(hs);
        document.getElementById("bd").appendChild(cs);
        hs.setAttribute("id", "hs");
        cs.setAttribute("id", "cs");
    }
    else{
    if(ph>pc)
    {
        sh++;
    }
    else{
      sc++;
    }
    var  hs=document.createElement('div');
    var  cs=document.createElement('div');
    hs.innerHTML="Human Score :"+sh+"";
    cs.innerHTML="Computer Score :"+sc+"";
    document.getElementById("bd").appendChild(hs);
    document.getElementById("bd").appendChild(cs);
    hs.setAttribute("id", "hs");
    cs.setAttribute("id", "cs");
}
}
function frontend(btch,blch){
    console.log("rida");
    var database={
        'zero':document.getElementById('zero').src,
        'one':document.getElementById('one').src,
        'two':document.getElementById('two').src,
        'three':document.getElementById('three').src,
        'four':document.getElementById('four').src,
        'five':document.getElementById('five').src,
        'six':document.getElementById('six').src


    }
    
       var  btc=document.createElement('div');
       var  blc=document.createElement('div');
       

       btc.innerHTML=" <img src= '" + database[btch] + "'height=150 width=150 style='box-shadow:0px 10px 50px blue'/><hr></hr><div style=color:green>BATTER CHOICE </div>"
       document.getElementById("bd").appendChild(btc);
       btc.setAttribute("id", "btc");
      
       blc.innerHTML=" <img src= '" + database[blch] + "'height=150 width=150 style='box-shadow:0px 10px 50px blue'/> <hr></hr><div style=color:red>BALLER CHOICE</div> "
       document.getElementById("bd").appendChild(blc);
       blc.setAttribute("id", "blc");
}