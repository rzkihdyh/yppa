// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Chat Assistant
    const chatButton = document.getElementById('chatButton');
    const chatBox = document.getElementById('chatBox');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (chatButton && chatBox) {
        chatButton.addEventListener('click', function() {
            chatBox.style.display = chatBox.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // File upload preview
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const fileUpload = this.closest('.file-upload');
            if (fileUpload && this.files.length > 0) {
                const fileNames = Array.from(this.files).map(file => file.name).join(', ');
                fileUpload.innerHTML = `
                    <input type="file" id="${this.id}" name="${this.name}" accept="${this.accept}" multiple style="display: none;">
                    <p>✅ ${this.files.length} file(s) dipilih:</p>
                    <small>${fileNames}</small>
                `;
            }
        });
    });
});

// Chat Assistant Functions
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (!chatInput || !chatMessages) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessageToChat(message, 'user');
    
    // Clear input
    chatInput.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessageToChat(response, 'bot');
    }, 1000);
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    
    messageDiv.style.cssText = `
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
        ${sender === 'user' 
            ? 'background: #ff6b35; color: white; margin-left: 20px; text-align: right;' 
            : 'background: #f5f5f5; color: #333; margin-right: 20px;'
        }
    `;
    
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    const responses = {
        'halo': 'Halo! Saya asisten finansial #YangPastiPastiAja. Ada yang bisa saya bantu?',
        'investasi': 'Untuk investasi, sebaiknya mulai dengan emergency fund dulu, lalu bisa coba reksadana atau SBN untuk pemula.',
        'tabungan': 'Tips menabung: gunakan metode 50/30/20 (50% kebutuhan, 30% keinginan, 20% tabungan dan investasi).',
        'pinjaman': 'Sebelum mengambil pinjaman, pastikan kemampuan bayar dan hindari pinjaman online ilegal.',
        'judi': 'Judi online sangat berbahaya! Jika butuh bantuan, silakan gunakan fitur Berbagi Cerita atau hubungi konselor.',
        'pelajar': 'Untuk pelajar, fokus ke menabung dan belajar literasi finansial. Mulai dengan celengan digital dan catat pengeluaran.',
        'umr': 'Dengan gaji UMR, prioritaskan emergency fund 3-6 bulan pengeluaran, lalu mulai investasi bertahap.',
        'default': 'Maaf, saya belum memahami pertanyaan Anda. Bisa dijelaskan lebih detail tentang masalah finansial yang ingin ditanyakan?'
    };
    
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    return responses.default;
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ff6b35';
            isValid = false;
        } else {
            field.style.borderColor = '#e0e0e0';
        }
    });
    
    return isValid;
}

// Search and Filter Functions (for discussion page)
function searchDiscussions() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const discussions = document.querySelectorAll('.discussion-thread');
    
    discussions.forEach(discussion => {
        const title = discussion.querySelector('h3').textContent.toLowerCase();
        const content = discussion.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
            discussion.style.display = 'block';
        } else {
            discussion.style.display = 'none';
        }
    });
}

function filterByCategory(category) {
    const discussions = document.querySelectorAll('.discussion-thread');
    
    discussions.forEach(discussion => {
        const threadCategory = discussion.querySelector('.thread-category').textContent.toLowerCase();
        
        if (category === 'all' || threadCategory.includes(category.toLowerCase())) {
            discussion.style.display = 'block';
        } else {
            discussion.style.display = 'none';
        }
    });
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[onclick="filterByCategory('${category}')"]`).classList.add('active');
}

// Utility Functions
function formatDate(date) {
    return new Date(date).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
}

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .news-card, .gallery-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animations
    const animatedElements = document.querySelectorAll('.feature-card, .news-card, .gallery-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

// Local Storage for form data (temporary save)
function saveFormData(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    const formData = {};
    const inputs = form.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        if (input.type !== 'file' && input.type !== 'submit') {
            formData[input.name] = input.value;
        }
    });
    
    localStorage.setItem(`${formId}_draft`, JSON.stringify(formData));
}

function loadFormData(formId) {
    const savedData = localStorage.getItem(`${formId}_draft`);
    if (!savedData) return;
    
    const formData = JSON.parse(savedData);
    const form = document.getElementById(formId);
    if (!form) return;
    
    Object.keys(formData).forEach(key => {
        const input = form.querySelector(`[name="${key}"]`);
        if (input) {
            input.value = formData[key];
        }
    });
}

// Auto-save form data every 30 seconds
setInterval(() => {
    const forms = ['laporanForm', 'ceritaForm', 'diskusiForm'];
    forms.forEach(formId => saveFormData(formId));
}, 30000);