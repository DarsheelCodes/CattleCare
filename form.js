document.getElementById('inputForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form submission to server

  // Get values from form
  let temp = parseFloat(document.getElementById('temp').value);
  let rate = parseFloat(document.getElementById('rate').value);
  let sp = parseFloat(document.getElementById('sp').value);

  // Define optimal ranges
  let tempOptimal = temp <= 39.2 && temp >= 38.6;
  let rateOptimal = rate <= 84 && rate >= 48;
  let spOptimal = sp <= 100 && sp >= 95;  // Adjust the range based on what 'sp' represents

  // Generate result messages
  let tempMessage = tempOptimal ? "Optimal Temperature" : "Not Optimal Temperature";
  let rateMessage = rateOptimal ? "Optimal Heart Rate" : "Not Optimal Heart Rate";
  let spMessage = spOptimal ? "Optimal Blood Saturation" : "Not Optimal Blood Saturation";

  // Display the results
  document.getElementById('tempResult').textContent = tempMessage;
  document.getElementById('rateResult').textContent = rateMessage;
  document.getElementById('spResult').textContent = spMessage;
});
