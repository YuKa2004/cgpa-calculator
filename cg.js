function CalCg(){
    let in1=parseFloat(document.getElementById('input1').value);
    let in2=parseFloat(document.getElementById('input2').value);
    let in3=parseFloat(document.getElementById('input3').value);
    let in4=parseFloat(document.getElementById('input4').value);
    let in5=parseFloat(document.getElementById('input5').value);
    let in6=parseFloat(document.getElementById('input6').value);
    let in7=parseFloat(document.getElementById('input7').value);
    let in8=parseFloat(document.getElementById('input8').value);
    let a=[in1,in2,in3,in4,in5,in6,in7,in8];
    let count=0;
    let n=0;
    let sum=0;
    
    for (i=0;i<a.length;i++){
        if (isNaN(a[i])){
            count=count+1;
        }
        else{
            sum=sum+a[i];
            n++;
        }
        
        

    }
    let cgpa=sum/n;
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
    


}

    