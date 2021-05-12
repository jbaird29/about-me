const projects = [
    {
        title: "NFL Table",
        description:
            "React & Node.js application for interactively querying, filtering, and analyzing play-by-play NFL statistics over the past ~10 seasons.",
        motive: "Personal side-project",
        technologies:
            "Typescript; React; Node.js & Express; Google BigQuery (analytical datastore); Google Firestore (application datastore); Firebase Hosting (Serverless architecture); Google Cloud Functions (API layer); Python & Pandas (ETL pipelines & data scripting)",
        highlight:
            "Built a metadata layer which acts as a bridge between the web frontend and the database backend. For example, updating a field name would only occur in one central location - rather than across both the frontend and the backend. Additionally, adding a new field occurs in that same central location.",
    },
    {
        title: "Assembly I/O",
        description: "Low-level I/O program in assembly code, with procedures to read and write strings, integers, and floats.",
        motive: "CS271 Computer Architecture",
        technologies: "IA-32 assembly language; Microsoft Macro Assembler",
        highlight: "Completed class extra credit portion to handle float values up to REAL10 extended precision using the IA-32 FPU",
    },
    {
        title: "Janggi (Korean Chess)",
        description: "Implementation of Janggi in both Python (for class project) and Javascript / HTML (performed as personal project)",
        motive: "CS162 Introduction to Computer Science II",
        technologies: "Python 3; Javascript ES6+; vanilla DOM manipulation",
        highlight:
            "Built the ability to preserve and restores game state with browser localStorage; separate implementation which preserves game state via MySQL backend",
    },
];

class Project {
    constructor({ title, description, motive, technologies, highlight }) {
        this.title = title;
        this.description = description;
        this.motive = motive;
        this.technologies = technologies;
        this.highlight = highlight;
    }

    _buildTitle() {
        const el = document.createElement("h2");
        el.innerText = this.title;
        return el;
    }

    _buildDescription() {
        const el = document.createElement("p");
        el.innerText = this.description;
        return el;
    }

    _buildMotive() {
        const el = document.createElement("p");
        el.innerText = this.motive;
        return el;
    }

    _buildTechnologies() {
        const el = document.createElement("p");
        el.innerText = this.technologies;
        return el;
    }

    _buildHighlight() {
        const el = document.createElement("p");
        el.innerText = this.highlight;
        return el;
    }

    buildElement() {
        const el = document.createElement("div");
        el.appendChild(this._buildTitle());
        el.appendChild(this._buildDescription());
        el.appendChild(this._buildMotive());
        el.appendChild(this._buildTechnologies());
        el.appendChild(this._buildHighlight());
        el.appendChild(document.createElement("hr"));
        return el;
    }
}

const root = document.getElementById("projects-root");
projects.forEach((project) => root.appendChild(new Project(project).buildElement()));
