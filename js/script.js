let getBarNewValue = function(currentBarValue, additionalValue) {
	let newValue = parseInt(currentBarValue, 10) + parseInt(additionalValue, 10);

	if (newValue <= 0) {
		newValue = 0
	}

	return newValue;
};

let getJSON = async function(url) {
	var response = await fetch(url);

	return response.json();
};

window.onload = async function() {

	const URL = 'http://pb-api.herokuapp.com/bars';
	let LIMIT = 0;
	let data = await getJSON(URL);

	
	// set limit
	LIMIT = data.limit;
	document.getElementById('limit').innerText = LIMIT;


	// set up dynamic bars and select dropdown
	let $bars = document.getElementById('selectChoice-items');
	let $selectChoice = document.getElementById('selectChoice');

	let barsHTML = '';
	let selectChoiceHTML = '';
	data.bars.forEach(function(entry, key) {
		barsHTML = barsHTML + `
			<div id="bar${key}" data-value="${entry}">
				<div class="percentText">${entry}%</div>
				<div id="outputItem">
					<div class="item" style="width: ${entry}%"></div>
				</div>
			</div>
		`;

		selectChoiceHTML = selectChoiceHTML + `<option value="bar${key}">progress ${key+1}</option>`;
	});
	$bars.innerHTML = barsHTML;
	$selectChoice.innerHTML = selectChoiceHTML;


	// set up dynamic buttons
	let $buttonsContainer = document.getElementById('buttonsContainer');
	let buttonsHTML = '';
	data.buttons.forEach(function(entry, key) {
		buttonsHTML = buttonsHTML + `<button class="btn-update-bar btn btn-lg btn-default btn-block" data-value="${entry}">${entry}</button>`;
	});
	$buttonsContainer.innerHTML = buttonsHTML;


	// set up click event listeners
	let $buttons = document.getElementsByClassName('btn-update-bar');
	for (let $button of $buttons) {
		$button.addEventListener('click', function() {
			let $selectedBar = document.getElementById($selectChoice.value);
			let currentBarValue = $selectedBar.getAttribute('data-value');
			let additionalValue = $button.getAttribute('data-value');
			let newValue = getBarNewValue(currentBarValue, additionalValue);

			$selectedBar.setAttribute('data-value', newValue);
			$selectedBar.querySelector('.percentText').innerText = newValue + '%';
			$selectedBar.querySelector('.item').style.width = newValue + '%';

			// set color change when limit is hit
			if (newValue >= LIMIT) {
				$selectedBar.querySelector('.item').style.background = 'red';
			} else {
				$selectedBar.querySelector('.item').style.background = '#269abc';
			}
		});
	}

};