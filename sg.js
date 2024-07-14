function selBra(buttonId){
    if (buttonId==b1||buttonId==b2){
    document.getElementById('semester').style.display='none';
    document.getElementById('display1').style.display='block';
    }
    else{
        document.getElementById('branch').style.display='block';
        document.getElementById('semester').style.display='none';

    }
    function selStr(strId){
        if (buttonId==b3&&strId==c1){
            document.getElementById('display1').style.display='block';
        }
        else if (buttonId==b4&&strId==c1){
            document.getElementById('display2').style.display='block';
    
        }
        else if (buttonId==b4&&strId==c2){
            document.getElementById('display2').style.display='block';
    
        }else if (buttonId==b3&&strId==c2){
            document.getElementById('display1').style.display='block';
    
        }
        else if (buttonId==b3&&strId==c3){
            document.getElementById('display1').style.display='block';
    
        }
        else if (buttonId==b4&&strId==c3){
            document.getElementById('display2').style.display='block';
    
        }
        else if (buttonId==b3&&strId==c4){
            document.getElementById('display1').style.display='block';
    
        }else if (buttonId==b4&&strId==c4){
            document.getElementById('display2').style.display='block';
    
        }
        else if (buttonId==b3&&strId==c5){
            document.getElementById('display3').style.display='block';
    
        }
        else if (buttonId==b4&&strId==c5){
            document.getElementById('display2').style.display='block';
    
        }
    }
}


function SGPA1() {
    let a1 = parseInt(document.getElementById('i1').value);
    let a2 = parseInt(document.getElementById('i2').value);
    let a3 = parseInt(document.getElementById('i3').value);
    let a4 = parseInt(document.getElementById('i4').value);
    let a5 = parseInt(document.getElementById('i5').value);
    let a6 = parseInt(document.getElementById('i6').value);
    let a7 = parseInt(document.getElementById('i7').value);
    let a8 = parseInt(document.getElementById('i8').value);

    let b = [a1, a2, a3, a4, a5, a6, a7, a8];
    let c = [];

    for (let i = 0; i < 8; i++) {
        if (b[i] >= 90 && b[i] <= 100) {
            c[i] = 10;
        } else if (b[i] >= 80 && b[i] <= 89) {
            c[i] = 9;
        } else if (b[i] >= 70 && b[i] <= 79) {
            c[i] = 8;
        } else if (b[i] >= 60 && b[i] <= 69) {
            c[i] = 7;
        } else if (b[i] >= 50 && b[i] <= 59) {
            c[i] = 6;
        } else if (b[i] >= 40 && b[i] <= 49) {
            c[i] = 5;
        } else if (b[i] >= 30 && b[i] <= 39) {
            c[i] = 4;
        } else if (b[i] >= 20 && b[i] <= 29) {
            c[i] = 3;
        } else if (b[i] >= 10 && b[i] <= 19) {
            c[i] = 2;
        } else {
            c[i] = 1;
        }
    }
    

    let sg1 = (4 * c[0] + 4 * c[1] + 3 * c[2] + 3 * c[3] + 3 * c[4] + c[5] + c[6] + c[7]) / 20;
    document.getElementById('result').innerText = `Your SGPA is ${sg1}`;
}
// function selStr(strId){
//     if (buttonId==b3&&strId==c1){
//         document.getElementById('display1').style.display='block';
//     }
//     else if (buttonId==b4&&strId==c1){
//         document.getElementById('display2').style.display='block';

//     }
//     else if (buttonId==b4&&strId==c2){
//         document.getElementById('display2').style.display='block';

//     }else if (buttonId==b3&&strId==c2){
//         document.getElementById('display1').style.display='block';

//     }
//     else if (buttonId==b3&&strId==c3){
//         document.getElementById('display1').style.display='block';

//     }
//     else if (buttonId==b4&&strId==c3){
//         document.getElementById('display2').style.display='block';

//     }
//     else if (buttonId==b3&&strId==c4){
//         document.getElementById('display1').style.display='block';

//     }else if (buttonId==b4&&strId==c4){
//         document.getElementById('display2').style.display='block';

//     }
//     else if (buttonId==b3&&strId==c5){
//         document.getElementById('display3').style.display='block';

//     }
//     else if (buttonId==b4&&strId==c5){
//         document.getElementById('display2').style.display='block';

//     }
// }
