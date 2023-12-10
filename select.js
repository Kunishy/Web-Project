let optionStates = {
    bow: false,
    catalyst: false,
    claymore: false,
    pole: false,
    sword: false
};

function toggleOption(option) {
    optionStates[option] = !optionStates[option];
    for(let x in optionStates)
    {
        console.log(optionStates[x]);
        if(optionStates[x])
        {
            let item = document.getElementById('op' + x).setAttribute("class", "selected-option");
        }
        else
        {
            let item = document.getElementById('op' + x).setAttribute("class", "option");
        }
    }
    updateDisplay();
}

function updateDisplay(selectedOption) {
    var weaponDivs = document.querySelectorAll('.weapons > div');

    weaponDivs.forEach(function(div) {
        let option = div.id;
        div.style.display = optionStates[option] ? 'block' : 'none';
    });
  }
