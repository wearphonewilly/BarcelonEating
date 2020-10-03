// weather api
$(document).ready(function() {
  
    $.ajax({
      
      url: "http://api.openweathermap.org/data/2.5/weather?q=chicago,usa&APPID=4573c189d467ca1814c1c10000060792",
      dataType : "json",
      type: "GET", 
  
      success: function(json) {
        var temp = Math.round(json.main.temp - 273.15);
        $('#city-weather-temperature').html(temp + '° C');
        $('#city-weather-description').html(json.weather[0].description);
        $('img#city-weather-icon').attr('src', 'http://openweathermap.org/img/w/' + json.weather[0].icon + '.png');
      },
      error: function(xhr, status, errorThrown) {
        //do something if there was an error. Right now it will just show the default values in the html
      }
    });
    
    // Nav toggle content
    $("nav ul li a").on("click", function() {
      
      var $this = $(this);
      var target = $this.text().toLowerCase();
      
      //update nav selected
      $this.parent().addClass('selected').siblings().removeClass('selected');
      
      
      //show and hide appropriate content based on selection    
      $('#' + target).fadeIn('slow').removeClass('hide').siblings().not('nav').not('.nav-info-behind').hide();
      
      
      return false;
    });
  });