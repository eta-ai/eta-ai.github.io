(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener applyCode banner closeBanner creditHistory credits data deepview deepviewCta first getCode init link logout redeem referrals removeListener sendSMS setBranchViewData setIdentity track validateCode".split(" "), 0);
branch.init('key_live_hfj8rJUgYkfvicyrLXB6HdomtvlVoghW');
function sendSMS(form) {
  var phone = form.phone.value;
  var linkData = {
    tags: [],
    channel: 'Website',
    feature: 'TextMeTheApp',
    data: {'ref': 'perksplus' }
  };
  var options = {};
  var smsError = document.getElementById('sms-error-response')
  var smsSuccess = document.getElementById('sms-success-response')
	smsError.style.display = 'none';
	smsSuccess.style.display = 'none';
  var callback = function(err, result) {
		console.log('err', err)
    if (err) {
			smsError.style.display = 'block';
    }
    else {
			smsSuccess.style.display = 'block';
    }
  };
  branch.sendSMS(phone, linkData, options, callback);
  form.phone.value = "";
}

