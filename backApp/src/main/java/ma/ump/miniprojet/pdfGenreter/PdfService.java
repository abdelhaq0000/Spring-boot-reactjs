package ma.ump.miniprojet.pdfGenreter;

import com.lowagie.text.*;
import com.lowagie.text.Font;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import ma.ump.miniprojet.model.Materiel;
import ma.ump.miniprojet.repository.MaterielRepository;
import ma.ump.miniprojet.service.MaterielService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class PdfService {
    @Autowired
    private MaterielRepository materielService;
   public  void export(HttpServletResponse response) throws IOException {
       List<Materiel> materielList =materielService.findAll();
       Document document=new Document(PageSize.A4);
       PdfWriter.getInstance(document,response.getOutputStream());

        Font font =new Font();
        font.setSize(6);


       PdfPTable table = new PdfPTable(7);
       table.setWidthPercentage(100);
       // Add cells to the table
       PdfPCell p=new PdfPCell(new Phrase("NumeroInventaire",font));
       p.setHorizontalAlignment(Element.ALIGN_CENTER);
       p.setBackgroundColor(Color.YELLOW);
       table.addCell(p);
       p=new PdfPCell(new Phrase("type",font));
       p.setHorizontalAlignment(Element.ALIGN_CENTER);
       p.setBackgroundColor(Color.YELLOW);
       table.addCell(p);
       p=new PdfPCell(new Phrase("date Acquisition",font));
       p.setHorizontalAlignment(Element.ALIGN_CENTER);
       p.setBackgroundColor(Color.YELLOW);
       table.addCell(p);
       p=new PdfPCell(new Phrase("date Affectation",font));
       p.setHorizontalAlignment(Element.ALIGN_CENTER);
       p.setBackgroundColor(Color.YELLOW);
       table.addCell(p);
       p=new PdfPCell(new Phrase("FullName",font));
       p.setHorizontalAlignment(Element.ALIGN_CENTER);
       p.setBackgroundColor(Color.YELLOW);
       table.addCell(p);
       p=new PdfPCell(new Phrase("CIN",font));
       p.setHorizontalAlignment(Element.ALIGN_CENTER);
       p.setBackgroundColor(Color.YELLOW);
       table.addCell(p);
       p=new PdfPCell(new Phrase("email",font));
       p.setHorizontalAlignment(Element.ALIGN_CENTER);
       p.setBackgroundColor(Color.YELLOW);
       table.addCell(p);
       for (Materiel m :materielList){
           if(m.getUser()!=null) {
               PdfPCell q = new PdfPCell(new Phrase(m.getNumeroInventaire() + "", font));
               q.setHorizontalAlignment(Element.ALIGN_CENTER);
               table.addCell(q);
               q = new PdfPCell(new Phrase(m.getType(), font));
               q.setHorizontalAlignment(Element.ALIGN_CENTER);
               table.addCell(q);
               q = new PdfPCell(new Phrase(m.getDateAcquisition(), font));
               q.setHorizontalAlignment(Element.ALIGN_CENTER);
               table.addCell(q);
               q = new PdfPCell(new Phrase(m.getDateAffectation() + "", font));
               q.setHorizontalAlignment(Element.ALIGN_CENTER);
               table.addCell(q);
               q = new PdfPCell(new Phrase(m.getUser().getFullName(), font));
               q.setHorizontalAlignment(Element.ALIGN_CENTER);
               table.addCell(q);
               q = new PdfPCell(new Phrase(m.getUser().getCIN(), font));
               q.setHorizontalAlignment(Element.ALIGN_CENTER);
               table.addCell(q);
               q = new PdfPCell(new Phrase(m.getUser().getEmail(), font));
               q.setHorizontalAlignment(Element.ALIGN_CENTER);
               table.addCell(q);
           }
       }

        table.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
       document.open();
       Font font1=new Font();
       font1.setSize(20);
       font1.setStyle(Font.BOLD);
       font1.setColor(Color.red);
       Paragraph paragraph = new Paragraph("Les matériel affacter",font1);
       paragraph.setAlignment(Element.ALIGN_CENTER);
       paragraph.setSpacingAfter(20);
       document.add(paragraph);
       document.add(table);
       document.close();


   }

}
