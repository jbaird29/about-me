const iTS = `<span class="iconify" data-icon="logos:typescript-icon" data-inline="true"></span>`;
const iReact = `<span class="iconify" data-icon="logos:react" data-inline="true"></span>`;
const iNode = `<span class="iconify" data-icon="vscode-icons:file-type-node" data-inline="true"></span>`;
const iGCloud = `<span class="iconify" data-icon="logos:google-cloud" data-inline="true"></span>`;
const iFunctions = `<span class="iconify" data-icon="logos:google-cloud-functions" data-inline="true"></span>`;
const iFirebase = `<span class="iconify" data-icon="logos:firebase" data-inline="true"></span>`;
const iFirestore = `<span class="iconify" data-icon="vscode-icons:file-type-firestore" data-inline="true"></span>`;
const iPandas = `<span class="iconify" data-icon="simple-icons:pandas" data-inline="true"></span>`;
const iExpo = `<span class="iconify" data-icon="cib:expo"></span>`;

const iASM = `<span class="iconify" data-icon="file-icons:assembly-intel" data-inline="true"></span>`;
const iMASM = `<span class="iconify" data-icon="logos:visual-studio" data-inline="true"></span>`;

const iPython = `<span class="iconify" data-icon="logos:python" data-inline="true"></span>`;
const iJS = `<span class="iconify" data-icon="logos:javascript" data-inline="true"></span>`;
const iC = `<span class="iconify" data-icon="cib:c" style="color: darkblue;"></span>`;

const iGitHub = `<span class="iconify" data-icon="akar-icons:github-fill" data-inline="true"></span>`;
const iLink = `<span class="iconify" data-icon="akar-icons:link-out" data-inline="true"></span>`;

const projects = [
    {
        title: "NFL Table",
        description:
            "Single-page web application and API backend for interactively querying, filtering, and analyzing 500MB of play-by-play NFL statistics spanning the past ~10 seasons",
        motive: "Personal project",
        technologies: `${iTS} Typescript | ${iReact} React | ${iNode} Node.js & Express | ${iPandas} Python & Pandas (ETL & data scripting) | ${iFirebase} Firebase Hosting (serverless architecture) | ${iFunctions} Google Cloud Functions (API layer) | ${iGCloud} Google BigQuery (analytical datastore) | ${iFirestore} Google Firestore (application datastore)`,
        highlight:
            "Built a metadata layer to bridge the web frontend with the database backend; for example, updating a field name or adding a new field occurs in one central location, rather than separately across the frontend and the backend",
        linkURL: "https://www.nfltable.com",
        linkText: `${iLink} Link`,
        imgURL: "./images/portfolio/nfl-table.png",
    },
    {
        title: "smallsh",
        description:
            "Primitive UNIX shell, implementing a subset of features of bash including running background processes, I/O redirection, and basic signal handling",
        motive: "CS344 Operating Systems",
        technologies: `${iC} C Programming Language`,
        highlight:
            "Natively executes 3 built-in commands (exit, cd, and status) while supporting other commands via fork() and exec()",
        linkURL: "https://github.com/jbaird29/smallsh",
        linkText: `${iGitHub} GitHub`,
        imgURL: "./images/portfolio/smallsh.png",
    },
    {
        title: "MyCard",
        description:
            'React Native mobile app for creating and sharing a "digital business card" via a scannable QR code',
        motive: "Personal project & CS361 Software Engineering I",
        technologies: `${iTS} Typescript | ${iReact} React Native | ${iExpo} Expo`,
        highlight:
            "Built over the course of 8 weeks utilizing Agile software development techniques, including paper prototyping, UML diagramming, and task prioritization frameworks",
        linkURL: "https://github.com/jbaird29/my-card-app",
        linkText: `${iGitHub} GitHub`,
        imgURL: "./images/portfolio/my-card.png",
    },
    {
        title: "Janggi (Korean Chess)",
        description:
            "Implementation of Janggi in both Python (for class project) and Javascript / HTML (performed as personal project)",
        motive: "CS162 Introduction to Computer Science II",
        technologies: `${iPython} Python 3 | ${iJS} Javascript ES6+`,
        highlight:
            "Built the ability to preserve and restores game state with browser localStorage; a separate implementation preserves game state via MySQL backend",
        linkURL: "https://github.com/jbaird29/janggi",
        linkText: `${iGitHub} GitHub`,
        imgURL: "./images/portfolio/janggi.png",
    },
    {
        title: "Assembly I/O",
        description:
            "Low-level I/O program in assembly code, with procedures to read and write strings, integers, and floats",
        motive: "CS271 Computer Architecture",
        technologies: `${iASM} IA-32 Assembly | ${iMASM} Microsoft Macro Assembler`,
        highlight:
            "Completed class extra credit portion to handle float values up to REAL10 extended precision using the IA-32 FPU",
        linkURL: "https://github.com/jbaird29/assembly-string-primitives",
        linkText: `${iGitHub} GitHub`,
        imgURL: "./images/portfolio/asm.jpg",
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
        el.innerHTML = this.linkText;
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

    _buildContent() {
        const list = document.createElement("dl");
        const rows = [
            { title: "Motive", item: this.motive },
            { title: "Description", item: this.description },
            { title: "Highlight", item: this.highlight },
            { title: "Technologies", item: this.technologies },
        ];
        rows.forEach((row) => {
            const container = document.createElement("div");
            container.classList.add("row-container");
            const title = document.createElement("dt");
            const item = document.createElement("dd");
            title.innerHTML = row.title;
            item.innerHTML = row.item;
            container.appendChild(title);
            container.appendChild(item);
            list.appendChild(container);
        });
        return list;
    }

    buildElement() {
        const el = document.createElement("div");
        el.appendChild(this._buildTitle());
        const container = document.createElement("div");
        container.classList.add("project-container");
        container.appendChild(this._buildImgBox());
        container.appendChild(this._buildContent());
        el.appendChild(container);
        return el;
    }
}

const root = document.getElementById("projects-root");
projects.forEach((project, index) => {
    root.appendChild(new Project(project).buildElement());
    if (index !== projects.length - 1) root.appendChild(document.createElement("hr"));
});
