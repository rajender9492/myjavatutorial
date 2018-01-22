
var myApp = angular
					.module("myModule",[])
					.controller("myController",function ($scope){
					var employees = [
										{name:"raj",dateOfBirth:new Date("January 27,1993"),gender:"male",salary:"45000.55"},
										{name:"lokesh",dateOfBirth:new Date("December 29,1992"),gender:"male",salary:"55005.65"},
										{name:"Mamatha",dateOfBirth:new Date("July 8,1991"),gender:"female",salary:"40000.00"},
										{name:"Deepthi",dateOfBirth:new Date("October 29,1992"),gender:"female",salary:"49000.05"}
								];
					$scope.employees = employees;
					$scope.sortColumn= "name";
				});


