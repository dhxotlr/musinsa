// $('#join .join-start button').on('click',function(){
//   let flag=true
//   $('#join form input').each(function(){
    
//     if($(this).val()==""){
//       flag=false;
//     }
//   })
//   if(flag){
//     alert("무신사에 오신것을 환영합니다.")
//     console.log("두번체크")
//   }
//   else{
//     alert("모든값을 입력하세요")
//   }

// })
let randomNum = 0;
let doublecheck=false;
let userlist = JSON.parse(localStorage.getItem("users"))
  if (!userlist) {
     userlist = []
  }
$('.checkidbtn').on('click',function(){
  
  
  let userid =$('#userid').val()
  // let userpw =$('#userpw').val()
  
  
  doublecheck= userlist.find(value=> value.userid==userid)
  if(userid==""){
    alert("빈칸입니다 . 아이디를 입력해주세요.")
  }else if(doublecheck){
    
    alert("중복됩니다. 다른아이디를 입력해주세요.")
  
  }
  else{
    alert("사용하셔도 좋습니다.")
    
  }
  console.log(doublecheck)
})
$('#userpw2').on('input',function(){
  console.log($(this).text())
  let pw = $('#userpw').val()
  let pw2 =$(this).val()
  if(pw!=pw2){
    $(this).next().text("비밀번호가 같지 않습니다.")
    $(this).next().css({
      color:"red"
    })
  }else{
    $(this).next().text("비밀번호가 같습니다.")
    $(this).next().css({
      color:"blue"
    })
  }
    
    

  
})
$('.randomkeybtn').on('click',function(){
  // randomNum = Math.floor(Math.random()*8999)+1000
  let answer = confirm("인증번호를 발송하시겠습니까?") 
  console.log(answer)
  if(answer){
    randomNum =Math.random().toString(10).substr(2,4)
    alert("인증번호를 입력하세요. 인증번호 : "+randomNum)
      
  }
  

})

$('.randomkeysamebtn').on('click',function(){
  console.log(randomNum)
  if($("#userhpaw").val()==randomNum){
    alert("인증에 성공하셨습니다.")
  }
  else{
    alert("인증번호를 다시 입력해주세요.")
  }
})

$('#join form').on('submit',function(e){
  e.preventDefault()
  if(doublecheck) {
    alert("중복확인을 눌러주세요.");return}
  let flag=true
  
  $('#join form input').each(function(){
    
    if($(this).val()==""){
      flag=false;
    }
  })
  if($("#userhpaw").val()!=randomNum){
    alert("인증번호 확인버튼을 눌러주세요.");
    retrun;
  }
  if(flag){
    alert("무신사에 오신것을 환영합니다.")
    console.log("두번체크")
  }
  else{
    alert("모든값을 입력하세요")
    return
  }
  
  let userid =$('#userid').val()
  let userpw =$('#userpw').val()
  let newuser = {
    userid : userid,
    userpw : userpw
  }

 
  if(!doublecheck){
    userlist.push(newuser)
    localStorage.setItem("users",JSON.stringify(userlist))
    location.href='../html/login.html'
  }
 
})



//   if(userid&&userpw){
//     sessionStorage.setItem("userid",userid)
//     sessionStorage.setItem("userpw",userpw)
//     sessionStorage.setItem("type","myacc")
    
// }
  