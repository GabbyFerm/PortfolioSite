// Modal functionality
function openModal() {
  document.getElementById('projectModal').style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('projectModal');
  if (event.target === modal) {
    closeModal();
  }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});