const projectData = {
    1: {
        title: 'Web 项目一',
        description: '这是一个现代化的响应式网站项目，采用最新的Web技术栈开发。网站具有良好的用户体验和响应式设计，能够适配各种设备屏幕尺寸。',
        tags: ['Web', '2024', 'Responsive']
    },
    2: {
        title: '移动应用',
        description: '这是一款跨平台移动应用，使用React Native开发。支持iOS和Android双平台，具有原生般的性能和用户体验。',
        tags: ['App', '2024', 'React Native']
    },
    3: {
        title: '品牌设计',
        description: '为客户定制的企业品牌形象设计项目，包括Logo、VI系统、品牌视觉规范等全套品牌设计方案。',
        tags: ['Design', '2024', 'Branding']
    },
    4: {
        title: 'Web 项目二',
        description: '功能完整的电商平台开发项目，包含商品展示、购物车、订单管理、支付集成等完整电商功能。',
        tags: ['Web', '2023', 'E-commerce']
    },
    5: {
        title: '小程序开发',
        description: '基于微信小程序平台开发的定制化小程序，涵盖企业展示、在线预约、用户管理等功能。',
        tags: ['App', '2023', 'WeChat']
    },
    6: {
        title: 'UI/UX 设计',
        description: '专注用户体验的UI/UX设计项目，通过用户研究和交互设计，提升产品的可用性和用户满意度。',
        tags: ['Design', '2023', 'UX']
    }
};

function navigateTo(page) {
    window.location.href = page;
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || filter === category) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-modal');
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.remove('show');
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }

    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
            }
        });
    }, observerOptions);
    
    skillProgressBars.forEach(bar => observer.observe(bar));

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const mailtoLink = `mailto:TKPORL@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('姓名: ' + name + '\n邮箱: ' + email + '\n\n消息:\n' + message)}`;
            
            window.location.href = mailtoLink;
            
            alert('邮件客户端已打开，请发送邮件！');
            contactForm.reset();
        });
    }

    const navLinksAll = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinksAll.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectData[projectId];
    
    if (project && modal) {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        
        const tagsContainer = document.querySelector('.modal-tags');
        tagsContainer.innerHTML = '';
        
        project.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });
        
        modal.classList.add('show');
    }
}
