
var $addEntryModal = document.querySelector('.addEntryModal');
var $addEntryButton = document.querySelector('.addEntryButton');
var $form = document.querySelector('form');
var $submit = document.querySelector('.submitEntryButton');
var data = {
  entries: {
    day: '',
    time: '',
    task: ''
  },
  storage: []
};

$addEntryButton.onclick = function () {
  $addEntryModal.style.display = 'block';
};

$form.addEventListener('submit', function (e) {
  e.preventDefault();
  data.entries.day = $form.elements.dayOfWeek.value;
  data.entries.time = $form.elements.time.value;
  data.entries.task = $form.elements.description.value;
  data.storage.push(data.entries);
  $form.reset();
});

$submit.onclick = function () {
  $addEntryModal.style.display = 'none';
};
