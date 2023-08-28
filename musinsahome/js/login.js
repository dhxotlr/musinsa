
let users =JSON.parse(localStorage.getItem("users")) 
console.log("두번연결")
$('.loginForm').on('submit',function(e){
    console.log(e.target)
    e.preventDefault()
    let myid = $('#msid').val()
    let mypw = $('#mspw').val()
    let finduser= users.filter(value=>value.userid==myid &&value.userpw==mypw)
    
    if(finduser.length){
        localStorage.setItem("userid",myid)
        localStorage.setItem("userpw",mypw)
        location.href='../html/index.html'
    }
    else{
        alert("아이디와 비밀번호를 확인해주세요")
        console.log("틀립니다.")
        
    }
    
    
})