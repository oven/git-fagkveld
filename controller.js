function ProsjektController($scope) {
  $scope.prosjekter = [
  {navn:'Pingvinen'},
  {navn:'Lunch - ikke fakturerbar'},
  {navn:'Aladdin Oil - Nytt intranett'}
  ];

  $scope.addProsjekt = function() {
    $scope.prosjekter.push({navn: $scope.prosjektnavn});
    $scope.prosjektnavn = '';
  };

}