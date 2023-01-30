package ma.ump.miniprojet.pdfGenreter;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class PdfController {

    private  final  PdfService pdfService;

    public PdfController(PdfService pdfService) {
        this.pdfService = pdfService;
    }
    @GetMapping("/pdf")
    public void generatPDF(HttpServletResponse response) throws IOException {
        response.setContentType("application/pdf");
        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd:hh:mm:ss");
        String curentDateTime=dateFormat.format(new Date());

        String headerKey = "Content-Dispodition";
        String headerValue ="attachment; filname=pdf_"+curentDateTime+".pdf";
        response.setHeader(headerKey,headerValue);
        this.pdfService.export(response);
    }
}
