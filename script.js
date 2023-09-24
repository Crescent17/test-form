'use strict'

const body = document.querySelector('body');
const slider = document.querySelector('.slider');
const ageNumber = document.querySelector('.number');
const nextButtons = document.querySelectorAll('.btn--continue');
const backButtons = document.querySelectorAll('.btn--prev');
const submitButton = document.querySelector('.btn--submit');
const allSlides = document.querySelectorAll('.form__slide');
const citySelect = document.querySelector('.select--city');
const numberInput = document.querySelector('.input--phone');
const messageArea = document.querySelector('#message');
const nameInput = document.querySelector('.input--name');
const phoneInput = document.querySelector('.input--phone');
const policyCheck = document.querySelector('#policy');
const loader = document.querySelector('.loader');
const successScreen = document.querySelector('.success-popup');
const buttonClose = document.querySelector('.success__btn--close');
const form = document.querySelector('.main__form');
const errorLabels = document.querySelectorAll('.message--error');
const allOptions = document.querySelectorAll('option');
let message;
let name;
let isSelectOpened = false;
let phone;
let policy;