class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer-link:hover {
          color: #4F46E5;
          transform: translateX(4px);
        }
      </style>
      <footer class="bg-dark text-white py-16">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-2xl font-bold text-white mb-6">EduLux</h3>
              <p class="text-gray-400 mb-6">Premium courses from industry experts to boost your career to the next level.</p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <i data-feather="twitter"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <i data-feather="facebook"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <i data-feather="instagram"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white transition-colors">
                  <i data-feather="linkedin"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-6">Company</h4>
              <ul class="space-y-3">
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">About Us</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Careers</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Blog</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-6">Resources</h4>
              <ul class="space-y-3">
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Help Center</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Tutorials</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Community</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-lg font-semibold mb-6">Legal</h4>
              <ul class="space-y-3">
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Privacy Policy</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Terms of Service</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">Cookie Policy</a></li>
                <li><a href="#" class="footer-link text-gray-400 hover:text-white transition-all">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-gray-400 mb-4 md:mb-0">© 2023 EduLux Academy. All rights reserved.</p>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-white">Terms</a>
              <a href="#" class="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" class="text-gray-400 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    `;
    
    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);