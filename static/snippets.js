'use strict';

// Copyright 2012 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

(function() {

  function setupInlinePlayground() {
    'use strict';
    // Set up playground when each element is toggled.
    $('div.play').each(function (i, el) {
      // Set up playground for this example.
      var setup = function() {
        var code = $('.code', el);

        playground({
          'codeEl':   code,
          'outputEl': $('.output', el),
          'runEl':    $('.run', el),
          'fmtEl':    $('.fmt', el),
          'shareEl':  $('.share', el),
        });

        // Make the code textarea resize to fit content.
        var resize = function() {
          code.height(0);
          var h = code[0].scrollHeight;
          code.height(h+20); // minimize bouncing.
          code.closest('.input').height(h);
        };
        code.on('keydown', resize);
        code.on('keyup', resize);
        code.keyup(); // resize now.
      };

        setup();
    });
  }


  $(document).ready(function() {


 //   initGoPlayground();

//	var d = document.getElementById("world");
//	alert(d.innerHTML)

//    bindToggles(".toggle");
    setupInlinePlayground();


  });
})();
