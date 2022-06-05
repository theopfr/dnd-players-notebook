
const notebookOptionsList = ["npcs", "orgnanizations", "locations", "creatures", "items"];
const notebookOptionsDict = {};
for (const option of notebookOptionsList) {
    notebookOptionsDict[option] = option;
}

export const NotebookOptionsEnum = Object.freeze({notebookOptionsDict});