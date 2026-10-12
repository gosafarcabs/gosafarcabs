// Tab switching
const $ = id => document.getElementById(id);
let main = 'outstation', outSub = 'oneway', locSub = 'hourly';

function setSelected(group, key, attr){
  group.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', b.dataset[attr] === key));
}
document.querySelectorAll('[data-main]').forEach(b => b.onclick = () => {
  main = b.dataset.main;
  setSelected(b.parentElement, main, 'main');
  $('outstation').classList.toggle('hide', main !== 'outstation');
  $('local').classList.toggle('hide', main !== 'local');
});
document.querySelectorAll('#outstation [data-sub]').forEach(b => b.onclick = () => {
  outSub = b.dataset.sub;
  setSelected(b.parentElement, outSub, 'sub');
  $('returnBox').classList.toggle('hide', outSub !== 'round');
});
document.querySelectorAll('#local [data-sub]').forEach(b => b.onclick = () => {
  locSub = b.dataset.sub;
  setSelected(b.parentElement, locSub, 'sub');
  $('hourlyBox').classList.toggle('hide', locSub !== 'hourly');
  $('airportBox').classList.toggle('hide', locSub !== 'airport');
});

// Default dates
const today = new Date().toISOString().slice(0,10);
['date1','date2','date3'].forEach(id => { $(id).value = today; $(id).min = today; });

// Submit: opens WhatsApp with the booking details
$('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const mobile = $('mobile').value.trim();
  if(!/^[6-9]\d{9}$/.test(mobile)){ $('msg').textContent = 'Enter a valid 10-digit mobile number.'; return; }
  let lines = ['Booking request - Gosafarcabs'];
  if(main === 'outstation'){
    if(!$('to').value.trim()){ $('msg').textContent = 'Enter the drop city.'; return; }
    lines.push('Type: Outstation ' + (outSub === 'round' ? 'round trip' : 'one way'),
      'From: ' + $('from').value, 'To: ' + $('to').value,
      'Date: ' + $('date1').value + ' ' + $('time1').value);
    if(outSub === 'round') lines.push('Return: ' + $('date2').value);
  } else if(locSub === 'hourly'){
    lines.push('Type: Local hourly', 'Package: ' + $('pkg').value,
      'Date: ' + $('date3').value + ' ' + $('time3').value);
  } else {
    lines.push('Type: Airport transfer', $('dir').value, 'Airport: ' + $('airport').value,
      'Area: ' + $('area').value, 'Date: ' + $('date3').value + ' ' + $('time3').value);
  }
  lines.push('Mobile: ' + mobile);
  $('msg').textContent = '';
  window.open('https://wa.me/919322997709?text=' + encodeURIComponent(lines.join('\n')), '_blank');
});// Tab switching
const $ = id => document.getElementById(id);
let main = 'outstation', outSub = 'oneway', locSub = 'hourly';

function setSelected(group, key, attr){
  group.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', b.dataset[attr] === key));
}
document.querySelectorAll('[data-main]').forEach(b => b.onclick = () => {
  main = b.dataset.main;
  setSelected(b.parentElement, main, 'main');
  $('outstation').classList.toggle('hide', main !== 'outstation');
  $('local').classList.toggle('hide', main !== 'local');
});
document.querySelectorAll('#outstation [data-sub]').forEach(b => b.onclick = () => {
  outSub = b.dataset.sub;
  setSelected(b.parentElement, outSub, 'sub');
  $('returnBox').classList.toggle('hide', outSub !== 'round');
});
document.querySelectorAll('#local [data-sub]').forEach(b => b.onclick = () => {
  locSub = b.dataset.sub;
  setSelected(b.parentElement, locSub, 'sub');
  $('hourlyBox').classList.toggle('hide', locSub !== 'hourly');
  $('airportBox').classList.toggle('hide', locSub !== 'airport');
});

// Default dates
const today = new Date().toISOString().slice(0,10);
['date1','date2','date3'].forEach(id => { $(id).value = today; $(id).min = today; });

// Submit: opens WhatsApp with the booking details
$('bookingForm').addEventListener('submit', e => {
  e.preventDefault();
  const mobile = $('mobile').value.trim();
  if(!/^[6-9]\d{9}$/.test(mobile)){ $('msg').textContent = 'Enter a valid 10-digit mobile number.'; return; }
  let lines = ['Booking request - Gosafarcabs'];
  if(main === 'outstation'){
    if(!$('to').value.trim()){ $('msg').textContent = 'Enter the drop city.'; return; }
    lines.push('Type: Outstation ' + (outSub === 'round' ? 'round trip' : 'one way'),
      'From: ' + $('from').value, 'To: ' + $('to').value,
      'Date: ' + $('date1').value + ' ' + $('time1').value);
    if(outSub === 'round') lines.push('Return: ' + $('date2').value);
  } else if(locSub === 'hourly'){
    lines.push('Type: Local hourly', 'Package: ' + $('pkg').value,
      'Date: ' + $('date3').value + ' ' + $('time3').value);
  } else {
    lines.push('Type: Airport transfer', $('dir').value, 'Airport: ' + $('airport').value,
      'Area: ' + $('area').value, 'Date: ' + $('date3').value + ' ' + $('time3').value);
  }
  lines.push('Mobile: ' + mobile);
  $('msg').textContent = '';
  window.open('https://wa.me/919322997709?text=' + encodeURIComponent(lines.join('\n')), '_blank');
});
