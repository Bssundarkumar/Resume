export class Experience {
    public title: string;
    public date: string;
    public employee: string;
    public description: string;
    public responsibilities: string[];
    public skill: string;

    constructor( title: string, date: string,
         employee: string, description: string,
         responsibilities: string[], skill) {
            this.title = title;
            this.date = date;
            this.employee = employee;
            this.description = description;
            this.responsibilities = responsibilities;
            this.skill = skill;
    }
}
