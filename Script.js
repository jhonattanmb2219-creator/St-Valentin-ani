document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const photoContainer = document.getElementById('photoContainer');
    
    // Función para el botón SÍ - Redirige a la página de la cita
    yesBtn.addEventListener('click', function() {
        // Crear página de la cita
        const datePage = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>¡Nuestra Cita! 💑</title>
                <link rel="stylesheet" href="style.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
            </head>
            <body>
                <div class="container">
                    <div class="heart-bg"></div>
                    
                    <div class="date-card">
                        <h1 class="date-title">¡Ana dijo que SÍ! 💖🎉</h1>
                        
                        <div class="photo-frame">
                            <div class="photo-placeholder">
                                <i class="fas fa-calendar-heart photo-icon"></i>
                                <p class="photo-text">Nuestra próxima cita</p>
                            </div>
                        </div>
                        
                        <div class="date-details">
                            <h2 class="main-question">Nuestra Cita de San Valentín</h2>
                            <div class="date-time">
                                <i class="far fa-calendar-alt"></i> 14 de Febrero, 2024
                            </div>
                            <div class="date-time">
                                <i class="far fa-clock"></i> 8:00 PM
                            </div>
                            <div class="date-place">
                                <i class="fas fa-map-marker-alt"></i> Restaurante "El Rincón Romántico"
                            </div>
                            <p class="date-place">Calle del Amor, 123 - Ciudad del Corazón</p>
                        </div>
                        
                        <div class="message">
                            <p class="question">Ana, estaré esperándote con ilusión, flores y el corazón lleno de amor.</p>
                            <p class="question">Prepárate para una noche inolvidable, porque contigo cada momento es mágico.</p>
                        </div>
                        
                        <button class="btn confirm-btn" onclick="location.href='index.html'">
                            <i class="fas fa-redo"></i> Volver a la página principal
                        </button>
                        
                        <div class="footer">
                            <p>Con la emoción de nuestro encuentro,</p>
                            <p class="signature">Tu Valentín ❤️</p>
                        </div>
                    </div>
                    
                    <div class="hearts-footer">
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
            </body>
            </html>
        `;
        
        // Abrir la página de la cita en una nueva pestaña
        const newWindow = window.open();
        newWindow.document.write(datePage);
        newWindow.document.close();
    });
    
    // Función para el botón NO (con truquito romántico)
    noBtn.addEventListener('click', function() {
        // Hace que el botón NO sea difícil de hacer clic
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // Cambia el texto del botón SÍ para que sea más tentador
        yesBtn.innerHTML = '<i class="fas fa-heart"></i> ¡POR FAVOR, DI QUE SÍ!';
        yesBtn.style.transform = 'scale(1.2)';
        yesBtn.style.transition = 'all 0.3s ease';
        
        // Mensaje persuasivo
        setTimeout(() => {
            alert("💔 ¿Segura, Ana? ¡Piensa en todos nuestros momentos especiales! Dale otra oportunidad al botón 'Sí' 😉");
        }, 500);
    });
    
    // Permitir subir una foto
    photoContainer.addEventListener('click', function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    photoContainer.innerHTML = '';
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.width = '100%';
                    img.style.height = '100%';
                    img.style.objectFit = 'cover';
                    img.style.borderRadius = '15px';
                    photoContainer.appendChild(img);
                    
                    // Añadir mensaje de confirmación
                    setTimeout(() => {
                        alert("¡Foto subida con éxito! 💖 Ahora la página es aún más especial con vuestra imagen.");
                    }, 300);
                };
                reader.readAsDataURL(file);
            }
        };
        
        input.click();
    });
    
    // Crear corazones flotantes en el fondo
    function createHearts() {
        const heartBg = document.querySelector('.heart-bg');
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
            const size = Math.random() * 30 + 10;
            const posX = Math.random() * 100;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            
            heart.style.width = `${size}px`;
            heart.style.height = `${size}px`;
            heart.style.left = `${posX}%`;
            heart.style.animationDuration = `${duration}s`;
            heart.style.animationDelay = `${delay}s`;
            heart.style.backgroundColor = `rgba(255, ${Math.floor(Math.random() * 100 + 105)}, ${Math.floor(Math.random() * 100 + 155)}, ${Math.random() * 0.4 + 0.2})`;
            
            heartBg.appendChild(heart);
        }
    }
    
    createHearts();
});
