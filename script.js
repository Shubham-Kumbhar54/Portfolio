function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for contacting me!');
  this.reset();
});