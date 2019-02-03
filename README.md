# UserProjectList

Live Link: [UserProjectList](https://userprojectlist.herokuapp.com/)

UserProjectList is a simple single-page-application (SPA) powered with jQuery for frontend management and MongoDB/Express for backend data management.

UserProjectList displays a group of users and their associated "Projects" while presenting the information as a SPA. Because this project does not incorporate a frontend framework to create a SPA, there is much less overhead.

## Implementation Details

### Model

Even though MongoDB is a noSQL database, the Mongoose library is used to establish a Schema for the three primary Models in this application: Users, Projects, and UserProjects.

User Model
```javascript
const userSchema = new Schema({
  Id: { type: Number, required: true },
  FirstName: { type: String, required: true, maxlength: 50 },
  LastName: { type: String, required: true, maxlength: 50 }
});
```

Project Model
```javascript
const projectSchema = new Schema({
  Id: { type: Number, required: true },
  StartDate: { type: Date, required: true },
  EndDate: { type: Date, required: true },
  Credits: { type: Number, required: true }
});
```

UserProject Model
```javascript
const userProjectSchema = new Schema({
  UserId: { type: Number, required: true, ref: "User" },
  ProjectId: { type: Number, required: true, ref: "Project" },
  IsActive: { type: Boolean, required: true },
  AssignedDate: { type: Date, required: true }
});
```

### View

A single View is used to render this application, and this is done with the help of EJS (embedded JavaScript). Embedded JavaScript helps with embedding JavaScript code into HTML, as seen in the snippet below, where I am able to perform a looping function within HTML:

```javascript
<div id="user-dropdown-container" class="user-dropdown-container">
	<select id="user-dropdown" class="user-dropdown">
		<option value="" selected disabled hidden>--</option>
		<% users.forEach(function(user){ %>
			<option id="user-option-<%=user.Id%>" href="/users/<%=user.Id%>/projects">
				<%= user.FirstName %>
				<%= user.LastName %>
			</option>
		<% }); %>
	</select>
</div>
```

### Controller

Mongoose and jQuery were helpful for implementing the business logic of the application to properly make requests and retrieve data based off user actions.


### Seeding the Database

Lastly, the database for this project is pre-populated with information generated within the seed file (found under /Config/seed.js

Thank you for reading!
