let count = 0;
function checkButton() {   
    // question1
    var ele = document.getElementsByName('question1');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            if(ele[i].value == "option1"){
                count = count + 1;
            }  
        }
    }

    // question2
    var ele = document.getElementsByName('question2');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            if(ele[i].value == "option3"){
                count = count + 1;
            }  
        }
    }

    // question3
    var ele = document.getElementsByName('question3');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            if(ele[i].value == "option4"){
                count = count + 1;
            }  
        }
    }

    // question4
    var ele = document.getElementsByName('question4');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            if(ele[i].value == "option3"){
                count = count + 1;
            }  
        }
    }

    // question5
    var ele = document.getElementsByName('question5');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            if(ele[i].value == "option4"){
                count = count + 1;
            }  
        }
    }
    localStorage.setItem("key", count);
    document.getElementById("count-value").innerHTML = localStorage.getItem("key");
    count = 0;
}  