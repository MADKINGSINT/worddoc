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
