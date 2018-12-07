

	function Ga(gaSelector) {
		this.gaItems = [].slice.call(document.querySelectorAll(gaSelector));
		this.eventClick = () => {
			this.gaItems.forEach(gaItem => {
				if (gaItem.dataset.gaEvca && gaItem.dataset.gaEvac && gaItem.dataset.gaEvlb) {
					gaItem.addEventListener('click', function () {
						ga('send', {
							hitType: 'event',
							eventCategory: gaItem.dataset.gaEvca,
							eventAction: gaItem.dataset.gaEvac,
							eventLabel: gaItem.dataset.gaEvlb
						});
						if (gaItem.dataset.gaEvca != 'Cadastro') {
							fbq('track', 'ViewContent', {
								content_name: gaItem.dataset.gaEvca,
								content_category: gaItem.dataset.gaEvac,
								content_type: gaItem.dataset.gaEvlb,
								referrer: document.referrer,
								userAgent: navigator.userAgent,
								language: navigator.language
							});
						} else {
							fbq('track', 'Lead', {
								content_name: gaItem.dataset.gaEvca,
								content_type: gaItem.dataset.gaEvac,
								content_name: gaItem.dataset.gaEvlb,
								referrer: document.referrer,
								userAgent: navigator.userAgent,
								language: navigator.language
							});
						}
					});
				} else {
					return;
				}
			});
		};
		this.eventClick();
	}

	new Ga('[data-ga]');


