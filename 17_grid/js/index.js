document.addEventListener('DOMContentLoaded', function() {
   document.querySelectorAll('.section-work__btn').forEach(function(sectionWorkBtn) {
       sectionWorkBtn.addEventListener('click', function(event) {
           const path = event.currentTarget.dataset.path 

	   document.querySelectorAll('.step').forEach(function(step) {
              tabContent.classList.remove('step_active')
           })
           document.querySelector(`[data-target="${path}"]`).classList.add('step_active')
         })
      })
})