var 바디=document.body
var 테이블=document.createElement('table')
var 결과창=document.createElement('h2')
결과창.textContent='모드를 먼저 선택해주세요.'
바디.append(결과창)
var 결과창2=document.createElement('h3')
바디.append(결과창2)
결과창2.textContent=''

var 줄들=[]
var 칸들=[]

var 턴='X'
var 위너=''
var 대기중=0;
var 인공지능차례=0;

var 모드선택=0; //0이면 미선택, 1은 인공지능, 2는 혼자놀기

var 인공지능문양
var 플레이어문양

var 인공지능클릭=function(){
    모드선택=1
    인공지능차례=1
    var rand1=Math.random()*2
    var rand=Math.floor(rand1)
    console.log(rand1)
    console.log(rand)
    결과창2.textContent=''
    인공지능모드버튼.style.display='none'
    혼자놀기버튼.style.display='none'
    결과창.textContent='인공지능과 대결합니다.'
    테이블.style.display='block'

    결과창2.textContent='선후공을 결정중입니다...'
    setTimeout(function(){
        
        
        if(rand===0){
            인공지능문양='O'
            플레이어문양='X'
        }else{
            인공지능문양='X'
            플레이어문양='O'
        }
         console.log ('선후공정했습니다.')

        if(인공지능문양==='X'){
            결과창2.textContent='인공지능이 선공(X)입니다. 게임을 시작하십시오.'
            칸들[1][1].textContent=인공지능문양
        }else{
           결과창2.textContent='인공지능이 후공(O)입니다. 게임을 시작하십시오.'
            
        }
        인공지능차례=0
        console.log ('세팅끝이요')
    },2250)


}


var 혼자놀기클릭=function(){
    모드선택=2
    인공지능모드버튼.style.display='none'
    혼자놀기버튼.style.display='none'
    결과창.textContent='혼자 수를 번갈아 둡니다.'
    테이블.style.display='block'
}


function checkend(){
    for(var i=0;i<3;i++){
        if((칸들[i][0].textContent===칸들[i][1].textContent)&&(칸들[i][1].textContent===칸들[i][2].textContent)){
            if(칸들[i][0].textContent=='O'){
                위너='O'
                칸들[i][0].style.color='red'
                칸들[i][1].style.color='red'
                칸들[i][2].style.color='red'
                return 3
            }else if(칸들[i][0].textContent=='X'){
                위너='X'
                칸들[i][0].style.color='blue'
                칸들[i][1].style.color='blue'
                칸들[i][2].style.color='blue'
                return 1
            }
        }
        if((칸들[0][i].textContent===칸들[1][i].textContent)&&(칸들[1][i].textContent===칸들[2][i].textContent)){
            if(칸들[0][i].textContent=='O'){
                위너='O'
                칸들[0][i].style.color='red'
                칸들[1][i].style.color='red'
                칸들[2][i].style.color='red'
                return 3
            }else if(칸들[0][i].textContent=='X'){
                위너='X'
                칸들[0][i].style.color='blue'
                칸들[1][i].style.color='blue'
                칸들[2][i].style.color='blue'
                return 1
            }
        }
    }
    if((칸들[0][0].textContent===칸들[1][1].textContent)&&(칸들[1][1].textContent===칸들[2][2].textContent)){
        if(칸들[0][0].textContent=='O'){
            위너='O'
            칸들[0][0].style.color='red'
            칸들[1][1].style.color='red'
            칸들[2][2].style.color='red'
            return 3
        }else if(칸들[0][0].textContent=='X'){
            위너='X'
            칸들[0][0].style.color='blue'
            칸들[1][1].style.color='blue'
            칸들[2][2].style.color='blue'
            return 1
        }
    }
    if((칸들[0][2].textContent===칸들[1][1].textContent)&&(칸들[1][1].textContent===칸들[2][0].textContent)){
        if(칸들[0][2].textContent=='O'){
            위너='O'
            칸들[0][2].style.color='red'
            칸들[1][1].style.color='red'
            칸들[2][0].style.color='red'
            return 3
        }else if(칸들[0][2].textContent=='X'){
            위너='X'
            칸들[0][2].style.color='blue'
            칸들[1][1].style.color='blue'
            칸들[2][0].style.color='blue'
            return 1
        }
    }
    var count=0
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(칸들[i][j].textContent!==''){
                count++
            }
        }
    }
    if(count===9){
        return 2
    }
    return 0
}
function checkendforAI(){
    for(var i=0;i<3;i++){
        if((칸들[i][0].textContent===칸들[i][1].textContent)&&(칸들[i][1].textContent===칸들[i][2].textContent)){
            if(칸들[i][0].textContent=='O'){
                위너='O'
                return 3
            }else if(칸들[i][0].textContent=='X'){
                위너='X'
                return 1
            }
        }
        if((칸들[0][i].textContent===칸들[1][i].textContent)&&(칸들[1][i].textContent===칸들[2][i].textContent)){
            if(칸들[0][i].textContent=='O'){
                위너='O'
                return 3
            }else if(칸들[0][i].textContent=='X'){
                위너='X'
                return 1
            }
        }
    }
    if((칸들[0][0].textContent===칸들[1][1].textContent)&&(칸들[1][1].textContent===칸들[2][2].textContent)){
        if(칸들[0][0].textContent=='O'){
            위너='O'
            return 3
        }else if(칸들[0][0].textContent=='X'){
            위너='X'
            return 1
        }
    }
    if((칸들[0][2].textContent===칸들[1][1].textContent)&&(칸들[1][1].textContent===칸들[2][0].textContent)){
        if(칸들[0][2].textContent=='O'){
            위너='O'
            return 3
        }else if(칸들[0][2].textContent=='X'){
            위너='X'
            return 1
        }
    }
    var count=0
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(칸들[i][j].textContent!==''){
                count++
            }
        }
    }
    if(count===9){
        return 2
    }
    return 0
}

