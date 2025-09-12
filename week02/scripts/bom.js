// Select DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 

button.addEventListener('click', () => {
  // Trim input to remove extra spaces
  const chapter = input.value.trim();

  // Validate input
  if (chapter !== '') {
    // Create list item and delete button
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');

    // Set content and attributes
    li.textContent = chapter;
    deleteBtn.textContent = '❌';
    deleteBtn.setAttribute('aria-label', `Remove ${chapter}`);

    // Append delete button to list item
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // Add delete functionality
    deleteBtn.addEventListener('click', () => {
      list.removeChild(li);
    });

    // Clear and refocus input
    input.value = '';
    input.focus();
  } else {
    // If input is blank, refocus without doing anything
    input.focus();
  }
});

