import React, { useEffect, useRef } from "react";

function InterMarksSheet() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let emailInputRef = useRef();

  let passwordInputRef = useRef();


  let engInputRef = useRef();
  let sanInputRef = useRef();
  let mathsaInputRef = useRef();
  let mathsbInputRef = useRef();
  let phyInputRef = useRef();
  let cheInputRef = useRef();
  let resultParaRef = useRef();
  let firstNameResultRef = useRef();
  let lastNameResultRef = useRef();
  let emailResultRef = useRef();
  let passwordResultRef = useRef();
  let englishResultRef = useRef();
  let sanskritResultRef = useRef();
  let mathsaResultRef = useRef();
  let mathsbResultRef = useRef();
  let physicsResultRef = useRef();
  let chemistryResultRef = useRef();
  let nameRegEx = /^[A-Z][a-zA-Z'-]{1,29}$/;
  let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;



  let validateName = (nameStr,resultRef)=> {
     let result = nameRegEx.test(nameStr);
     if (result == true) {
       resultRef.current.innerHTML = "valid";
       resultRef.current.style.backgroundColor = "green";
     } else {
      resultRef.current.innerHTML = "invalid";
       resultRef.current.style.backgroundColor = "red";
     }
  }
  let validateEmail = (emailStr, resultRef)=>{
    let result = emailRegEx.test(emailStr);
    if (result == true) 
      {
        resultRef.current.innerHTML = "valid";
        resultRef.current.style.backgroundColor = "green";
      
    } else {
      resultRef.current.innerHTML = "invalid";
       resultRef.current.style.backgroundColor = "red";
      
    }

  }
  let validatePassword = (passwordStr, resultRef)=>{
    let result = passwordRegEx.test(passwordStr);
    if (result == true) 
      {
        resultRef.current.innerHTML = "valid";
        resultRef.current.style.backgroundColor = "green";
      
    } else {
      resultRef.current.innerHTML = "invalid";
       resultRef.current.style.backgroundColor = "red";
      
    }

  }
  
  


  let calculateResult = () => {
    console.log("inside calculateResult");
    let firstName = firstNameInputRef.current.value;
    let lastName = lastNameInputRef.current.value;
    let engMarks = Number(engInputRef.current.value);
    let sanMarks = Number(sanInputRef.current.value);
    let mathsaMarks = Number(mathsaInputRef.current.value);
    let mathsbMarks = Number(mathsbInputRef.current.value);
    let phyMarks = Number(phyInputRef.current.value);
    let cheMarks = Number(cheInputRef.current.value);
    let totalMarks =
      engMarks + sanMarks + mathsaMarks + mathsbMarks + phyMarks + cheMarks;

    let result;

    if (
      engMarks < 35 ||
      sanMarks < 35 ||
      mathsaMarks < 35 ||
      mathsbMarks < 35 ||
      phyMarks < 35 ||
      cheMarks < 35
    ) {
      result = "Failed";
    } else {
      result = "Passed";
    }

    alert(` ${firstName} ${lastName} Total Marks are ${totalMarks}`);
    resultParaRef.current.innerHTML = `${firstName} ${lastName} ${result} in tenth and got total marks of ${totalMarks}`;
    console.log(totalMarks);
  };

  useEffect(() => {
    alert("Welcome to our Appication");
  }, []);

  let inputOnFocus = (inputRef,bgColor = "orange", textColor="black") => {
    inputRef.current.style.backgroundColor = bgColor;
    inputRef.current.style.color = textColor;
  };
  let inputOnBlur = (inputRef) => {
    inputRef.current.style.backgroundColor = "";
    inputRef.current.style.color = "black";
  };

  let inputOnChange = (inputRef,resultSpanRef) => {
    if (inputRef.current.value >= 0 && inputRef.current.value <= 100) {
      if (inputRef.current.value >= 35) {
        resultSpanRef.current.innerHTML = "Pass";
        resultSpanRef.current.style.backgroundColor = "green";
        resultSpanRef.current.style.color = "white";
      } else {
        resultSpanRef.current.innerHTML = "Fail";
        resultSpanRef.current.style.backgroundColor = "red";
        resultSpanRef.current.style.color = "white";
      }
    } else {
      resultSpanRef.current.innerHTML = "Invalid";
      resultSpanRef.current.style.backgroundColor = "black";
      resultSpanRef.current.style.color = "white";
    }
  };

  

  return (
    <div>
      <form>
        <div>
          <label>First Name</label>
          <input
            type="text"
            ref={firstNameInputRef}
            onFocus={() => {
              inputOnFocus(firstNameInputRef,"violet");
            }}
             onChange={() =>{
              validateName(firstNameInputRef.current.value,firstNameResultRef);

             }}
            onBlur={() => {
              inputOnBlur(firstNameInputRef);
            }}
          ></input>
          <span ref={firstNameResultRef}></span>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            ref={lastNameInputRef}
            onFocus={() => {
              inputOnFocus(lastNameInputRef,"blue", "white");
            }}
            onChange={() =>{
              validateName(lastNameInputRef.current.value,lastNameResultRef);

             }}
           
            onBlur={() => {
              inputOnBlur(lastNameInputRef);
            }}
          ></input>
          <span ref={lastNameResultRef}></span>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            ref={emailInputRef}
            onFocus={() => {
              inputOnFocus(emailInputRef,"blue", "white");
            }}
            onChange={() =>{
              validateEmail(emailInputRef.current.value,emailResultRef);

             }}
           
            onBlur={() => {
              inputOnBlur(emailInputRef);
            }}
          ></input>
          <span ref={emailResultRef}></span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            ref={passwordInputRef}
            onFocus={() => {
              inputOnFocus(passwordInputRef,"blue", "white");
            }}
            onChange={() =>{
              validatePassword(passwordInputRef.current.value,passwordResultRef);

             }}
           
            onBlur={() => {
              inputOnBlur(passwordInputRef);
            }}
          ></input>
          <span ref={passwordResultRef}></span>
        </div>
        <div>
          <label>Engish</label>
          <input
            type="number"
            ref={engInputRef}
            onFocus={() => {
              inputOnFocus(engInputRef,"green");
            }}
            onChange={() => {
              inputOnChange(engInputRef,englishResultRef);
            }}
            onBlur={() => {
              inputOnBlur(engInputRef);
            }}
          ></input>
          <span ref={englishResultRef}></span>
        </div>
        <div>
          <label>Sanskrit</label>
          <input
            type="number"
            ref={sanInputRef}
            onFocus={() => {
              inputOnFocus(sanInputRef);
            }}
            onChange={() => {
              inputOnChange(sanInputRef,sanskritResultRef);
            }}
            onBlur={() => {
              inputOnBlur(sanInputRef);
            }}
          ></input>
          <span ref={sanskritResultRef}></span>
        </div>
        <div>
          <label>Maths-A</label>
          <input
            type="number"
            ref={mathsaInputRef}
            onFocus={() => {
              inputOnFocus(mathsaInputRef);
            }}
            onChange={() => {
              inputOnChange(mathsaInputRef,mathsaResultRef);
            }}
            onBlur={() => {
              inputOnBlur(mathsaInputRef);
            }}
          ></input>
          <span ref={mathsaResultRef}></span>
        </div>
        <div>
          <label>Maths-B</label>
          <input
            type="number"
            ref={mathsbInputRef}
            onFocus={() => {
              inputOnFocus(mathsbInputRef);
            }}
            onChange={() => {
              inputOnChange(mathsbInputRef,mathsbResultRef);
            }}
            onBlur={() => {
              inputOnBlur(mathsbInputRef);
            }}
          ></input>
          <span ref={mathsbResultRef}></span>
        </div>
        <div>
          <label>Physics</label>
          <input
            type="number"
            ref={phyInputRef}
            onFocus={() => {
              inputOnFocus(phyInputRef);
            }}
            onChange={() => {
              inputOnChange(phyInputRef,physicsResultRef);
            }}
            onBlur={() => {
              inputOnBlur(phyInputRef);
            }}
          ></input>
          <span ref={physicsResultRef}></span>
        </div>
        <div>
          <label>Chemistry</label>
          <input
            type="number"
            ref={cheInputRef}
            onFocus={() => {
              inputOnFocus(cheInputRef);
            }}
            onChange={() => {
              inputOnChange(cheInputRef,chemistryResultRef);
            }}
            onBlur={() => {
              inputOnBlur(cheInputRef);
            }}
          ></input>
          <span ref={chemistryResultRef}></span>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              calculateResult();
            }}
          >
            Calculate Result
          </button>
          <button onClick={() => {}}>Scope of Variables</button>
        </div>
        <p ref={resultParaRef}>Please Enter values and Click Calculate</p>
      </form>
    </div>
  );
}

export default InterMarksSheet;
