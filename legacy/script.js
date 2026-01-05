document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart
    const cart = {
        items: [],
        total: 0,
        
        addItem: function(course) {
            this.items.push(course);
            this.total += course.price;
            this.updateCartUI();
        },
        
        removeItem: function(index) {
            const removedItem = this.items.splice(index, 1)[0];
            this.total -= removedItem.price;
            this.updateCartUI();
        },
        
        updateCartUI: function() {
            const cartItemsContainer = document.querySelector('#cart-sidebar > div > div:first-child');
            const cartTotalElement = document.querySelector('#cart-sidebar .font-semibold');
            
            if (this.items.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="text-center py-10">
                        <i data-feather="shopping-cart" class="w-12 h-12 mx-auto text-gray-300 mb-4"></i>
                        <p class="text-gray-500">Your cart is empty</p>
                    </div>
                `;
                cartTotalElement.textContent = '$0.00';
                feather.replace();
                return;
            }
            
            let cartHTML = '';
            this.items.forEach((item, index) => {
                cartHTML += `
                    <div class="flex items-center justify-between py-4 border-b border-gray-100">
                        <div class="flex items-center">
                            <img src="${item.image}" alt="${item.title}" class="w-16 h-16 rounded-lg object-cover mr-4">
                            <div>
                                <h4 class="font-medium text-sm">${item.title}</h4>
                                <span class="text-primary font-semibold">$${item.price.toFixed(2)}</span>
                            </div>
                        </div>
                        <button class="remove-item text-gray-400 hover:text-red-500" data-index="${index}">
                            <i data-feather="trash-2" class="w-5 h-5"></i>
                        </button>
                    </div>
                `;
            });
            
            cartItemsContainer.innerHTML = cartHTML;
            cartTotalElement.textContent = `$${this.total.toFixed(2)}`;
            
            // Add event listeners to remove buttons
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const index = parseInt(e.currentTarget.getAttribute('data-index'));
                    this.removeItem(index);
                });
            });
            
            feather.replace();
        }
    };
    
    // Sample course data
    const courses = [
        {
            title: 'Advanced JavaScript Patterns',
            price: 89.99,
            image: 'http://static.photos/technology/640x360/1'
        },
        {
            title: 'Product Management Masterclass',
            price: 129.99,
            image: 'http://static.photos/workspace/640x360/2'
        },
        {
            title: 'UX/UI Design Principles',
            price: 99.99,
            image: 'http://static.photos/design/640x360/3'
        }
    ];
    
    // Add to cart functionality
    document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
        button.addEventListener('click', () => {
            // Get course data (in a real app, this would come from the server)
            const course = courses[index];
            
            // Add to cart
            cart.addItem(course);
            
            // Show cart
            document.getElementById('cart-sidebar').classList.remove('translate-x-full');
            document.getElementById('cart-overlay').classList.remove('hidden');
            
            // Button animation
            button.innerHTML = '<i data-feather="check" class="w-4 h-4 mr-2"></i> Added';
            feather.replace();
            
            setTimeout(() => {
                button.innerHTML = '<i data-feather="shopping-cart" class="w-4 h-4 mr-2"></i> Add to Cart';
                feather.replace();
            }, 2000);
        });
    });
    
    // Cart toggle functionality
    document.getElementById('close-cart').addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.add('translate-x-full');
        document.getElementById('cart-overlay').classList.add('hidden');
    });
    
    document.getElementById('cart-overlay').addEventListener('click', () => {
        document.getElementById('cart-sidebar').classList.add('translate-x-full');
        document.getElementById('cart-overlay').classList.add('hidden');
    });
    
    // In a real app, you would fetch courses from an API here
    // and dynamically generate the course cards
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Mobile menu toggle would go here
});