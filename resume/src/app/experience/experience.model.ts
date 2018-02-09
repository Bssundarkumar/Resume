export class Experience {
    public title: string;
    public date: string;
    public employee: string;
    public description: string;
    public Responsibilities: string[];
    public skill: string;

    constructor( title: string, date: string,
         employee: string, description: string,
         Responsibilities: string[], skill) {
            this.title = title;
            this.date = date;
            this.employee = employee;
            this.description = description;
            this.Responsibilities = Responsibilities;
            this.skill = skill;
    }
}
