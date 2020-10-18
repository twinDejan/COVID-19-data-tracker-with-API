
fetch(`https://corona.lmao.ninja/v2/countries/macedonia`)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country").innerHTML = data.country;
  document.getElementById("active").innerHTML = data.active.toLocaleString();
  document.getElementById("cases").innerHTML = data.cases.toLocaleString();
  document.getElementById("critical").innerHTML = data.critical.toLocaleString();
  document.getElementById("death").innerHTML = data.deaths.toLocaleString();
  document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
  document.getElementById("tests").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag").src = data.countryInfo.flag;
});

function onChange(event) {
    this.inputValue = event.target.value
}

function onSubmit(event) {
    event.preventDefault()
    const errorMessage = validateInput(this.inputValue)
  
    if (errorMessage) {
      alert(errorMessage);
      return
    }
    const country = this.inputValue;
    fetch(`https://corona.lmao.ninja/v2/countries/${country}`)
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    console.log(data);
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("active").innerHTML = data.active.toLocaleString();
    document.getElementById("cases").innerHTML = data.cases.toLocaleString();
    document.getElementById("critical").innerHTML = data.critical.toLocaleString();
    document.getElementById("death").innerHTML = data.deaths.toLocaleString();
    document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
    document.getElementById("tests").innerHTML = data.tests.toLocaleString();
    document.getElementById("flag").src = data.countryInfo.flag;
});
}

function validateInput(value) {
    if (value.length < 3) return "Name is too short!"
  
    return null
  }