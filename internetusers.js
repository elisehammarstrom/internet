var years = [2015, 2013, 2011, 2009, 2007, 2005, 2003, 2001, 1999, 1997, 1995, 1993, 1990];

years.reverse();

var eastasiapacific = [49.8247157803774, 44.2035007394462, 37.3636415645189, 29.512323897857, 20.7661147435158, 14.6663590410613, 10.5472436456294, 7.25216610888433, 3.406408274225, 1.07985035626731, 0.20957789725465, 0.0792779218576253, 0.00728827636885696];
eastasiapacific.reverse();
var europecentralasia = [71.7441292126694, 66.3055363678537, 58.8606276185809, 50.5657966000656, 43.6734017342166, 35.2261079736023, 28.36394999343, 16.4063041878225, 9.24460929248396, 3.36061721161515, 1.02385973869577, 0.317705349405869, 0.0481055787774891];
europecentralasia.reverse();
var latinamericacaribbean = [54.4583843034657, 46.2670816586873, 39.3477850283796, 31.0343041284839, 23.7029350820335, 16.6297898411029, 11.2871531818652, 5.65075369105539, 2.05248963414193, 0.609594647802684, 0.110083607002837, 0.029908499352732, 0];
latinamericacaribbean.reverse();
var middleeastnorthafrica = [43.707533366815, 34.6662309585547, 27.6967664874704, 21.5977033056323, 15.0413603774485, 9.75306816804196, 5.12923073963764, 2.07664989074797, 0.918917803760192, 0.22774397938345, 0.0371438536938771, 'no value' , 0.00196039038994767];
middleeastnorthafrica.reverse();
var northAmerica = [75.9372515632806, 72.8302881787651, 71.0425495923103, 71.9166465147234, 74.8236050881279, 68.3278747850678, 61.9397408745317, 50.1620212511126, 35.8824799731117, 20.9751340705392, 8.73682317016279, 2.16453221621332, 0.743037088256645];
northAmerica.reverse();
var subsaharanafrica = [22.3880597098621, 17.1216113037161, 12.1087290250733, 6.92201542097193, 3.67015899350846, 2.0444694147473, 1.1092443762221, 0.642242042029934, 0.359684994742128, 0.128779788567897, 'no value', 'no value', 0];
subsaharanafrica.reverse();

var chart = document.getElementById("myChart");
var myChart = new Chart(chart, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: eastasiapacific,
        label: "East Asia and The Pacific",
        borderColor: "#3e95cd",
		fill: false,
		// backgroundColor: "#3e95cd" 
      },
		{ 
		  data: europecentralasia,
		  label: "Europe and Central Asia",
		  borderColor: "#ff0000",
		  fill: false
		},
		{ 
		  data: latinamericacaribbean,
		  label: "Latin America and The Caribbean",
		  borderColor: "#3ad657",
		  fill: false
		},
		{ 
		  data: middleeastnorthafrica,
		  label: "Middle East and North Africa",
		  borderColor: "#cb67a3",
		  fill: false
		},
		{ 
		  data: northAmerica,
		  label: "North America",
		  borderColor: "#f7f94e",
		  //backgroundColor: "rgba(247, 249, 78, 0.9)",
		  fill: false
		  //backgroundColor:"#f7f94e"
		},
		{ 
		  data: subsaharanafrica,
		  label: "Sub-Saharan Africa",
		  borderColor: "#f18715",
		  //backgroundColor: "rgba(247, 249, 78, 0.9)",
		  fill: false
		  //backgroundColor:"#f7f94e"
		}
    ]

  }
});

$(document).ready(function() {
    $('.down-arrow').on('click', function(e) {
    	var $scroll = $(this).data('scroll');
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#'+$scroll).offset().top
            }, 1500)
    })
});