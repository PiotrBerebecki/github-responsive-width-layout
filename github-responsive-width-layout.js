var discussionBucket = document.querySelector('#discussion_bucket');
var timeline = document.querySelector('.discussion-timeline');
var sidebar = document.querySelector('.discussion-sidebar');
var toggle = document.createElement('div');

toggle.classList.add('discussion-sidebar-responsive-toggle')
// var url = chrome.extension.getURL('gear.svg');
var svg = '<svg class="awesome-toggle" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <path fill="#010101" d="M6,7.312c0-0.084-0.031-0.157-0.093-0.22C5.845,7.03,5.771,7,5.688,7H1.312c-0.084,0-0.158,0.03-0.22,0.093 C1.03,7.155,1,7.229,1,7.312s0.03,0.157,0.093,0.22L3.28,9.719C3.342,9.781,3.416,9.812,3.5,9.812s0.157-0.031,0.22-0.094 l2.188-2.187C5.969,7.47,6,7.396,6,7.312z M15,5.5C15,5.776,14.776,6,14.5,6h-7C7.224,6,7,5.776,7,5.5l0,0C7,5.224,7.224,5,7.5,5h7 C14.776,5,15,5.224,15,5.5L15,5.5z M15,7.5C15,7.776,14.776,8,14.5,8h-7C7.224,8,7,7.776,7,7.5l0,0C7,7.224,7.224,7,7.5,7h7 C14.776,7,15,7.224,15,7.5L15,7.5z M15,9.5c0,0.275-0.224,0.5-0.5,0.5h-7C7.224,10,7,9.775,7,9.5l0,0C7,9.223,7.224,9,7.5,9h7 C14.776,9,15,9.223,15,9.5L15,9.5z M15,11.5c0,0.275-0.224,0.5-0.5,0.5h-7C7.224,12,7,11.775,7,11.5l0,0C7,11.223,7.224,11,7.5,11h7 C14.776,11,15,11.223,15,11.5L15,11.5z"/> </svg>';
toggle.innerHTML = svg;
discussionBucket.insertBefore(toggle, timeline);

toggle.addEventListener('click', function (e) {
  this.classList.toggle('open');
  sidebar.classList.toggle('open');
});
