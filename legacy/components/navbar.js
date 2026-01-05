class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          backdrop-filter: blur(10px);
          background-color: rgba(255, 255, 255, 0.8);
        }
        @media (max-width: 768px) {
          .mobile-menu {
            display: none;
          }
          .mobile-menu.active {
            display: flex;
          }
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #4F46E5;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      </style>
      <nav class="navbar fixed w-full z-30 top-0 border-b border-gray-100">
        <div class="container mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <a href="index.html" class="flex items-center">
              <span class="text-2xl font-bold text-primary">EduLux</span>
            </a>
            
            <div class="hidden md:flex items-center space-x-8">
              <a href="index.html" class="nav-link text-dark hover:text-primary font-medium">Home</a>
              <a href="#" class="nav-link text-dark hover:text-primary font-medium">Courses</a>
              <a href="#" class="nav-link text-dark hover:text-primary font-medium">About</a>
              <a href="#" class="nav-link text-dark hover:text-primary font-medium">Contact</a>
              
              <div class="flex items-center space-x-4">
                <button class="p-2 text-gray-600 hover:text-primary">
                  <i data-feather="search"></i>
                </button>
                <button id="cart-btn" class="p-2 text-gray-600 hover:text-primary relative">
                  <i data-feather="shopping-cart"></i>
                  <span class="cart-count absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hidden">0</span>
                </button>
                <a href="#" class="px-4 py-2 text-primary font-medium hover:bg-primary/5 rounded-lg">Sign In</a>
                <a href="#" class="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">Sign Up</a>
              </div>
            </div>
            
            <div class="md:hidden flex items-center space-x-4">
              <button id="cart-btn-mobile" class="p-2 text-gray-600 hover:text-primary relative">
                <i data-feather="shopping-cart"></i>
                <span class="cart-count absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center hidden">0</span>
              </button>
              <button id="mobile-menu-btn" class="p-2 text-gray-600 hover:text-primary">
                <i data-feather="menu"></i>
              </button>
            </div>
          </div>
          
          <!-- Mobile menu -->
          <div id="mobile-menu" class="mobile-menu flex-col space-y-4 py-4 border-t border-gray-100 mt-4 hidden">
            <a href="index.html" class="nav-link text-dark hover:text-primary font-medium">Home</a>
            <a href="#" class="nav-link text-dark hover:text-primary font-medium">Courses</a>
            <a href="#" class="nav-link text-dark hover:text-primary font-medium">About</a>
            <a href="#" class="nav-link text-dark hover:text-primary font-medium">Contact</a>
            <div class="pt-4 border-t border-gray-100 space-y-4">
              <a href="#" class="block px-4 py-2 text-center text-primary font-medium hover:bg-primary/5 rounded-lg">Sign In</a>
              <a href="#" class="block px-4 py-2 bg-primary text-white font-medium text-center rounded-lg hover:bg-primary/90 transition-colors">Sign Up</a>
            </div>
          </div>
        </div>
      </nav>
    `;
    
    // Add event listeners for mobile menu
    this.shadowRoot.getElementById('mobile-menu-btn').addEventListener('click', () => {
      const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
      mobileMenu.classList.toggle('active');
      
      const icon = this.shadowRoot.querySelector('#mobile-menu-btn i');
      if (mobileMenu.classList.contains('active')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });
    
    // Add event listener for cart button
    this.shadowRoot.getElementById('cart-btn').addEventListener('click', () => {
      document.getElementById('cart-sidebar').classList.remove('translate-x-full');
      document.getElementById('cart-overlay').classList.remove('hidden');
    });
    
    this.shadowRoot.getElementById('cart-btn-mobile').addEventListener('click', () => {
      document.getElementById('cart-sidebar').classList.remove('translate-x-full');
      document.getElementById('cart-overlay').classList.remove('hidden');
    });
    
    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);