$("#user-dropdown-container").on("change", "#user-dropdown", function(e) {
  e.preventDefault();

  // retrieve request parameters from the option select's href attribute
  let url = $(this)
    .find("option:selected")
    .attr("href");

  // update the URL to reflect request parameters
  history.pushState(null, "", url);

  // remove the previous set of results when choosing a new user
  $("#project-table")
    .find("tr:not(:first)")
    .fadeOut(100, function() {
      $(this).remove();
    });

  // use AJAX to retrieve user project information
  $.ajax({
    url: url,
    type: "get",
    success: function(response) {
      let projects = response.projects;
      let userProjects = response.userProjects;

      projects.forEach(function(project) {
        userProjects.forEach(function(userProject) {
          if (project.Id === userProject.ProjectId) {
            let timeDiff =
              new Date(project.StartDate).getTime() -
              new Date(userProject.AssignedDate).getTime();
            $("#project-table > tbody:last-child")
              .append(
                `
              <tr id='project-user-data'">
                <td>
                  ${project.Id}
                </td>
                <td>
                  ${new Date(project.StartDate).toLocaleDateString("en-US")}
                </td>
                <td>
                  ${
                    Math.ceil(timeDiff / (1000 * 3600 * 24)) < 0
                      ? "Started"
                      : Math.ceil(timeDiff / (1000 * 3600 * 24))
                  }
                </td>
                <td>
                  ${new Date(project.EndDate).toLocaleDateString("en-US")}
                </td>
                <td>
                  ${project.Credits}
                </td>
                <td>
                  ${userProject.IsActive === true ? "Active" : "Inactive"}
                </td>
              </tr>
              `
              )
              .hide()
              .fadeIn(100);
          }
        });
      });
    }
  });
});
