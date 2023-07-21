/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    function submitOrder(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default
    
        // Mengambil nilai dari input formulir
        var fullName = document.getElementById('fullName').value;
        var email = document.getElementById('email').value;
        var orderDetails = document.getElementById('orderDetails').value;
    
        // Konstruksi URL tujuan
        var url = 'https://www.instagram.com/ardiansyah_1106/?fullName=' + encodeURIComponent(fullName) + '&email=' + encodeURIComponent(email) + '&orderDetails=' + encodeURIComponent(orderDetails);
    
        // Mengarahkan pengguna ke URL tujuan
        window.location.href = url;
    }
    
    var orderForm = document.getElementById('orderForm');
    orderForm.addEventListener('submit', submitOrder);
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
                
            }
        });
    });

});

