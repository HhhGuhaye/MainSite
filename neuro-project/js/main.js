// Основной JavaScript файл для NeuroCore

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация всех модулей
    initNeuralAnimation();
    initDemoSection();
    initSmoothScroll();
    initNavbar();
});

// Анимация нейронной сети на главном экране
function initNeuralAnimation() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let nodes = [];
    let connections = [];

    function resize() {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        initNodes();
    }

    function initNodes() {
        nodes = [];
        connections = [];
        const nodeCount = Math.floor((width * height) / 15000);
        
        for (let i = 0; i < nodeCount; i++) {
            nodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 3 + 2
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        // Обновление позиций узлов
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Отскок от краев
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;
        });

        // Отрисовка соединений
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = 1 - distance / 150;
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        // Отрисовка узлов
        nodes.forEach(node => {
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(
                node.x, node.y, 0,
                node.x, node.y, node.radius
            );
            gradient.addColorStop(0, 'rgba(99, 102, 241, 1)');
            gradient.addColorStop(1, 'rgba(99, 102, 241, 0.3)');
            ctx.fillStyle = gradient;
            ctx.fill();
        });

        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
}

// Демо секция с симуляцией обучения
function initDemoSection() {
    const canvas = document.getElementById('demo-canvas');
    const startBtn = document.getElementById('start-btn');
    const resetBtn = document.getElementById('reset-btn');
    const lrSlider = document.getElementById('learning-rate');
    const lrValue = document.getElementById('lr-value');
    const epochsInput = document.getElementById('epochs');
    const accuracyEl = document.getElementById('accuracy');
    const lossEl = document.getElementById('loss');

    if (!canvas || !startBtn) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let isTraining = false;
    let epoch = 0;
    let accuracy = 0;
    let loss = 1.0;
    let animationId = null;
    let dataPoints = [];

    function resize() {
        width = canvas.offsetWidth;
        height = canvas.offsetHeight;
        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        initDataPoints();
        draw();
    }

    function initDataPoints() {
        dataPoints = [];
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            const label = (x + y > width) ? 1 : 0;
            dataPoints.push({ x, y, label });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        // Рисуем разделяющую линию
        if (isTraining) {
            const progress = epoch / parseInt(epochsInput.value);
            const angle = progress * Math.PI / 2;
            const centerX = width / 2;
            const centerY = height / 2;
            
            ctx.beginPath();
            ctx.moveTo(0, centerY);
            ctx.lineTo(width, centerY);
            
            // Анимированная линия разделения
            const lineAngle = -Math.PI / 4 + angle;
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(lineAngle);
            ctx.beginPath();
            ctx.moveTo(-width, 0);
            ctx.lineTo(width, 0);
            ctx.strokeStyle = '#6366f1';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.restore();
        }

        // Рисуем точки данных
        dataPoints.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
            
            if (isTraining && epoch > 0) {
                // Цвет меняется в процессе обучения
                const predicted = (point.x + point.y > width) ? 1 : 0;
                const isCorrect = predicted === point.label;
                ctx.fillStyle = isCorrect ? '#10b981' : '#ef4444';
            } else {
                ctx.fillStyle = point.label === 1 ? '#6366f1' : '#06b6d4';
            }
            
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        // Рисуем сетку
        ctx.strokeStyle = 'rgba(51, 65, 85, 0.3)';
        ctx.lineWidth = 1;
        for (let i = 0; i < width; i += 50) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, height);
            ctx.stroke();
        }
        for (let i = 0; i < height; i += 50) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(width, i);
            ctx.stroke();
        }
    }

    function train() {
        if (!isTraining) return;

        const totalEpochs = parseInt(epochsInput.value);
        const learningRate = parseFloat(lrSlider.value);

        if (epoch <= totalEpochs) {
            // Симуляция процесса обучения
            epoch++;
            loss = Math.max(0.01, 1.0 - (epoch / totalEpochs) * 0.95);
            accuracy = Math.min(99.9, (epoch / totalEpochs) * 99.9);

            accuracyEl.textContent = `${accuracy.toFixed(1)}%`;
            lossEl.textContent = loss.toFixed(4);

            draw();
            animationId = requestAnimationFrame(train);
        } else {
            isTraining = false;
            startBtn.textContent = 'Обучение завершено';
            cancelAnimationFrame(animationId);
        }
    }

    startBtn.addEventListener('click', () => {
        if (isTraining) return;
        
        isTraining = true;
        epoch = 0;
        startBtn.textContent = 'Обучение...';
        train();
    });

    resetBtn.addEventListener('click', () => {
        isTraining = false;
        epoch = 0;
        accuracy = 0;
        loss = 1.0;
        startBtn.textContent = 'Запустить обучение';
        accuracyEl.textContent = '0%';
        lossEl.textContent = '0.00';
        cancelAnimationFrame(animationId);
        initDataPoints();
        draw();
    });

    lrSlider.addEventListener('input', () => {
        lrValue.textContent = lrSlider.value;
    });

    window.addEventListener('resize', resize);
    resize();
}

// Плавная прокрутка
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Навигация
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}
