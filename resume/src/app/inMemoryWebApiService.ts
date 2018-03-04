import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryWebService implements InMemoryDbService {
  createDb() {
    const experienceList = [
      {
        title: 'Software Engineer Trainee',
        date: 'Aug 2017 – Dec 2017',
        employee: 'Data Boss International Corp. – New Jersey',
        // tslint:disable-next-line:max-line-length
        description:
          'I have developed product distribution module of web application for the Client Globe Pharma related to their products and the product maintenance.',
        Responsibilities: [
          'Developed an SPA for a client using Angular 2/4/5.',
          'Developed Controller for request, response paradigm by Spring Controllers using Spring-MVC.',
          'Used Maven for project management and build Spring Boot Application.',
          'Developed RESTful web services using JAX-RS.',
          'Involved in writing queries to retrieve data from the database using DAO Layer.',
          'Developed Components of the UI using, HTML5, JavaScript, CSS3 and angular 4.',
          'Fixing QA defect for the application'
        ],
        skill:
          'Spring Boot, Spring, Hibernate, Java/J2EE, HTML5, CSS3, angular JS, MySQL, Eclipse.'
      },

      {
        title: 'Java Developer',
        date: ' Jan 2017 - May 2017',
        employee: 'University of Central Missouri – Missouri',
        // tslint:disable-next-line:max-line-length
        description:
          'I have developed product distribution module of web application for the Client Globe Pharma related to their products and the product maintenance.University of central Missouri is a State university. Here I worked under Prof. who taught Advanced Software Engineering and Software Engineering. Here I developed a project for class registration and class allocation in the Course Advanced Software Engineering.',
        Responsibilities: [
          'Involved in research related to development of the University related application.',
          'Rewrote the current web app using Angular 4, Typescript, HTML5, CSS3.',
          'Updated existing websites by altering, removing, or adding content as needed.',
          'Involved in developing the MVC controller using Spring.',
          'Developed Hibernate in Data Access Layer to access and update information in the database.',
          'Version control my projects using Git in combination with GitHub.',
          'Writing queries to populate the data from database and present it on UI.'
        ],
        skill:
          'Java/J2EE, Spring, Hibernate, HTML5, CSS3, JSP, Hybris Platform, MS SQL, Eclipse.'
      },
      {
        title: 'Systems Engineer',
        date: 'Sep 2014 - Dec 2015',
        employee: 'Infosys Ltd. – Hyderabad, India.',
        // tslint:disable-next-line:max-line-length
        description:
          'Here the client is Medtronic’s.  I involved in developing the modules for the B2B e-commerce web application using Hybris Platform.',
        Responsibilities: [
          'Involved in writing impex file and execute them in Hybris platform.',
          'Implemented the data access layer using Hibernate persistence framework through Hybris Suit.',
          'Integrating the current work flow with the existing workflow and Testing all the functionalities.',
          'Involved in developing DAO Layer using Hibernate.',
          'Implemented transaction management of Relational Databases using MySQL database. '
        ],
        skill:
          'Java/J2EE, Spring, Hibernate, HTML5, CSS3, JSP, Hybris Platform, MS SQL, Eclipse.'
      },
      {
        title: 'Jr Java Developer',
        date: 'May 2013 - July 2014',
        employee: 'Tech matrix compulogics Pvt ltd –Hyderabad, India.',
        // tslint:disable-next-line:max-line-length
        description:
          'Tech Matrix compulogics pvt ltd is a startup in Hyderabad related to robotics where I worked as a developer for the robotic applications',
        Responsibilities: [
          'Involved in writing use cases as per the client requirement.',
          'Developed various business logics in the service layer of the given application.',
          'Developed UI using HTML5, CSS3 and JavaScript.',
          'Helped the testing team in testing the applications with different scenarios.'
        ],
        skill: 'Java/J2EE, HTML5, CSS3, JavaScript, Eclipse.'
      }
    ];
    return { experienceList };
  }
}
