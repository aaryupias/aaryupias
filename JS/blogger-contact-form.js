var contactFormMessageSendingMsg ='Sending...';
var contactFormMessageSentMsg = 'Your message has been sent.';
var contactFormMessageNotSentMsg = 'Message could not be sent. Please try again later.';
var contactFormEmptyMessageMsg ='Message field cannot be empty.';
var contactFormInvalidEmailMsg = 'A valid email is required.'

var widgetLoaded=false;
function sendEmailMsg() {
if(widgetLoaded== false) {
_WidgetManager._RegisterWidget('_ContactFormView', new _WidgetInfo('ContactForm1', 'sidebar', null, document.getElementById('ContactForm1'), {'contactFormMessageSendingMsg': contactFormMessageSendingMsg , 'contactFormMessageSentMsg': contactFormMessageSentMsg , 'contactFormMessageNotSentMsg': contactFormMessageNotSentMsg , 'contactFormInvalidEmailMsg': contactFormInvalidEmailMsg , 'contactFormEmptyMessageMsg': contactFormEmptyMessageMsg , 'title': 'Contact Form', 'blogId': blogId, 'contactFormNameMsg': 'Name', 'contactFormEmailMsg': 'Email', 'contactFormMessageMsg': 'Message', 'contactFormSendMsg': 'Send', 'submitUrl': 'https://www.blogger.com/contact-form.do'}, 'displayModeFull'));
widgetLoaded=true;
document.getElementById('ContactForm1_contact-form-submit').click();
}
return true;
}
