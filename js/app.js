var app = angular.module('cfguide', ['ui.router', 'ngMaterial', 'ngMessages']);

app.controller('CFController', function ($mdSidenav, $scope, $state) {
	var ctrl = this;


	ctrl.toggleNav = function () {
		$mdSidenav('left').toggle();
	}

  ctrl.openMenu = function ($mdOpenMenu, event) {
    $mdOpenMenu(event);
  }

  ctrl.deleteMed = function (pres) {
    $scope.med.splice($scope.med.indexOf(pres), 1);
  }

  ctrl.deleteApp = function (item){
    $scope.todos.splice($scope.todos.indexOf(item), 1);
  }

  ctrl.addPrescription = function (prescription) {
    $scope.med.push(prescription);
    $state.go('cfguide.med');
  }

  ctrl.addAppointment = function (appointment) {
    $scope.todos.push(appointment);
    $state.go('cfguide.appointments');
  }


var imagePath = 'img/dr.png';

    $scope.todos = [
      {
        face : imagePath,
        doctor: 'Dr. Mohamed guru Ahmed',
        time: '3:00PM',
        date: '11/02/2016',
        place: "IGMH",
        docEmail: "test@doc.com",
        infor: "Consulted with him a year back"
      },
      {
        face : imagePath,
        doctor: 'Dr. Imran Ahmed',
        time: '3:00PM',
        date: '12/02/2016',
        place: "IGMH",
        docEmail: "test@doc.com",
        infor: "Consulted with him a year back"
      },
      {
        face : imagePath,
        doctor: 'Dr. Shifan Ahmed',
        time: '3:00PM',
        date: '13/02/2016',
        place: "IGMH",
        docEmail: "test@doc.com",
        infor: "Consulted with him a year back"
      },
    ];

    $scope.med = [
      {
        reason: 'Lung injection',
        doctor: 'Dr. Mohamed Ahmed',
        tablet: 'Voltron',
        time: '1 tab per day',
        startD: '11/02/2016',
        endD: '11/02/2016',
        infor: " I'll be in your neighborhood doing errands"
      },
      {
        reason: 'Lung injection',
        doctor: 'Dr. Mohamed Ahmed',
        tablet: 'Voltron',
        time: '2 tab per day',
        startD: '11/02/2016',
        endD: '11/02/2016',
        infor: " I'll be in your neighborhood doing errands"
      },
      {
        reason: 'Lung injection',
        doctor: 'Dr. Mohamed Ahmed',
        tablet: 'Voltron',
        time: '3 tab per day',
        startD: '11/02/2016',
        endD: '11/02/2016',
        infor: " I'll be in your neighborhood doing errands"
      },
    ];
});

app.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider',
function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {
	$urlRouterProvider.otherwise('/home');

	
$stateProvider		
		.state('cfguide', {
			abstract: true,
			url: '',
			templateUrl: './pages/layout.html'
		})

		.state('cfguide.login', {
			url: '/login',
			templateUrl: './pages/login.html'
		})

		.state('cfguide.whatcf', {
			url: '/whatcf',
			templateUrl: './pages/whatcf.html'
		})


		.state('cfguide.appointments', {
			url: '/appointments',
			templateUrl: './pages/appointments.html'
		})

		.state('cfguide.addappoint', {
			url: '/addappoint',
			templateUrl: './pages/addappoint.html'
		})


		.state('cfguide.medicine', {
			url: '/medicine',
			templateUrl: './pages/medicine.html'
		})

		.state('cfguide.lifecf', {
			url: "/lifecf",
			templateUrl: './pages/lifecf.html' 
		})

		.state('cfguide.med', {
			url: "/med",
			templateUrl: './pages/med.html' 
		})

		.state('cfguide.home', {
			url: '/home',
			templateUrl: './pages/home.html'
		});

	$mdThemingProvider.theme('default')
		.primaryPalette('green')
		.accentPalette('amber')
}]);