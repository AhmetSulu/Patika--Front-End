const jokeElement = document.getElementById('joke-text');
const generateButton = document.getElementById('generate-btn');
const copyButton = document.getElementById('copy-btn');
const shareButton = document.getElementById('share-btn');
const socialShare = document.getElementById('social-share');
const twitterShare = document.getElementById('twitter-share');
const whatsappShare = document.getElementById('whatsapp-share');
const facebookShare = document.getElementById('facebook-share');
const notification = document.getElementById('notification');
const chuckImage = document.querySelector('.chuck-image');

const jokes = [
    "Chuck Norris'in gözyaşları kanser tedavisi için kullanılır.",
    "Chuck Norris terör örgütlerinden korktuğunu sanmıyor, terör örgütleri Chuck Norris'ten korkuyor.",
    "Chuck Norris bir gün Google'a 'Chuck Norris kimdir?' diye sormuş. Google özür dilemiş.",
    "Chuck Norris'in doğum günü 1 Ocak değil, tüm yılbaşı gecesi boyunca kutlanır.",
    "Chuck Norris'in bilgisayarında virüs, virüslerde Chuck Norris korkusu vardır.",
    "Chuck Norris matematiğe o kadar hâkimdir ki, pi sayısını tam sayıya çevirebilir.",
    "Chuck Norris rüzgarı bile durdurabilir, sadece kendisi izin verdiği için durur.",
    "Chuck Norris o kadar hızlıdır ki, ışığı yakalayıp öldürebilir.",
    "Chuck Norris'in gölgesi bile korkar.",
    "Eğer Chuck Norris bir gün ölürse, Ölüm özür diler.",
    "Chuck Norris'in attığı yumruk o kadar hızlıdır ki, ışık bile geri çekilir.",
    "Dünya aslında Chuck Norris'in döndüğü için dönüyor.",
    "Chuck Norris'in saçları o kadar sert ki, tarak ondan korkar.",
    "Chuck Norris bir günde 20 saat çalışır, kalan 4 saatte evren dinlenir.",
    "Chuck Norris'in bakışları lazer ışını gibidir.",
    "Matematik Chuck Norris'in ne demek istediğini anlamaya çalışır.",
    "Chuck Norris hayaletlerden korkmaz, hayaletler Chuck Norris'ten korkar.",
    "Chuck Norris'in eldivenini giyen boksör profesyonel olur.",
    "Chuck Norris'in soğuk algınlığı virüsten korkar.",
    "Evren Chuck Norris'in izni olmadan bir yere gidemez."
];

let currentJoke = '';

function showNotification(message) {
    notification.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 2000);
}

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    currentJoke = jokes[randomIndex];
    return currentJoke;
}

function displayJoke() {
    jokeElement.textContent = getRandomJoke();
    chuckImage.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        chuckImage.style.transform = 'rotate(0deg)';
    }, 1000);
}

function copyJoke() {
    navigator.clipboard.writeText(currentJoke).then(() => {
        showNotification('Şaka kopyalandı!');
    });
}

function toggleShareOptions() {
    socialShare.classList.toggle('hidden');
}

function shareOnTwitter() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentJoke + ' #ChuckNorrisJokes')}`;
    window.open(twitterUrl, '_blank');
}

function shareOnWhatsApp() {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentJoke)}`;
    window.open(whatsappUrl, '_blank');
}

function shareOnFacebook() {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(currentJoke)}`;
    window.open(facebookUrl, '_blank');
}

// Sayfa yüklendiğinde ilk şakayı getir
displayJoke();

// Event Listeners
generateButton.addEventListener('click', displayJoke);
copyButton.addEventListener('click', copyJoke);
shareButton.addEventListener('click', toggleShareOptions);
twitterShare.addEventListener('click', shareOnTwitter);
whatsappShare.addEventListener('click', shareOnWhatsApp);
facebookShare.addEventListener('click', shareOnFacebook);