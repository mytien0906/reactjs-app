const papaparse = require("papaparse")

export async function getDataCsv(filePath) {
    const response = await fetch(filePath)
    console.log(response);
    const reader = response.body.getReader()
    const result = await reader.read() // raw array
    const decoder = new TextDecoder('utf-8')
    const csv = decoder.decode(result.value) // the csv text
    const results = papaparse.parse(csv, { header: true }) // object with { data, errors, meta }
    return results.data;
}
