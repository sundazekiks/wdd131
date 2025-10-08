let yearUpToDate = document.getElementById('yearUpToDate');
let d = new Date();
yearUpToDate.textContent = d.getFullYear();

const logoAndTitleCo = document.querySelector('.logoAndCoTitle');
const nav = document.querySelector('.navigationBar');

// Create burger button (only once)
const burgerBtn = document.createElement('button');
burgerBtn.textContent = "≡";
Object.assign(burgerBtn.style, {
  width: "50px",
  height: "50px",
  fontSize: "28px",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  color: "white",
  position: "relative",
  zIndex: "1000" // makes sure it's always clickable
});

// Toggle nav visibility on burger click
burgerBtn.addEventListener("click", () => {
  const isHidden = nav.style.display === "none";
  nav.style.display = isHidden ? "flex" : "none";

  if (isHidden) {
    Object.assign(nav.style, {
      flexDirection: "column",
      position: "absolute",
      top: "70px",
      right: "10px",
      background: "#004687",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      zIndex: "999"
    });
  }
});

// Function to handle resizing
function handleResize() {
  if (window.innerWidth < 500) {
    // Mobile view → show burger, hide nav
    if (!logoAndTitleCo.contains(burgerBtn)) {
      logoAndTitleCo.appendChild(burgerBtn);
    }
    nav.style.display = "none";
  } else {
    // Desktop view → remove burger, reset nav completely
    if (logoAndTitleCo.contains(burgerBtn)) {
      burgerBtn.remove();
    }
    Object.assign(nav.style, {
      display: "flex",
      flexDirection: "",
      position: "",
      top: "",
      right: "",
      background: "",
      borderRadius: "",
      padding: "",
      boxShadow: "",
      zIndex: ""
    });
  }
}

// Run once on load + when resized
handleResize();
window.addEventListener("resize", handleResize);


const handleSubmitForm = (event) =>{
  event.preventDefault();
  const name = document.getElementById('NameOfOwner').value;
  const phone = document.getElementById('PhoneNumber').value;
  const address = document.getElementById('PropertyAddress').value;

  const listOfObjects = [];
  const peopleWhoSignedUpFromForm = {};

  let key1 = "name" ;
  let key2 =  "phone";
  let key3 = "address";

  peopleWhoSignedUpFromForm[key1] = name;
  peopleWhoSignedUpFromForm[key2] = phone;
  peopleWhoSignedUpFromForm[key3] = address;


  listOfObjects.push(peopleWhoSignedUpFromForm);

  console.log(peopleWhoSignedUpFromForm.name);
  localStorage.setItem("personData", JSON.stringify(listOfObjects));
  personDisplay();
}

function personDisplay(){
  const storedData = JSON.parse(localStorage.getItem("personData"));
  console.log(storedData);
}


