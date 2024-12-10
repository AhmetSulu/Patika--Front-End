function showGreeting() {
    const nameInput = document.getElementById('nameField');
    const nameInputSection = document.getElementById('nameInput');
    const greetingSection = document.getElementById('greetingSection');
    const greetingElement = document.getElementById('greeting');
    const dateTimeElement = document.getElementById('dateTime');

    if (nameInput.value.trim() === '') {
        alert('Lütfen bir isim girin!');
        return;
    }

    const currentTime = new Date();
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    
    const hour = currentTime.getHours();
    let greeting = '';
    
    if (hour < 12) greeting = 'Günaydın';
    else if (hour < 18) greeting = 'İyi Günler';
    else greeting = 'İyi Akşamlar';

    greetingElement.textContent = `${greeting}, ${nameInput.value}! 🌈`;
    
    dateTimeElement.textContent = `${currentTime.toLocaleDateString()} ${days[currentTime.getDay()]} - ${currentTime.toLocaleTimeString()}`;

    nameInputSection.style.display = 'none';
    greetingSection.style.display = 'block';
}

function resetName() {
    document.getElementById('nameInput').style.display = 'block';
    document.getElementById('greetingSection').style.display = 'none';
    document.getElementById('nameField').value = '';
}