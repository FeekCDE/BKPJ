document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
        });
    });
    
    // Slippage Tabs
    const slippageTabs = document.getElementById('slippageTabs');
    const slippageTabButtons = slippageTabs.querySelectorAll('.slippage-tab');
    
    slippageTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            slippageTabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Max Button
    const maxBtn = document.getElementById('maxBtn');
    const amountInput = document.getElementById('amount');
    const estimatedTokens = document.getElementById('estimatedTokens');
    
    maxBtn.addEventListener('click', function() {
        amountInput.value = '1000';
        updateEstimatedTokens();
    });
    
    // Amount Input
    amountInput.addEventListener('input', updateEstimatedTokens);
    
    function updateEstimatedTokens() {
        const amount = parseFloat(amountInput.value) || 0;
        const estimated = amount / 0.0025;
        estimatedTokens.textContent = estimated.toLocaleString() + ' ZEN';
    }
    
    // Connect Wallet Button
    const connectWalletBtn = document.getElementById('connectWallet');
    const buyBtn = document.getElementById('buyBtn');
    
    connectWalletBtn.addEventListener('click', function() {
        // In a real app, this would connect to a wallet like Phantom
        this.textContent = '0x7f...3a4b';
        buyBtn.textContent = 'Buy $ZEN';
    });
    
    // Buy Button
    buyBtn.addEventListener('click', function() {
        if (this.textContent === 'Connect Wallet to Buy') {
            alert('Please connect your wallet first');
        } else {
            const amount = parseFloat(amountInput.value);
            if (isNaN(amount) || amount <= 0) {
                alert('Please enter a valid amount');
            } else {
                alert(`Success! You bought ${(amount / 0.0025).toLocaleString()} ZEN`);
                amountInput.value = '';
                estimatedTokens.textContent = '0 ZEN';
            }
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Create pie chart legend
    const chartLegend = document.getElementById('chartLegend');
    const tokenData = [
        { label: 'Liquidity Pool', value: '60%', color: '#6C63FF' },
        { label: 'Community Rewards', value: '20%', color: '#4D44DB' },
        { label: 'Development', value: '10%', color: '#FF6584' },
        { label: 'Marketing', value: '10%', color: '#1A1A2E' }
    ];
    
    tokenData.forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        legendItem.innerHTML = `
            <span class="legend-color" style="background: ${item.color}"></span>
            <span>${item.label}: ${item.value}</span>
        `;
        chartLegend.appendChild(legendItem);
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-item, .phase, .widget-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.feature-item, .phase, .widget-container');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});