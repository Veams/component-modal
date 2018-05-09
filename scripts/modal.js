/**
 * Modal is used for dialogs where the content is already available in the dom
 *
 * @module Modal
 * @version v1.0.0
 *
 * @author Enrique, Estelle, George, Claudia and Jan
 */

// Imports
import Component from '@veams/component';
import $ from '@veams/query';
import transitionEndEvent from '@veams/lib/detection/transition-end-event';

class Modal extends Component {
	$el = $(this.el);
	$body = $('body');
	$modal = $('#' + this.options.id);
	$backdrop = this.$modal.find(this.options.backdrop);
	$closeBtn = this.$modal.find(this.options.closeBtn);
	isOpen = false;

	/**
	 * Constructor for our class
	 *
	 * @see module.js
	 *
	 * @param {Object} obj - Object which is passed to our class
	 * @param {Object} obj.el - element which will be saved in this.el
	 * @param {Object} obj.options - options which will be passed in as JSON object
	 */
	constructor(obj) {
		let options = {
			closeBtn: '[data-js-item="modal-close-btn"]',
			backdrop: '[data-js-item="modal-backdrop"]',
			classes: {
				hidden: 'is-hidden',
				open: 'is-open',
				visible: 'is-modal-visible'
			},
			id: 'modal-1'
		};

		super(obj, options);
	}

	/**
	 * Get module information
	 */
	static get info() {
		return {
			version: '0.2.0'
		};
	}

	/**
	* Event handling
	*/
	get events() {
		return {
			'click': 'toggleVisibility'
		};
	}

	/**
	* Subscribe handling
	*/
	get subscribe() {
		return {
			'{{this.context.EVENTS.modal.close}}': 'toggleVisibility'
		};
	}

	/**
	 * Render class
	 */
	render() {
		return this;
	}


    /**
	 * Trapping tab navigation inside the modal
     * and closing modal on ESC
	 */
    tabTrapping(e) {
        if ( e.keyCode === 9 && e.shiftKey ) {
            if (document.activeElement === this.focusableFirst) {
                this.focusableLast.focus();
                e.preventDefault();
            }
        } else if (e.keyCode === 9) {
            if (document.activeElement === this.focusableLast) {
                this.focusableFirst.focus();
                e.preventDefault();
            }
        }

        if (e.keyCode === 27) {
            this.toggleVisibility();
        }
    }

	/**
	 * Toggle between open/close
	 */
	toggleVisibility() {
		this.isOpen ? this.close() : this.open();
	}

	/**
	 * Open Overlay
	 */
	open() {
		this.$body
			.addClass(this.options.classes.visible)
			.attr('aria-hidden', true);

        // move modal outside of body to set accessibility attribute
        this.$modal
			.detach()
			.insertAfter(this.$body)
			.removeClass(this.options.classes.hidden)
			.outerWidth(); // Force page redraw

		this.$modal.addClass(this.options.classes.open);
		this.isOpen = true;

        this.$focusable = this.$modal.find('button, [href], input, select, textarea, video, [tabindex]:not([tabindex="0"])');
        this.focusableFirst = this.$focusable[0];
        this.focusableLast = this.$focusable[this.$focusable.length - 1];

        this.$modal.on('keydown', this.tabTrapping.bind(this));
        this.$closeBtn.on('click', this.close.bind(this));
		this.$backdrop.on('click', this.close.bind(this));

        this.$closeBtn.focus();
	}

	/**
	 * Close overlay and set transition classes, give back focus to source button
	 */
	close() {
		this.$modal.removeClass(this.options.classes.open);
		this.isOpen = false;

        // remove accessibility attr
        this.$body.attr('aria-hidden', false);

		// After starting fade-out transition, wait for it's end before setting hidden class
		this.$modal.on(transitionEndEvent(), (e) => {
			if (e.originalEvent.propertyName === 'opacity') {
				e.stopPropagation();

				this.$body.removeClass(this.options.classes.visible);
				this.$modal
					.addClass(this.options.classes.hidden)
					.detach().insertAfter(this.$el)
					.off(transitionEndEvent());
			}
		});

        this.$closeBtn.off('click');
        this.$backdrop.off('click');
        this.$modal.off('keydown');
        this.$el.focus();
	}
}

export default Modal;
