class character {
    constructor(
        name,
        connections,
        interests,
        dislikes,
        crimes,
        numberOfSexualPartners,

        sibling1,
        sibling2,
        sibling3,

    ) {
        this.name = name;
        this.connections = connections;
        this.interests = interests;
        this.dislikes = dislikes;
        this.crimes = crimes;
        this.numberOfSexualPartners = numberOfSexualPartners;

        this.siblings = {
            oldestSibling: sibling1,
            secondOldestSibling: sibling2,
            thirdOldestSibling: sibling3,
        };

    }
    siblingStatus(sibling1, sibling2, sibling3) {
        this.siblings.oldestSibling = sibling1;
        this.siblings.secondOldestSibling = sibling2;
        this.siblings.thirdOldestSibling = sibling3;
    }

}

export default character;