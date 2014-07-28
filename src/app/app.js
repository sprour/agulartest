var app = angular.module('myApp', []);

app.directive('ng-repeat', function(){
return{
    template:'<cool>This is awsome!</cool>',
    scope:{},
    replace:true,
    link:function($scope, $elm, $attrs){
        console.log('kickass');
    }
}
});

