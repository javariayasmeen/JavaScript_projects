//Diologue box
const userEmail = () => {
    let enteredEmail=prompt(`Please Enter Your Email!!`);
    if(enteredEmail){
        alert(` Your Email is : ${enteredEmail}`);
        confirm(`Do you want to save your Email??`);
        alert(`Your Email Saved Successfully!!`)
    }
    else{
        alert(`No Email Entered.`);
    }
}
userEmail();
const changeProperties = ()=> {
    //Section Access Through Javascript
    let step1=document.querySelector("section");
    step1.style.width="30vw";
    step1.style.height="200px";
    step1.style.backgroundColor="skyblue";
    //h2 Access Through Javascript
    let step2=step1.querySelector("h2");
    step2.style.color="red";
    //p Access Through Javascript
    let step3=step1.querySelector("p");
    step3.style.fontSize="20px";
    step3.style.color="greenyellow";

};