const fs = require("fs");
import { sql } from "@vercel/postgres";
addComp();
function generate() {
  let number = document.getElementById("number").value;
  let number2 = document.getElementById("number2").value;
  let data1 = document.getElementById("data1").value;

  const doc = new docx.Document({
    styles: {
      ParagraphStyles: [
        {
          id: "strikeUnderline",
          name: "Strike Underline",
          basedOn: "Normal",
          quickFormat: true,
          run: {},
        },
      ],
    },
    sections: [
      {
        properties: {},
        children: [
          new docx.Paragraph({
            size: 23,
            alignment: docx.AlignmentType.CENTER,
            children: [
              new docx.TextRun({
                text: `Дополнительное соглашение № ${number}`,
                alignment: docx.AlignmentType.CENTER,
                bold: true,
                size: 23,
              }),
              new docx.TextRun({
                break: 1,
                text: `к договору №${number} от ${data1}`,
                alignment: docx.AlignmentType.CENTER,

                bold: true,
                size: 23,
              }),
            ],
          }),
          new docx.Paragraph({
            size: 23,
            alignment: docx.AlignmentType.JUSTIFIED,
            children: [
              new docx.TextRun({
                text: `г.Москва                                                                                                                       ${data1}г.`,
                alignment: docx.AlignmentType.LEFT,
                bold: true,
                size: 23,
              }),
            ],
          }),
        ],
      },
    ],
  });

  docx.Packer.toBlob(doc).then((blob) => {
    console.log(blob);
    saveAs(blob, "example.docx");
    console.log("Document created successfully");
  });
}
async function addComp() {
  const new1 = document.getElementById("new1");
  const new2 = document.getElementById("new2");
  const new3 = document.getElementById("new3");
  const new4 = document.getElementById("new4");
  const new5 = document.getElementById("new5");
  const new6 = document.getElementById("new6");
  const new7 = document.getElementById("new7");
  const filePath = "./db.json ";
  const comp = {
    1: new1,
    2: new2,
    3: new3,
    4: new4,
    5: new5,
    6: new6,
    7: new7,
  };

  const likes = 100;

  const { rows } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;
  console.log(rows);
}
addComp();
