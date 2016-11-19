/**
 * Created by ig on 11/18/16.
 */
'use strict';

/**
 *
 * # MailchimpSubscriptionCtrl
 * Controller of the lowboknowUiOneApp
 */
angular.module('mailchimpModule')
  .controller('MailchimpCtrl', ['$http', function ($http) {

      var vm = this;

      vm.createList = function() {
        console.log('inside createList()');

        var data = {"name":"Freddie'\''s Favorite Hats",
          "contact":
          {
          "company":"MailChimp",
            "address1":"675 Ponce De Leon Ave NE",
            "address2":"Suite 5000",
            "city":"Atlanta",
            "state":"GA",
            "zip":"30308",
            "country":"US",
            "phone":""
          },
          "permission_reminder":"You'\''re receiving this email because you signed up for updates about Freddie'\''s newest hats.",
          "campaign_defaults":
          {
            "from_name":"Freddie",
            "from_email":"freddie@freddiehats.com",
            "subject":"","language":"en"
          },
          "email_type_option":true
        };
        var config = {
          url: 'https://usX.api.mailchimp.com/3.0/lists',
          user: 'iljagou:907c6cdee8f6da191d7b774587ded8b2-us14',
          header: 'content-type: application/json'
        };

        $http.post('https://usX.api.mailchimp.com/3.0/lists', data, config).then(function(response) {
          console.log('Success!!!');
          console.log(response);
        }, function(error) {
          console.log('Error!!!');
          console.log(error);
        });

      };

      vm.onLoad = function() {
        console.log('inside MailchimpCtrl');
      };

      vm.onLoad();

    }]);
