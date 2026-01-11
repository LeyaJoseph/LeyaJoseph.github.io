/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-project-content');
    const closeBtn = document.querySelector('.close');
    const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectCard = this.closest('.project-card');
            const projectDetails = projectCard.querySelector('.project-details').innerHTML;
            const projectTitle = projectCard.querySelector('h4').textContent;
            const projectImage = projectCard.querySelector('img').outerHTML;
            const projectBrief = projectCard.querySelector('.project-brief').innerHTML; 
            const projectTools = projectCard.querySelector('.project-tools').textContent;

            modalContent.innerHTML = `
                <h3>${projectTitle}</h3>
                ${projectImage}
                <div class="modal-brief"><strong>Summary: </strong>${projectBrief}</div>
                <div class="modal-tools"><strong>Tools Used: </strong> ${projectTools}</div>
                <div class="modal-details"><strong>Details:</strong>${projectDetails}</div>
            `;
            modal.style.display = 'block';
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    modal.addEventListener('pointerdown', function (event) {
    	if (event.target === modal) {
        	modal.style.display = 'none';
    	}
    });

});
