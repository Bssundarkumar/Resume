import { Injectable } from '@angular/core';
import { Experience } from './experience.model';




@Injectable()
export class ExperienceService {

    experience1: string[]= [ 'Developed an SPA for a client using Angular 2/4/5.',
                        'Developed Controller for request, response paradigm by Spring Controllers using Spring-MVC.',
                        'Used Maven for project management and build Spring Boot Application.',
                        'Developed RESTful web services using JAX-RS.',
                        'Involved in writing queries to retrieve data from the database using DAO Layer.',
                        'Developed Components of the UI using, HTML5, JavaScript, CSS3 and angular 4.',
                        'Fixing QA defect for the application'];
    experience2: string[]= ['Involved in research related to development of the University related application.',
                        'Rewrote the current web app using Angular 4, Typescript, HTML5, CSS3.',
                        'Updated existing websites by altering, removing, or adding content as needed.',
                        'Involved in developing the MVC controller using Spring.',
                        'Developed Hibernate in Data Access Layer to access and update information in the database.',
                        'Version control my projects using Git in combination with GitHub.',
                        'Writing queries to populate the data from database and present it on UI.'];
    experience3: string[]= ['Involved in writing impex file and execute them in Hybris platform.',
                        'Implemented the data access layer using Hibernate persistence framework through Hybris Suit.',
                        'Integrating the current work flow with the existing workflow and Testing all the functionalities.',
                        'Involved in developing DAO Layer using Hibernate.',
                        'Implemented transaction management of Relational Databases using MySQL database. '
                        ];
    experience4: string[]= ['Involved in writing use cases as per the client requirement.',
                        'Developed various business logics in the service layer of the given application.',
                        'Developed UI using HTML5, CSS3 and JavaScript.',
                        'Helped the testing team in testing the applications with different scenarios.'];
    private experienceList: Experience[]= [
        new Experience('Software Engineer Trainee',
                        'Aug 2017 – Dec 2017',
                        'Data Boss International Corp. – New Jersey',
                        // tslint:disable-next-line:max-line-length
                        'I have developed product distribution module of web application for the Client Globe Pharma related to their products and the product maintenance.',
                        this.experience1,
                        'Spring Boot, Spring, Hibernate, Java/J2EE, HTML5, CSS3, angular JS, MySQL, Eclipse.'),
        new Experience('Java Developer',
                        'Jan 2017 - May 2017',
                        'University of Central Missouri – Missouri',
                        // tslint:disable-next-line:max-line-length
                        'University of central Missouri is a State university. Here I worked under Prof. who taught Advanced Software Engineering and Software Engineering. Here I developed a project for class registration and class allocation in the Course Advanced Software Engineering.',
                        this.experience2,
                        'Spring, Hibernate, Maven, Eclipse, MySQL, HTML5, CSS3, Git.'),
        new Experience('Systems Engineer',
                       'Sep 2014 - Dec 2015',
                       'Infosys Ltd. – Hyderabad, India.',
                       // tslint:disable-next-line:max-line-length
                       'Here the client is Medtronic’s.  I involved in developing the modules for the B2B e-commerce web application using Hybris Platform.',
                        this.experience3,
                       'Java/J2EE, Spring, Hibernate, HTML5, CSS3, JSP, Hybris Platform, MS SQL, Eclipse.'),
        new Experience('Jr Java Developer',
                        'May 2013 - July 2014',
                        'Tech matrix compulogics Pvt ltd –Hyderabad, India.',
                        // tslint:disable-next-line:max-line-length
                        'I have developed product distribution module of web application for the Client Globe Pharma related to their products and the product maintenance.',
                        this.experience4,
                        'Java/J2EE, HTML5, CSS3, JavaScript, Eclipse.')
    ];
    getExperience() {
        return this.experienceList.slice();
    }
    getExperienced(id: number) {
        return this.experienceList[id];
    }

}
