"use strict";function _createForOfIteratorHelper(e,o){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||o&&e&&"number"==typeof e.length){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){c=!0,n=e},f:function(){try{l||null==t.return||t.return()}finally{if(c)throw n}}}}function _unsupportedIterableToArray(e,o){if(e){if("string"==typeof e)return _arrayLikeToArray(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,o):void 0}}function _arrayLikeToArray(e,o){(null==o||o>e.length)&&(o=e.length);for(var t=0,a=new Array(o);t<o;t++)a[t]=e[t];return a}var navButton=document.querySelector(".menu__btn"),body=document.body,navClose=document.querySelector(".menu__close"),container=document.querySelector(".container"),navMenu=document.querySelector(".menu"),modalFinish=document.querySelector(".modal__finish"),modalContainer=document.querySelector(".modal__container");navButton.addEventListener("click",(function(){navClose.addEventListener("click",(function(){navMenu.classList.remove("menu__active"),container.classList.remove("container--active"),body.classList.remove("no-scroll")})),navMenu.classList.toggle("menu__active"),body.classList.toggle("no-scroll"),container.classList.toggle("container--active"),navMenu.addEventListener("click",(function(){event.stopPropagation()}))}));var callWidget=document.querySelector(".call__widget");callWidget.addEventListener("click",(function(){var e=document.querySelector(".modal__panel"),o=document.querySelector(".modal__close-img");e.classList.toggle("modal__panel--opened"),body.classList.add("no-scroll"),modalContainer.addEventListener("click",(function(){event.stopPropagation()})),e.addEventListener("click",(function(){e.classList.remove("modal__panel--opened"),modalContainer.classList.remove("modal__container--opened"),body.classList.remove("no-scroll"),modalFinish.classList.remove("modal__finish--active"),modalContainer.classList.remove("modal__container--no-scroll")})),modalContainer.classList.toggle("modal__container--opened"),o.addEventListener("click",(function(){e.classList.remove("modal__panel--opened"),modalContainer.classList.remove("modal__container--opened"),body.classList.remove("no-scroll"),modalFinish.classList.remove("modal__finish--active"),modalContainer.classList.remove("modal__container--no-scroll")}))}));var modalMail=document.querySelector(".white__button"),modalMailMobile=document.querySelector(".white__button--footer");modalMail&&modalMail.addEventListener("click",(function(){var e=document.querySelector(".modal__mail"),o=document.querySelector(".modal__mail-container"),t=document.querySelector(".modal__mail-btn");e.classList.toggle("modal__mail--opened"),o.classList.toggle("modal__mail-container--opened"),body.classList.add("no-scroll"),o.addEventListener("click",(function(){event.stopPropagation()})),e.addEventListener("click",(function(){e.classList.remove("modal__mail--opened"),o.classList.remove("modal__mail-container--opened"),body.classList.remove("no-scroll")})),t.addEventListener("click",(function(){e.classList.remove("modal__mail--opened"),o.classList.remove("modal__mail-container--opened"),body.classList.remove("no-scroll")}))})),modalMailMobile&&modalMailMobile.addEventListener("click",(function(){var e=document.querySelector(".modal__mail"),o=document.querySelector(".modal__mail-container"),t=document.querySelector(".modal__mail-btn");e.classList.toggle("modal__mail--opened"),o.classList.toggle("modal__mail-container--opened"),body.classList.add("no-scroll"),o.addEventListener("click",(function(){event.stopPropagation()})),e.addEventListener("click",(function(){e.classList.remove("modal__mail--opened"),o.classList.remove("modal__mail-container--opened"),body.classList.remove("no-scroll")})),t.addEventListener("click",(function(){e.classList.remove("modal__mail--opened"),o.classList.remove("modal__mail-container--opened"),body.classList.remove("no-scroll")}))}));var modalReviewClose=document.querySelector(".modal__review-exit"),modalReview=document.querySelector(".modal__review"),modalReviewContainer=document.querySelector(".modal__review-container");modalReviewClose&&(modalReviewClose.addEventListener("click",(function(){body.classList.remove("no-scroll"),modalReview.classList.add("modal__review--closed")})),modalReviewContainer.addEventListener("click",(function(){event.stopPropagation()})),modalReview.addEventListener("click",(function(){body.classList.remove("no-scroll"),modalReview.classList.add("modal__review--closed")})));var _step,scrollToTop=document.querySelectorAll("up__button"),_iterator=_createForOfIteratorHelper(scrollToTop);try{var _loop=function(){var e=_step.value;e.addEventListener("click",(function(o){o.preventDefault();e.getAttribute}))};for(_iterator.s();!(_step=_iterator.n()).done;)_loop()}catch(e){_iterator.e(e)}finally{_iterator.f()}var searchHidden=document.querySelector(".header__buttons-item--hidden"),searchMobile=document.querySelector(".header__buttons-item"),searchModal=document.querySelector(".search"),searchClose=document.querySelector(".search__close-btn"),searchInner=document.querySelector(".search__inner"),searchNav=document.querySelector(".menu__input"),searchInput=document.querySelector(".search__input");searchInput.addEventListener("input",(function(){document.querySelector(".search__result").classList.toggle("search__result--hidden")})),searchHidden.addEventListener("click",(function(){body.classList.add("no-scroll"),searchModal.classList.add("search--active")})),searchNav.addEventListener("click",(function(){body.classList.add("no-scroll"),searchModal.classList.add("search--active")})),searchMobile.addEventListener("click",(function(){body.classList.add("no-scroll"),searchModal.classList.add("search--active")})),searchClose.addEventListener("click",(function(){body.classList.remove("no-scroll"),searchModal.classList.remove("search--active"),navMenu.classList.remove("menu__active"),container.classList.remove("container--active")})),searchInner.addEventListener("click",(function(){event.stopPropagation()})),searchModal.addEventListener("click",(function(){body.classList.remove("no-scroll"),searchModal.classList.remove("search--active"),navMenu.classList.remove("menu__active"),container.classList.remove("container--active")}));var inputs=document.querySelectorAll('input[inputmode="tel"]'),im=new Inputmask("+7 (999) 999-99-99");function validateForms(e,o){new window.JustValidate(e,{rules:o,submitHandler:function(e,o,t){modalFinish.classList.add("modal__finish--active"),body.classList.add("no-scroll"),modalContainer.classList.add("modal__container--no-scroll")}})}if(im.mask(inputs),document.querySelector(".form-call-catalog")&&validateForms(".form-call-catalog",{fio:{required:!0},tel:{required:!0},question:{required:!0}}),document.querySelector(".form-call-panel")&&validateForms(".form-call-panel",{fio:{required:!0},tel:{required:!0},question:{required:!0}}),document.querySelector(".form-mail")&&validateForms(".form-mail",{email:{required:!0}}),document.querySelector(".form-modal-review")&&validateForms(".form-modal-review",{fio:{required:!0},tel:{required:!0}}),document.querySelector(".form-review")&&validateForms(".form-review",{fio:{required:!0},question:{required:!0}}),document.querySelector(".form-call-product")&&validateForms(".form-call-product",{fio:{required:!0},tel:{required:!0}}),document.querySelector(".catalog__choice-select1")){var siteSelect=function(){var e=document.querySelector(".catalog__choice-select1");new Choices(e,{searchEnabled:!1,itemSelectText:"",placeholder:!1})};siteSelect()}else;if(document.querySelector(".catalog__choice-select2")){var _siteSelect=function(){var e=document.querySelector(".catalog__choice-select2");new Choices(e,{searchEnabled:!1,itemSelectText:"",placeholder:!1})};_siteSelect()}else;if(document.querySelector(".catalog__choice-select3")){var _siteSelect2=function(){var e=document.querySelector(".catalog__choice-select3");new Choices(e,{searchEnabled:!1,itemSelectText:"",placeholder:!1})};_siteSelect2()}else;if(document.querySelector(".catalog__choice-select4")){var _siteSelect3=function(){var e=document.querySelector(".catalog__choice-select4");new Choices(e,{searchEnabled:!1,itemSelectText:"",placeholder:!1})};_siteSelect3()}else;