"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebTable = void 0;
const protractor_1 = require("protractor");
class WebTable {
    //constructor  accepts dropdown as element
    constructor(webTableElement) {
        this.webTable = webTableElement;
    }
    // get the number of rows present
    getRowCount() {
        console.log("Fetching number rows");
        return this.webTable.all(protractor_1.by.css("tr")).count();
    }
    // get the number of columns present
    getColumnCount() {
        return this.webTable.all(protractor_1.by.css("th")).count();
        // if you donot have header then above will not work
        // use this if no headre is there
        // return this.webTable.all(by.xpath("//tr[0]/td")).count()
    }
    // get the number of rows and columns and return it as Map
    getTableSize() {
        return { row: this.webTable.all(protractor_1.by.css("tr")).count(),
            columns: this.webTable.all(protractor_1.by.css("th")).count() };
    }
    // get row data and return it as list
    rowData(rowNumber) {
        if (rowNumber == 0) {
            throw new Error("Row number starts from 1");
        }
        rowNumber = rowNumber + 1;
        return this.webTable.all(protractor_1.by.xpath("//tr[" + rowNumber + "]/td")).getText();
    }
    // get the column data and return as list
    columnData(columnNumber) {
        if (columnNumber == 0) {
            throw new Error("Column number starts from 1");
        }
        columnNumber = columnNumber + 1;
        return this.webTable.all(protractor_1.by.xpath("//tr/td[" + columnNumber + "]")).getText();
    }
    // get all the data from the table
    getAllData() {
        return this.webTable.all(protractor_1.by.xpath("td")).getText();
    }
    // verify presence of the text/data
    presenceOfData(data) {
        // verify the data by getting the size of the element matches based on the text/data passed
        return this.webTable.all(protractor_1.by.xpath("//td[normalize-space(text())='" + data + "']")).count().then(function (dataSize) {
            if (dataSize > 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    // get the data from a specific cell
    getCellData(rowNumber, columnNumber) {
        if (rowNumber == 0) {
            throw new Error("Row number starts from 1");
        }
        rowNumber = rowNumber + 1;
        let cellData = this.webTable.element(protractor_1.by.xpath("//tr[" + rowNumber + "]/td[" + columnNumber + "]")).getText();
        return cellData;
    }
    // click checkbox with protractor
    clickCheckBox(data) {
        this.webTable.element(protractor_1.by.xpath("//td[normalize-space(text())='" + data + "']/..//input")).click();
    }
    // click checkbox with protractor
    clickButton(data) {
        this.webTable.element(protractor_1.by.xpath("//td[normalize-space(text())='" + data + "']/..//button")).click();
    }
}
exports.WebTable = WebTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZS1vYmplY3RzL1dlYlRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF1RDtBQUV2RCxNQUFhLFFBQVE7SUFHakIsMENBQTBDO0lBQzFDLFlBQVksZUFBNkI7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7SUFDbkMsQ0FBQztJQUVELGlDQUFpQztJQUN6QixXQUFXO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2xELENBQUM7SUFFRCxvQ0FBb0M7SUFDaEMsY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzlDLG9EQUFvRDtRQUNwRCxpQ0FBaUM7UUFDakMsMkRBQTJEO0lBQy9ELENBQUM7SUFFRCwwREFBMEQ7SUFDdEQsWUFBWTtRQUNaLE9BQU8sRUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNuRCxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUE7SUFDdEQsQ0FBQztJQUVELHFDQUFxQztJQUM5QixPQUFPLENBQUMsU0FBZ0I7UUFDM0IsSUFBRyxTQUFTLElBQUksQ0FBQyxFQUFDO1lBQ2QsTUFBTSxJQUFJLEtB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