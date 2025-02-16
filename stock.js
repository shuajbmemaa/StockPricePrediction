const yahooFinance = require("yahoo-finance2").default;
const fs = require("fs");
const { Parser } = require("json2csv");

async function getHistoricalData() {
    try {
        const results = await yahooFinance.historical("^POWERGRID", {
            period1: "2024-01-22",
            period2: "2025-01-21",
        });

        const fields = Object.keys(results[0]);
        const json2csvParser = new Parser({ fields });
        const csv = json2csvParser.parse(results);

        const filePath = "historical_data.csv";
        fs.writeFileSync(filePath, csv);

        console.log(`Te dhenat u ruajten ne  ${filePath}`);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getHistoricalData();