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

const careerStrips = [
    {
        entity: "Oregon State University",
        industry: "",
        datesPosition: "2021-Current: Student",
        location: "Online",
        imgURL: "images/career/osu.png",
        imgWidth: "60%",
        bullets: [
            "Oregon State University is a public research university based in Corvallis, Oregon",
            "Completing the post-baccalaureate computer science program - an accelerated program for adults who already have a second undergraduate degree to receive a Bachelor's of Science in Computer Science",
        ],
    },
    {
        entity: "Google Cloud",
        industry: "Enterprise Software",
        datesPosition: "2019-2021: Sales Engineer",
        location: "New York, NY",
        imgURL: "images/career/google-cloud.png",
        imgWidth: "75%",
        bullets: [
            "Google Cloud is cloud computing division of Google which provides services including computing, data storage, data analytics, and machine learning",
            "Worked at Looker, a data analytics & business intelligence software company which was acquired by Google Cloud in March 2020",
            "Assisted prospective clients in evaluating the Looker software and led proof-of-concept implementations, performing SQL-based data analytics and working with cloud data warehouses",
        ],
    },
    {
        entity: "H.I.G. Capital",
        industry: "Private Equity",
        datesPosition: "2017-2019: Associate",
        location: "New York, NY",
        imgURL: "images/career/hig-capital.png",
        imgWidth: "55%",
        bullets: [
            "H.I.G. Capital is an alternative investment firm with over $40bn assets under management",
            "Worked in the Bayside Capital fund, which focuses on companies undergoing operational turnarounds or other special situations",
            "Performed research and data analysis to inform investment decisions, including analyzing financial statements, sourcing 3rd party data, meeting with management and industry experts",
        ],
    },
    {
        entity: "BMO Capital Markets",
        industry: "Investment Banking",
        datesPosition: "2014-2017: Analyst",
        location: "New York, NY",
        imgURL: "images/career/bmo.png",
        imgWidth: "80%",
        bullets: [
            "BMO Capital Markets is the investment banking division of Bank of Montreal, a multinational financial services company",
            "Worked in the Technology & Business Services group, serving companies in the tech and B2B services industries with a special focus on the Education Technology vertical",
            "Advised companies on Initial Public Offerings, Mergers & Acquisitions, and Debt Financings",
        ],
    },
    {
        entity: "Emory University",
        industry: "",
        datesPosition: "2010-2014: Student",
        location: "Atlanta, GA",
        imgURL: "images/career/emory.png",
        imgWidth: "58%",
        bullets: [
            "Emory University is a private, top 25 undergraduate institution based in Atlanta, GA",
            "Graduated with a Bachelor's of Business Administration with concentrations in Finance & Accounting",
        ],
    },
];

class CareerStrip {
    /**
     * @param {string} entity "BMO Capital Markets"
     * @param {string} industry "Investment Banking"
     * @param {string} datesPosition "2014-2017: Analyst"
     * @param {string} location "New York, NY"
     * @param {string} imgURL "images/career/bmo.png"
     * @param {string} imgWidth "100%"
     * @param {string[]} bullets ["description of company", "description of role 1", "description of role 2", ...]
     */
    constructor({ entity, industry, datesPosition, location, imgURL, imgWidth, bullets }) {
        this.entity = entity;
        this.industry = industry;
        this.datesPosition = datesPosition;
        this.location = location;
        this.imgURL = imgURL;
        this.imgWidth = imgWidth;
        this.bullets = bullets;
    }

    _getImg() {
        const el = document.createElement("img");
        el.setAttribute("src", this.imgURL);
        el.setAttribute("alt", this.entity);
        el.setAttribute("width", this.imgWidth);
        el.style.margin = "0 auto";
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

const root = document.getElementById("career-root");
careerStrips.forEach((career, index) => {
    root.appendChild(new CareerStrip(career).buildElement());
    if (index !== careerStrips.length - 1) root.appendChild(document.createElement("hr"));
});
