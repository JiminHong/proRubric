myApp.controller('AccordionDemoCtrl', function ($scope, $http, $timeout, $rootScope, $location) {
var parent = $rootScope;
	$scope.status = {
	    isFirstOpen: true,
	    isFirstDisabled: false
	  };
    $scope.validateClick = function (group, index) {
        if (group.correct == "addingDegreeCourse") {
            group.isaddingDegreeCourse = true;
        } else if (group.correct == "addingRubric") {
            group.isaddingRubric = true;
        }     
    }
   parent.groups = [
    {
      title : 'Select Degree Program and Course',
      className : 'addingDegreeCourse',
      display: 'none',
      users : [ 
	    { 
	      // label will render the label for the input form.
	      label: 'Major Name',
	      value: '',
	      options:[
	      	{"value": "Web Design and Development"},
	      	{"value": "Mobile Development"},
	      	{"value": "Recording Arts"},
	      	{"value": "Film"},
	      	{"value": "Emerging Technologies"},
	      	{"value": "Show Production"}
	      ],
	      type:"select",
	      name:"major",      
	    },
	    { 
	      // label will render the label for the input form.
	      label: 'Course Name',
	      placeholder: ' Enter course name ',
	      value: '',
	      type: 'text',
	      name: 'course'
	    },
	    {
	      // text area data
	      label: 'Description',
	      placeholder: ' Enter the course description ',
	      value: '',
	      type: 'textarea',
	      name: 'description'
	    }
	  ]
    },
    {
      title: 'Add Rubric',
      className : 'addingRubric',
      display: 'block',
	  users : [ { 
	      // label will render the label for the input form.
	      label: 'Rubric Name',
	      placeholder: ' Enter the Name of the Assignment ',
	      value: '',
	      type: 'text',
	      name: 'name'
	    },
	    {
	      // email data
	      label: 'Section Titles',
	      placeholder: 'Design,Functionality,Code',
	      value: '',
	      type: 'text',
	      name: 'title'
	    },
	    { 
	      // label will render the label for the input form.
	      label: 'Grade Options',
	      placeholder: ' 0,25,50,75,100',
	      value: '',
	      type: 'text',
	      name: 'grade'
	    },
	    {
	      // email data
	      label: 'Due Date',
	      placeholder: ' Enter start Date',
	      value: '',
	      type: 'date',
	      name: 'dueDate'
	    },
	    {
	      // text area data
	      label: 'Description',
	      placeholder: ' Enter the assignment description ',
	      value: '',
	      type: 'textarea',
	      name: 'rubricdescription'
	   }
	  ]
	}];
	
    // $http.get('/groupList').success(function(response){
    // 	console.log("i got the data");
    // 	$scope.groupList = response;
    // })
  

	// put json object into the form data array
  	// WHEN FORM IS SUBMITED
  	$scope.submitForm = function($scope){

        //parcing the data from the form
        var major = $rootScope.groups[0].users[0].value;
        var course = $rootScope.groups.course;
        var courseDescript = $rootScope.groups.description;
        var rubName = $rootScope.groups.name;
        var secTitles = $rootScope.groups.title;
        var grade = $rootScope.groups.grade;
        var rDescript = $rootScope.groups.rubricdescription;
        var due = $rootScope.groups.dueDate;

		//this the first form that gets submited   


  		var majorName = $rootScope.groups[0].users[0].value;
    	//this the first form that gets submited

        //seperating the grade and sectitles on commas
        var sections = secTitles;
        var sectionSplit = sections.split(",");

        var grades = grade;
        var gradeSplit = grades.split(",");        
        //this the first form that gets submited
        var Data = { major: major, course: course ,description: courseDescript, rubric:{name:rubName,title:sectionSplit, grade:gradeSplit, dueDate: due,rubricdescription:rDescript}};
        
        //posting to /api/post then sending to the database
      $http.post('/api/post', Data).then(function (successCallback, errorCallback){

      });

      $http.get('/api/post', Data).then(function (req,res){

      	
      });


//adding a comment so it can be pulled
var callback1;
  	// IF FORM IS VALID
	if(callback1){
	      for (var i = 0; i < groupList.length; i++) {
	        var val = JSON.stringify(groupList[i]['value']);
	        // put the data submited by the form into the var results
	        groupList.push(val);
	      }
	      // show results in the console
	      return val;

    }      
  }
  return parent
});
// angular.bootstrap(document, ['myApp']);
