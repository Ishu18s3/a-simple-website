document.addEventListener('DOMContentLoaded', () => {
    const colorButton = document.getElementById('colorButton');
    const sections = document.querySelectorAll('section');
    
    // Modern, stylish color palette with gradients
    const colors = [
        'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
        'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    ];
    let colorIndex = 0;

    // Add transition class to all sections
    sections.forEach(section => {
        section.classList.add('section-transition');
    });

    colorButton.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colors.length;
        
        // Apply animations with slight delay between sections
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.background = colors[colorIndex];
            }, index * 150);
        });
    });

    // Add subtle hover animation to sections
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'translateY(-5px)';
        });
        
        section.addEventListener('mouseout', () => {
            section.style.transform = 'translateY(0)';
        });
    });

    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Mock data updates (simulating real-time updates)
    function updateDashboardValues() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const value = card.querySelector('.card-value');
            if (value) {
                // Add subtle animation for value changes
                value.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    value.style.transform = 'scale(1)';
                }, 200);
            }
        });
    }

    // Update values periodically
    setInterval(updateDashboardValues, 5000);

    // Table row hover effect
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            // Add selected state to rows
            tableRows.forEach(r => r.classList.remove('selected'));
            row.classList.add('selected');
        });
    });

    // Add some animation when cards load
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});