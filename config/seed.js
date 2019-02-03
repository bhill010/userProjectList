const User = require("../models/User");
const Project = require("../models/Project");
const UserProject = require("../models/UserProject");

module.exports = function seedDatabase() {
  User.collection.drop();
  Project.collection.drop();
  UserProject.collection.drop();

  Promise.all([
      User.create([
        {
          Id: 1001,
          FirstName: "Jimmy",
          LastName: "Kimmel"
        },
        {
          Id: 1002,
          FirstName: "Michael",
          LastName: "Jordan"
        },
        {
          Id: 1003,
          FirstName: "Jackie",
          LastName: "Chan"
        }
      ]),
      Project.create([
        {
          Id: 20001,
          StartDate: new Date('01.05.2019'),
          EndDate: new Date('01.06.2019'),
          Credits: 1
        },
        {
          Id: 20002,
          StartDate: new Date('01.02.2019'),
          EndDate: new Date('01.06.2019'),
          Credits: 4
        },
        {
          Id: 20003,
          StartDate: new Date('01.10.2019'),
          EndDate: new Date('01.11.2019'),
          Credits: 1
        },
        {
          Id: 20004,
          StartDate: new Date('02.05.2019'),
          EndDate: new Date('02.09.2019'),
          Credits: 4
        },
        {
          Id: 20005,
          StartDate: new Date('01.17.2019'),
          EndDate: new Date('01.18.2019'),
          Credits: 1
        },
        {
          Id: 20006,
          StartDate: new Date('03.01.2019'),
          EndDate: new Date('03.02.2019'),
          Credits: 1
        },
        {
          Id: 20007,
          StartDate: new Date('04.05.2019'),
          EndDate: new Date('04.10.2019'),
          Credits: 5
        },
        {
          Id: 20008,
          StartDate: new Date('01.17.2019'),
          EndDate: new Date('01.22.2019'),
          Credits: 5
        },
        {
          Id: 20009,
          StartDate: new Date('03.16.2019'),
          EndDate: new Date('03.17.2019'),
          Credits: 1
        },
        {
          Id: 20010,
          StartDate: new Date('04.01.2019'),
          EndDate: new Date('04.02.2019'),
          Credits: 1
        },
        {
          Id: 20011,
          StartDate: new Date('04.06.2019'),
          EndDate: new Date('04.07.2019'),
          Credits: 1
        },
        {
          Id: 20012,
          StartDate: new Date('05.01.2019'),
          EndDate: new Date('05.03.2019'),
          Credits: 2
        },
        {
          Id: 20013,
          StartDate: new Date('03.13.2019'),
          EndDate: new Date('03.20.2019'),
          Credits: 7
        },
        {
          Id: 20014,
          StartDate: new Date('05.05.2019'),
          EndDate: new Date('05.09.2019'),
          Credits: 4
        },
        {
          Id: 20015,
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
            UserId: users[0].Id,
            ProjectId: projects[0].Id,
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[0].Id,
            ProjectId: projects[1].Id,
            IsActive: true,
            AssignedDate: new Date('11.01.2019'),
          },
          {
            UserId: users[0].Id,
            ProjectId: projects[2].Id,
            IsActive: false,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[0].Id,
            ProjectId: projects[3].Id,
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[0].Id,
            ProjectId: projects[4].Id,
            IsActive: true,
            AssignedDate: new Date('06.01.2019'),
          },
          {
            UserId: users[1].Id,
            ProjectId: projects[5].Id,
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[1].Id,
            ProjectId: projects[6].Id,
            IsActive: true,
            AssignedDate: new Date('07.01.2019'),
          },
          {
            UserId: users[1].Id,
            ProjectId: projects[7].Id,
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[1].Id,
            ProjectId: projects[8].Id,
            IsActive: false,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[1].Id,
            ProjectId: projects[9].Id,
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[2].Id,
            ProjectId: projects[10].Id,
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[2].Id,
            ProjectId: projects[11].Id,
            IsActive: true,
            AssignedDate: new Date('10.01.2019'),
          },
          {
            UserId: users[2].Id,
            ProjectId: projects[12].Id,
            IsActive: true,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[2].Id,
            ProjectId: projects[13].Id,
            IsActive: false,
            AssignedDate: new Date('01.01.2019'),
          },
          {
            UserId: users[2].Id,
            ProjectId: projects[14].Id,
            IsActive: true,
            AssignedDate: new Date('11.01.2019'),
          },
      ];
      return UserProject.create(userProjects);
  })
  .catch(error => {
    console.log(error.message)
  });
}
