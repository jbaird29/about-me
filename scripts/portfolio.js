const iTS = `<span class="iconify" data-icon="logos:typescript-icon" data-inline="false"></span>`;
const iReact = `<span class="iconify" data-icon="logos:react" data-inline="false"></span>`;
const iNode = `<span class="iconify" data-icon="vscode-icons:file-type-node" data-inline="false"></span>`;
const iGCloud = `<span class="iconify" data-icon="logos:google-cloud" data-inline="false"></span>`;
const iFunctions = `<span class="iconify" data-icon="logos:google-cloud-functions" data-inline="false"></span>`;
const iFirebase = `<span class="iconify" data-icon="logos:firebase" data-inline="false"></span>`;
const iFirestore = `<span class="iconify" data-icon="vscode-icons:file-type-firestore" data-inline="false"></span>`;
const iPandas = `<span class="iconify" data-icon="simple-icons:pandas" data-inline="false"></span>`;

const iASM = `<span class="iconify" data-icon="file-icons:assembly-intel" data-inline="false"></span>`;
const iMASM = `<span class="iconify" data-icon="logos:visual-studio" data-inline="false"></span>`;

const iPython = `<span class="iconify" data-icon="logos:python" data-inline="false"></span>`;
const iJS = `<span class="iconify" data-icon="logos:javascript" data-inline="false"></span>`;

const projects = [
    {
        title: "NFL Table",
        description:
            "React & Node.js application for interactively querying, filtering, and analyzing play-by-play NFL statistics over the past ~10 seasons.",
        motive: "Personal side-project",
        technologies: `Typescript ${iTS} | React ${iReact} | Node.js & Express ${iNode} | Python & Pandas (ETL & data scripting) ${iPandas} | Firebase Hosting (serverless architecture) ${iFirebase} | Google Cloud Functions (API layer) ${iFunctions} | Google BigQuery (analytical datastore) ${iGCloud} | Google Firestore (application datastore) ${iFirestore}`,
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
        technologies: `IA-32 Assembly ${iASM} | Microsoft Macro Assembler ${iMASM}`,
        highlight: "Completed class extra credit portion to handle float values up to REAL10 extended precision using the IA-32 FPU",
        linkURL: "https://github.com/jbaird29/assembly-string-primitives",
        linkText: "GitHub",
        imgURL: "./images/portfolio/asm.jpg",
    },
    {
        title: "Janggi (Korean Chess)",
        description: "Implementation of Janggi in both Python (for class project) and Javascript / HTML (performed as personal project)",
        motive: "CS162 Introduction to Computer Science II",
        technologies: `Python 3 ${iPython} | Javascript ES6+ ${iJS}`,
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
            { head: "Highlight", data: this.highlight },
            { head: "Technologies", data: this.technologies },
        ];
        rowsInfo.forEach((rowInfo) => {
            const tableRow = document.createElement("tr");
            const rowHead = document.createElement("th");
            const rowData = document.createElement("td");
            rowHead.innerHTML = rowInfo.head;
            rowData.innerHTML = rowInfo.data;
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
