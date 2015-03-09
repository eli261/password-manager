/*

Copyright 2008-2015 Clipperz Srl

This file is part of Clipperz, the online password manager.
For further information about its features and functionalities please
refer to http://www.clipperz.com.

* Clipperz is free software: you can redistribute it and/or modify it
  under the terms of the GNU Affero General Public License as published
  by the Free Software Foundation, either version 3 of the License, or 
  (at your option) any later version.

* Clipperz is distributed in the hope that it will be useful, but 
  WITHOUT ANY WARRANTY; without even the implied warranty of 
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public
  License along with Clipperz. If not, see http://www.gnu.org/licenses/.

*/

Clipperz.Base.module('Clipperz.PM.UI.Components');

Clipperz.PM.UI.Components.AccountStatus = React.createClass({

	propTypes: {
//		'currentSubscriptionType':		React.PropTypes.oneOf(['EARLY_ADOPTER', 'FRIEND', 'FAN', 'DEVOTEE', 'PATRON', 'TRIAL', 'TRIAL_EXPIRED', 'PAYMENT_FAILED_2', 'EXPIRED', 'PAYMENT_FAILED', 'VERIFYING_PAYMENT', 'VERIFYING_PAYMENT_2']).isRequired,
		'expirationDate':				React.PropTypes.string /* .isRequired */,
		'featureSet':					React.PropTypes.oneOf(['TRIAL', 'EXPIRED', 'FULL']) /* .isRequired */ ,
		'isExpired':					React.PropTypes.bool /* .isRequired */ ,
		'isExpiring':					React.PropTypes.bool /* .isRequired */ ,
		'paymentVerificationPending':	React.PropTypes.bool /* .isRequired */ ,
	},

	//=========================================================================

	render: function () {
//console.log("AccountStatus props", this.props);
		var	classes = {
			'accountStatus':	true,
			'isExpiring':		this.props['isExpiring'],
			'isExpired':		this.props['isExpired'],
		};
		
		classes[this.props['featureSet']] = true;

		return	React.DOM.div({'className':React.addons.classSet(classes)}, [
			React.DOM.span({'className': 'level'}, this.props['featureSet']),
			React.DOM.span({'className': 'expirationDate'}, this.props['expirationDate'])
		]);
	}

	//=========================================================================
});
