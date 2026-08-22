/* Formspree Ajax — initialise the contribution form with validation and scroll feedback */
(function () {
  window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };

  function scrollToTarget(el) {
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    try {
      el.focus({ preventScroll: true });
    } catch (e) {
      el.focus();
    }
  }

  formspree('initForm', {
    formElement: '#oc-contribution-form',
    formId: 'xbgrbprn',
    useDefaultStyles: false,
    onSuccess: function () {
      var successEl = document.querySelector('[data-fs-success]');
      if (successEl) {
        scrollToTarget(successEl);
      }
    },
    onError: function () {
      var errorEl = document.querySelector('div[data-fs-error][data-fs-active]') || document.querySelector('.open-contribution-form [aria-invalid="true"]');
      if (errorEl) {
        scrollToTarget(errorEl);
      }
    }
  });

  function setupFormEnhancements() {
    var form = document.getElementById('oc-contribution-form');
    if (!form) return;

    var emailInput = document.getElementById('oc-email');
    var emailError = document.querySelector('span[data-fs-error="email"]');
    var followUpCheckbox = form.querySelector('input[name="follow_up"]');
    var emailDesc = document.getElementById('oc-email-desc');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    function validateEmailField() {
      if (!emailInput) return true;
      var val = emailInput.value.trim();
      var isFollowUpChecked = followUpCheckbox && followUpCheckbox.checked;

      if (val === '') {
        if (isFollowUpChecked) {
          var msgReq = 'Please provide an email address if you would like the project to follow up.';
          emailInput.setCustomValidity(msgReq);
          if (emailError) {
            emailError.textContent = 'Email is required when follow-up is selected.';
            emailError.setAttribute('data-fs-active', '');
          }
          emailInput.setAttribute('aria-invalid', 'true');
          return false;
        } else {
          emailInput.setCustomValidity('');
          if (emailError) {
            emailError.textContent = '';
            emailError.removeAttribute('data-fs-active');
          }
          emailInput.removeAttribute('aria-invalid');
          return true;
        }
      }

      if (!emailRegex.test(val)) {
        var msgInvalid = 'Please enter a valid email address (e.g. name@example.com).';
        emailInput.setCustomValidity(msgInvalid);
        if (emailError) {
          emailError.textContent = msgInvalid;
          emailError.setAttribute('data-fs-active', '');
        }
        emailInput.setAttribute('aria-invalid', 'true');
        return false;
      }

      emailInput.setCustomValidity('');
      if (emailError) {
        emailError.textContent = '';
        emailError.removeAttribute('data-fs-active');
      }
      emailInput.removeAttribute('aria-invalid');
      return true;
    }

    if (emailInput) {
      emailInput.addEventListener('input', validateEmailField);
      emailInput.addEventListener('blur', validateEmailField);
    }

    if (followUpCheckbox) {
      followUpCheckbox.addEventListener('change', function () {
        if (emailDesc) {
          emailDesc.textContent = followUpCheckbox.checked
            ? 'Required for follow-up'
            : 'Optional · needed for follow-up';
        }
        validateEmailField();
      });
    }

    form.addEventListener('submit', function (e) {
      var isEmailValid = validateEmailField();
      if (!isEmailValid || !form.checkValidity()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        form.reportValidity();
        var firstInvalid = form.querySelector(':invalid') || form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) {
          firstInvalid.focus();
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, true);

    // Fallback MutationObserver to ensure smooth scroll upon any status change
    var successEl = document.querySelector('[data-fs-success]');
    if (successEl && window.MutationObserver) {
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'data-fs-active') {
            if (successEl.hasAttribute('data-fs-active')) {
              scrollToTarget(successEl);
            }
          }
        });
      });
      observer.observe(successEl, { attributes: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupFormEnhancements);
  } else {
    setupFormEnhancements();
  }
})();
