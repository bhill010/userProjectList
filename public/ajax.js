$("#user-dropdown-container").on('change', '#user-dropdown', function(e){
  e.preventDefault();
  var url = $(this).find("option:selected").attr("href");
  $("#project-table").find("tr:not(:first)").remove();


  $.ajax({
    url: url,
    type: "get",
    success: function(response) {
      let projects = response.projects;
      let userProjects = response.userProjects;

      projects.forEach(function(project){
        userProjects.forEach(function(userProject) {
          if ( project.Id === userProject.ProjectId) {
            let timeDiff = Math.abs(new Date(project.StartDate).getTime() - new Date(userProject.AssignedDate).getTime());
            $('#project-table > tbody:last-child').append(
              `
              <tr id='project-user-data' style="display:flex;">
                <td>
                  ${project.Id}
                </td>
                <td>
                  ${new Date(project.StartDate).toLocaleDateString("en-US")}
                </td>
                <td>
                  ${ Math.ceil(timeDiff / (1000 * 3600 * 24)) < 0 ? "Started" : Math.ceil(timeDiff / (1000 * 3600 * 24)) }
                </td>
                <td>
                  ${ new Date(project.EndDate).toLocaleDateString("en-US") }
                </td>
                <td>
                  ${ project.Credits }
                </td>
                <td>
                  ${ userProject.IsActive === true ? "Active" : "Inactive" }
                </td>
              </tr>
              `
            )
          };
        });
      });

    },
    error: function(xhr) {
      //Do Something to handle error
    }
  });
});
