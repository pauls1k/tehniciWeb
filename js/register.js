    var regi = document.getElementById("register"); //obiectul lui #register

    regi.style.display="flex";         //style #register
    regi.style.alignItems="center";
    regi.style.flexDirection="column";


    var reg = document.getElementById("registerContainer");  //obiectul lui #registerContainer

    var heading1 = document.createElement("h1");      // heading
    var nodH1 = document.createTextNode("Inregistreaza-te:");
    heading1.appendChild(nodH1);
    reg.appendChild(heading1);
    heading1.style.marginBottom="30px";

    /////////////
    // ul cu erorile de register
    /////////////

    var ul = document.createElement("ul");
    ul.setAttribute("id", "ulErori");

    var li = new Array(5);

    li[0] = document.createElement("li");
    li[0].innerHTML = "Nume introdus incorect";
    reg.appendChild(li[0]);
    li[0].style.display="none";

    li[1] = document.createElement("li");
    li[1].innerHTML = "Prenume introdus incorect";
    reg.appendChild(li[1]);
    li[1].style.display="none";

    li[2] = document.createElement("li");
    li[2].innerHTML = "Email introdus gresit";
    reg.appendChild(li[2]);
    li[2].style.display="none";

    li[3] = document.createElement("li");
    li[3].innerHTML = "Parola: minim 8 chr, 1 Up, 1 nr, 1 s";
    reg.appendChild(li[3]);
    li[3].style.display="none";

    li[4] = document.createElement("li");
    li[4].innerHTML = "varsta neselectata";
    reg.appendChild(li[4]);
    li[4].style.display="none";
    
    /////////////

    /////////////
    // inputuri
    /////////////

    var form = document.createElement("form");
    form.setAttribute("name", "form");
    

    var headingNume = document.createElement("h3");      
    var nodHnume = document.createTextNode("Nume:");
    headingNume.appendChild(nodHnume);
    form.appendChild(headingNume);
    reg.appendChild(form);

    var nume = document.createElement("input");
    nume.setAttribute("type", "text");
    nume.setAttribute("id", "numeReg");
    form.appendChild(nume);
    reg.appendChild(form);

    var headingPrenume = document.createElement("h3");      
    var nodHprenume = document.createTextNode("Prenume:");
    headingPrenume.appendChild(nodHprenume);
    form.appendChild(headingPrenume);
    reg.appendChild(form);

    var prenume = document.createElement("input");
    prenume.setAttribute("type", "text");
    prenume.setAttribute("id", "prenumeReg");
    form.appendChild(prenume);
    reg.appendChild(form);

    var headingEmail = document.createElement("h3");      
    var nodHemail = document.createTextNode("Email:");
    headingEmail.appendChild(nodHemail);
    form.appendChild(headingEmail);
    reg.appendChild(form);

    var email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("id", "emailReg");
    form.appendChild(email);
    reg.appendChild(form);

    var headingPassword = document.createElement("h3");      
    var nodHpassword = document.createTextNode("Password:");
    headingPassword.appendChild(nodHpassword);
    form.appendChild(headingPassword);
    reg.appendChild(form);

    var password = document.createElement("input");
    password.setAttribute("type", "password");
    password.setAttribute("id", "passwordReg");
    form.appendChild(password);
    reg.appendChild(form);

    var headingSelect = document.createElement("h3");      
    var nodHselect = document.createTextNode("Sex:");
    headingSelect.appendChild(nodHselect);
    form.appendChild(headingSelect);
    reg.appendChild(form);

    var select = document.createElement("select");
    select.setAttribute("id", "selectReg")
    form.appendChild(select);
    reg.appendChild(form);

    var option1 = document.createElement("option");
    var nodOption1 = document.createTextNode("Altul");
    option1.appendChild(nodOption1);
    select.appendChild(option1);
    reg.appendChild(form);

    var option2 = document.createElement("option");
    var nodOption2 = document.createTextNode("F");
    option2.appendChild(nodOption2);
    select.appendChild(option2);
    reg.appendChild(form);

    var option3 = document.createElement("option");
    var nodOption3 = document.createTextNode("M");
    option3.appendChild(nodOption3);
    select.appendChild(option3);
    reg.appendChild(form);

    var headingCheckbox = document.createElement("h3");      
    var nodHcheckbox = document.createTextNode("Animale detinute:");
    headingCheckbox.appendChild(nodHcheckbox);
    form.appendChild(headingCheckbox);
    reg.appendChild(form);


    var box1 = document.createElement("input");
    box1.setAttribute("type", "checkbox");
    box1.setAttribute("id", "checkboxReg1");
    var nodBox1 = document.createTextNode("Caine");
    form.appendChild(box1);
    form.appendChild(nodBox1)
    reg.appendChild(form);

    var br = document.createElement("br");
    form.appendChild(br);

    var box2 = document.createElement("input");
    box2.setAttribute("type", "checkbox");
    box2.setAttribute("id", "checkboxReg2");
    var nodBox2 = document.createTextNode("Pisica");
    form.appendChild(box2);
    form.appendChild(nodBox2)
    reg.appendChild(form);

    var br = document.createElement("br");
    form.appendChild(br);

    var box3 = document.createElement("input");
    box3.setAttribute("type", "checkbox");
    box3.setAttribute("id", "checkboxReg3");
    var nodBox3 = document.createTextNode("Altul");
    form.appendChild(box3);
    form.appendChild(nodBox3)
    reg.appendChild(form);

    var headingVarsta = document.createElement("h3");      
    var nodHvarsta = document.createTextNode("Varsta:");
    headingVarsta.appendChild(nodHvarsta);
    form.appendChild(headingVarsta);

    var radio1 = document.createElement("input");
    radio1.setAttribute("type", "radio");
    radio1.setAttribute("name", "age");
    radio1.setAttribute("id", "radioReg1");
    var nodRadio1 = document.createTextNode("18-50");
    form.appendChild(radio1);
    form.appendChild(nodRadio1);

    var br = document.createElement("br");
    form.appendChild(br);

    var radio2 = document.createElement("input");
    radio2.setAttribute("type", "radio");
    radio2.setAttribute("name", "age");
    radio2.setAttribute("id", "radioReg2");
    var nodRadio2 = document.createTextNode("51-100");
    form.appendChild(radio2);
    form.appendChild(nodRadio2);

    var br = document.createElement("br");
    form.appendChild(br);

    var headingRange = document.createElement("h3");      
    var nodHrange = document.createTextNode("Nota site:");
    headingRange.appendChild(nodHrange);
    form.appendChild(headingRange);

    var range = document.createElement("input");
    range.setAttribute("id", "rangeReg");
    range.setAttribute("type", "range");
    range.setAttribute("onchange", "mfc()");
    range.setAttribute("min", 0);
    range.setAttribute("max", 10);
    form.appendChild(range);

    var para = document.createElement("p");
    para.setAttribute("id", "pRange");
    form.appendChild(para);

    /////////////
    // functie care arata nota in timp real
    /////////////

    function mfc(){
        var rangeValue = document.getElementById("rangeReg").value;
        document.getElementById("pRange").innerHTML = "Nota este: " + rangeValue;
    }

    /////////////

    /////////////

    /////////////
    // button pentru register
    /////////////

    var butonRegister = document.createElement("button");
    var nodButon = document.createTextNode("Register");
    butonRegister.setAttribute("type", "button");
    butonRegister.setAttribute("id", "butonReg");
    butonRegister.setAttribute("onclick", "getinfo()");
    butonRegister.appendChild(nodButon);
    form.appendChild(butonRegister);

    /////////////
    // functie care testeaza inputurile
    /////////////

    let informatii = [];

    function getinfo(){

        var eroare = 0;

        var regexNume = /^[a-zA-Z]+$/;
        var numeUser = document.getElementById("numeReg").value;
        var numeMatch = regexNume.test(numeUser);

        if(!numeMatch){
            li[0].style.display="";
            eroare = 1;
        }else{
            li[0].style.display="none";

        }


        var regexPrenume = /^[a-zA-Z]+$/;
        var prenumeUser = document.getElementById("prenumeReg").value;
        var prenumeMatch = regexPrenume.test(prenumeUser);

        if(!prenumeMatch){
            li[1].style.display="";
            eroare = 1;
        }else{
            li[1].style.display="none";

        }


        var regexEmail = /^[a-zA-Z]+(\.?_?[a-zA-Z0-9])*@([a-z0-9]+([a-z0-9])\.)+[a-zA-Z]+$/;
        var emailUser = document.getElementById("emailReg").value;
        var emailMatch = regexEmail.test(emailUser);

        if(!emailMatch){
            li[2].style.display="";
            eroare = 1;
        }else{
            li[2].style.display="none";

        }


        var regexPassword = /(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[?!])[a-zA-Z0-9!?]{8,}/;
        var passwordUser = document.getElementById("passwordReg").value;
        var passwordMatch = regexPassword.test(passwordUser);

        if(!passwordMatch){
            li[3].style.display="";
            eroare = 1;
        }else{
            li[3].style.display="none";

        }

        var checkRadio1 = document.getElementById("radioReg1").checked;
        var checkRadio2 = document.getElementById("radioReg2").checked;
        
        if(!checkRadio1 & !checkRadio2){
            li[4].style.display="";
            eroare = 1;
        }else{
            li[4].style.display="none";

        }
        console.log(eroare);

        /////////////
        // daca nu avem erori de scriere in inputuri, adaugam noul user in localstorage
        /////////////

        if(eroare == 0){
            
            
            let infoUser = {
                email: document.getElementById("emailReg").value,
                password: document.getElementById("passwordReg").value
            }
            informatii.push(infoUser);

            document.querySelector("form").reset();

            localStorage.setItem("useri", JSON.stringify(informatii));

        }

        
    }

    /////////////
    // inputuri login
    /////////////

    var log = document.getElementById("loginContainer");

    var loginHeader = document.createElement("h1");
    var nodH1login = document.createTextNode("Logheaza-te:");
    loginHeader.appendChild(nodH1login);
    log.appendChild(loginHeader);

    var formLogin = document.createElement("form");
    formLogin.setAttribute("name", "formLogin");
    log.appendChild(formLogin);

    var hEmail = document.createElement('h3');
    var hEmailNode = document.createTextNode("Email:");
    hEmail.appendChild(hEmailNode);
    formLogin.appendChild(hEmail);

    var emailLogin = document.createElement("input");
    emailLogin.setAttribute("type", "email");
    emailLogin.setAttribute("id", "emailLogin");
    formLogin.appendChild(emailLogin);

    var hPassword = document.createElement('h3');
    var hPasswordNode = document.createTextNode("Password:")
    hPassword.appendChild(hPasswordNode);
    formLogin.appendChild(hPassword);

    var passwordLogin = document.createElement("input");
    passwordLogin.setAttribute("type", "password");
    passwordLogin.setAttribute("id", "passwordLogin");
    formLogin.appendChild(passwordLogin);

    var br = document.createElement("br");
    formLogin.appendChild(br);

    /////////////
    //button login
    /////////////


    var butonLogin = document.createElement("button");
    var nodButton = document.createTextNode("Login");
    butonLogin.setAttribute("type", "button");
    butonLogin.setAttribute("id", "butonLog");
    butonLogin.setAttribute("onclick", "login()");
    butonLogin.appendChild(nodButton);
    formLogin.appendChild(butonLogin);

    /////////////
    //functie login, daca datele din inputuri se potrivesc cu cele din localstorage => login
    /////////////


    function login(){

        var em = document.getElementById("emailLogin").value;
        var pw = document.getElementById("passwordLogin").value;

        var dateLocal = JSON.parse(localStorage.getItem('useri'));
        
        console.log(em);
        console.log(dateLocal.length);
        for(let i = 0;i<dateLocal.length;i++){
            if(em == dateLocal[i].email){
                if(pw == dateLocal[i].password){
                    alert("te ai logat");
                    var logged = 1;
                    localStorage.setItem("logat", JSON.stringify(logged)); // 1 - logat, 0 - nu e logat
                    location.reload();
                }
            }
    }
    
    
     
}

