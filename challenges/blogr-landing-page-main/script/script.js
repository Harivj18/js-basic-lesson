/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable semi */
const mobileMenu = document.getElementById('navbar-mobile-menu');
const mobileMenuIcon = document.getElementById('mobile-icon');
const productMobMenu = document.getElementById('product-mobile-menu');
const companyMobMenu = document.getElementById('company-mobile-menu');
const connectMobMenu = document.getElementById('connect-mobile-menu');
const productDeskMenu = document.getElementById('product-menu');
const companyDeskMenu = document.getElementById('company-menu');
const connectDeskMenu = document.getElementById('connect-menu');
const productDeskIcon = document.getElementById('product-icon');
const companyDeskIcon = document.getElementById('company-icon');
const connectDeskIcon = document.getElementById('connect-icon');
const productMobIcon = document.getElementById('product-mobile-icon');
const companyMobIcon = document.getElementById('company-mobile-icon');
const connectMobIcon = document.getElementById('connect-mobile-icon');

function openBurgerMenu () {
  if (mobileMenuIcon.classList.contains('burger-icon')) {
    mobileMenuIcon.classList.remove('burger-icon');
    mobileMenuIcon.classList.add('close-icon');
    mobileMenu.classList.add('active');
  } else {
    mobileMenuIcon.classList.remove('close-icon');
    mobileMenuIcon.classList.add('burger-icon');
    mobileMenu.classList.remove('active');
  }
}

function openMobMenu (event) {
  const id = event.target.id;
  console.log(id)

  if (id.includes("product") && productMobMenu.classList.contains('hidden')) {
    productMobIcon.classList.add('rotate-icon');
    productMobMenu.classList.add('active');
    productMobMenu.classList.remove('hidden');
    companyMobIcon.classList.remove('rotate-icon');
    companyMobMenu.classList.remove('active');
    companyMobMenu.classList.add('hidden');
    connectMobIcon.classList.remove('rotate-icon');
    connectMobMenu.classList.remove('active');
    connectMobMenu.classList.add('hidden');
  } else if (id.includes("company") && companyMobMenu.classList.contains('hidden')) {
    productMobIcon.classList.remove('rotate-icon');
    productMobMenu.classList.remove('active');
    productMobMenu.classList.add('hidden');
    companyMobIcon.classList.add('rotate-icon');
    companyMobMenu.classList.add('active');
    companyMobMenu.classList.remove('hidden');
    connectMobIcon.classList.remove('rotate-icon');
    connectMobMenu.classList.remove('active');
    connectMobMenu.classList.add('hidden');
  } else if (id.includes("connect") && connectMobMenu.classList.contains('hidden')) {
    productMobIcon.classList.remove('rotate-icon');
    productMobMenu.classList.remove('active');
    productMobMenu.classList.add('hidden');
    companyMobIcon.classList.remove('rotate-icon');
    companyMobMenu.classList.remove('active');
    companyMobMenu.classList.add('hidden');
    connectMobIcon.classList.add('rotate-icon');
    connectMobMenu.classList.add('active');
    connectMobMenu.classList.remove('hidden');
  } else {
    companyMobIcon.classList.remove('rotate-icon');
    companyMobMenu.classList.remove('active');
    companyMobMenu.classList.add('hidden');
    productMobIcon.classList.remove('rotate-icon');
    productMobMenu.classList.remove('active');
    productMobMenu.classList.add('hidden');
    connectMobIcon.classList.remove('rotate-icon');
    connectMobMenu.classList.remove('active');
    connectMobMenu.classList.add('hidden');
  }
}

function openDesktopMenu (event) {
  const id = event.target.id;

  if (id.includes("product") && productDeskMenu.classList.contains('hidden')) {
    productDeskIcon.classList.add('rotate-icon');
    productDeskMenu.classList.add('active');
    productDeskMenu.classList.remove('hidden');
    companyDeskIcon.classList.remove('rotate-icon');
    companyDeskMenu.classList.remove('active');
    companyDeskMenu.classList.add('hidden');
    connectDeskIcon.classList.remove('rotate-icon');
    connectDeskMenu.classList.remove('active');
    connectDeskMenu.classList.add('hidden');
  } else if (id.includes("company") && companyDeskMenu.classList.contains('hidden')) {
    productDeskIcon.classList.remove('rotate-icon');
    productDeskMenu.classList.remove('active');
    productDeskMenu.classList.add('hidden');
    companyDeskIcon.classList.add('rotate-icon');
    companyDeskMenu.classList.add('active');
    companyDeskMenu.classList.remove('hidden');
    connectDeskIcon.classList.remove('rotate-icon');
    connectDeskMenu.classList.remove('active');
    connectDeskMenu.classList.add('hidden');
  } else if (id.includes("connect") && connectDeskMenu.classList.contains('hidden')) {
    productDeskIcon.classList.remove('rotate-icon');
    productDeskMenu.classList.remove('active');
    productDeskMenu.classList.add('hidden');
    productDeskIcon.classList.remove('rotate-icon');
    companyDeskMenu.classList.remove('active');
    companyDeskMenu.classList.add('hidden');
    connectDeskIcon.classList.add('rotate-icon');
    connectDeskMenu.classList.add('active');
    connectDeskMenu.classList.remove('hidden');
  } else {
    companyDeskIcon.classList.remove('rotate-icon');
    companyDeskMenu.classList.remove('active');
    companyDeskMenu.classList.add('hidden');
    productDeskIcon.classList.remove('rotate-icon');
    productDeskMenu.classList.remove('active');
    productDeskMenu.classList.add('hidden');
    connectDeskIcon.classList.remove('rotate-icon');
    connectDeskMenu.classList.remove('active');
    connectDeskMenu.classList.add('hidden');
  }
}
