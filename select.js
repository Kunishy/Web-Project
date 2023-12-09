let optionStates = {
    bow: false,
    catalyst: false,
    claymore: false,
    pole: false,
    sword: false
};

function toggleOption(option) {
    optionStates[option] = !optionStates[option];
    updateDisplay();
}

function updateDisplay() {
    var weaponDivs = document.querySelectorAll('.weapons > div');

    weaponDivs.forEach(function(div) {
        let option = div.id;
        div.style.display = optionStates[option] ? 'block' : 'none';
        div.style.backgroundColor = optionStates[option] ? 'blue' : '#5C5470';
    });
  }