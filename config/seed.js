const User = require("../models/User");
const Project = require("../models/Project");
const UserProject = require("../models/UserProject");

module.exports = function seedDatabase() {
  Promise.all([
      User.create([
        {
          Id: 001,
          FirstName: "Jimmy",
          LastName: "Kimmel"
        },
        {
          Id: 002,
          FirstName: "Michael",
          LastName: "Jordan"
        },
        {
          Id: 003,
          FirstName: "Jackie",
          LastName: "Chan"
        }
      ]),
      Project.create([
        {
          Id: 0001,
          StartDate: new Date('01.02.2019'),
          EndDate: new Date('01.03.2019'),
          Credits: 1
        },
        {
          Id: 0002,
          StartDate: new Date('01.02.2019'),
          EndDate: new Date('01.06.2019'),
          Credits: 4
        },
        {
          Id: 0003,
          StartDate: new Date('01.10.2019'),
          EndDate: new Date('01.11.2019'),
          Credits: 1
        },
        {
          Id: 0004,
          StartDate: new Date('02.05.2019'),
          EndDate: new Date('02.09.2019'),
          Credits: 4
        },
        {
          Id: 0005,
          StartDate: new Date('01.17.2019'),
          EndDate: new Date('01.18.2019'),
          Credits: 1
        },
        {
          Id: 0006,
          StartDate: new Date('03.01.2019'),
          EndDate: new Date('03.02.2019'),
          Credits: 1
        },
        {
          Id: 0007,
          StartDate: new Date('04.05.2019'),
          EndDate: new Date('04.10.2019'),
          Credits: 5
        },
        {
          Id: 0008,
          StartDate: new Date('01.17.2019'),
          EndDate: new Date('01.22.2019'),
          Credits: 5
        },
        {
          Id: 0009,
          StartDate: new Date('03.16.2019'),
          EndDate: new Date('03.17.2019'),
          Credits: 1
        },
        {
          Id: 0010,
          StartDate: new Date('04.01.2019'),
          EndDate: new Date('04.02.2019'),
          Credits: 1
        },
        {
          Id: 0011,
          StartDate: new Date('04.06.2019'),
          EndDate: new Date('04.07.2019'),
          Credits: 1
        },
        {
          Id: 0012,
          StartDate: new Date('05.01.2019'),
          EndDate: new Date('05.03.2019'),
          Credits: 2
        },
        {
          Id: 0013,
          StartDate: new Date('03.13.2019'),
          EndDate: new Date('03.20.2019'),
          Credits: 7
        },
        {
          Id: 0014,
          StartDate: new Date('05.05.2019'),
          EndDate: new Date('05.09.2019'),
          Credits: 4
        },
        {
          Id: 0015,
          StartDate: new Date('01.21.2019'),
          EndDate: new Date('01.22.2019'),
          Credits: 1
        },
      ])
  ])
  .catch(error => {
    console.log(error.message)
  })
  .then(([users, projects]) => {
      const userProjects = [
          {
            UserId: users[0],
            ProjectId: projects[0],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[0],
            ProjectId: projects[1],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[0],
            ProjectId: projects[2],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[0],
            ProjectId: projects[3],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[0],
            ProjectId: projects[4],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[1],
            ProjectId: projects[5],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[1],
            ProjectId: projects[6],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[1],
            ProjectId: projects[7],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[1],
            ProjectId: projects[8],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[1],
            ProjectId: projects[9],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[2],
            ProjectId: projects[10],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[2],
            ProjectId: projects[11],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[2],
            ProjectId: projects[12],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[2],
            ProjectId: projects[13],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[2],
            ProjectId: projects[14],
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
      ];
      return UserProject.create(userProjects);
  })
  .catch(error => {
    console.log(error.message)
  });
}
