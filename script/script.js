// Language texts
const languageTexts = {
    ar: {
        title: "عوض - موقعي الشخصي",
        logo: "عوض&lt;/&gt;",
        name: "عوض بن وهلان",
        tagline: "محلل أمن سيبراني ومطور تطبيقات موبايل",
        description: " مرحبًا بك في صفحتي الشخصية! أنا محلل أمن سيبراني ومهتم بتطوير البرمجيات، لدي شغف ببناء تطبيقات ومواقع رقمية آمنة، واستكشاف مفاهيم وتقنيات  الحماية.أختص في تطوير البرمجيات متعددة المنصات، وابتكار حلول حديثة تُعزز من أمان الأنظمة الرقمية.بدأت رحلتي بشغف لفهم كيفية عمل الأنظمة الرقمية وطرق تأمينها، مما قادني إلى التخصص في أمن المعلومات والتطوير المتكامل،  حيث أواصل استكشاف وبناء حلول تقنية هادفة وقابلة للتطبيق.",
        cta: "زيارة موقعي الشخصي",
        copyright: "© {year} عوض بن وهلان. جميع الحقوق محفوظة"
    },
    en: {
        title: "Awadh - My Personal Portfolio",
        logo: "Awadh&lt;/&gt;",
        name: "Awadh Bin Wahlan",
        tagline: "Cybersecurity Analyst & Mobile App Developer",
        description: "Welcome to my personal page! I’m a cybersecurity analyst with a strong interest in software development. I’m passionate about building secure and modern digital applications, and exploring technologies that enhance system protection. I specialize in cross-platform software development and in crafting innovative solutions that strengthen the security of digital systems.  My journey began with a deep curiosity to understand how systems work and how to secure them, which led me to specialize in information security and full-stack development. I continue to explore and build purposeful, practical tech solutions.",
        cta: "Visit Portfolio",
        copyright: "© {year} Awadh Bin Wahlan. All Rights Reserved"
    }
};

// Language toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const arBtn = document.getElementById('lang-ar');
    const enBtn = document.getElementById('lang-en');
    
    const currentYear = new Date().getFullYear();

    // Set initial language
    let currentLang = 'ar';
    
    function updateCopyrightYear() {
        const copyrightElement = document.getElementById('copyright');
        copyrightElement.textContent = copyrightElement.textContent.replace('2023', currentYear);
    }
    
    function initializeLogo() {
        const logoText = document.getElementById('logo-text');
        logoText.innerHTML = "عوض&lt;/&gt;";
    }

    // Function to change language
    function changeLanguage(lang) {
        currentLang = lang;

        // Update button states
        if (lang === 'ar') {
            arBtn.classList.add('active');
            enBtn.classList.remove('active');
            document.documentElement.dir = 'rtl';
            document.documentElement.lang = 'ar';
        } else {
            enBtn.classList.add('active');
            arBtn.classList.remove('active');
            document.documentElement.dir = 'ltr';
            document.documentElement.lang = 'en';
        }
        
        document.title = languageTexts[lang].title;

        // Update all text elements
        document.getElementById('logo-text').innerHTML = languageTexts[lang].logo;
        document.getElementById('name').textContent = languageTexts[lang].name;
        document.getElementById('tagline').textContent = languageTexts[lang].tagline;
        document.getElementById('description').textContent = languageTexts[lang].description;
        document.getElementById('cta-button').innerHTML =
            `${languageTexts[lang].cta} <i class="fas ${lang === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right'}"></i>`;
        document.getElementById('copyright').textContent =
            languageTexts[lang].copyright.replace('{year}', currentYear);

        // Add animation to text elements
        const textElements = [
            document.getElementById('name'),
            document.getElementById('tagline'),
            document.getElementById('description'),
            document.getElementById('cta-button'),
            document.getElementById('copyright')
        ];

        textElements.forEach(el => {
            el.style.animation = 'fadeIn 0.5s ease';
            setTimeout(() => {
                el.style.animation = '';
            }, 500);
        });
    }

    // Event listeners
    arBtn.addEventListener('click', () => changeLanguage('ar'));
    enBtn.addEventListener('click', () => changeLanguage('en'));

    // Add animation to CTA button on hover
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('mouseenter', function () {
        const icon = this.querySelector('i');
        if (currentLang === 'ar') {
            icon.style.transform = 'translateX(-10px)';
        } else {
            icon.style.transform = 'translateX(10px)';
        }
    });

    ctaButton.addEventListener('mouseleave', function () {
        this.querySelector('i').style.transform = 'translateX(0)';
    });

    // Add particles effect
    document.addEventListener('mousemove', function (e) {
        const particles = document.createElement('div');
        particles.className = 'particle';
        particles.style.left = e.clientX + 'px';
        particles.style.top = e.clientY + 'px';
        document.body.appendChild(particles);

        setTimeout(() => {
            particles.remove();
        }, 1000);
    });

    // Add CSS for particles
    const style = document.createElement('style');
    style.textContent = `
        .particle {
            position: fixed;
            pointer-events: none;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(108, 99, 255, 0.7);
            z-index: 9999;
            animation: particleFade 1s forwards;
        }
        
        @keyframes particleFade {
            0% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(3);
                opacity: 0;
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    initializeLogo();
    updateCopyrightYear();
    changeLanguage('en'); // Change language to English by default
});