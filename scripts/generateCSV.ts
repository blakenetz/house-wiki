import googleSheetToCSV from "google-sheet-to-csv";
import path from "path";

const fileId = "";

const root = path.resolve(__dirname, "..");
const outputFile = path.resolve(root, "docs/assets", "changelog.csv");
const keyFile = path.resolve(root, "tokens", "credentials.json");

/**
 * if using please follow google-sheet-to-csv instructions
 * @see https://github.com/blakenetz/Google-Sheet-to-CSV/tree/main?tab=readme-ov-file#google-cloud-setup
 */
googleSheetToCSV({
  outputFile,
  fileId,
  keyFile,
  verbose: true,
});
