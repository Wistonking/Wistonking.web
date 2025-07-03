// assets/js/project-modal.js

document.addEventListener('DOMContentLoaded', () => {
    const projectModal = document.getElementById('projectModal');
    const closeButton = projectModal.querySelector('.close-button');
    const modalImage = projectModal.querySelector('.modal-image');
    const modalTitle = projectModal.querySelector('.modal-title');
    const modalDescription = projectModal.querySelector('.modal-description');
    const modalTechStack = projectModal.querySelector('.modal-tech-stack');
    const modalLinks = projectModal.querySelector('.modal-links');

    // Selecciona todos los elementos que pueden activar el modal (el contenedor de la imagen)
    const projectTriggers = document.querySelectorAll('.project-modal-trigger');

    // Datos de tus proyectos.
    // Este objeto contendr� todo el contenido detallado para cada proyecto.
    // El 'id' (ej. 'verde-vital') debe coincidir con el atributo 'data-project-id' en tu HTML.
    const projectsData = {
        'verde-vital': {
            image: 'assets/img/projects/VerdeVital.png', // Imagen m�s grande para emodall 
            title: 'Sistema de Compra VerdeVital',
            // Descripci�n completa y detallada para el modal
            description: `VerdeVital es una plataforma e-commerce full-stack que digitaliza y automatiza una tienda de productos naturales. Liderado en parte por Wiston Godoy (Analista Programador, IP Santo Tom�s), este proyecto transform� una tienda f�sica en una soluci�n web completa.
                          Construido con Node.js/Express.js en el backend y HTML5/CSS3/JavaScript (ES6+) en el frontend, incluye un cat�logo din�mico, autenticaci�n de usuarios, carrito de compras persistente, gesti�n de stock en tiempo real y notificaciones de pedidos v�a Telegram.
                          VerdeVital optimiza las operaciones del negocio y mejora dr�sticamente la experiencia del cliente.`,
            // HTML para las etiquetas de tecnolog�a
            techStack: `
                <span class="tech-tag"><i class="fab fa-node-js"></i> Node.js</span>
                <span class="tech-tag"><i class="fab fa-js"></i> JavaScript ES6+</span>
                <span class="tech-tag"><i class="fab fa-html5"></i> HTML5</span>
                <span class="tech-tag"><i class="fab fa-css3-alt"></i> CSS3</span>
                <span class="tech-tag"><i class="fas fa-database"></i> PostgreSQL</span>
                <span class="tech-tag"><i class="fab fa-telegram-plane"></i> Telegram API</span>
            `,
            // HTML para los enlaces del proyecto
            links: `
                <a href="https://wistonking.github.io/Wistonking/" target="_blank" rel="noopener" class="btn btn-secondary project-btn">C�digo <i class="fab fa-github"></i></a>
            `
        }
        // Si a�ades m�s proyectos a projects.html, agrega sus datos aqu�:
        /*
        'nombre-de-otro-proyecto': {
            image: 'assets/img/projects/otro-proyecto-large.png',
            title: 'T�tulo del Otro Proyecto',
            description: 'Descripci�n completa del otro proyecto...',
            techStack: '<span class="tech-tag">Tech1</span><span class="tech-tag">Tech2</span>',
            links: '<a href="#">Demo</a>'
        }
        */
    };

    // Event listener para cada imagen de proyecto (o su contenedor)
    projectTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const projectCard = trigger.closest('.project-card'); // Obtener la tarjeta padre
            const projectId = projectCard.dataset.projectId; // Obtener el ID del atributo data-project-id
            const project = projectsData[projectId]; // Obtener datos del objeto projectsData

            if (project) {
                modalImage.src = project.image;
                modalImage.alt = project.title;
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                modalTechStack.innerHTML = project.techStack; // Usar innerHTML para contenido HTML
                modalLinks.innerHTML = project.links; // Usar innerHTML para contenido HTML

                projectModal.style.display = 'block'; // Mostrar el modal
                document.body.classList.add('no-scroll'); // Prevenir el scroll del body
            }
        });
    });

    // Event listener para cerrar el modal mediante el bot�n de cerrar
    closeButton.addEventListener('click', () => {
        projectModal.style.display = 'none'; // Ocultar el modal
        document.body.classList.remove('no-scroll'); // Habilitar el scroll del body
    });

    // Event listener para cerrar el modal al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });

    // Event listener para cerrar el modal al presionar la tecla ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && projectModal.style.display === 'block') {
            projectModal.style.display = 'none';
            document.body.classList.remove('no-scroll');
        }
    });
});