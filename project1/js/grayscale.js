(function($) {
  "use strict"; // Start of use strict

  /*****************************************************
   Question 1a: popular hashtags
  *****************************************************/
  $('#q1a_all').on('click', function() {
    $('#q1_pic').attr('src', 'img/graphs/most_popular_hashtags.png');
    $('#q1_figure').html("<b>Figure 1.1A:</b> Top fifteen used hashtags over the entire tweets in the dataset");
  });

  $('#q1a_DT').on('click', function() {
    $('#q1_pic').attr('src', 'img/graphs/pop_hashtag_DT.png');
    $('#q1_figure').html("<b>Figure 1.1B:</b> Top fifteen hashtags and their sentiment in regards to Donald Trump");

  });

  $('#q1a_HC').on('click', function() {
    $('#q1_pic').attr('src', 'img/graphs/pop_hashtag_HC.png');
    $('#q1_figure').html("<b>Figure 1.1C:</b> Top fifteen hashtags and their sentiment in regards to Hillary Clinton");
  });

  /*****************************************************
   Question 1b: popular n-grams
  *****************************************************/
  $('#q1b_bigrams').on('click', function() {
    $('#q1b_pic').attr('src', 'img/graphs/bigrams.png');
    $('#q1b_figure').html("<b>Figure 1.2A:</b> Top fifteen bigrams from tweets with more than 10 retweets");
  });

  $('#q1b_trigrams').on('click', function() {
    $('#q1b_pic').attr('src', 'img/graphs/trigrams.png');
    $('#q1b_figure').html("<b>Figure 1.2B:</b> Top fifteen trigrams from tweets with more than 10 retweets");
  });

  $('#q1b_fourgrams').on('click', function() {
    $('#q1b_pic').attr('src', 'img/graphs/fourgrams.png');
    $('#q1b_figure').html("<b>Figure 1.2C:</b> Top fifteen fourgrams from tweets with more than 10 retweets");
  });


  /*****************************************************
   Question 2b: Sentiment of hashtags
  *****************************************************/

  $('#q2b_politics').on('click', function() {
    $('#q2b_pic').attr('src', 'img/graphs/hashtag sentiment politics.png');
    $('#q2b_figure').html("<b>Figure 2.2A:</b> Sentiment from tweets containing the hashtag #POLITICS");
  });

  $('#q2b_maga').on('click', function() {
    $('#q2b_pic').attr('src', 'img/graphs/hashtag sentiment maga.png');
    $('#q2b_figure').html("<b>Figure 2.2B:</b> Sentiment from tweets containing the hashtag #MAGA");
  });

  $('#q2b_trump').on('click', function() {
    $('#q2b_pic').attr('src', 'img/graphs/hashtag sentiment trump.png');
    $('#q2b_figure').html("<b>Figure 2.2C:</b> Sentiment from tweets containing the hashtag #TRUMP");
  });

  $('#q2b_tcot').on('click', function() {
    $('#q2b_pic').attr('src', 'img/graphs/hashtag sentiment tcot.png');
    $('#q2b_figure').html("<b>Figure 2.2D:</b> Sentiment from tweets containing the hashtag #TCOT");
  });

  $('#q2b_neverhillary').on('click', function() {
    $('#q2b_pic').attr('src', 'img/graphs/hashtag sentiment neverhillary.png');
    $('#q2b_figure').html("<b>Figure 2.2E:</b> Sentiment from tweets containing the hashtag #NEVERHILLARY");
  });

  $('#q2b_hillary').on('click', function() {
    $('#q2b_pic').attr('src', 'img/graphs/hashtag sentiment hillary.png');
    $('#q2b_figure').html("<b>Figure 2.2F:</b> Sentiment from tweets containing the hashtag #HILLARY");
  });

  $('#q2b_trumptrain').on('click', function() {
    $('#q2b_pic').attr('src', 'img/graphs/hashtag sentiment trumptrain.png');
    $('#q2b_figure').html("<b>Figure 2.2G:</b> Sentiment from tweets containing the hashtag #TRUMPTRAIN");
  });

  $('#q2b_crookedhillary').on('click', function() {
    $('#q2b_pic').attr('src', 'img/graphs/hashtag sentiment crookedhillary.png');
    $('#q2b_figure').html("<b>Figure 2.2F:</b> Sentiment from tweets containing the hashtag #CROOKEDHILLARY");
  });

  /*****************************************************
   Question 5a: Measures of centrality
  *****************************************************/
  $('#q5a_deg_centrality').on('click', function() {
    $('#q5a_pic').attr('src', 'img/graphs/q5 degree centrality.png');
    $('#q5a_figure').html("<b>Figure 5.1A:</b> Top ten retweeted users using degree centrality");
  });

  $('#q5a_closeness').on('click', function() {
    $('#q5a_pic').attr('src', 'img/graphs/q5 closeness centrality.png');
    $('#q5a_figure').html("<b>Figure 5.1B:</b> Top ten retweeted users using closeness centrality");
  });

  /*****************************************************
   Question 5c: mouseover effect
  *****************************************************/
  $('#q5c_pic').on('mouseover', function() {
    $('#q5c_pic').attr('src', 'img/graphs/q5 trolls retweet trolls overlay.png');
    $('#q5c_figure').html("<b>Figure 5.3 highlighted:</b> The users listed in Figure 5.1 and 5.2 are most central on the graph.");
    });

  $('#q5c_pic').on('mouseout', function() {
    $('#q5c_pic').attr('src', 'img/graphs/q5 trolls retweet trolls.png');
    $('#q5c_figure').html("<b>Figure 5.3:</b> Graph showing which users retweeted other users. The node size corresponds to the total number of retweets the user has received.");

  });

  /*****************************************************
   Original javascript from Grayscale bootstrap theme
  *****************************************************/

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      // $("#mainNav").show();
      $("#mainNav").addClass("navbar-shrink");
      // $("#mainNav").show();
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      // $("#mainNav").hide();
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