if(localStorage.getItem('logat')==1){
    reg.style.display="none";
    log.style.display="none";
}
    
    /////////////
    //click pe button de logout => logged = 0 si nu mai suntem logati

    function logout(){
        var logged = 0;
        localStorage.setItem("logat", JSON.stringify(logged));
        location.reload();
    }

    var out = document.getElementById("logoutContainer");
    if(localStorage.getItem('logat')==0){
        reg.style.display="";
        log.style.display="";
        out.style.display="none";
    }

    /////////////
    //functie schimbare bgcolor
    /////////////

    var butonStartCulori = document.getElementById("culoare");

    function culoareSite(){
        var bg = setInterval(
            function () {
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                document.body.style.backgroundImage="none";
                document.body.style.backgroundColor = "#"+randomColor;
            },2000);
            var butonStopCulori = document.getElementById("alege");
    butonStopCulori.addEventListener("click", function() {clearInterval(bg)});
            
    }



    var listaPostari = null;

    var xhr = new XMLHttpRequest();

    xhr.onload = function () {


    if (xhr.status >= 200 && xhr.status < 300) {

        console.log('success!', xhr);

        listaPostari = JSON.parse(xhr.response);
    } else {

        console.log('The request failed!');
    }


    console.log('This always runs...');
};


    /////////////
    //functie ajax
    /////////////
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos');
    xhr.send();

    window.onload = function(){

        var buttonAjax = document.getElementById("pozeAjax");
        var container = document.getElementById("postari");

        buttonAjax.addEventListener("click",function(){
            container.style.border = "2px solid black";
            listaPostari.forEach(function(postare){
                var title = document.createElement("h1");
                title.innerHTML = postare.title;

                var url = document.createElement("img");
                url.setAttribute("src", postare.thumbnailUrl);

                var newPost = document.createElement("div");
                newPost.style.backgroundColor = "yellow";
                newPost.style.margin = "5px";
                newPost.appendChild(title);
                newPost.appendChild(url);

                container.appendChild(newPost)
            })
        })
    }
        

    
