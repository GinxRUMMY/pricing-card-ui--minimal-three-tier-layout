document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('billing-toggle');
    const amounts = document.querySelectorAll('.price-amount');
    const periods = document.querySelectorAll('.billing-period');

    toggle.addEventListener('change', function() {
        const isYearly = this.checked;

        amounts.forEach(amount => {
            const monthlyPrice = amount.getAttribute('data-monthly');
            const yearlyPrice = amount.getAttribute('data-yearly');
            
            // Add a subtle transition effect
            amount.style.opacity = '0';
            
            setTimeout(() => {
                amount.textContent = `$${isYearly ? yearlyPrice : monthlyPrice}`;
                amount.style.opacity = '1';
            }, 200);
        });

        periods.forEach(period => {
            period.style.opacity = '0';
            setTimeout(() => {
                period.textContent = isYearly ? '/year' : '/month';
                period.style.opacity = '1';
            }, 200);
        });
    });

    // Initialize transitions
    amounts.forEach(el => el.style.transition = 'opacity 0.2s ease-in-out');
    periods.forEach(el => el.style.transition = 'opacity 0.2s ease-in-out');
});