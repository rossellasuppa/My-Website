const words = ['Dreamer', 'Aspiring Programmer', 'Chemist', 'Book Addicted' , 'Curious' , 'Empathic']; // Array di parole
const slideshow = document.querySelector('.slideshow');
let currentWordIndex = 0; // Indice della parola corrente

// Funzione per mostrare la parola corrente
function showCurrentWord() {
    slideshow.innerHTML = words[currentWordIndex]; // Imposta il contenuto del slideshow alla parola corrente
}

// Mostra la prima parola all'avvio
showCurrentWord();

// Cambia la parola ogni 2 secondi (puoi regolare il tempo a tua scelta)
setInterval(() => {
    currentWordIndex = (currentWordIndex + 1) % words.length; // Passa alla prossima parola
    showCurrentWord(); // Mostra la nuova parola
}, 2000);

System.out.println("Caio Mondo");
