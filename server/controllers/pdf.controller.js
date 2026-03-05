import PDFdocument from "pdfkit";

export const downloadPdf = async (req, res) => {
  try {
    const { result } = req.body;
    if (!result) {
      return res.status(400).json({ error: "No Content Provided" });
    }

    const doc = new PDFdocument({margin:50});
    res.setHeader("Content-type","application/pdf")
    res.setHeader("Content-Disposition",'attachment; filename="ExamNotesAI.pdf')

    doc.pipe(res);

    doc.frontSize(20).text("ExamNotes AI",{align:"center"})
    doc.moveDown();
    doc.frontSize(14).text(`Importance:${result.importance}`)
    doc.moveDown();

    doc.fontSize(16).text("Sub Topics");
    doc.moveDown(0.5);
    Object.entries(result.subTopics).forEach(([star,topics])=>{
        doc.moveDown(0.5);
        doc.fontSize(13).text(`${star} Topic:`);
        topics.forEach((t)=>{
            doc.fontSize(12).text(`• ${t}`)
        });
    });

     doc.moveDown();
    

  } catch (err) {
    
  }
};
