// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
    file1 = val;
};
let modifyFile2 = (val) => {
    file2 = val;
};
let modifyFile3 = (val) => {
    file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
    setTimeout(() => {
        let fileArray = [];
        let err = "";

        readJsonFile(file1, fileArray);
        readJsonFile(file2, fileArray);
        readJsonFile(file3, fileArray);

        return fnCallback(err, fileArray);
    }, 0);
};

const readJsonFile = (jsonFile, array) => {
    fs.readFile(jsonFile, { encoding: "utf8" }, (error, data) => {
        if (error) {
            return console.log(error);
        } else {
            let res = JSON.parse(data);
            let dat = findMessage(res);
            let datArray = dat.split(" ");
            datArray = datArray[1];
            // console.log("read", error, datArray);
            array.push(datArray);
            // console.log(array);
            return datArray;
        }
    });
};

// find key message on JSON object
const findMessage = (data, keys) => {
    // console.log(data, keys);
    let dat = data;
    let key = Object.keys(dat);
    if (key === undefined || key[0] === "message") {
        return dat.message;
    } else {
        key = key[0];
        dat = dat[0];
        if (dat === undefined) {
            dat = data;
            // console.log("un", dat);
            return findMessage(dat.data);
        } else {
            return findMessage(dat, key[0]);
        }
    }
};

// ! JANGAN DIMODIFIKASI
module.exports = {
    modifyFile1,
    modifyFile2,
    modifyFile3,
    bacaData,
};