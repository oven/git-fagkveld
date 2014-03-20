var ukedager = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];

function summer(prosjekter, ukedag) {
  var result = 0;
  for (var i = 0; i < prosjekter.length; i++) {
    result += prosjekter[i].dager[ukedag].timer;
  }
  return result;
}

function Dag(ukedag) {
  this.ukedag = ukedag;
  this.timer = 0;
  this.beskrivelse = "";
}

function Prosjekt(navn) {
  this.navn = navn;
  this.dager = [];
  for (var i = 0; i < 7; i++) {
    this.dager.push(new Dag(i));
  }
}

Prosjekt.prototype.summer = function() {
  var sum = 0;
  for (var i = 0; i < this.dager.length; i++) {
    sum += this.dager[i].timer;
  }
  return sum;
}

function ProsjektController($scope) {
  $scope.prosjekter = [ 
  new Prosjekt("Pingvinen"), 
  new Prosjekt("Lunch - ikke fakturerbar"), 
  new Prosjekt("Aladdin Oil - Nytt intranett") 
  ];

  $scope.ukedager = ukedager;

  $scope.addProsjekt = function() {
    $scope.prosjekter.push(new Prosjekt($scope.prosjektnavn));
    $scope.prosjektnavn = '';
  };

  $scope.summer = summer;

}
