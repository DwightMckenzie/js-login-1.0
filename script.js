console.log('ready');

let attmpt = 0;
let attmptAllwd = 1;
let un = 'Admin';
let pw = 'abc123'; 

function submit() {
    console.log('submit');

    let uName = document.getElementById('username').value;
    let pWord = document.getElementById('password').value;
    
    if (uName === un && pWord === pw) {
        document.querySelector('.msg').hidden = false;

        setTimeout(() => {
            window.location = 'pg-access.html';
        }, 1500);

    } else {
        console.warn('Wrong login in');
        alert('Unrecognised Login: Please try again');
        reveal(attmpt++);
    }
}

function reveal(cnt) {
    if (cnt === attmptAllwd) {
        alert(`Exceeded login attmepts ${cnt+1}. Here is a hint: Sometimes seeking the console of another will reveal the answer.`);

        console.info('Heres some help.');
        console.info(`Username: ${un} & Password: ${pw}`);
    }
}


/*console.log(userName, passWord);*/



/*var button1 = document.getElementById("access");.value
// function expression
button1.onclick = function() {
    var input1 = document.createElement("input");
    
    prompt(input1);
    
}*/


/*function done() { 
    document.getElementById("popup").style.display = "none";
    var password = document.getElementById("pass").value;
    
    //DO STUFF WITH PASSWORD HERE    
};

function showPopup() {
     document.getElementById("popup").style.display = "block";
}*/