(function() {
  'use strict';

  // module.js
  angular
    .module('app', ['ngMaterialize']);

  // container.controller.js
  angular
  .module('app')
  .controller('ContainerCtrl', ContainerCtrl);

  ContainerCtrl.$inject = ['$modal', '$scope', 'User'];
  function ContainerCtrl($modal, $scope, User) {
    const vm = this;

    vm.openModal = openModal;
    vm.user = User;

    // function called when submit is called
    function openModal() {

      // call the service to update the name attribute
      User.setName(vm.user.name);

      // creating the modal instance!
      var modalInstance = $modal.open({
        templateUrl: 'views/modals/add_story.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: '$ctrl'
      });

      // fallbacks from modal here
      modalInstance.result.then(success, error);
      
      function success(selectedItem) {
        $scope.modalResult = 'You selected ' + selectedItem;
      }

      function error() {
        $scope.modalResult = 'You dismissed the modal';
      }
    }
  }

  // modal-instance.controller.js
  angular
  .module('app')
  .controller('ModalInstanceCtrl', ModalInstanceCtrl);

  ModalInstanceCtrl.$inject = ['$modalInstance', 'User'];
  function ModalInstanceCtrl($modalInstance, User) {
    const vm = this;
    const user = {
      name: User.name
    };

    vm.user = user;
    vm.cancel = cancel;

     function cancel() {
      $modalInstance.dismiss('cancel');
    };
  }

  // user.service.js
  angular
  .module('app')
  .service('User', User);

  function User() {
    const user = {};

    user.name = 'Luiz';

    // helper used to update the name attribute
    user.setName = function(newName) {
      user.name = newName;
    }

    return user;
  }


})();