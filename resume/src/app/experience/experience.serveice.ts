import { Injectable } from '@angular/core';
import { Experience } from './experience.model';




@Injectable()
export class ExperienceService {

    // tslint:disable-next-line:max-line-length
    experience1: string[]= [ 'Involved in creating Single Page Application with loading multiple views using route services and adding more user experience to make it more dynamic by using Angular 2.',
        'Developed the Model/View using Angular 2/4.',
        // tslint:disable-next-line:max-line-length
        'Responsible for Creation of TypeScript reusable components and services to consume REST API’s using Component based architecture provided by Angular 2.',
        'Used Selectors, Events and Dom Manipulation using components in Angular 2 for updating content on DOM nodes.',
        // tslint:disable-next-line:max-line-length
        'Developed the Rest controller and provide service to the controller to execute the Rest Services and providing JSON data to the Angular application.',
        'Created tasks for updating tsconfig tracked based on tslinting, and compiling Typescript files.',
        'Involved in developing templates using HTML5 and CSS3.',
        'Involved in writing typescript for the components communication in the application.',
        'Implemented RESTful web services using HTTP Client.',
        'Implemented unit testing using Jasmine and Karma.',
        'Used GitHub to maintain the versions of the source code of the project.',
        'Followed Test Driven Development (TDD) for the components and used Jasmine for unit testing.',
        'Helping the QA team in testing the application.',
        'Provided Clarification to a functional requirement to the team for any defect raised.',
        'Involved in deploy the application in development, test and Production environment.'
        ];

    experience2: string[]= [
        'Understanding and analyzing the Client Requirements with existing flow and functionalities.',
        'Developing the Java bean Classes and configure them in XML files.',
        'Wrote automated build scripts using Maven pom.xml.',
        'Implemented the data access layer using Hibernate persistence framework through Hybris Suite.',
        'Building Restful Web Services Using Spring Restful services.',
        'Developed the enterprise application by integrating Spring/Hibernate Frameworks.',
        'Used spring framework to implement the MVC design pattern for implementing the business logic of the application.',
        // tslint:disable-next-line:max-line-length
        'MySQL database has been used in the storage section. Having responsibilities to create lots of SQL queries, stored procedures, and triggers.',
        'Developed Scripts for the build process, Performed Unit Testing Using JUnit.',
        'Used SVN as a version controller. Implemented Log4J to trace logs and to track information.',
        'Followed test driven design (TDD) technique and worked on Pair programming.',

                        'Integrating the current work flow with the existing workflow and Testing all the functionalities.',
                        'Involved in developing DAO Layer using Hibernate.',
                        'Implemented transaction management of Relational Databases using MySQL database. '
                        ];
    experience3: string[]= [
                        'Developed Java J2EE application using spring MVC and Hibernate using JDBC driver.',
                        // tslint:disable-next-line:max-line-length
                        'Used Dependency Injection (DI) or Inversion of Control (IOC) to develop code for obtaining bean references in spring framework using annotations.',
                        'Used ANT and Jenkins for Build process and continuous integration. Onshore/Offshore coordination.',
                        // tslint:disable-next-line:max-line-length
                        'Analyzed problems faced in the implementation of spring Web Services in the Loyalty Services and JAX-RS integration in Avios Loyalty service and provide quick solutions to the dev team.',
                        'Helping the QA team in integration testing.',
                        'Writing Junit test cases and test suite for the branch coverage.',
                        'Fixing QA defect for the application.',
                        'Deployment of the application to the test and production environment.',
                        'Involved in writing use cases as per the client requirement.',
                        'Developed various business logics in the service layer of the given application.',
                        'Developed UI using HTML5, CSS3 and JavaScript.',
                        'Helped the testing team in testing the applications with different scenarios.'];
    private experienceList: Experience[]= [
        new Experience('Full Stack Developer',
                        'Aug 2016 – Till Date',
                        'Orbit Health Care – East Brunswick, NJ',
                        // tslint:disable-next-line:max-line-length
                        'Here the Project is a web application related to Health Care.Here I developed product distribution module of web application for the Client Globe Pharma related to their products and the product maintenance.',
                        this.experience1,
                        'Angular 2, TypeScript, Node JS, Firebase, REST API, REST services, Jasmine, Karma, Visual Studio.'),
        new Experience('Systems Engineer',
                       'Sep 2014 - Dec 2015',
                       'Infosys Ltd. – Hyderabad, India.',
                       // tslint:disable-next-line:max-line-length
                       'Here the Project is E-commerce website for the client is Medtronic’s.  I involved in developing the modules for the B2B e-commerce web application using Hybris Platform.',
                        this.experience2,
                       'Java/J2EE, Spring, Hibernate, HTML5, CSS3, JSP, Hybris Platform, MS SQL, Eclipse.'),
        new Experience('Java Developer',
                        'Jan 2014 - July 2014',
                        'Mayukh Soft Solutions –Hyderabad, India.',
                        // tslint:disable-next-line:max-line-length
                        'I have developed product distribution module of web application for the Client Globe Pharma related to their products and the product maintenance.',
                        this.experience3,
                        'Java/J2EE, HTML5, CSS3, JavaScript, Eclipse.')
    ];
    getExperience() {
        return this.experienceList.slice();
    }
    getExperienced(id: number) {
        return this.experienceList[id];
    }

}
