const projects = [
    {
        title: "NFL Table",
        description:
            "React & Node.js application for interactively querying, filtering, and analyzing play-by-play NFL statistics over the past ~10 seasons.",
        motive: "Personal side-project",
        technologies:
            "Typescript; React; Node.js & Express; Google BigQuery (analytical datastore); Google Firestore (application datastore); Firebase Hosting (Serverless architecture); Google Cloud Functions (API layer); Python & Pandas (ETL pipelines & data scripting)",
        highlight:
            "Built a metadata layer which acts as a bridge between the web frontend and the database backend; for example, updating a field name or adding a new field would only occur in one central location - rather than across both the frontend and the backend",
        linkURL: "http://www.nfltable.com",
        linkText: "Link",
        imgURL: "./images/portfolio/nfl-table.png",
    },
    {
        title: "Assembly I/O",
        description: "Low-level I/O program in assembly code, with procedures to read and write strings, integers, and floats.",
        motive: "CS271 Computer Architecture",
        technologies: "IA-32 assembly language; Microsoft Macro Assembler",
        highlight: "Completed class extra credit portion to handle float values up to REAL10 extended precision using the IA-32 FPU",
        linkURL: "https://github.com/jbaird29/assembly-string-primitives",
        linkText: "GitHub",
        imgURL: "./images/portfolio/asm.jpg",
    },
    {
        title: "Janggi (Korean Chess)",
        description: "Implementation of Janggi in both Python (for class project) and Javascript / HTML (performed as personal project)",
        motive: "CS162 Introduction to Computer Science II",
        technologies: "Python 3; Javascript ES6+; vanilla DOM manipulation",
        highlight:
            "Built the ability to preserve and restores game state with browser localStorage; a separate implementation preserves game state via MySQL backend",
        linkURL: "https://github.com/jbaird29/janggi",
        linkText: "GitHub",
        imgURL: "./images/portfolio/janggi.png",
    },
];

class Project {
    constructor({ title, description, motive, technologies, highlight, linkURL, linkText, imgURL }) {
        this.title = title;
        this.description = description;
        this.motive = motive;
        this.technologies = technologies;
        this.highlight = highlight;
        this.linkURL = linkURL;
        this.linkText = linkText;
        this.imgURL = imgURL;
    }

    _buildTitle() {
        const el = document.createElement("h2");
        el.innerText = this.title;
        return el;
    }

    _getLink() {
        const el = document.createElement("a");
        el.innerText = this.linkText;
        el.href = this.linkURL;
        el.target = "_blank";
        el.classList.add("btn");
        return el;
    }

    _getImg() {
        const el = document.createElement("img");
        el.setAttribute("src", this.imgURL);
        return el;
    }

    _buildImgBox() {
        const el = document.createElement("div");
        el.classList.add("img-container");
        el.appendChild(this._getImg());
        el.appendChild(this._getLink());
        return el;
    }

    _buildTable() {
        const table = document.createElement("table");
        const rowsInfo = [
            { head: "Motive", data: this.motive },
            { head: "Description", data: this.description },
            { head: "Technologies", data: this.technologies },
            { head: "Highlight", data: this.highlight },
        ];
        rowsInfo.forEach((rowInfo) => {
            const tableRow = document.createElement("tr");
            const rowHead = document.createElement("th");
            const rowData = document.createElement("td");
            rowHead.innerText = rowInfo.head;
            rowData.innerText = rowInfo.data;
            tableRow.appendChild(rowHead);
            tableRow.appendChild(rowData);
            table.appendChild(tableRow);
        });
        return table;
    }

    buildElement() {
        const el = document.createElement("div");
        el.appendChild(this._buildTitle());
        const container = document.createElement("div");
        container.classList.add("project-container");
        container.appendChild(this._buildImgBox());
        container.appendChild(this._buildTable());
        el.appendChild(container);
        return el;
    }
}

const root = document.getElementById("projects-root");
projects.forEach((project, index) => {
    root.appendChild(new Project(project).buildElement());
    if (index !== projects.length - 1) root.appendChild(document.createElement("hr"));
});
