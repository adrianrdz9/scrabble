if(document.cookie.split('=')[0] == "user"){
    document.querySelector("#user").innerHTML += document.cookie.split('=')[1]
}else{
    $("#userModal").modal();
    $("#userModal").on("hide.bs.modal", function(){
        location.reload();
    })
}

$("#submitUser").on("click", function(){
    document.cookie = "user="+$("#userInput").val()+";path=/;";
    location.reload();
})
$("#cambiarUser").on("click", function(){
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    location.reload();
})



