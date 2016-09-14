(function() {
  'use strict';

  angular
    .module('app', ['ngMaterialize']);

  angular
  .module('app')
  .controller('ContainerCtrl', ContainerCtrl);

  ContainerCtrl.$inject = ['$modal', '$scope'];
  function ContainerCtrl($modal, $scope) {
    const vm = this;

    vm.openModal = openModal;

    function openModal() {

      var modalInstance = $modal.open({
        templateUrl: 'views/modals/add_story.html',
        controller: 'ModalInstanceCtrl'
      });

      modalInstance.result.then(success, error);
      
      function success(selectedItem) {
        $scope.modalResult = 'You selected ' + selectedItem;
      }

      function error() {
        $scope.modalResult = 'You dismissed the modal';
      }
    }
  }

  angular
  .module('app')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

  ModalInstanceCtrl.$inject = ['$scope', '$modalInstance'];
  function ModalInstanceCtrl($scope, $modalInstance) {
   
    $scope.select = function (item) {
      $modalInstance.close(item);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }


})();