var 비동기콜백=function(이벤트){

    if(모드선택===0||인공지능차례===1){
        return 0
    }else if(모드선택===2){
       
    
    if(대기중===1){
        return 0
    }

        var 몇번째줄=줄들.indexOf(이벤트.target.parentNode)    
        var 몇번째칸=칸들[몇번째줄].indexOf(이벤트.target)

    if(checkend()===0){
        if(칸들[몇번째줄][몇번째칸].textContent!==''){
            
        }else{
            //console.log('빈칸입니다.')
            칸들[몇번째줄][몇번째칸].textContent=턴
            if(턴==='X'){
                턴='O'
            }else{
                턴='X'
            }
        }
    }


    if(checkend()===1||checkend()===3){
        //console.log(위너,'가 이겼습니다.')
        대기중=1
        결과창.textContent=위너+'가 이겼습니다!'
    
        결과창2.textContent='잠시 후 모드 선택으로 돌아갑니다.'
        
        setTimeout(function(){
            for(var i=0;i<3;i++){
                for(var j=0;j<3;j++){
                    칸들[i][j].textContent=''
                    칸들[i][j].style.color='black'
                }
            }
            턴='X'
            위너=''
            결과창.textContent=''
            대기중=0
            모드선택=0
            인공지능차례=0
            테이블.style.display='none'
            인공지능모드버튼.style.display='block'
            혼자놀기버튼.style.display='block'
            결과창2.textContent=''

        },3000)
    }

    if(checkend()===2){
        대기중=1
        결과창.textContent='무승부입니다.'
    
        결과창2.textContent='잠시 후 모드 선택으로 돌아갑니다.'
        setTimeout(function(){
            for(var i=0;i<3;i++){
                for(var j=0;j<3;j++){
                    칸들[i][j].textContent=''
                    칸들[i][j].style.color='black'
                }
            }
            턴='X'
            위너=''
            결과창.textContent=''
            대기중=0
            모드선택=0
            인공지능차례=0
            테이블.style.display='none'
            인공지능모드버튼.style.display='block'
            혼자놀기버튼.style.display='block'
            결과창2.textContent=''
            
        },3000)

    }
    }else{
        //인공지능 모드
        if(대기중===1){
            return 0
        }
            var 몇번째줄=줄들.indexOf(이벤트.target.parentNode)    
            var 몇번째칸=칸들[몇번째줄].indexOf(이벤트.target)
    
        if(checkend()===0){
            if(칸들[몇번째줄][몇번째칸].textContent!==''){
                //console.log('빈칸아닙니다.')
                
            }else{
                //console.log('빈칸입니다.')
                칸들[몇번째줄][몇번째칸].textContent=플레이어문양
                결과창2.textContent='인공지능과 대결중입니다.'
            }
        }
    
    
        if(checkend()===1||checkend()===3){
            대기중=1
            if(플레이어문양==='X'&&checkend()==1){
                결과창.textContent='플레이어가 이겼습니다!'
            }else if(플레이어문양==='O'&&checkend()==3){
                결과창.textContent='플레이어가 이겼습니다!'
            }else{
                결과창.textContent='인공지능이 이겼습니다.'
            }
            
        
            결과창2.textContent='잠시 후 모드 선택으로 돌아갑니다.'
            
            setTimeout(function(){
                for(var i=0;i<3;i++){
                    for(var j=0;j<3;j++){
                        칸들[i][j].textContent=''
                        칸들[i][j].style.color='black'
                    }
                }
                턴='X'
                위너=''
                결과창.textContent=''
                대기중=0
                모드선택=0
                인공지능차례=0
                테이블.style.display='none'
                인공지능모드버튼.style.display='block'
                혼자놀기버튼.style.display='block'
                결과창2.textContent=''
    
            },3000)
        }
    
        if(checkend()===2){
            대기중=1
            결과창.textContent='무승부입니다.'
        
            결과창2.textContent='잠시 후 모드 선택으로 돌아갑니다.'
            setTimeout(function(){
                for(var i=0;i<3;i++){
                    for(var j=0;j<3;j++){
                        칸들[i][j].textContent=''
                        칸들[i][j].style.color='black'
                    }
                }
                턴='X'
                위너=''
                결과창.textContent=''
                대기중=0
                모드선택=0
                인공지능차례=0
                테이블.style.display='none'
                인공지능모드버튼.style.display='block'
                혼자놀기버튼.style.display='block'
                결과창2.textContent=''
                
            },3000)


    }else{
        //인공지능의 차례
    console.log('인공지능 차례입니다.')
    인공지능차례=1
    결과창2.textContent='인공지능이 수를 두고 있습니다...'
    var 고민타임= Math.floor(Math.random()*1500+1500)
    console.log(고민타임,'고민타임')
    setTimeout(function(){
       // 인공지능의 수

        var 임시틱택토=[]
        임시틱택토.push([]) 
        임시틱택토.push([]) 
        임시틱택토.push([])
        임시틱택토[0][0]=(칸들[0][0])
        임시틱택토[0][1]=(칸들[0][1])
        임시틱택토[0][2]=(칸들[0][2])
        임시틱택토[1][0]=(칸들[1][0])
        임시틱택토[1][1]=(칸들[1][1])
        임시틱택토[1][2]=(칸들[1][2])
        임시틱택토[2][0]=(칸들[2][0])
        임시틱택토[2][1]=(칸들[2][1])
        임시틱택토[2][2]=(칸들[2][2])
      
        

        var 인공지능의수x=9
        var 인공지능의수y=9

        console.log('알고리즘 1 가동')
        console.log(임시틱택토)
        for(var i=0;i<3;i++){
            for(var j=0;j<3;j++){
                if(임시틱택토[i][j].textContent===''){
                    console.log('여기빈칸이네',i,j)
                    //만약 그 칸이 빈 칸이면
                    임시틱택토[i][j].textContent=인공지능문양 //자기 문양을 넣어본다
                    if((checkendforAI()===1&&인공지능문양==='X')||(checkendforAI()===3&&인공지능문양==='O')){
                        //만약 그칸에 문양을 넣었을때 이긴다면?
                        인공지능의수x=i
                        인공지능의수y=j
                        console.log('이기는 수를 찾았어요!')
                    }
                    임시틱택토[i][j].textContent=''
                }   
            }
        }   
        임시틱택토[0][0]=(칸들[0][0])
        임시틱택토[0][1]=(칸들[0][1])
        임시틱택토[0][2]=(칸들[0][2])
        임시틱택토[1][0]=(칸들[1][0])
        임시틱택토[1][1]=(칸들[1][1])
        임시틱택토[1][2]=(칸들[1][2])
        임시틱택토[2][0]=(칸들[2][0])
        임시틱택토[2][1]=(칸들[2][1])
        임시틱택토[2][2]=(칸들[2][2])

        if(인공지능의수x*인공지능의수y===81){  //만약 그런걸 찾지 못했다면?
            console.log('알고리즘 2 가동')
            console.log(임시틱택토)
            for(var i=0;i<3;i++){
                for(var j=0;j<3;j++){
                    if(임시틱택토[i][j].textContent===''){
                        console.log('여기빈칸이네',i,j)
                        //만약 그 칸이 빈 칸이면
                        임시틱택토[i][j].textContent=플레이어문양 //상대 문양을 넣어본다
                        if((checkendforAI()===1&&인공지능문양==='O')||(checkendforAI()===3&&인공지능문양==='X')){
                            //만약 그칸에 문양을 넣었을때 플레이어가 이긴다면? 방어해야 한다면?
                            인공지능의수x=i
                            인공지능의수y=j
                            console.log('방어할 수를 찾았어요!')
                        }
                        임시틱택토[i][j].textContent=''
                    }   
                }
            }    
        }

        임시틱택토[0][0]=(칸들[0][0])
        임시틱택토[0][1]=(칸들[0][1])
        임시틱택토[0][2]=(칸들[0][2])
        임시틱택토[1][0]=(칸들[1][0])
        임시틱택토[1][1]=(칸들[1][1])
        임시틱택토[1][2]=(칸들[1][2])
        임시틱택토[2][0]=(칸들[2][0])
        임시틱택토[2][1]=(칸들[2][1])
        임시틱택토[2][2]=(칸들[2][2])

        if(인공지능의수x*인공지능의수y===81){  
            console.log('알고리즘 3 가동')
            console.log(임시틱택토)//만약 그런것도 찾지 못했다면?
            for(var i=0;i<3;i++){
                for(var j=0;j<3;j++){
                    if(임시틱택토[i][j].textContent===인공지능문양){
                        console.log('여기 내가 놓은 칸이네',i,j)
                        //만약 그 칸이 인공지능 문양이 있는 칸이면
                        if(i-1>=0&&i-1<=2){
                            console.log('그 위칸이 있어')
                            if(임시틱택토[i-1][j].textContent===''){         //그 위쪽이 빈칸이라면
                                console.log('그 위칸이 비었어')
                                인공지능의수x=i-1
                                인공지능의수y=j
                                console.log('그나마 괜찮은 수를 찾았어요!')
                            }
                        }
                        if(i+1>=0&&i+1<=2){
                            console.log('그 아래칸이 있어')
                            if(임시틱택토[i+1][j].textContent===''){         //그 아래쪽이 빈칸이라면
                                console.log('그 아래칸이 비었어')
                                인공지능의수x=i+1
                                인공지능의수y=j
                                console.log('그나마 괜찮은 수를 찾았어요!')
                            }
                        }
                        if(j-1>=0&&j-1<=2){
                            console.log('그 왼칸이 있어')
                            if(임시틱택토[i][j-1].textContent===''){         //그 왼쪽이 빈칸이라면
                                console.log('그 왼칸이 비었어')
                                인공지능의수x=i
                                인공지능의수y=j-1
                                console.log('그나마 괜찮은 수를 찾았어요!')
                            }
                        }
                        if(j+1>=0&&j+1<=2){
                            console.log('그 오른칸이 있어')
                            if(임시틱택토[i][j+1].textContent===''){         //그 오른쪽이 빈칸이라면
                                console.log('그 오른칸이 비었어')
                                인공지능의수x=i
                                인공지능의수y=j+1
                                console.log('그나마 괜찮은 수를 찾았어요!')
                            }
                        }
                        

                    }   
                }
            }    
        }
        
        임시틱택토[0][0]=(칸들[0][0])
        임시틱택토[0][1]=(칸들[0][1])
        임시틱택토[0][2]=(칸들[0][2])
        임시틱택토[1][0]=(칸들[1][0])
        임시틱택토[1][1]=(칸들[1][1])
        임시틱택토[1][2]=(칸들[1][2])
        임시틱택토[2][0]=(칸들[2][0])
        임시틱택토[2][1]=(칸들[2][1])
        임시틱택토[2][2]=(칸들[2][2])

        if(인공지능의수x*인공지능의수y===81){
            console.log('알고리즘 4 가동')
            console.log(임시틱택토) //만약 그런것마저 찾지 못했다면?
            for(var i=0;i<3;i++){
                for(var j=0;j<3;j++){
                    console.log('여기 칸이네',i,j)
                    if(임시틱택토[i][j].textContent===''){
                        //만약 그 칸이 빈 칸이면
                        인공지능의수x=i
                        인공지능의수y=j
                        console.log('아무데나 놓을게요!')
                    }   
                }
            }  
            if(임시틱택토[1][1].textContent===''){
                //만약 그 칸이 빈 칸이면
                인공지능의수x=1
                인공지능의수y=1
                console.log('1 1 에 놓을게요!')
            }  
        }
        
        console.log(인공지능의수x, 인공지능의수y)
        
        칸들[인공지능의수x][인공지능의수y].textContent=인공지능문양

        console.log(칸들[인공지능의수x][인공지능의수y])
        결과창2.textContent='인공지능과 대결중입니다.' 
        

        if(checkend()===1||checkend()===3){
            대기중=1
            if(플레이어문양==='X'&&checkend()==1){
                결과창.textContent='플레이어가 이겼습니다!'
            }else if(플레이어문양==='O'&&checkend()==3){
                결과창.textContent='플레이어가 이겼습니다!'
            }else{
                결과창.textContent='인공지능이 이겼습니다.'
            }
            
        
            결과창2.textContent='잠시 후 모드 선택으로 돌아갑니다.'
            
            setTimeout(function(){
                for(var i=0;i<3;i++){
                    for(var j=0;j<3;j++){
                        칸들[i][j].textContent=''
                        칸들[i][j].style.color='black'
                    }
                }
                턴='X'
                위너=''
                결과창.textContent=''
                대기중=0
                모드선택=0
                인공지능차례=0
                테이블.style.display='none'
                인공지능모드버튼.style.display='block'
                혼자놀기버튼.style.display='block'
                결과창2.textContent=''
    
            },3000)
        }
    
        if(checkend()===2){
            대기중=1
            결과창.textContent='무승부입니다.'
        
            결과창2.textContent='잠시 후 모드 선택으로 돌아갑니다.'
            setTimeout(function(){
                for(var i=0;i<3;i++){
                    for(var j=0;j<3;j++){
                        칸들[i][j].textContent=''
                        칸들[i][j].style.color='black'
                    }
                }
                턴='X'
                위너=''
                결과창.textContent=''
                대기중=0
                모드선택=0
                인공지능차례=0
                테이블.style.display='none'
                인공지능모드버튼.style.display='block'
                혼자놀기버튼.style.display='block'
                결과창2.textContent=''
                
            },3000)
    
    
        }

        인공지능차례=0
    },고민타임)
    }

    

    


}
}






for (var i=1;i<=3;i++){
    var 줄=document.createElement('tr')
    줄들.push(줄)
    칸들.push([])
    for(var j=1;j<=3;j++){
        var 칸=document.createElement('td')
        칸.addEventListener('click',비동기콜백)
        칸들[i-1].push(칸)
        줄.appendChild(칸)
    }
    테이블.appendChild(줄)
}
바디.appendChild(테이블)
테이블.style.display='none'

var 줄간격=document.createElement('br')
var 인공지능모드버튼=document.createElement('button')
var 혼자놀기버튼=document.createElement('button')
인공지능모드버튼.textContent='인공지능과 대결'
혼자놀기버튼.textContent='혼자 놀기'
바디.append(인공지능모드버튼)
바디.append(혼자놀기버튼)
인공지능모드버튼.style.display='block'
혼자놀기버튼.style.display='block'

인공지능모드버튼.addEventListener('click',인공지능클릭)
혼자놀기버튼.addEventListener('click',혼자놀기클릭)


