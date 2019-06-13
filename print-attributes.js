/**
 * Copyright © Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/

define([
  "jquery"
], function($){
  "use strict";

    return function(config, element) {
        // var numOfAttributes = $(element).find('tr').length;
        // console.log("Number of attributes: " + numOfAttributes);
      var review = $.trim( $(element).text() );
      console.log("new");
      console.log("Review: " + review);
    }
});