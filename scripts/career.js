const previewBtn = document.getElementById("view-pdf-btn");
let shown = false;

previewBtn.addEventListener("click", () => {
    const iframe = document.getElementById("pdf-viewer");
    if (!shown) {
        iframe.classList.add("pdf-viewer-active");
        previewBtn.innerHTML = "X Close";
        shown = true;
    } else {
        iframe.classList.remove("pdf-viewer-active");
        previewBtn.innerHTML = `<span class="iconify" data-icon="ant-design:eye-filled" data-inline="true"></span> Preview`;
        shown = false;
    }
});

class CareerStrip {
    /**
     * @param {string} entity "BMO Capital Markets"
     * @param {string} industry "Investment Banking"
     * @param {string} datesPosition "2014-2017: Analyst"
     * @param {string} location "New York, NY"
     * @param {string} imgURL "images/career/bmo.png"
     * @param {string[]} bullets ["description of company", "description of role 1", "description of role 2", ...]
     */
    constructor({ entity, industry, datesPosition, location, imgURL, bullets }) {
        this.entity = entity;
        this.industry = industry;
        this.datesPosition = datesPosition;
        this.location = location;
        this.imgURL = imgURL;
        this.bullets = bullets;
    }

    _getImg() {
        const el = document.createElement("img");
        el.setAttribute("src", this.imgURL);
        el.setAttribute("width", "100%");
        el.setAttribute("alt", this.entity);
        return el;
    }

    _getDescriptions() {
        const el = document.createElement("div");
        const industry = document.createElement("p");
        industry.innerText = this.industry;
        // industry.setAttribute();
        el.appendChild(industry);
        const datesPosition = document.createElement("p");
        datesPosition.innerText = this.datesPosition;
        el.appendChild(datesPosition);
        const location = document.createElement("p");
        location.innerText = this.location;
        el.appendChild(location);
        return el;
    }

    _buildImgBox() {
        const el = document.createElement("div");
        el.classList.add("career-image-container");
        el.appendChild(this._getImg());
        el.appendChild(this._getDescriptions());
        return el;
    }

    _buildBulletsBox() {
        const el = document.createElement("div");
        el.classList.add("career-bullets-container");
        const ul = document.createElement("ul");
        el.appendChild(ul);
        this.bullets.forEach((bullet) => {
            const li = document.createElement("li");
            li.innerText = bullet;
            ul.appendChild(li);
        });
        return el;
    }

    buildElement() {
        const el = document.createElement("div");
        el.classList.add("career-container");
        el.appendChild(this._buildImgBox());
        el.appendChild(this._buildBulletsBox());
        return el;
    }
}

const careerStrips = [
    {
        entity: "BMO Capital Markets",
        industry: "Investment Banking",
        datesPosition: "2014-2017: Analyst",
        location: "New York, NY",
        imgURL: "images/career/bmo.png",
        bullets: [
            "BMO Capital Markets is the investment banking division of Bank of Montreal, a multinational financial services company",
            "Worked in the Technology & Business Services group, serving companies in the tech and B2B services industries with a special focus on the Education Technology vertical",
            "Advised companies on Initial Public Offerings, Mergers & Acquisitions, and Debt Financings",
        ],
    },
];

const root = document.getElementById("career-root");
careerStrips.forEach((career, index) => {
    root.appendChild(new CareerStrip(career).buildElement());
    // if (index !== careerStrips.length - 1) root.appendChild(document.createElement("hr"));
});
