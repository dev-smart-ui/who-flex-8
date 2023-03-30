"use strict";var aboutKeyword=document.querySelectorAll(".about-card__item");aboutKeyword.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active")}))}));var aboutTabItem=document.querySelectorAll(".about-tab__item"),aboutTabContent=document.querySelectorAll(".tab-content");aboutTabItem.forEach((function(e){e.addEventListener("click",(function(){aboutTabItem.forEach((function(e){e.classList.remove("active")})),e.classList.add("active"),aboutTabContent.forEach((function(e){e.classList.remove("active")}));var t=e.getAttribute("id");document.querySelector("."+t).classList.add("active")}))}));var swiper=new Swiper(".swiper",{slidesPerView:2,spaceBetween:10,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{640:{slidesPerView:2},768:{slidesPerView:2},993:{slidesPerView:4}}}),priceBlock=document.querySelectorAll(".price-res");function video(){var e=document.getElementById("video"),t=document.getElementById("about"),i=document.getElementById("videoBlock");if(e){var n=function(){window.innerWidth<1024?t.after(e):i.append(e)};window.addEventListener("resize",(function(){n()})),n()}}function croppingTitle(){var e=document.querySelectorAll(".related-card__title");e&&window.innerWidth<577&&e.forEach((function(e){var t=e.textContent;t=t.substring(0,25),console.log(t),e.innerHTML=t+"..."}))}priceBlock.forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active")}))})),video(),croppingTitle();var selectSingle=document.querySelector(".price-select"),selectSingle_title=selectSingle.querySelector(".price-select__title"),selectSingle_labels=selectSingle.querySelectorAll(".price-select__label");if(selectSingle){var openSelect=function(){"active"===selectSingle.getAttribute("data-state")?selectSingle.setAttribute("data-state",""):selectSingle.setAttribute("data-state","active")};selectSingle_title.addEventListener("click",(function(){openSelect()}));for(var i=0;i<selectSingle_labels.length;i++)selectSingle_labels[i].addEventListener("click",(function(e){selectSingle_title.textContent=e.target.textContent,selectSingle.setAttribute("data-state","")}))}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNoaW5nU2NyaXB0LmpzIl0sIm5hbWVzIjpbImFib3V0S2V5d29yZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFib3V0VGFiSXRlbSIsImFib3V0VGFiQ29udGVudCIsImJ0biIsInJlbW92ZSIsImFkZCIsImJ0bkF0ciIsImdldEF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwiYnJlYWtwb2ludHMiLCJwcmljZUJsb2NrIiwidmlkZW8iLCJnZXRFbGVtZW50QnlJZCIsImFib3V0U2VjdGlvbiIsInZpZGVvQmxvY2siLCJ0b2dnbGVWaWRlbyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJhZnRlciIsImFwcGVuZCIsImNyb3BwaW5nVGl0bGUiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJzdWJzdHJpbmciLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwic2VsZWN0U2luZ2xlIiwic2VsZWN0U2luZ2xlX3RpdGxlIiwic2VsZWN0U2luZ2xlX2xhYmVscyIsIm9wZW5TZWxlY3QiLCJzZXRBdHRyaWJ1dGUiLCJpIiwibGVuZ3RoIiwiZXZ0IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiQUFBQSxhQUNBLElBQU1BLGFBQWVDLFNBQVNDLGlCQUFpQixxQkFFL0NGLGFBQWFHLFNBQVEsU0FBQUMsR0FDakJBLEVBQUtDLGlCQUFpQixTQUFTLFdBQzVCRCxFQUFLRSxVQUFVQyxPQUFPLFNBQ3pCLEdBQ0osSUFFQSxJQUFNQyxhQUFlUCxTQUFTQyxpQkFBaUIsb0JBQ3pDTyxnQkFBa0JSLFNBQVNDLGlCQUFpQixnQkFFbERNLGFBQWFMLFNBQVEsU0FBQUMsR0FDakJBLEVBQUtDLGlCQUFpQixTQUFTLFdBQzNCRyxhQUFhTCxTQUFRLFNBQUFPLEdBQ2pCQSxFQUFJSixVQUFVSyxPQUFPLFNBQ3pCLElBQ0RQLEVBQUtFLFVBQVVNLElBQUksVUFFbEJILGdCQUFnQk4sU0FBUSxTQUFBTyxHQUNwQkEsRUFBSUosVUFBVUssT0FBTyxTQUN6QixJQUdELElBQUlFLEVBQVVULEVBQUtVLGFBQWEsTUFDaENiLFNBQVNjLGNBQWMsSUFBSUYsR0FBUVAsVUFBVU0sSUFBSSxTQUNwRCxHQUNKLElBR0EsSUFBTUksT0FBUyxJQUFJQyxPQUFPLFVBQVcsQ0FDbkNDLGNBQWUsRUFDZkMsYUFBYyxHQUNkQyxXQUFZLENBQ1ZDLEdBQUkscUJBQ0pDLFdBQVcsR0FFYkMsWUFBYSxDQUNYLElBQUssQ0FDSEwsY0FBZSxHQUVqQixJQUFLLENBQ0hBLGNBQWUsR0FFakIsSUFBSyxDQUNIQSxjQUFlLE1BTWZNLFdBQWF2QixTQUFTQyxpQkFBaUIsY0FXN0MsU0FBU3VCLFFBQ1AsSUFBTUEsRUFBUXhCLFNBQVN5QixlQUFlLFNBQ2hDQyxFQUFlMUIsU0FBU3lCLGVBQWUsU0FDdkNFLEVBQWEzQixTQUFTeUIsZUFBZSxjQUUzQyxHQUFHRCxFQUFPLENBQUEsSUFLQ0ksRUFBVCxXQUNPQyxPQUFPQyxXQUFhLEtBQ3JCSixFQUFhSyxNQUFNUCxHQUVuQkcsRUFBV0ssT0FBT1IsRUFFeEIsRUFWQUssT0FBT3pCLGlCQUFpQixVQUFVLFdBQ2hDd0IsR0FDRixJQVFDQSxHQUNILENBR0YsQ0FHQSxTQUFTSyxnQkFDUCxJQUFNQyxFQUFPbEMsU0FBU0MsaUJBQWlCLHdCQUVwQ2lDLEdBQ0VMLE9BQU9DLFdBQWEsS0FDckJJLEVBQUtoQyxTQUFRLFNBQUFDLEdBQ1gsSUFBSStCLEVBQU8vQixFQUFLZ0MsWUFDaEJELEVBQU9BLEVBQUtFLFVBQVUsRUFBRyxJQUN6QkMsUUFBUUMsSUFBSUosR0FDWi9CLEVBQUtvQyxVQUFZTCxFQUFLLEtBQ3hCLEdBSU4sQ0E5Q0FYLFdBQVdyQixTQUFRLFNBQUFDLEdBQ2ZBLEVBQUtDLGlCQUFpQixTQUFTLFdBQzNCRCxFQUFLRSxVQUFVQyxPQUFPLFNBQzFCLEdBQ0osSUF5QkVrQixRQWlCQVMsZ0JBS0YsSUFBTU8sYUFBZXhDLFNBQVNjLGNBQWMsaUJBQ3RDMkIsbUJBQXFCRCxhQUFhMUIsY0FBYyx3QkFDaEQ0QixvQkFBc0JGLGFBQWF2QyxpQkFBaUIsd0JBRzFELEdBQUd1QyxhQUFjLENBQUEsSUFNUkcsV0FBVCxXQUNNLFdBQWFILGFBQWEzQixhQUFhLGNBQ3pDMkIsYUFBYUksYUFBYSxhQUFjLElBRXhDSixhQUFhSSxhQUFhLGFBQWMsU0FFNUMsRUFWQUgsbUJBQW1CckMsaUJBQWlCLFNBQVMsV0FDM0N1QyxZQUNGLElBV0EsSUFBSyxJQUFJRSxFQUFJLEVBQUdBLEVBQUlILG9CQUFvQkksT0FBUUQsSUFDOUNILG9CQUFvQkcsR0FBR3pDLGlCQUFpQixTQUFTLFNBQUMyQyxHQUNoRE4sbUJBQW1CTixZQUFjWSxFQUFJQyxPQUFPYixZQUM1Q0ssYUFBYUksYUFBYSxhQUFjLEdBQzFDLEdBR0YiLCJmaWxlIjoiY29hY2hpbmdTY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBYm91dCBzZWN0aW9uXHJcbmNvbnN0IGFib3V0S2V5d29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWJvdXQtY2FyZF9faXRlbVwiKTtcclxuXHJcbmFib3V0S2V5d29yZC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuY29uc3QgYWJvdXRUYWJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hYm91dC10YWJfX2l0ZW1cIik7XHJcbmNvbnN0IGFib3V0VGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiLWNvbnRlbnRcIik7XHJcblxyXG5hYm91dFRhYkl0ZW0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGFib3V0VGFiSXRlbS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGFib3V0VGFiQ29udGVudC5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBcclxuICAgICAgIGxldCBidG5BdHIgPSAgaXRlbS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiK2J0bkF0cikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlcicsIHtcclxuICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgNjQwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICB9LFxyXG4gICAgOTkzOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcbmNvbnN0IHByaWNlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaWNlLXJlc1wiKTtcclxuXHJcbnByaWNlQmxvY2suZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIHZpZGVvXHJcblxyXG5cclxuZnVuY3Rpb24gdmlkZW8oKSB7XHJcbiAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZGVvXCIpO1xyXG4gIGNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XHJcbiAgY29uc3QgdmlkZW9CbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlb0Jsb2NrJyk7XHJcblxyXG4gIGlmKHZpZGVvKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRvZ2dsZVZpZGVvKCk7XHJcbiAgICB9KTsgXHJcbiAgXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVWaWRlbygpIHtcclxuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgICAgIGFib3V0U2VjdGlvbi5hZnRlcih2aWRlbyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZpZGVvQmxvY2suYXBwZW5kKHZpZGVvKTtcclxuICAgICAgICB9XHJcbiAgICB9dG9nZ2xlVmlkZW8oKTtcclxuICB9XHJcblxyXG5cclxufSB2aWRlbygpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyb3BwaW5nVGl0bGUoKSB7XHJcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVsYXRlZC1jYXJkX190aXRsZVwiKTtcclxuXHJcbiAgaWYodGV4dCkge1xyXG4gICAgaWYod2luZG93LmlubmVyV2lkdGggPCA1NzcpIHtcclxuICAgICAgdGV4dC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gaXRlbS50ZXh0Q29udGVudDtcclxuICAgICAgICB0ZXh0ID0gdGV4dC5zdWJzdHJpbmcoMCwgMjUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gdGV4dCtcIi4uLlwiO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59IGNyb3BwaW5nVGl0bGUoKTtcclxuXHJcblxyXG4vLyBzZWxlY3RcclxuXHJcbmNvbnN0IHNlbGVjdFNpbmdsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS1zZWxlY3QnKTtcclxuY29uc3Qgc2VsZWN0U2luZ2xlX3RpdGxlID0gc2VsZWN0U2luZ2xlLnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS1zZWxlY3RfX3RpdGxlJyk7XHJcbmNvbnN0IHNlbGVjdFNpbmdsZV9sYWJlbHMgPSBzZWxlY3RTaW5nbGUucXVlcnlTZWxlY3RvckFsbCgnLnByaWNlLXNlbGVjdF9fbGFiZWwnKTtcclxuXHJcblxyXG5pZihzZWxlY3RTaW5nbGUpIHtcclxuLy8gVG9nZ2xlIG1lbnVcclxuc2VsZWN0U2luZ2xlX3RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIG9wZW5TZWxlY3QoKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBvcGVuU2VsZWN0KCkge1xyXG4gIGlmICgnYWN0aXZlJyA9PT0gc2VsZWN0U2luZ2xlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScpKSB7XHJcbiAgICBzZWxlY3RTaW5nbGUuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWxlY3RTaW5nbGUuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2FjdGl2ZScpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIENsb3NlIHdoZW4gY2xpY2sgdG8gb3B0aW9uXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0U2luZ2xlX2xhYmVscy5sZW5ndGg7IGkrKykge1xyXG4gIHNlbGVjdFNpbmdsZV9sYWJlbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICBzZWxlY3RTaW5nbGVfdGl0bGUudGV4dENvbnRlbnQgPSBldnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgc2VsZWN0U2luZ2xlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsICcnKTtcclxuICB9KTtcclxufVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==
